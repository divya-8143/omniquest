import test from 'node:test';
import assert from 'node:assert';
import { Serializer } from '../storage/Serializer';
import { Compression } from '../storage/Compression';

test('Serializer JSON encoding/decoding', () => {
  const data = { name: 'Player1', level: 15, gold: 500 };
  const str = Serializer.serialize(data);
  const obj = Serializer.deserialize<typeof data>(str);

  assert.deepStrictEqual(obj, data);
});

test('Compression run-length encoding and decoding', () => {
  const original = 'AAAAABBBCCDAAAAA';
  const compressed = Compression.compress(original);
  const decompressed = Compression.decompress(compressed);

  assert.strictEqual(decompressed, original);
});
