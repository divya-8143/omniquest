export declare class CrashLogger {
    private static logs;
    static logError(context: string, error: any): void;
    static getLogs(): readonly string[];
}
