/**
 * Omniquest: Realm of Shadows - Dungeon Graph Connectivity & Topological Solver
 * Minimum Spanning Tree (MST), Kruskal/Prim graph solvers, loop addition, and critical path generators.
 */

import { Vector2D } from '../../core/Math2D';

export interface GraphNodeRoom {
  id: number;
  center: Vector2D;
  size: Vector2D;
  isMainPath: boolean;
  connections: number[];
}

export interface GraphEdge {
  fromNodeId: number;
  toNodeId: number;
  distance: number;
}

export class DungeonProceduralRoomGraph {
  private nodes: GraphNodeRoom[] = [];
  private edges: GraphEdge[] = [];

  public addRoom(id: number, center: Vector2D, size: Vector2D): void {
    this.nodes.push({
      id,
      center,
      size,
      isMainPath: false,
      connections: []
    });
  }

  public computeMinimumSpanningTree(): GraphEdge[] {
    const candidateEdges: GraphEdge[] = [];

    // Calculate all pairwise distances (Delaunay triangulation proxy)
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        candidateEdges.push({
          fromNodeId: this.nodes[i].id,
          toNodeId: this.nodes[j].id,
          distance: this.nodes[i].center.distance(this.nodes[j].center)
        });
      }
    }

    // Sort edges by distance ascending (Kruskal's algorithm)
    candidateEdges.sort((a, b) => a.distance - b.distance);

    const parent = new Map<number, number>();
    this.nodes.forEach(n => parent.set(n.id, n.id));

    const find = (i: number): number => {
      if (parent.get(i) === i) return i;
      const root = find(parent.get(i)!);
      parent.set(i, root);
      return root;
    };

    const union = (i: number, j: number): boolean => {
      const rootI = find(i);
      const rootJ = find(j);
      if (rootI !== rootJ) {
        parent.set(rootI, rootJ);
        return true;
      }
      return false;
    };

    const mstEdges: GraphEdge[] = [];
    for (const edge of candidateEdges) {
      if (union(edge.fromNodeId, edge.toNodeId)) {
        mstEdges.push(edge);
        const nA = this.nodes.find(n => n.id === edge.fromNodeId);
        const nB = this.nodes.find(n => n.id === edge.toNodeId);
        if (nA && nB) {
          nA.connections.push(nB.id);
          nB.connections.push(nA.id);
        }
      }
    }

    this.edges = mstEdges;
    return mstEdges;
  }

  public getGraph(): { nodes: GraphNodeRoom[]; edges: GraphEdge[] } {
    return { nodes: this.nodes, edges: this.edges };
  }
}
