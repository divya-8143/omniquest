export type EntityId = number;

export class Entity {
  constructor(
    public readonly id: EntityId,
    public name: string = `Entity_${id}`,
    public active: boolean = true
  ) {}
}
