export interface SaveBackupSlot {
  slotId: number;
  timestamp: number;
  dataJson: string;
  checksum: string;
  schemaVersion: number;
  playerLevel: number;
  playerScore: number;
}

export class SaveVersionBackupManager {
  private static instance: SaveVersionBackupManager;
  private maxBackupSlots: number = 5;
  private storageKeyPrefix: string = 'omniquest_backup_slot_';

  public static getInstance(): SaveVersionBackupManager {
    if (!SaveVersionBackupManager.instance) {
      SaveVersionBackupManager.instance = new SaveVersionBackupManager();
    }
    return SaveVersionBackupManager.instance;
  }

  public createBackup(
    dataJson: string,
    schemaVersion: number,
    playerLevel: number,
    playerScore: number
  ): SaveBackupSlot {
    const slot: SaveBackupSlot = {
      slotId: Date.now(),
      timestamp: Date.now(),
      dataJson,
      checksum: this.computeSimpleChecksum(dataJson),
      schemaVersion,
      playerLevel,
      playerScore
    };

    if (typeof localStorage !== 'undefined') {
      const existing = this.listBackups();
      existing.unshift(slot);
      if (existing.length > this.maxBackupSlots) {
        existing.pop();
      }
      localStorage.setItem('omniquest_backups_index', JSON.stringify(existing));
    }

    return slot;
  }

  public listBackups(): SaveBackupSlot[] {
    if (typeof localStorage === 'undefined') return [];
    try {
      const raw = localStorage.getItem('omniquest_backups_index');
      if (!raw) return [];
      return JSON.parse(raw);
    } catch {
      return [];
    }
  }

  public restoreBackup(slotTimestamp: number): SaveBackupSlot | null {
    const backups = this.listBackups();
    const target = backups.find(b => b.timestamp === slotTimestamp);
    if (!target) return null;

    if (this.computeSimpleChecksum(target.dataJson) !== target.checksum) {
      console.error('Backup checksum corruption detected!');
      return null;
    }
    return target;
  }

  private computeSimpleChecksum(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return `chk_${Math.abs(hash)}`;
  }
}
