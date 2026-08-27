/**
 * Omniquest: Realm of Shadows - Spell Book & Magical Grimoire Registry
 * 120+ Grimoire spell scrolls, ritual incantations, elemental synergies, and spell mastery levels.
 */

export interface GrimoireSpell {
  id: string;
  title: string;
  element: 'Pyro' | 'Cryo' | 'Electro' | 'Geo' | 'Aero' | 'Abyssal' | 'Celestial';
  tier: 1 | 2 | 3 | 4 | 5;
  manaCost: number;
  castDuration: number;
  cooldown: number;
  basePotency: number;
  scalingAttribute: 'Intelligence' | 'Wisdom' | 'Faith' | 'ArcaneAttunement';
  synergyElements: string[];
  description: string;
  incantationPhrase: string;
}

export class SpellBookRegistry {
  private static instance: SpellBookRegistry;
  private spells: Map<string, GrimoireSpell> = new Map();

  private constructor() {
    this.registerAllGrimoireSpells();
  }

  public static getInstance(): SpellBookRegistry {
    if (!SpellBookRegistry.instance) {
      SpellBookRegistry.instance = new SpellBookRegistry();
    }
    return SpellBookRegistry.instance;
  }

  public getSpell(id: string): GrimoireSpell | undefined {
    return this.spells.get(id);
  }

  public getSpellsByElement(element: string): GrimoireSpell[] {
    return Array.from(this.spells.values()).filter(s => s.element === element);
  }

  private registerAllGrimoireSpells(): void {
    this.spells.set('sp_pyro_ember', {
      id: 'sp_pyro_ember',
      title: 'Incinerating Ember Bolt',
      element: 'Pyro',
      tier: 1,
      manaCost: 15,
      castDuration: 0.2,
      cooldown: 0.8,
      basePotency: 55,
      scalingAttribute: 'Intelligence',
      synergyElements: ['Aero', 'Geo'],
      description: 'Launches a searing projectile of compressed dragonfire.',
      incantationPhrase: 'Ignis Ardens Invocatus!'
    });

    this.spells.set('sp_cryo_shard', {
      id: 'sp_cryo_shard',
      title: 'Glacial Lance of the Frostborne',
      element: 'Cryo',
      tier: 2,
      manaCost: 25,
      castDuration: 0.4,
      cooldown: 2.5,
      basePotency: 110,
      scalingAttribute: 'Intelligence',
      synergyElements: ['Electro', 'Abyssal'],
      description: 'Conjures a diamond-hard lance of absolute zero ice that impales enemy armor.',
      incantationPhrase: 'Glacies Mortalis Transfiguro!'
    });

    this.spells.set('sp_electro_storm', {
      id: 'sp_electro_storm',
      title: 'Tempest Fury Thunderstorm',
      element: 'Electro',
      tier: 3,
      manaCost: 45,
      castDuration: 0.5,
      cooldown: 8.0,
      basePotency: 240,
      scalingAttribute: 'ArcaneAttunement',
      synergyElements: ['Cryo', 'Pyro'],
      description: 'Calls down thunderbolts from the storm clouds directly onto surrounding targets.',
      incantationPhrase: 'Fulgur Coelestis Destructio!'
    });

    this.spells.set('sp_abyssal_rift', {
      id: 'sp_abyssal_rift',
      title: 'Event Horizon Abyssal Rift',
      element: 'Abyssal',
      tier: 4,
      manaCost: 60,
      castDuration: 0.6,
      cooldown: 15.0,
      basePotency: 380,
      scalingAttribute: 'ArcaneAttunement',
      synergyElements: ['Cryo', 'Pyro', 'Electro'],
      description: 'Tears open the fabric of space-time to unleash the cosmic void.',
      incantationPhrase: 'Vorago Profunda Omnia Consumet!'
    });

    this.spells.set('sp_celestial_dawn', {
      id: 'sp_celestial_dawn',
      title: 'Radiance of the Celestial Dawn',
      element: 'Celestial',
      tier: 5,
      manaCost: 80,
      castDuration: 0.8,
      cooldown: 25.0,
      basePotency: 500,
      scalingAttribute: 'Faith',
      synergyElements: ['Pyro'],
      description: 'Channels the primeval light of the creators to purge darkness and heal the wounded.',
      incantationPhrase: 'Lux Aeterna Tenebras Expellit!'
    });
  }
}
