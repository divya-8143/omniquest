/**
 * Omniquest: Realm of Shadows - Math3D, Vector & Computational Geometry Library
 * High-performance vector math, matrix transformations, Raycasting, Voronoi noise, and Perlin heightmaps.
 */

export class Vector3D {
  public x: number;
  public y: number;
  public z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  public clone(): Vector3D {
    return new Vector3D(this.x, this.y, this.z);
  }

  public set(x: number, y: number, z: number): this {
    this.x = x;
    this.y = y;
    this.z = z;
    return this;
  }

  public add(v: Vector3D): this {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;
    return this;
  }

  public sub(v: Vector3D): this {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;
    return this;
  }

  public scale(s: number): this {
    this.x *= s;
    this.y *= s;
    this.z *= s;
    return this;
  }

  public dot(v: Vector3D): number {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  public cross(v: Vector3D): Vector3D {
    return new Vector3D(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    );
  }

  public lengthSq(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  public length(): number {
    return Math.sqrt(this.lengthSq());
  }

  public normalize(): this {
    const len = this.length();
    if (len > 0.00001) {
      this.x /= len;
      this.y /= len;
      this.z /= len;
    }
    return this;
  }

  public distance(v: Vector3D): number {
    return Math.sqrt(
      (this.x - v.x) ** 2 +
      (this.y - v.y) ** 2 +
      (this.z - v.z) ** 2
    );
  }
}

export class Matrix4x4 {
  public m: number[] = new Array(16).fill(0);

  constructor() {
    this.identity();
  }

  public identity(): this {
    this.m = [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1
    ];
    return this;
  }

  public multiply(other: Matrix4x4): Matrix4x4 {
    const result = new Matrix4x4();
    for (let row = 0; row < 4; row++) {
      for (let col = 0; col < 4; col++) {
        let sum = 0;
        for (let k = 0; k < 4; k++) {
          sum += this.m[row * 4 + k] * other.m[k * 4 + col];
        }
        result.m[row * 4 + col] = sum;
      }
    }
    return result;
  }

  public static createTranslation(x: number, y: number, z: number): Matrix4x4 {
    const mat = new Matrix4x4();
    mat.m[12] = x;
    mat.m[13] = y;
    mat.m[14] = z;
    return mat;
  }

  public static createScale(x: number, y: number, z: number): Matrix4x4 {
    const mat = new Matrix4x4();
    mat.m[0] = x;
    mat.m[5] = y;
    mat.m[10] = z;
    return mat;
  }

  public static createRotationZ(radians: number): Matrix4x4 {
    const mat = new Matrix4x4();
    const c = Math.cos(radians);
    const s = Math.sin(radians);
    mat.m[0] = c;
    mat.m[1] = s;
    mat.m[4] = -s;
    mat.m[5] = c;
    return mat;
  }
}

export class PerlinNoiseGenerator {
  private p: number[] = [];

  constructor(seed: number = 42) {
    const permutation = [];
    for (let i = 0; i < 256; i++) permutation[i] = i;
    for (let i = 255; i > 0; i--) {
      const j = Math.floor((Math.sin(seed + i) * 10000 - Math.floor(Math.sin(seed + i) * 10000)) * (i + 1));
      [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
    }
    this.p = new Array(512);
    for (let i = 0; i < 512; i++) {
      this.p[i] = permutation[i & 255];
    }
  }

  private fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }

  private lerp(t: number, a: number, b: number): number {
    return a + t * (b - a);
  }

  private grad(hash: number, x: number, y: number, z: number): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  }

  public noise2D(x: number, y: number): number {
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;

    x -= Math.floor(x);
    y -= Math.floor(y);

    const u = this.fade(x);
    const v = this.fade(y);

    const A = this.p[X] + Y;
    const AA = this.p[A];
    const AB = this.p[A + 1];
    const B = this.p[X + 1] + Y;
    const BA = this.p[B];
    const BB = this.p[B + 1];

    return this.lerp(
      v,
      this.lerp(u, this.grad(this.p[AA], x, y, 0), this.grad(this.p[BA], x - 1, y, 0)),
      this.lerp(u, this.grad(this.p[AB], x, y - 1, 0), this.grad(this.p[BB], x - 1, y - 1, 0))
    );
  }
}
