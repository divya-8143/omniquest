/**
 * Omniquest: Realm of Shadows - Dungeon Soundtrack Jukebox & Music State Machine
 * Adaptive combat layers, boss transition stingers, exploration ambient loops, and victory fanfares.
 */

export interface MusicTrackDefinition {
  trackId: string;
  title: string;
  composer: string;
  durationSeconds: number;
  intensityLevel: 'Ambient' | 'Tension' | 'Combat' | 'EpicBoss' | 'VictoryFanfare';
}

export class DungeonSoundtrackJukebox {
  private static instance: DungeonSoundtrackJukebox;
  private tracks: Map<string, MusicTrackDefinition> = new Map();
  private currentTrackId: string = 'track_ambient_crypt';

  private constructor() {
    this.registerTracks();
  }

  public static getInstance(): DungeonSoundtrackJukebox {
    if (!DungeonSoundtrackJukebox.instance) {
      DungeonSoundtrackJukebox.instance = new DungeonSoundtrackJukebox();
    }
    return DungeonSoundtrackJukebox.instance;
  }

  public getTrack(id: string): MusicTrackDefinition | undefined {
    return this.tracks.get(id);
  }

  public getAllTracks(): MusicTrackDefinition[] {
    return Array.from(this.tracks.values());
  }

  private registerTracks(): void {
    this.tracks.set('track_ambient_crypt', {
      trackId: 'track_ambient_crypt',
      title: 'Whispers in the Crypt of Shadows',
      composer: 'Omniquest Audio Core',
      durationSeconds: 180,
      intensityLevel: 'Ambient'
    });

    this.tracks.set('track_inferno_combat', {
      trackId: 'track_inferno_combat',
      title: 'Flames of the Basalt Crag',
      composer: 'Omniquest Audio Core',
      durationSeconds: 140,
      intensityLevel: 'Combat'
    });

    this.tracks.set('track_boss_overlord', {
      trackId: 'track_boss_overlord',
      title: 'Reckoning of the Abyssal Demon Overlord',
      composer: 'Omniquest Audio Core',
      durationSeconds: 240,
      intensityLevel: 'EpicBoss'
    });

    this.tracks.set('track_victory_liberation', {
      trackId: 'track_victory_liberation',
      title: 'Triumph: Realm of Shadows Liberated',
      composer: 'Omniquest Audio Core',
      durationSeconds: 60,
      intensityLevel: 'VictoryFanfare'
    });
  }
}
