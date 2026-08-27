export declare class Vector2D {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    clone(): Vector2D;
    set(x: number, y: number): Vector2D;
    copy(v: Vector2D): Vector2D;
    add(v: Vector2D): Vector2D;
    addScaled(v: Vector2D, s: number): Vector2D;
    sub(v: Vector2D): Vector2D;
    scale(s: number): Vector2D;
    divide(s: number): Vector2D;
    dot(v: Vector2D): number;
    cross(v: Vector2D): number;
    lengthSq(): number;
    length(): number;
    normalize(): Vector2D;
    distanceSq(v: Vector2D): number;
    distance(v: Vector2D): number;
    angle(): number;
    rotate(angleRad: number): Vector2D;
    lerp(v: Vector2D, t: number): Vector2D;
    equals(v: Vector2D, epsilon?: number): boolean;
    zero(): Vector2D;
}
export declare class Matrix3x3 {
    elements: number[];
    constructor();
    identity(): Matrix3x3;
    translate(x: number, y: number): Matrix3x3;
    rotate(rad: number): Matrix3x3;
    scale(sx: number, sy: number): Matrix3x3;
    transformVector(v: Vector2D): Vector2D;
}
export declare class MathUtils {
    static clamp(val: number, min: number, max: number): number;
    static lerp(start: number, end: number, t: number): number;
    static degToRad(deg: number): number;
    static radToDeg(rad: number): number;
    static randomRange(min: number, max: number): number;
    static randomInt(min: number, max: number): number;
}
