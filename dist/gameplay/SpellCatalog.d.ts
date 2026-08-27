export interface SpellDefinition {
    id: string;
    name: string;
    school: 'fire' | 'frost' | 'arcane' | 'holy' | 'shadow' | 'nature';
    manaCost: number;
    cooldown: number;
    baseDamage: number;
    radius: number;
    description: string;
}
export declare class SpellCatalog {
    private static spells;
    static initialize(): void;
    static getSpell(id: string): SpellDefinition | undefined;
    static getCount(): number;
}
