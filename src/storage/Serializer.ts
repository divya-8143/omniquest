export class Serializer {
  static serialize<T>(data: T): string {
    return JSON.stringify(data);
  }

  static deserialize<T>(jsonString: string): T | null {
    try {
      return JSON.parse(jsonString) as T;
    } catch {
      return null;
    }
  }
}
