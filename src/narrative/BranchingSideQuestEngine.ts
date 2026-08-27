export type QuestState = 'LOCKED' | 'AVAILABLE' | 'ACTIVE' | 'COMPLETED' | 'FAILED';

export interface BranchingChoice {
  choiceId: string;
  text: string;
  consequenceSummary: string;
  reputationDelta: Record<string, number>;
  nextStageId: string;
}

export interface QuestStage {
  stageId: string;
  instructionText: string;
  targetKills?: { monsterId: string; count: number; current: number };
  targetItemCollection?: { itemId: string; count: number; current: number };
  choices?: BranchingChoice[];
  isFinalStage: boolean;
}

export interface BranchingQuest {
  questId: string;
  title: string;
  prerequisiteQuestIds: string[];
  currentStageId: string;
  stages: Map<string, QuestStage>;
  state: QuestState;
  rewardGold: number;
  rewardXp: number;
  rewardItemIds: string[];
}

export class BranchingSideQuestEngine {
  private static instance: BranchingSideQuestEngine;
  private quests: Map<string, BranchingQuest> = new Map();
  private factionReputations: Map<string, number> = new Map();

  constructor() {
    this.initializeDefaultQuests();
  }

  public static getInstance(): BranchingSideQuestEngine {
    if (!BranchingSideQuestEngine.instance) {
      BranchingSideQuestEngine.instance = new BranchingSideQuestEngine();
    }
    return BranchingSideQuestEngine.instance;
  }

  public getQuest(id: string): BranchingQuest | undefined {
    return this.quests.get(id);
  }

  public getAllQuests(): BranchingQuest[] {
    return Array.from(this.quests.values());
  }

  public startQuest(questId: string): boolean {
    const q = this.quests.get(questId);
    if (!q || q.state !== 'AVAILABLE') return false;
    q.state = 'ACTIVE';
    return true;
  }

  public makeChoice(questId: string, choiceId: string): boolean {
    const q = this.quests.get(questId);
    if (!q || q.state !== 'ACTIVE') return false;

    const currentStage = q.stages.get(q.currentStageId);
    if (!currentStage || !currentStage.choices) return false;

    const choice = currentStage.choices.find(c => c.choiceId === choiceId);
    if (!choice) return false;

    // Apply reputation deltas
    for (const [faction, delta] of Object.entries(choice.reputationDelta)) {
      const current = this.factionReputations.get(faction) || 0;
      this.factionReputations.set(faction, current + delta);
    }

    q.currentStageId = choice.nextStageId;
    const nextStage = q.stages.get(choice.nextStageId);
    if (nextStage && nextStage.isFinalStage) {
      q.state = 'COMPLETED';
    }

    return true;
  }

  private initializeDefaultQuests(): void {
    const q1Stages = new Map<string, QuestStage>();
    q1Stages.set('stage_1', {
      stageId: 'stage_1',
      instructionText: 'Encounter the trapped goblin merchant in the Crypt.',
      choices: [
        {
          choiceId: 'choice_spare_goblin',
          text: 'Spare the merchant and escort him safely to the entrance.',
          consequenceSummary: 'The merchant offers rare trade items in the future.',
          reputationDelta: { 'GoblinUnderworld': 50, 'SilverOrder': -10 },
          nextStageId: 'stage_spared_end'
        },
        {
          choiceId: 'choice_slay_goblin',
          text: 'Eliminate the goblin scout and confiscate his stolen bag of gold.',
          consequenceSummary: 'Gain immediate gold bounty.',
          reputationDelta: { 'GoblinUnderworld': -50, 'SilverOrder': 30 },
          nextStageId: 'stage_slain_end'
        }
      ],
      isFinalStage: false
    });

    q1Stages.set('stage_spared_end', {
      stageId: 'stage_spared_end',
      instructionText: 'The merchant safely fled, promising to open his black market stall.',
      isFinalStage: true
    });

    q1Stages.set('stage_slain_end', {
      stageId: 'stage_slain_end',
      instructionText: 'You confiscated the goblin\'s stash and secured the upper floor.',
      isFinalStage: true
    });

    this.quests.set('sidequest_goblin_pact', {
      questId: 'sidequest_goblin_pact',
      title: 'A Deal in the Shadows',
      prerequisiteQuestIds: [],
      currentStageId: 'stage_1',
      stages: q1Stages,
      state: 'AVAILABLE',
      rewardGold: 100,
      rewardXp: 150,
      rewardItemIds: ['item_wpn_0006']
    });
  }
}
