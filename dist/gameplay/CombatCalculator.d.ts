export interface StatusEffect {
    id: string;
    type: 'poison' | 'burn' | 'stun' | 'regeneration' | 'buff_attack';
    duration: number;
    potency: number;
}
export interface EntityCombatStats {
    attack: number;
    defense: number;
    critChance: number;
    critMultiplier: number;
    fireResist: number;
    frostResist: number;
}
export declare class CombatCalculator {
    static calculateDamage(attacker: EntityCombatStats, defender: EntityCombatStats, element?: 'physical' | 'fire' | 'frost'): {
        finalDamage: number;
        isCrit: boolean;
        mitigated: number;
    };
    static processStatusQueue(effects: StatusEffect[], dt: number): {
        damageOverTime: number;
        stunActive: boolean;
    };
}
