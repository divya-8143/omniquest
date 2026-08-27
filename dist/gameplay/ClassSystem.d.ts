export type CharacterClass = 'Warrior' | 'Mage' | 'Rogue';
export interface ClassDefinition {
    className: CharacterClass;
    resourceType: 'Mana' | 'Stamina' | 'Energy';
    maxResource: number;
    baseAttack: number;
    baseDefense: number;
    specialAbilities: string[];
}
export declare class ClassSystem {
    private static classes;
    static getClass(className: CharacterClass): ClassDefinition;
}
