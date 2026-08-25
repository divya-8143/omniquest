import test from 'node:test';
import assert from 'node:assert';
import { SecuritySaveManager } from '../storage/SecuritySaveManager';

test('SecuritySaveManager HMAC generation and tamper detection', () => {
  const payload = '{"playerLevel":10,"gold":500}';
  const hash1 = SecuritySaveManager.createHMAC(payload);
  const hash2 = SecuritySaveManager.createHMAC(payload);

  assert.strictEqual(hash1, hash2);

  // Altered payload should yield different HMAC hash
  const alteredPayload = '{"playerLevel":99,"gold":999999}';
  const alteredHash = SecuritySaveManager.createHMAC(alteredPayload);
  assert.notStrictEqual(hash1, alteredHash);
});
