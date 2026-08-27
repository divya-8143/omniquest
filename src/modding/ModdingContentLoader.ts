import { DetailedCatalogItem } from '../gameplay/expanded/ComprehensiveItemCatalogData';
import { DetailedCatalogMonster } from '../gameplay/expanded/ComprehensiveBestiaryCatalogData';

export interface ModManifest {
  modId: string;
  name: string;
  version: string;
  author: string;
  description: string;
  items?: DetailedCatalogItem[];
  monsters?: DetailedCatalogMonster[];
}

export interface ModValidationResult {
  isValid: boolean;
  errors: string[];
  loadedItemCount: number;
  loadedMonsterCount: number;
}

export class ModdingContentLoader {
  private static instance: ModdingContentLoader;
  private installedMods: Map<string, ModManifest> = new Map();
  private customItems: Map<string, DetailedCatalogItem> = new Map();
  private customMonsters: Map<string, DetailedCatalogMonster> = new Map();

  public static getInstance(): ModdingContentLoader {
    if (!ModdingContentLoader.instance) {
      ModdingContentLoader.instance = new ModdingContentLoader();
    }
    return ModdingContentLoader.instance;
  }

  public validateAndLoadModJson(jsonString: string): ModValidationResult {
    const errors: string[] = [];

    try {
      const parsed = JSON.parse(jsonString) as ModManifest;

      if (!parsed.modId || typeof parsed.modId !== 'string') {
        errors.push('Mod manifest is missing a valid "modId" string.');
      }
      if (!parsed.name || typeof parsed.name !== 'string') {
        errors.push('Mod manifest is missing a valid "name" string.');
      }
      if (!parsed.version || typeof parsed.version !== 'string') {
        errors.push('Mod manifest is missing a valid "version" string.');
      }

      if (errors.length > 0) {
        return { isValid: false, errors, loadedItemCount: 0, loadedMonsterCount: 0 };
      }

      let itemCount = 0;
      if (parsed.items && Array.isArray(parsed.items)) {
        for (const item of parsed.items) {
          if (!item.id || !item.name || typeof item.attackPower !== 'number') {
            errors.push(`Item definition missing required fields: ${JSON.stringify(item)}`);
            continue;
          }
          this.customItems.set(item.id, item);
          itemCount++;
        }
      }

      let monsterCount = 0;
      if (parsed.monsters && Array.isArray(parsed.monsters)) {
        for (const m of parsed.monsters) {
          if (!m.id || !m.name || typeof m.health !== 'number') {
            errors.push(`Monster definition missing required fields: ${JSON.stringify(m)}`);
            continue;
          }
          this.customMonsters.set(m.id, m);
          monsterCount++;
        }
      }

      this.installedMods.set(parsed.modId, parsed);
      return {
        isValid: errors.length === 0,
        errors,
        loadedItemCount: itemCount,
        loadedMonsterCount: monsterCount
      };
    } catch (e: any) {
      return {
        isValid: false,
        errors: [`JSON parse error: ${e.message}`],
        loadedItemCount: 0,
        loadedMonsterCount: 0
      };
    }
  }

  public getCustomItem(id: string): DetailedCatalogItem | undefined {
    return this.customItems.get(id);
  }

  public getCustomMonster(id: string): DetailedCatalogMonster | undefined {
    return this.customMonsters.get(id);
  }

  public getAllInstalledMods(): ModManifest[] {
    return Array.from(this.installedMods.values());
  }

  public clearAllMods(): void {
    this.installedMods.clear();
    this.customItems.clear();
    this.customMonsters.clear();
  }
}
