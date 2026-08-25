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

export class DialogueTreeEngine {
  private nodes: Map<string, DialogueNodeData> = new Map();
  private activeNodeId: string | null = null;

  addNode(node: DialogueNodeData): void {
    this.nodes.set(node.id, node);
  }

  startDialogue(nodeId: string): DialogueNodeData | null {
    if (!this.nodes.has(nodeId)) return null;
    this.activeNodeId = nodeId;
    return this.nodes.get(nodeId)!;
  }

  selectOption(optionIndex: number, worldFlags: Set<string>): DialogueNodeData | null {
    if (!this.activeNodeId) return null;
    const currentNode = this.nodes.get(this.activeNodeId);
    if (!currentNode || optionIndex >= currentNode.options.length) return null;

    const opt = currentNode.options[optionIndex];
    if (opt.setFlag) {
      worldFlags.add(opt.setFlag);
    }

    if (!opt.nextId) {
      this.activeNodeId = null;
      return null; // Dialogue ended
    }

    this.activeNodeId = opt.nextId;
    return this.nodes.get(opt.nextId) || null;
  }
}
