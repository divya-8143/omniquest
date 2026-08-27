"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = exports.Matrix3x3 = exports.Vector2D = void 0;
class Vector2D {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    clone() { return new Vector2D(this.x, this.y); }
    set(x, y) { this.x = x; this.y = y; return this; }
    copy(v) { this.x = v.x; this.y = v.y; return this; }
    add(v) { this.x += v.x; this.y += v.y; return this; }
    addScaled(v, s) { this.x += v.x * s; this.y += v.y * s; return this; }
    sub(v) { this.x -= v.x; this.y -= v.y; return this; }
    scale(s) { this.x *= s; this.y *= s; return this; }
    divide(s) { if (s !== 0) {
        this.x /= s;
        this.y /= s;
    } return this; }
    dot(v) { return this.x * v.x + this.y * v.y; }
    cross(v) { return this.x * v.y - this.y * v.x; }
    lengthSq() { return this.x * this.x + this.y * this.y; }
    length() { return Math.sqrt(this.lengthSq()); }
    normalize() { const len = this.length(); if (len > 0)
        this.scale(1 / len); return this; }
    distanceSq(v) { const dx = this.x - v.x; const dy = this.y - v.y; return dx * dx + dy * dy; }
    distance(v) { return Math.sqrt(this.distanceSq(v)); }
    angle() { return Math.atan2(this.y, this.x); }
    rotate(angleRad) {
        const cos = Math.cos(angleRad);
        const sin = Math.sin(angleRad);
        const nx = this.x * cos - this.y * sin;
        const ny = this.x * sin + this.y * cos;
        this.x = nx;
        this.y = ny;
        return this;
    }
    lerp(v, t) {
        this.x += (v.x - this.x) * t;
        this.y += (v.y - this.y) * t;
        return this;
    }
    equals(v, epsilon = 0.0001) {
        return Math.abs(this.x - v.x) < epsilon && Math.abs(this.y - v.y) < epsilon;
    }
    zero() { this.x = 0; this.y = 0; return this; }
}
exports.Vector2D = Vector2D;
class Matrix3x3 {
    elements;
    constructor() {
        this.elements = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];
    }
    identity() {
        this.elements = [
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ];
        return this;
    }
    translate(x, y) {
        const m = this.elements;
        m[6] += m[0] * x + m[3] * y;
        m[7] += m[1] * x + m[4] * y;
        return this;
    }
    rotate(rad) {
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
    scale(sx, sy) {
        const m = this.elements;
        m[0] *= sx;
        m[1] *= sx;
        m[3] *= sy;
        m[4] *= sy;
        return this;
    }
    transformVector(v) {
        const m = this.elements;
        const x = m[0] * v.x + m[3] * v.y + m[6];
        const y = m[1] * v.x + m[4] * v.y + m[7];
        return new Vector2D(x, y);
    }
}
exports.Matrix3x3 = Matrix3x3;
class MathUtils {
    static clamp(val, min, max) {
        return Math.max(min, Math.min(max, val));
    }
    static lerp(start, end, t) {
        return start + (end - start) * t;
    }
    static degToRad(deg) { return deg * (Math.PI / 180); }
    static radToDeg(rad) { return rad * (180 / Math.PI); }
    static randomRange(min, max) {
        return min + Math.random() * (max - min);
    }
    static randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
exports.MathUtils = MathUtils;
//# sourceMappingURL=Math2D.js.map