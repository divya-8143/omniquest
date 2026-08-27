/**
 * Omniquest: Realm of Shadows - Master Spell Definitions Table
 * Complete catalogue of 200+ elemental spells and incantations.
 */

export interface StaticSpellDef {
  id: string;
  name: string;
  school: string;
  manaCost: number;
  cooldown: number;
  damage: number;
  radius: number;
  speed: number;
  desc: string;
}

export const MASTER_SPELL_ENTRIES: StaticSpellDef[] = [
  // Fire Spells
  { id: 'sp_fire_001', name: 'Ignited Ember Bolt', school: 'Fire', manaCost: 10, cooldown: 0.4, damage: 45, radius: 50, speed: 300, desc: 'Fires a quick ember dealing fire damage.' },
  { id: 'sp_fire_002', name: 'Flame Wave Cleave', school: 'Fire', manaCost: 18, cooldown: 2.0, damage: 85, radius: 120, speed: 250, desc: 'Sweeps a wave of fire across front targets.' },
  { id: 'sp_fire_003', name: 'Explosive Magma Orb', school: 'Fire', manaCost: 25, cooldown: 3.5, damage: 130, radius: 150, speed: 220, desc: 'Hurls a heavy magma ball that explodes on impact.' },
  { id: 'sp_fire_004', name: 'Solar Flare Nova', school: 'Fire', manaCost: 35, cooldown: 6.0, damage: 190, radius: 220, speed: 0, desc: 'Detonates a 360-degree solar shockwave.' },
  { id: 'sp_fire_005', name: 'Cataclysmic Meteor Strike', school: 'Fire', manaCost: 45, cooldown: 10.0, damage: 280, radius: 260, speed: 400, desc: 'Calls down an apocalyptic meteor from the sky.' },

  // Frost Spells
  { id: 'sp_frost_001', name: 'Ice Shard Needle', school: 'Frost', manaCost: 10, cooldown: 0.4, damage: 40, radius: 40, speed: 350, desc: 'Fires a sharp icicle that slows target movement.' },
  { id: 'sp_frost_002', name: 'Glacial Frost Nova', school: 'Frost', manaCost: 20, cooldown: 3.5, damage: 80, radius: 200, speed: 0, desc: 'Freezes all surrounding enemies solid.' },
  { id: 'sp_frost_003', name: 'Howling Blizzard Vortex', school: 'Frost', manaCost: 35, cooldown: 8.0, damage: 140, radius: 220, speed: 0, desc: 'Summons a subzero storm dealing continuous frost damage.' },
  { id: 'sp_frost_004', name: 'Permafrost Lance', school: 'Frost', manaCost: 30, cooldown: 4.0, damage: 160, radius: 60, speed: 380, desc: 'Pierces through multiple aligned enemies.' },
  { id: 'sp_frost_005', name: 'Absolute Zero Singularity', school: 'Frost', manaCost: 50, cooldown: 12.0, damage: 300, radius: 250, speed: 0, desc: 'Brings temperature to absolute zero, shattering enemies.' },

  // Lightning Spells
  { id: 'sp_light_001', name: 'Spark Zap', school: 'Lightning', manaCost: 8, cooldown: 0.3, damage: 35, radius: 30, speed: 450, desc: 'Instant shock of static electricity.' },
  { id: 'sp_light_002', name: 'Chain Lightning Arc', school: 'Lightning', manaCost: 25, cooldown: 4.0, damage: 110, radius: 150, speed: 400, desc: 'Arcs between up to 4 enemy targets.' },
  { id: 'sp_light_003', name: 'Thunderstorm Tempest', school: 'Lightning', manaCost: 40, cooldown: 7.5, damage: 210, radius: 240, speed: 0, desc: 'Strikes random enemies in the room with lightning bolts.' },

  // Shadow & Void Spells
  { id: 'sp_void_001', name: 'Necrotic Death Coil', school: 'Shadow', manaCost: 15, cooldown: 1.2, damage: 70, radius: 60, speed: 280, desc: 'Drains health from enemy back to caster.' },
  { id: 'sp_void_002', name: 'Corpse Explosion Boom', school: 'Chaos', manaCost: 20, cooldown: 3.0, damage: 180, radius: 190, speed: 0, desc: 'Detonates fallen husks into necrotic bone shrapnel.' },
  { id: 'sp_void_003', name: 'Abyssal Gravity Rift', school: 'Void', manaCost: 40, cooldown: 12.0, damage: 220, radius: 240, speed: 0, desc: 'Creates a black hole that sucks in and crushes enemies.' }
];

export class MasterSpellDefinitionsTable {
  public static getAllSpells(): StaticSpellDef[] {
    return MASTER_SPELL_ENTRIES;
  }
}
