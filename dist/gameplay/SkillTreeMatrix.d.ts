export interface SkillNode {
    id: string;
    name: string;
    description: string;
    tier: number;
    cost: number;
    unlocked: boolean;
    prerequisites: string[];
}
export declare class SkillTreeMatrix {
    private nodes;
    constructor();
    private initializeDefaultNodes;
    unlockSkill(skillId: string, availablePoints: number): boolean;
    getSkill(skillId: string): SkillNode | undefined;
    getAllSkills(): SkillNode[];
}
