const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// CRC32 implementation
function makeCRCTable() {
  let c;
  const crcTable = [];
  for (let n = 0; n < 256; n++) {
    c = n;
    for (let k = 0; k < 8; k++) {
      c = ((c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1));
    }
    crcTable[n] = c >>> 0;
  }
  return crcTable;
}

const crcTable = makeCRCTable();
function crc32(buf) {
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ crcTable[(crc ^ buf[i]) & 0xFF];
  }
  return (crc ^ (-1)) >>> 0;
}

function createZipArchive(sourceDir, outputFile, excludeList = ['node_modules', '.zip', '.bat']) {
  const fileEntries = [];

  function collectFiles(dir) {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const relPath = path.relative(sourceDir, fullPath).replace(/\\/g, '/');

      // Check exclusions
      if (excludeList.some(ex => relPath.includes(ex) || item.name.endsWith(ex))) {
        continue;
      }

      if (item.isDirectory()) {
        collectFiles(fullPath);
      } else if (item.isFile()) {
        const data = fs.readFileSync(fullPath);
        const compressed = zlib.deflateRawSync(data);
        fileEntries.push({
          path: relPath,
          data,
          compressed,
          crc: crc32(data),
          size: data.length,
          compSize: compressed.length
        });
      }
    }
  }

  collectFiles(sourceDir);

  const localHeaders = [];
  const centralHeaders = [];
  let offset = 0;

  for (const entry of fileEntries) {
    const pathBuf = Buffer.from(entry.path, 'utf8');

    // Local Header (30 bytes + filename)
    const localHeader = Buffer.alloc(30 + pathBuf.length);
    localHeader.writeUInt32LE(0x04034b50, 0); // Local header signature
    localHeader.writeUInt16LE(20, 4); // Version needed (2.0)
    localHeader.writeUInt16LE(0, 6); // General purpose flag
    localHeader.writeUInt16LE(8, 8); // Compression method (8 = Deflate)
    localHeader.writeUInt16LE(0, 10); // Mod time
    localHeader.writeUInt16LE(0, 12); // Mod date
    localHeader.writeUInt32LE(entry.crc, 14); // CRC32
    localHeader.writeUInt32LE(entry.compSize, 18); // Compressed size
    localHeader.writeUInt32LE(entry.size, 22); // Uncompressed size
    localHeader.writeUInt16LE(pathBuf.length, 26); // Filename length
    localHeader.writeUInt16LE(0, 28); // Extra field length
    pathBuf.copy(localHeader, 30);

    localHeaders.push(localHeader);
    localHeaders.push(entry.compressed);

    // Central Directory Header (46 bytes + filename)
    const centralHeader = Buffer.alloc(46 + pathBuf.length);
    centralHeader.writeUInt32LE(0x02014b50, 0); // Central directory signature
    centralHeader.writeUInt16LE(20, 4); // Version made by
    centralHeader.writeUInt16LE(20, 6); // Version needed
    centralHeader.writeUInt16LE(0, 8); // General purpose flag
    centralHeader.writeUInt16LE(8, 10); // Compression method
    centralHeader.writeUInt16LE(0, 12); // Mod time
    centralHeader.writeUInt16LE(0, 14); // Mod date
    centralHeader.writeUInt32LE(entry.crc, 16); // CRC32
    centralHeader.writeUInt32LE(entry.compSize, 20); // Compressed size
    centralHeader.writeUInt32LE(entry.size, 24); // Uncompressed size
    centralHeader.writeUInt16LE(pathBuf.length, 28); // Filename length
    centralHeader.writeUInt16LE(0, 30); // Extra field length
    centralHeader.writeUInt16LE(0, 32); // Comment length
    centralHeader.writeUInt16LE(0, 34); // Disk start
    centralHeader.writeUInt16LE(0, 36); // Internal attributes
    centralHeader.writeUInt32LE(0, 38); // External attributes
    centralHeader.writeUInt32LE(offset, 42); // Offset of local header
    pathBuf.copy(centralHeader, 46);

    centralHeaders.push(centralHeader);

    offset += localHeader.length + entry.compressed.length;
  }

  const centralDirOffset = offset;
  const centralDirSize = centralHeaders.reduce((sum, h) => sum + h.length, 0);

  // End of Central Directory Record (22 bytes)
  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0); // EOCD signature
  eocd.writeUInt16LE(0, 4); // Disk number
  eocd.writeUInt16LE(0, 6); // Start disk
  eocd.writeUInt16LE(fileEntries.length, 8); // Entries on this disk
  eocd.writeUInt16LE(fileEntries.length, 10); // Total entries
  eocd.writeUInt32LE(centralDirSize, 12); // Central dir size
  eocd.writeUInt32LE(centralDirOffset, 16); // Central dir offset
  eocd.writeUInt16LE(0, 20); // Comment length

  const finalZipBuffer = Buffer.concat([...localHeaders, ...centralHeaders, eocd]);
  fs.writeFileSync(outputFile, finalZipBuffer);

  console.log('=============================================');
  console.log(` SUCCESS! Packed ${fileEntries.length} required files.`);
  console.log(` Output ZIP: ${outputFile}`);
  console.log(` Total Size: ${(finalZipBuffer.length / 1024 / 1024).toFixed(2)} MB`);
  console.log('=============================================');
}

const projectDir = __dirname;
const outputZip = path.join(projectDir, 'omniquest_project_final.zip');

createZipArchive(projectDir, outputZip, ['node_modules', '.zip', '.bat', 'count_loc.js', 'build_zip.js']);
