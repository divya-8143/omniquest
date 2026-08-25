import { Compression } from './Compression';

export interface SaveSlotData {
  slotId: string;
  timestamp: number;
  playerLevel: number;
  characterClass: string;
  gold: number;
  inventory: any[];
  completedQuests: string[];
  worldFlags: string[];
  checksum: string;
}

export class SecuritySaveManager {
  private static readonly SECRET_KEY = 'OMNIQUEST_HMAC_SECURE_KEY';

  static createHMAC(dataString: string): string {
    let hash = 0;
    const combined = dataString + this.SECRET_KEY;
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return Math.abs(hash).toString(16);
  }

  static saveGame(slotId: string, saveData: Omit<SaveSlotData, 'checksum'>): boolean {
    try {
      const rawPayload = JSON.stringify(saveData);
      const checksum = this.createHMAC(rawPayload);
      const fullSave: SaveSlotData = { ...saveData, checksum };

      const compressedPayload = Compression.compress(JSON.stringify(fullSave));
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(`omniquest_save_${slotId}`, compressedPayload);
      }
      console.log(`[SaveManager] Saved slot: ${slotId} with HMAC: ${checksum}`);
      return true;
    } catch (err) {
      console.error('[SaveManager] Save failed:', err);
      return false;
    }
  }

  static loadGame(slotId: string): SaveSlotData | null {
    try {
      let compressedPayload: string | null = null;
      if (typeof localStorage !== 'undefined') {
        compressedPayload = localStorage.getItem(`omniquest_save_${slotId}`);
      }
      if (!compressedPayload) return null;

      const jsonStr = Compression.decompress(compressedPayload);
      const fullSave: SaveSlotData = JSON.parse(jsonStr);

      // Verify HMAC Checksum
      const { checksum, ...restData } = fullSave;
      const expectedChecksum = this.createHMAC(JSON.stringify(restData));

      if (checksum !== expectedChecksum) {
        console.warn(`[SecuritySaveManager] Anti-Tamper Check Failed for slot: ${slotId}!`);
        return null; // Reject altered file
      }

      console.log(`[SecuritySaveManager] Slot ${slotId} verified and loaded cleanly.`);
      return fullSave;
    } catch (err) {
      console.error('[SaveManager] Load failed:', err);
      return null;
    }
  }
}
