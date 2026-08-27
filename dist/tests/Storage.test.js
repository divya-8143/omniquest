"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importDefault(require("node:test"));
const node_assert_1 = __importDefault(require("node:assert"));
const Serializer_1 = require("../storage/Serializer");
const Compression_1 = require("../storage/Compression");
(0, node_test_1.default)('Serializer JSON encoding/decoding', () => {
    const data = { name: 'Player1', level: 15, gold: 500 };
    const str = Serializer_1.Serializer.serialize(data);
    const obj = Serializer_1.Serializer.deserialize(str);
    node_assert_1.default.deepStrictEqual(obj, data);
});
(0, node_test_1.default)('Compression run-length encoding and decoding', () => {
    const original = 'AAAAABBBCCDAAAAA';
    const compressed = Compression_1.Compression.compress(original);
    const decompressed = Compression_1.Compression.decompress(compressed);
    node_assert_1.default.strictEqual(decompressed, original);
});
//# sourceMappingURL=Storage.test.js.map