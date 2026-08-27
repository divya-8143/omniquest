/**
 * Omniquest: Realm of Shadows - Player Titles, Honorifics & Renown Catalog
 * Earnable cosmetic and stat-granting hero titles from dungeon conquest and boss triumphs.
 */

export interface HeroTitleSpec {
  titleId: string;
  prefixTitle: string;
  suffixTitle: string;
  unlockRequirement: string;
  statBonus: { stat: string; value: number };
  flavorQuote: string;
}

export class HeroTitleCatalog {
  private static instance: HeroTitleCatalog;
  private titles: Map<string, HeroTitleSpec> = new Map();

  private constructor() {
    this.registerTitles();
  }

  public static getInstance(): HeroTitleCatalog {
    if (!HeroTitleCatalog.instance) {
      HeroTitleCatalog.instance = new HeroTitleCatalog();
    }
    return HeroTitleCatalog.instance;
  }

  public getTitle(id: string): HeroTitleSpec | undefined {
    return this.titles.get(id);
  }

  public getAllTitles(): HeroTitleSpec[] {
    return Array.from(this.titles.values());
  }

  private registerTitles(): void {
    this.titles.set('title_abyss_slayer', {
      titleId: 'title_abyss_slayer',
      prefixTitle: 'Demonbane',
      suffixTitle: 'the Liberator of Omnis',
      unlockRequirement: 'Defeat the Abyssal Demon Overlord in Level 3',
      statBonus: { stat: 'attackPower', value: 25 },
      flavorQuote: '"His name echoes across the void as an omen of destruction to all demonkind."'
    });

    this.titles.set('title_crypt_crawler', {
      titleId: 'title_crypt_crawler',
      prefixTitle: 'Cryptwalker',
      suffixTitle: 'of the Shadows',
      unlockRequirement: 'Complete Level 1 without taking damage',
      statBonus: { stat: 'critChance', value: 5 },
      flavorQuote: '"Treads upon grave dust lighter than the autumn breeze."'
    });

    this.titles.set('title_inferno_walker', {
      titleId: 'title_inferno_walker',
      prefixTitle: 'Pyrelord',
      suffixTitle: 'the Flameforged',
      unlockRequirement: 'Clear Level 2 Inferno Caverns',
      statBonus: { stat: 'fireResist', value: 20 },
      flavorQuote: '"Bathed in the magma lakes of Ignis and emerged unscathed."'
    });
  }
}
