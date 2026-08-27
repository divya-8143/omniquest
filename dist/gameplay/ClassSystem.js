"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassSystem = void 0;
class ClassSystem {
    static classes = new Map([
        ['Warrior', {
                className: 'Warrior',
                resourceType: 'Stamina',
                maxResource: 100,
                baseAttack: 15,
                baseDefense: 10,
                specialAbilities: ['Shield Wall', 'Whirlwind', 'Berserk']
            }],
        ['Mage', {
                className: 'Mage',
                resourceType: 'Mana',
                maxResource: 150,
                baseAttack: 22,
                baseDefense: 4,
                specialAbilities: ['Fireball', 'Arcane Blink', 'Meteor Nova']
            }],
        ['Rogue', {
                className: 'Rogue',
                resourceType: 'Energy',
                maxResource: 120,
                baseAttack: 18,
                baseDefense: 6,
                specialAbilities: ['Shadowstep', 'Poison Dagger', 'Smoke Bomb']
            }]
    ]);
    static getClass(className) {
        return this.classes.get(className);
    }
}
exports.ClassSystem = ClassSystem;
//# sourceMappingURL=ClassSystem.js.map