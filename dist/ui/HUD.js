"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HUD = void 0;
class HUD {
    render(ctx, playerHp, playerMaxHp, gold, level) {
        // Render Health Bar
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(20, 20, 220, 30);
        ctx.fillStyle = '#e11d48';
        const hpWidth = Math.max(0, (playerHp / playerMaxHp) * 216);
        ctx.fillRect(22, 22, hpWidth, 26);
        // Text stats
        ctx.font = 'bold 14px Segoe UI';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(`HP: ${playerHp} / ${playerMaxHp}`, 30, 40);
        // Gold & Level
        ctx.fillStyle = '#fbbf24';
        ctx.fillText(`Gold: ${gold}`, 260, 40);
        ctx.fillStyle = '#38bdf8';
        ctx.fillText(`Level: ${level}`, 370, 40);
    }
}
exports.HUD = HUD;
//# sourceMappingURL=HUD.js.map