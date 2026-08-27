"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serializer = void 0;
class Serializer {
    static serialize(data) {
        return JSON.stringify(data);
    }
    static deserialize(jsonString) {
        try {
            return JSON.parse(jsonString);
        }
        catch {
            return null;
        }
    }
}
exports.Serializer = Serializer;
//# sourceMappingURL=Serializer.js.map