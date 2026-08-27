/**
 * Omniquest: Realm of Shadows - Lore Chronicles & Narrative Branching Engine
 * In-game ancient tomes, historical journals, NPC dialogue matrices, and realm mythology.
 */

export interface LoreEntry {
  id: string;
  title: string;
  volume: string;
  author: string;
  era: 'First Age of Light' | 'Age of Cataclysm' | 'The Shadow Incursion' | 'Era of the Ashen Throne';
  content: string[];
  unlockCondition: string;
  goldReward: number;
  xpReward: number;
}

export interface DialogueChoice {
  text: string;
  nextDialogueNodeId: string;
  requiredQuestId?: string;
  requiredReputation?: number;
  grantQuestId?: string;
  grantRewardGold?: number;
}

export interface DialogueNode {
  nodeId: string;
  speakerName: string;
  speakerTitle: string;
  message: string;
  choices: DialogueChoice[];
}

export class LoreChroniclesEngine {
  private static instance: LoreChroniclesEngine;
  private tomes: Map<string, LoreEntry> = new Map();
  private dialogueTrees: Map<string, DialogueNode> = new Map();
  private playerUnlockedTomes: Set<string> = new Set();

  private constructor() {
    this.registerAllLoreTomes();
    this.registerDialogueTree();
  }

  public static getInstance(): LoreChroniclesEngine {
    if (!LoreChroniclesEngine.instance) {
      LoreChroniclesEngine.instance = new LoreChroniclesEngine();
    }
    return LoreChroniclesEngine.instance;
  }

  public getLoreEntry(id: string): LoreEntry | undefined {
    return this.tomes.get(id);
  }

  public getAllTomes(): LoreEntry[] {
    return Array.from(this.tomes.values());
  }

  public unlockTome(id: string): { success: boolean; entry?: LoreEntry; xp: number; gold: number } {
    const tome = this.tomes.get(id);
    if (!tome || this.playerUnlockedTomes.has(id)) {
      return { success: false, xp: 0, gold: 0 };
    }
    this.playerUnlockedTomes.add(id);
    return {
      success: true,
      entry: tome,
      xp: tome.xpReward,
      gold: tome.goldReward
    };
  }

  public getDialogueNode(nodeId: string): DialogueNode | undefined {
    return this.dialogueTrees.get(nodeId);
  }

  private registerAllLoreTomes(): void {
    this.tomes.set('lore_shadow_crypts_01', {
      id: 'lore_shadow_crypts_01',
      title: 'The Catacombs of the Forsaken',
      volume: 'Volume I: Foundations of Shadow',
      author: 'Archivist Vaelin the Blind',
      era: 'The Shadow Incursion',
      content: [
        'Before the darkness crept into the heart of Omnis, these stone halls were sanctified burial grounds for the High Kings of Eldoria.',
        'When the Abyssal Tear opened in the lower mantle, corrupted ley line energy surged through the limestone veins, disturbing centuries of peaceful slumber.',
        'The skeletal guardians that roam these corridors are not bound by hatred, but by ancient necrotic oaths twisted into endless vigilance.'
      ],
      unlockCondition: 'Clear Level 1 Dungeon',
      goldReward: 50,
      xpReward: 75
    });

    this.tomes.set('lore_inferno_depths_02', {
      id: 'lore_inferno_depths_02',
      title: 'The Magma Veins of Ignis',
      volume: 'Volume II: Fires Below',
      author: 'Pyromancer Kenneth of the Red Dawn',
      era: 'Age of Cataclysm',
      content: [
        'Beneath the cold stone crypts lie subterranean lava tubes where molten rock continuously churns with primal fury.',
        'Demons born of pure flame and hatred carved fortresses in the basalt crags, using the geothermal pressure to forge indestructible dark iron blades.',
        'Travelers who venture here must keep their wits sharp; the sulfurous fumes disorient even the most seasoned paladins.'
      ],
      unlockCondition: 'Clear Level 2 Dungeon',
      goldReward: 100,
      xpReward: 150
    });

    this.tomes.set('lore_abyssal_overlord_03', {
      id: 'lore_abyssal_overlord_03',
      title: 'The Fall of the Demon Overlord',
      volume: 'Volume III: The Final Reckoning',
      author: 'Grand Inquisitor Morzan',
      era: 'Era of the Ashen Throne',
      content: [
        'He was known by a thousand names in a thousand tongue-forsaken planes, but here he is simply the Abyssal Demon Overlord.',
        'Towering over thirty cubits in height, adorned with horns that pierce the spectral veil, he wields meteoric chaos with supreme tyranny.',
        'Whoever strikes him down will claim not only glory, but the eternal liberation of the Realm of Shadows.'
      ],
      unlockCondition: 'Defeat the Final Boss in Level 3',
      goldReward: 300,
      xpReward: 500
    });

    this.tomes.set('lore_warrior_code_04', {
      id: 'lore_warrior_code_04',
      title: 'The Iron Vanguard: Doctrine of Resolve',
      volume: 'Codex Militaris',
      author: 'Commander Thorne Ironbreaker',
      era: 'First Age of Light',
      content: [
        'A warrior is not forged in peace, but temper-tested in the furnace of unyielding adversity.',
        'Let your shield stand as an impassable mountain, and let your heavy blade fall with the certitude of the setting sun.'
      ],
      unlockCondition: 'Reach Level 2 with Warrior Class',
      goldReward: 40,
      xpReward: 60
    });

    this.tomes.set('lore_arcane_weaving_05', {
      id: 'lore_arcane_weaving_05',
      title: 'Principles of Astral Weaving',
      volume: 'The Arcanist Compendium',
      author: 'Grand Magister Elion',
      era: 'First Age of Light',
      content: [
        'Magic is not merely energy; it is the fundamental fabric upon which reality is embroidered.',
        'To bend the element of fire is to command friction; to cast ice is to steal motion.'
      ],
      unlockCondition: 'Reach Level 2 with Mage Class',
      goldReward: 40,
      xpReward: 60
    });
  }

  private registerDialogueTree(): void {
    this.dialogueTrees.set('npc_elder_intro', {
      nodeId: 'npc_elder_intro',
      speakerName: 'Elder Oakhaven',
      speakerTitle: 'Keeper of the Ancient Gateway',
      message: 'Greetings, brave adventurer. The dungeon beneath our feet churns with malevolence. Three levels descend into the abyss.',
      choices: [
        { text: 'I am ready to enter Level 1: Crypt of Shadows.', nextDialogueNodeId: 'npc_elder_level1' },
        { text: 'What lies on the final level?', nextDialogueNodeId: 'npc_elder_boss_warning' },
        { text: 'Tell me how the progression works.', nextDialogueNodeId: 'npc_elder_rules' }
      ]
    });

    this.dialogueTrees.set('npc_elder_level1', {
      nodeId: 'npc_elder_level1',
      speakerName: 'Elder Oakhaven',
      speakerTitle: 'Keeper of the Ancient Gateway',
      message: 'Step forward with courage. Slay the goblin scouts and skeleton minions to accumulate score and unlock the staircase to Level 2.',
      choices: [
        { text: 'Into the dungeon I go! ⚔️', nextDialogueNodeId: 'close' }
      ]
    });

    this.dialogueTrees.set('npc_elder_boss_warning', {
      nodeId: 'npc_elder_boss_warning',
      speakerName: 'Elder Oakhaven',
      speakerTitle: 'Keeper of the Ancient Gateway',
      message: 'At the bottom of Level 3 sits the Abyssal Demon Overlord. He commands meteoric fire and void gravity. Prepare your ultimate powers before challenging him!',
      choices: [
        { text: 'I will vanquish him and free the realm.', nextDialogueNodeId: 'close' },
        { text: 'Return to previous questions.', nextDialogueNodeId: 'npc_elder_intro' }
      ]
    });

    this.dialogueTrees.set('npc_elder_rules', {
      nodeId: 'npc_elder_rules',
      speakerName: 'Elder Oakhaven',
      speakerTitle: 'Keeper of the Ancient Gateway',
      message: 'You need 150 score on Level 1 to enter Level 2, and 350 score on Level 2 to enter Level 3. Defeating monsters and gathering elixirs both grant score points!',
      choices: [
        { text: 'Understood. Thank you, Elder.', nextDialogueNodeId: 'close' }
      ]
    });
  }
}
