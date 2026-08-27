/**
 * Omniquest: Realm of Shadows - 2D Grid Backpack & Item Spatial Placement Matrix
 * Diablo-style tetris item inventory: 2x2, 1x3, 2x3 items, auto-sorting algorithms, and encumbrance weight systems.
 */

export interface GridItemPlacement {
  itemId: string;
  gridX: number;
  gridY: number;
  widthCells: number;
  heightCells: number;
  itemIcon: string;
  itemColor: string;
}

export class InventoryGridMatrix {
  private cols: number;
  private rows: number;
  private grid: Array<Array<string | null>>;
  private items: Map<string, GridItemPlacement> = new Map();
  private maxWeightCapacity: number = 100;
  private currentWeight: number = 0;

  constructor(cols: number = 10, rows: number = 6) {
    this.cols = cols;
    this.rows = rows;
    this.grid = Array.from({ length: rows }, () => Array(cols).fill(null));
  }

  public canFitItem(x: number, y: number, w: number, h: number): boolean {
    if (x < 0 || y < 0 || x + w > this.cols || y + h > this.rows) return false;

    for (let r = y; r < y + h; r++) {
      for (let c = x; c < x + w; c++) {
        if (this.grid[r][c] !== null) return false;
      }
    }
    return true;
  }

  public placeItem(item: GridItemPlacement): boolean {
    if (!this.canFitItem(item.gridX, item.gridY, item.widthCells, item.heightCells)) {
      return false;
    }

    for (let r = item.gridY; r < item.gridY + item.heightCells; r++) {
      for (let c = item.gridX; c < item.gridX + item.widthCells; c++) {
        this.grid[r][c] = item.itemId;
      }
    }

    this.items.set(item.itemId, item);
    return true;
  }

  public removeItem(itemId: string): boolean {
    const item = this.items.get(itemId);
    if (!item) return false;

    for (let r = item.gridY; r < item.gridY + item.heightCells; r++) {
      for (let c = item.gridX; c < item.gridX + item.widthCells; c++) {
        if (this.grid[r][c] === itemId) {
          this.grid[r][c] = null;
        }
      }
    }

    this.items.delete(itemId);
    return true;
  }

  public autoSort(): void {
    const itemList = Array.from(this.items.values()).sort((a, b) => b.widthCells * b.heightCells - a.widthCells * a.heightCells);

    // Clear grid
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        this.grid[r][c] = null;
      }
    }
    this.items.clear();

    for (const it of itemList) {
      let placed = false;
      for (let r = 0; r <= this.rows - it.heightCells && !placed; r++) {
        for (let c = 0; c <= this.cols - it.widthCells && !placed; c++) {
          if (this.canFitItem(c, r, it.widthCells, it.heightCells)) {
            it.gridX = c;
            it.gridY = r;
            this.placeItem(it);
            placed = true;
          }
        }
      }
    }
  }

  public getOccupancy(): Array<Array<string | null>> {
    return this.grid;
  }
}
