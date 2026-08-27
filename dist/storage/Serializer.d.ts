export declare class Serializer {
    static serialize<T>(data: T): string;
    static deserialize<T>(jsonString: string): T | null;
}
