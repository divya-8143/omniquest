/**
 * Omniquest: Realm of Shadows - Algorithmic 8-Bit / 16-Bit Adaptive Soundtrack Sequencer
 * Procedural music engine generating arpeggios, basslines, tension chords, and boss battle themes using WebAudio oscillators.
 */

export interface MusicalNote {
  freq: number;
  duration: number; // in seconds
  volume: number;
}

export interface SoundtrackThemePattern {
  themeName: string;
  bpm: number;
  melodyNotes: MusicalNote[];
  bassNotes: MusicalNote[];
}

export class SoundtrackSequencerEngine {
  private static instance: SoundtrackSequencerEngine;
  private themes: Map<string, SoundtrackThemePattern> = new Map();
  private currentTheme: string = 'theme_crypts_level1';
  private noteIndex: number = 0;
  private stepTimer: number = 0;

  private constructor() {
    this.composeAllThemes();
  }

  public static getInstance(): SoundtrackSequencerEngine {
    if (!SoundtrackSequencerEngine.instance) {
      SoundtrackSequencerEngine.instance = new SoundtrackSequencerEngine();
    }
    return SoundtrackSequencerEngine.instance;
  }

  public getTheme(name: string): SoundtrackThemePattern | undefined {
    return this.themes.get(name);
  }

  public setDungeonLevelTheme(level: number): void {
    if (level === 1) this.currentTheme = 'theme_crypts_level1';
    else if (level === 2) this.currentTheme = 'theme_inferno_level2';
    else this.currentTheme = 'theme_abyssal_boss_level3';
    this.noteIndex = 0;
  }

  public getNextNote(): { melody?: MusicalNote; bass?: MusicalNote } {
    const theme = this.themes.get(this.currentTheme);
    if (!theme || theme.melodyNotes.length === 0) return {};

    const mel = theme.melodyNotes[this.noteIndex % theme.melodyNotes.length];
    const bass = theme.bassNotes[this.noteIndex % theme.bassNotes.length];
    this.noteIndex++;
    return { melody: mel, bass };
  }

  private composeAllThemes(): void {
    // Level 1: Eerie minor melody
    this.themes.set('theme_crypts_level1', {
      themeName: 'Crypt of Shadows Theme',
      bpm: 110,
      melodyNotes: [
        { freq: 220.0, duration: 0.3, volume: 0.2 },
        { freq: 261.63, duration: 0.3, volume: 0.2 },
        { freq: 293.66, duration: 0.3, volume: 0.2 },
        { freq: 329.63, duration: 0.6, volume: 0.25 },
        { freq: 293.66, duration: 0.3, volume: 0.2 },
        { freq: 261.63, duration: 0.3, volume: 0.2 },
        { freq: 246.94, duration: 0.6, volume: 0.25 }
      ],
      bassNotes: [
        { freq: 110.0, duration: 0.6, volume: 0.3 },
        { freq: 110.0, duration: 0.6, volume: 0.3 },
        { freq: 98.0, duration: 0.6, volume: 0.3 },
        { freq: 82.41, duration: 0.6, volume: 0.35 }
      ]
    });

    // Level 2: Intense chromatic phrygian mode
    this.themes.set('theme_inferno_level2', {
      themeName: 'Inferno Caverns Theme',
      bpm: 135,
      melodyNotes: [
        { freq: 293.66, duration: 0.2, volume: 0.25 },
        { freq: 311.13, duration: 0.2, volume: 0.25 },
        { freq: 369.99, duration: 0.2, volume: 0.25 },
        { freq: 440.0, duration: 0.4, volume: 0.3 },
        { freq: 415.3, duration: 0.2, volume: 0.25 },
        { freq: 369.99, duration: 0.2, volume: 0.25 }
      ],
      bassNotes: [
        { freq: 73.42, duration: 0.4, volume: 0.35 },
        { freq: 77.78, duration: 0.4, volume: 0.35 },
        { freq: 92.5, duration: 0.4, volume: 0.35 }
      ]
    });

    // Level 3: Apocalyptic Boss Battle
    this.themes.set('theme_abyssal_boss_level3', {
      themeName: 'Abyssal Throne Final Boss',
      bpm: 160,
      melodyNotes: [
        { freq: 440.0, duration: 0.15, volume: 0.35 },
        { freq: 466.16, duration: 0.15, volume: 0.35 },
        { freq: 554.37, duration: 0.15, volume: 0.35 },
        { freq: 659.25, duration: 0.3, volume: 0.4 },
        { freq: 554.37, duration: 0.15, volume: 0.35 },
        { freq: 466.16, duration: 0.15, volume: 0.35 },
        { freq: 440.0, duration: 0.3, volume: 0.4 }
      ],
      bassNotes: [
        { freq: 55.0, duration: 0.3, volume: 0.45 },
        { freq: 58.27, duration: 0.3, volume: 0.45 },
        { freq: 69.3, duration: 0.3, volume: 0.45 },
        { freq: 82.41, duration: 0.3, volume: 0.45 }
      ]
    });
  }
}
