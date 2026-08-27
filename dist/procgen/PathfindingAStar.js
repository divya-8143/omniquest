"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathfindingAStar = void 0;
class Node {
    x;
    y;
    g = 0;
    h = 0;
    f = 0;
    parent = null;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
class PathfindingAStar {
    static findPath(grid, start, end) {
        const rows = grid.length;
        if (rows === 0)
            return [];
        const cols = grid[0].length;
        const openList = [];
        const closedSet = new Set();
        const startNode = new Node(start.x, start.y);
        const endNode = new Node(end.x, end.y);
        openList.push(startNode);
        while (openList.length > 0) {
            openList.sort((a, b) => a.f - b.f);
            const current = openList.shift();
            const key = `${current.x},${current.y}`;
            closedSet.add(key);
            if (current.x === endNode.x && current.y === endNode.y) {
                const path = [];
                let curr = current;
                while (curr) {
                    path.push({ x: curr.x, y: curr.y });
                    curr = curr.parent;
                }
                return path.reverse();
            }
            const neighbors = [
                { x: current.x + 1, y: current.y },
                { x: current.x - 1, y: current.y },
                { x: current.x, y: current.y + 1 },
                { x: current.x, y: current.y - 1 }
            ];
            for (const n of neighbors) {
                if (n.x < 0 || n.x >= cols || n.y < 0 || n.y >= rows)
                    continue;
                if (grid[n.y][n.x] !== 0)
                    continue; // 0 = walkable
                const nKey = `${n.x},${n.y}`;
                if (closedSet.has(nKey))
                    continue;
                const neighborNode = new Node(n.x, n.y);
                neighborNode.g = current.g + 1;
                neighborNode.h = Math.abs(n.x - endNode.x) + Math.abs(n.y - endNode.y);
                neighborNode.f = neighborNode.g + neighborNode.h;
                neighborNode.parent = current;
                const existing = openList.find(o => o.x === n.x && o.y === n.y);
                if (existing) {
                    if (neighborNode.g < existing.g) {
                        existing.g = neighborNode.g;
                        existing.f = neighborNode.f;
                        existing.parent = current;
                    }
                }
                else {
                    openList.push(neighborNode);
                }
            }
        }
        return [];
    }
}
exports.PathfindingAStar = PathfindingAStar;
//# sourceMappingURL=PathfindingAStar.js.map