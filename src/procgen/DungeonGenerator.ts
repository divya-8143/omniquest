export interface Room {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class DungeonGenerator {
  constructor(
    public width: number = 50,
    public height: number = 50,
    public minRoomSize: number = 6,
    public maxRoomSize: number = 12
  ) {}

  generate(): { grid: number[][]; rooms: Room[] } {
    const grid: number[][] = Array.from({ length: this.height }, () =>
      Array(this.width).fill(1) // 1 = wall, 0 = floor
    );
    const rooms: Room[] = [];

    const attempts = 30;
    for (let i = 0; i < attempts; i++) {
      const w = Math.floor(Math.random() * (this.maxRoomSize - this.minRoomSize + 1)) + this.minRoomSize;
      const h = Math.floor(Math.random() * (this.maxRoomSize - this.minRoomSize + 1)) + this.minRoomSize;
      const x = Math.floor(Math.random() * (this.width - w - 2)) + 1;
      const y = Math.floor(Math.random() * (this.height - h - 2)) + 1;

      const newRoom: Room = { x, y, width: w, height: h };
      const overlaps = rooms.some(r =>
        x < r.x + r.width + 1 &&
        x + w + 1 > r.x &&
        y < r.y + r.height + 1 &&
        y + h + 1 > r.y
      );

      if (!overlaps) {
        for (let rx = x; rx < x + w; rx++) {
          for (let ry = y; ry < y + h; ry++) {
            grid[ry][rx] = 0;
          }
        }
        if (rooms.length > 0) {
          const prev = rooms[rooms.length - 1];
          const c1 = { x: Math.floor(x + w / 2), y: Math.floor(y + h / 2) };
          const c2 = { x: Math.floor(prev.x + prev.width / 2), y: Math.floor(prev.y + prev.height / 2) };

          for (let cx = Math.min(c1.x, c2.x); cx <= Math.max(c1.x, c2.x); cx++) {
            grid[c1.y][cx] = 0;
          }
          for (let cy = Math.min(c1.y, c2.y); cy <= Math.max(c1.y, c2.y); cy++) {
            grid[cy][c2.x] = 0;
          }
        }
        rooms.push(newRoom);
      }
    }

    return { grid, rooms };
  }
}
