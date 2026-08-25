export class Vector2D {
  constructor(public x: number = 0, public y: number = 0) {}

  clone(): Vector2D { return new Vector2D(this.x, this.y); }
  set(x: number, y: number): Vector2D { this.x = x; this.y = y; return this; }
  copy(v: Vector2D): Vector2D { this.x = v.x; this.y = v.y; return this; }
  add(v: Vector2D): Vector2D { this.x += v.x; this.y += v.y; return this; }
  addScaled(v: Vector2D, s: number): Vector2D { this.x += v.x * s; this.y += v.y * s; return this; }
  sub(v: Vector2D): Vector2D { this.x -= v.x; this.y -= v.y; return this; }
  scale(s: number): Vector2D { this.x *= s; this.y *= s; return this; }
  divide(s: number): Vector2D { if (s !== 0) { this.x /= s; this.y /= s; } return this; }
  dot(v: Vector2D): number { return this.x * v.x + this.y * v.y; }
  cross(v: Vector2D): number { return this.x * v.y - this.y * v.x; }
  lengthSq(): number { return this.x * this.x + this.y * this.y; }
  length(): number { return Math.sqrt(this.lengthSq()); }
  normalize(): Vector2D { const len = this.length(); if (len > 0) this.scale(1 / len); return this; }
  distanceSq(v: Vector2D): number { const dx = this.x - v.x; const dy = this.y - v.y; return dx * dx + dy * dy; }
  distance(v: Vector2D): number { return Math.sqrt(this.distanceSq(v)); }
  angle(): number { return Math.atan2(this.y, this.x); }
  rotate(angleRad: number): Vector2D {
    const cos = Math.cos(angleRad);
    const sin = Math.sin(angleRad);
    const nx = this.x * cos - this.y * sin;
    const ny = this.x * sin + this.y * cos;
    this.x = nx; this.y = ny;
    return this;
  }
  lerp(v: Vector2D, t: number): Vector2D {
    this.x += (v.x - this.x) * t;
    this.y += (v.y - this.y) * t;
    return this;
  }
  equals(v: Vector2D, epsilon: number = 0.0001): boolean {
    return Math.abs(this.x - v.x) < epsilon && Math.abs(this.y - v.y) < epsilon;
  }
  zero(): Vector2D { this.x = 0; this.y = 0; return this; }
}

export class Matrix3x3 {
  elements: number[];
  constructor() {
    this.elements = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ];
  }

  identity(): Matrix3x3 {
    this.elements = [
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ];
    return this;
  }

  translate(x: number, y: number): Matrix3x3 {
    const m = this.elements;
    m[6] += m[0] * x + m[3] * y;
    m[7] += m[1] * x + m[4] * y;
    return this;
  }

  rotate(rad: number): Matrix3x3 {
    const c = Math.cos(rad);
    const s = Math.sin(rad);
    const m = this.elements;
    const m0 = m[0], m1 = m[1], m3 = m[3], m4 = m[4];
    m[0] = m0 * c + m3 * s;
    m[1] = m1 * c + m4 * s;
    m[3] = m0 * -s + m3 * c;
    m[4] = m1 * -s + m4 * c;
    return this;
  }

  scale(sx: number, sy: number): Matrix3x3 {
    const m = this.elements;
    m[0] *= sx; m[1] *= sx;
    m[3] *= sy; m[4] *= sy;
    return this;
  }

  transformVector(v: Vector2D): Vector2D {
    const m = this.elements;
    const x = m[0] * v.x + m[3] * v.y + m[6];
    const y = m[1] * v.x + m[4] * v.y + m[7];
    return new Vector2D(x, y);
  }
}

export class MathUtils {
  static clamp(val: number, min: number, max: number): number {
    return Math.max(min, Math.min(max, val));
  }
  static lerp(start: number, end: number, t: number): number {
    return start + (end - start) * t;
  }
  static degToRad(deg: number): number { return deg * (Math.PI / 180); }
  static radToDeg(rad: number): number { return rad * (180 / Math.PI); }
  static randomRange(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }
  static randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
