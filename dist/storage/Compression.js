"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compression = void 0;
class Compression {
    static compress(input) {
        if (!input)
            return '';
        let result = '';
        let count = 1;
        for (let i = 0; i < input.length; i++) {
            if (input[i] === input[i + 1]) {
                count++;
            }
            else {
                result += input[i] + (count > 1 ? count : '');
                count = 1;
            }
        }
        return result;
    }
    static decompress(compressed) {
        if (!compressed)
            return '';
        let result = '';
        for (let i = 0; i < compressed.length; i++) {
            const char = compressed[i];
            let numStr = '';
            while (i + 1 < compressed.length && !isNaN(Number(compressed[i + 1]))) {
                numStr += compressed[i + 1];
                i++;
            }
            const count = numStr ? parseInt(numStr, 10) : 1;
            result += char.repeat(count);
        }
        return result;
    }
}
exports.Compression = Compression;
//# sourceMappingURL=Compression.js.map