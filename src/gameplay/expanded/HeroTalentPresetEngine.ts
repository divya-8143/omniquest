/**
 * Omniquest: Realm of Shadows - Hero Talent Build Presets & Loadout Manager
 * Build presets: Glass Cannon Pyro, Pure Tank Vanguard, Bleed Assassin, Frostbite Control, Holy Paladin Healer.
 */

export interface TalentLoadoutPreset {
  presetId: string;
  presetName: string;
  heroClass: string;
  allocatedTalentRanks: Record<string, number>;
  description: string;
}

export class HeroTalentPresetEngine {
  private static instance: HeroTalentPresetEngine;
  private presets: Map<string, TalentLoadoutPreset> = new Map();

  private constructor() {
    this.registerDefaultPresets();
  }

  public static getInstance(): HeroTalentPresetEngine {
    if (!HeroTalentPresetEngine.instance) {
      HeroTalentPresetEngine.instance = new HeroTalentPresetEngine();
    }
    return HeroTalentPresetEngine.instance;
  }

  public getPresetsForClass(cls: string): TalentLoadoutPreset[] {
    return Array.from(this.presets.values()).filter(p => p.heroClass === cls);
  }

  private registerDefaultPresets(): void {
    this.presets.set('preset_war_juggernaut', {
      presetId: 'preset_war_juggernaut',
      presetName: 'Unbreakable Juggernaut',
      heroClass: 'Warrior',
      allocatedTalentRanks: { t_war_prot_01: 5, t_war_prot_02: 5, t_war_prot_03: 3 },
      description: 'Maximum survivability and damage reduction for intense boss fights.'
    });

    this.presets.set('preset_mag_pyro', {
      presetId: 'preset_mag_pyro',
      presetName: 'Solar Pyromancer',
      heroClass: 'Mage',
      allocatedTalentRanks: { t_mag_pyr_01: 5, t_mag_pyr_02: 5, t_mag_pyr_03: 3, t_mag_pyr_05: 5 },
      description: 'Maximum burst fire damage and catastrophic meteor explosions.'
    });

    this.presets.set('preset_rog_assassin', {
      presetId: 'preset_rog_assassin',
      presetName: 'Shadow Assassin',
      heroClass: 'Rogue',
      allocatedTalentRanks: { t_rog_ass_01: 5, t_rog_ass_02: 5, t_rog_ass_04: 5 },
      description: 'High critical strike chance, rapid movement, and lethal backstabs.'
    });
  }
}
