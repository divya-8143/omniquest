export class CrashLogger {
  private static logs: string[] = [];

  static logError(context: string, error: any): void {
    const timestamp = new Date().toISOString();
    const stack = error instanceof Error ? error.stack : String(error);
    const logEntry = `[${timestamp}] ERROR in ${context}: ${stack}`;
    this.logs.push(logEntry);
    console.error(logEntry);
  }

  static getLogs(): readonly string[] {
    return this.logs;
  }
}
