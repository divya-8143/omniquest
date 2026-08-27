"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = __importDefault(require("node:test"));
const node_assert_1 = __importDefault(require("node:assert"));
const SecuritySaveManager_1 = require("../storage/SecuritySaveManager");
(0, node_test_1.default)('SecuritySaveManager HMAC generation and tamper detection', () => {
    const payload = '{"playerLevel":10,"gold":500}';
    const hash1 = SecuritySaveManager_1.SecuritySaveManager.createHMAC(payload);
    const hash2 = SecuritySaveManager_1.SecuritySaveManager.createHMAC(payload);
    node_assert_1.default.strictEqual(hash1, hash2);
    // Altered payload should yield different HMAC hash
    const alteredPayload = '{"playerLevel":99,"gold":999999}';
    const alteredHash = SecuritySaveManager_1.SecuritySaveManager.createHMAC(alteredPayload);
    node_assert_1.default.notStrictEqual(hash1, alteredHash);
});
//# sourceMappingURL=SecuritySave.test.js.map