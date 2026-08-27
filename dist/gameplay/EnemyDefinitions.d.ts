export interface EnemyDefinition {
    id: string;
    name: string;
    maxHp: number;
    damage: number;
    armor: number;
    speed: number;
    xpReward: number;
    goldReward: number;
}
export declare class EnemyBestiary {
    private static bestiary;
    static getEnemy(id: string): EnemyDefinition | undefined;
    static getAllEnemies(): EnemyDefinition[];
}
