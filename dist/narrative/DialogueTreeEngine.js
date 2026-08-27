"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogueTreeEngine = void 0;
class DialogueTreeEngine {
    nodes = new Map();
    activeNodeId = null;
    addNode(node) {
        this.nodes.set(node.id, node);
    }
    startDialogue(nodeId) {
        if (!this.nodes.has(nodeId))
            return null;
        this.activeNodeId = nodeId;
        return this.nodes.get(nodeId);
    }
    selectOption(optionIndex, worldFlags) {
        if (!this.activeNodeId)
            return null;
        const currentNode = this.nodes.get(this.activeNodeId);
        if (!currentNode || optionIndex >= currentNode.options.length)
            return null;
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
exports.DialogueTreeEngine = DialogueTreeEngine;
//# sourceMappingURL=DialogueTreeEngine.js.map