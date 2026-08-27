/**
 * Omniquest: Realm of Shadows - Hero Skins, Armor Chromas & Visual Transmogrification
 * Character customization palettes, particle auras, weapon trails, and prestige cosmetic unlocks.
 */

export interface HeroSkinChroma {
  skinId: string;
  name: string;
  heroClass: 'Warrior' | 'Mage' | 'Rogue' | 'All';
  primaryColor: string;
  glowColor: string;
  auraParticleType: 'Embers' | 'FrostSparks' | 'ShadowMist' | 'HolyRays';
  unlockScoreRequirement: number;
}

export class CosmeticSkinsAndArmorChroma {
  private static instance: CosmeticSkinsAndArmorChroma;
  private skins: Map<string, HeroSkinChroma> = new Map();

  private constructor() {
    this.registerSkins();
  }

  public static getInstance(): CosmeticSkinsAndArmorChroma {
    if (!CosmeticSkinsAndArmorChroma.instance) {
      CosmeticSkinsAndArmorChroma.instance = new CosmeticSkinsAndArmorChroma();
    }
    return CosmeticSkinsAndArmorChroma.instance;
  }

  public getSkin(id: string): HeroSkinChroma | undefined {
    return this.skins.get(id);
  }

  public getAllSkins(): HeroSkinChroma[] {
    return Array.from(this.skins.values());
  }

  private registerSkins(): void {
    this.skins.set('skin_default_warrior', {
      skinId: 'skin_default_warrior',
      name: 'Vanguard of Iron',
      heroClass: 'Warrior',
      primaryColor: '#ef4444',
      glowColor: '#b91c1c',
      auraParticleType: 'Embers',
      unlockScoreRequirement: 0
    });

    this.skins.set('skin_crimson_warlord', {
      skinId: 'skin_crimson_warlord',
      name: 'Crimson Warlord',
      heroClass: 'Warrior',
      primaryColor: '#991b1b',
      glowColor: '#fbbf24',
      auraParticleType: 'Embers',
      unlockScoreRequirement: 500
    });

    this.skins.set('skin_archon_frost', {
      skinId: 'skin_archon_frost',
      name: 'Glacial Archon',
      heroClass: 'Mage',
      primaryColor: '#38bdf8',
      glowColor: '#bae6fd',
      auraParticleType: 'FrostSparks',
      unlockScoreRequirement: 500
    });

    this.skins.set('skin_void_assassin', {
      skinId: 'skin_void_assassin',
      name: 'Void Shadow Assassin',
      heroClass: 'Rogue',
      primaryColor: '#1e1b4b',
      glowColor: '#a855f7',
      auraParticleType: 'ShadowMist',
      unlockScoreRequirement: 500
    });
  }
}
