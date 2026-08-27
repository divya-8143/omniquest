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
export declare class SecuritySaveManager {
    private static readonly SECRET_KEY;
    static createHMAC(dataString: string): string;
    static saveGame(slotId: string, saveData: Omit<SaveSlotData, 'checksum'>): boolean;
    static loadGame(slotId: string): SaveSlotData | null;
}
