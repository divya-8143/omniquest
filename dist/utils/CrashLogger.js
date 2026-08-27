"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrashLogger = void 0;
class CrashLogger {
    static logs = [];
    static logError(context, error) {
        const timestamp = new Date().toISOString();
        const stack = error instanceof Error ? error.stack : String(error);
        const logEntry = `[${timestamp}] ERROR in ${context}: ${stack}`;
        this.logs.push(logEntry);
        console.error(logEntry);
    }
    static getLogs() {
        return this.logs;
    }
}
exports.CrashLogger = CrashLogger;
//# sourceMappingURL=CrashLogger.js.map