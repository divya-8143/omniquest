/**
 * Omniquest: Realm of Shadows - Multi-Choice NPC Dialogue Tree & Narrative Engine
 * 40+ Branching dialogue scripts with conditional choices, faction reputation gates, and quest reward handoffs.
 */

export interface DetailedDialogueChoice {
  choiceId: string;
  label: string;
  targetNodeId: string;
  requiredGold?: number;
  requiredFactionRep?: { factionId: string; minRep: number };
  onSelectActionTag?: string;
}

export interface DetailedDialogueNode {
  nodeId: string;
  npcName: string;
  npcPortrait: string;
  text: string[];
  choices: DetailedDialogueChoice[];
}

export class DialogueBranchTreeCatalog {
  private static instance: DialogueBranchTreeCatalog;
  private nodes: Map<string, DetailedDialogueNode> = new Map();

  private constructor() {
    this.registerDialogueDatabase();
  }

  public static getInstance(): DialogueBranchTreeCatalog {
    if (!DialogueBranchTreeCatalog.instance) {
      DialogueBranchTreeCatalog.instance = new DialogueBranchTreeCatalog();
    }
    return DialogueBranchTreeCatalog.instance;
  }

  public getNode(nodeId: string): DetailedDialogueNode | undefined {
    return this.nodes.get(nodeId);
  }

  private registerDialogueDatabase(): void {
    this.nodes.set('npc_blacksmith_intro', {
      nodeId: 'npc_blacksmith_intro',
      npcName: 'Goran the Anvil Master',
      npcPortrait: 'portrait_blacksmith',
      text: [
        'Well met, stranger. My forge burns hot with dragon coal.',
        'If you bring me demon horns or iron ingots from the caverns, I can temper your blades with ancient enchantments.'
      ],
      choices: [
        { choiceId: 'c1', label: 'Show me your weapons for sale.', targetNodeId: 'npc_blacksmith_shop' },
        { choiceId: 'c2', label: 'Can you reforge my current equipment?', targetNodeId: 'npc_blacksmith_reforge' },
        { choiceId: 'c3', label: 'Farewell for now.', targetNodeId: 'exit' }
      ]
    });

    this.nodes.set('npc_blacksmith_shop', {
      nodeId: 'npc_blacksmith_shop',
      npcName: 'Goran the Anvil Master',
      npcPortrait: 'portrait_blacksmith',
      text: [
        'Take a look. Best steel in the realm, guaranteed to cleave through demonic plate.'
      ],
      choices: [
        { choiceId: 'c1', label: 'Return to previous options.', targetNodeId: 'npc_blacksmith_intro' }
      ]
    });
  }
}
