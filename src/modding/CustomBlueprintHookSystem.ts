export interface CustomRoomHook {
  hookId: string;
  author: string;
  theme: string;
  gridMatrix: number[][];
  spawnHookCallback?: (roomOriginX: number, roomOriginY: number) => Array<{ type: string; x: number; y: number }>;
}

export class CustomBlueprintHookSystem {
  private static instance: CustomBlueprintHookSystem;
  private hooks: Map<string, CustomRoomHook> = new Map();

  public static getInstance(): CustomBlueprintHookSystem {
    if (!CustomBlueprintHookSystem.instance) {
      CustomBlueprintHookSystem.instance = new CustomBlueprintHookSystem();
    }
    return CustomBlueprintHookSystem.instance;
  }

  public registerBlueprintHook(hook: CustomRoomHook): void {
    this.hooks.set(hook.hookId, hook);
  }

  public getHooksForTheme(theme: string): CustomRoomHook[] {
    return Array.from(this.hooks.values()).filter(h => h.theme === theme);
  }

  public clear(): void {
    this.hooks.clear();
  }
}
