export interface DialogueNode {
    id: string;
    speaker: string;
    text: string;
    options: {
        responseText: string;
        nextNodeId: string;
    }[];
}
export declare class DialogueMatrix {
    private static nodes;
    static initialize(): void;
    static getNode(id: string): DialogueNode | undefined;
    static getCount(): number;
}
