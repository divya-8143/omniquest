/**
 * Omniquest: Realm of Shadows - Player Settings, Keybindings & Accessibility Matrix
 * Audio volume mixers, screen shake toggles, particle density scalers, custom hotkey binds, and colorblind profiles.
 */

export interface GameSettingsProfile {
  masterVolume: number;
  sfxVolume: number;
  musicVolume: number;
  enableScreenShake: boolean;
  particleDensity: 'Low' | 'Medium' | 'High' | 'Ultra';
  showDamageNumbers: boolean;
  showEnemyHealthBars: boolean;
  colorblindMode: 'Off' | 'Protanopia' | 'Deuteranopia' | 'Tritanopia';
  keyBindings: Record<string, string>;
}

export class GameSettingsConfigMatrix {
  private static instance: GameSettingsConfigMatrix;
  private settings: GameSettingsProfile;

  private constructor() {
    this.settings = {
      masterVolume: 0.8,
      sfxVolume: 0.9,
      musicVolume: 0.7,
      enableScreenShake: true,
      particleDensity: 'High',
      showDamageNumbers: true,
      showEnemyHealthBars: true,
      colorblindMode: 'Off',
      keyBindings: {
        moveUp: 'w',
        moveDown: 's',
        moveLeft: 'a',
        moveRight: 'd',
        attack: ' ',
        skill1: '1',
        skill2: '2',
        skill3: '3',
        skill4: '4',
        skill5: '5',
        inventory: 'i',
        talents: 'k',
        quests: 'q',
        pause: 'Escape'
      }
    };
  }

  public static getInstance(): GameSettingsConfigMatrix {
    if (!GameSettingsConfigMatrix.instance) {
      GameSettingsConfigMatrix.instance = new GameSettingsConfigMatrix();
    }
    return GameSettingsConfigMatrix.instance;
  }

  public getSettings(): GameSettingsProfile {
    return this.settings;
  }

  public updateSetting<K extends keyof GameSettingsProfile>(key: K, value: GameSettingsProfile[K]): void {
    this.settings[key] = value;
  }
}
