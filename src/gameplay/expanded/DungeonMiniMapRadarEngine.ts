/**
 * Omniquest: Realm of Shadows - 2D HUD Minimap & Radar Discovery Engine
 * Fog of war discovery, player GPS marker, room bounding highlights, enemy radar blips, and boss icons.
 */

import { Vector2D } from '../../core/Math2D';

export interface MinimapRadarMarker {
  worldPos: Vector2D;
  color: string;
  size: number;
  shape: 'dot' | 'skull' | 'star' | 'chest';
}

export class DungeonMiniMapRadarEngine {
  private static instance: DungeonMiniMapRadarEngine;
  private discoveredGridTiles: Set<string> = new Set();

  public static getInstance(): DungeonMiniMapRadarEngine {
    if (!DungeonMiniMapRadarEngine.instance) {
      DungeonMiniMapRadarEngine.instance = new DungeonMiniMapRadarEngine();
    }
    return DungeonMiniMapRadarEngine.instance;
  }

  public discoverRadius(playerPos: Vector2D, radiusTiles: number = 8): void {
    const tileX = Math.floor(playerPos.x / 32);
    const tileY = Math.floor(playerPos.y / 32);

    for (let dy = -radiusTiles; dy <= radiusTiles; dy++) {
      for (let dx = -radiusTiles; dx <= radiusTiles; dx++) {
        if (dx * dx + dy * dy <= radiusTiles * radiusTiles) {
          this.discoveredGridTiles.add(`${tileX + dx},${tileY + dy}`);
        }
      }
    }
  }

  public isTileDiscovered(tileX: number, tileY: number): boolean {
    return this.discoveredGridTiles.has(`${tileX},${tileY}`);
  }

  public renderMinimap(
    ctx: CanvasRenderingContext2D,
    grid: number[][],
    playerPos: Vector2D,
    markers: MinimapRadarMarker[],
    mapOriginX: number = 20,
    mapOriginY: number = 20,
    scale: number = 2.5
  ): void {
    ctx.save();
    ctx.fillStyle = 'rgba(3, 7, 18, 0.75)';
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2;

    const mapW = grid[0].length * scale;
    const mapH = grid.length * scale;
    ctx.fillRect(mapOriginX, mapOriginY, mapW, mapH);
    ctx.strokeRect(mapOriginX, mapOriginY, mapW, mapH);

    // Render floor tiles
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[r].length; c++) {
        if (this.isTileDiscovered(c, r)) {
          if (grid[r][c] === 0) {
            ctx.fillStyle = '#475569';
            ctx.fillRect(mapOriginX + c * scale, mapOriginY + r * scale, scale, scale);
          }
        }
      }
    }

    // Render markers
    for (const m of markers) {
      const mx = mapOriginX + (m.worldPos.x / 32) * scale;
      const my = mapOriginY + (m.worldPos.y / 32) * scale;
      ctx.fillStyle = m.color;
      ctx.beginPath();
      ctx.arc(mx, my, m.size, 0, Math.PI * 2);
      ctx.fill();
    }

    // Player marker
    const px = mapOriginX + (playerPos.x / 32) * scale;
    const py = mapOriginY + (playerPos.y / 32) * scale;
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(px, py, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}
