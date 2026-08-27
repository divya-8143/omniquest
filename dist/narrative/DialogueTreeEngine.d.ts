export interface DialogueOption {
    text: string;
    nextId: string | null;
    requiredFlag?: string;
    setFlag?: string;
}
export interface DialogueNodeData {
    id: string;
    speaker: string;
    text: string;
    options: DialogueOption[];
}
export declare class DialogueTreeEngine {
    private nodes;
    private activeNodeId;
    addNode(node: DialogueNodeData): void;
    startDialogue(nodeId: string): DialogueNodeData | null;
    selectOption(optionIndex: number, worldFlags: Set<string>): DialogueNodeData | null;
}
