"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpellCatalog = void 0;
class SpellCatalog {
    static spells = new Map();
    static initialize() {
        this.spells.set('spell_1', {
            id: 'spell_1',
            name: 'Spell Incantation 1',
            school: 'frost',
            manaCost: 11,
            cooldown: 2,
            baseDamage: 28,
            radius: 51,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 51'
        });
        this.spells.set('spell_2', {
            id: 'spell_2',
            name: 'Spell Incantation 2',
            school: 'arcane',
            manaCost: 12,
            cooldown: 3,
            baseDamage: 31,
            radius: 52,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 52'
        });
        this.spells.set('spell_3', {
            id: 'spell_3',
            name: 'Spell Incantation 3',
            school: 'holy',
            manaCost: 13,
            cooldown: 4,
            baseDamage: 34,
            radius: 53,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 53'
        });
        this.spells.set('spell_4', {
            id: 'spell_4',
            name: 'Spell Incantation 4',
            school: 'shadow',
            manaCost: 14,
            cooldown: 5,
            baseDamage: 37,
            radius: 54,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 54'
        });
        this.spells.set('spell_5', {
            id: 'spell_5',
            name: 'Spell Incantation 5',
            school: 'nature',
            manaCost: 15,
            cooldown: 6,
            baseDamage: 40,
            radius: 55,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 55'
        });
        this.spells.set('spell_6', {
            id: 'spell_6',
            name: 'Spell Incantation 6',
            school: 'fire',
            manaCost: 16,
            cooldown: 7,
            baseDamage: 43,
            radius: 56,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 56'
        });
        this.spells.set('spell_7', {
            id: 'spell_7',
            name: 'Spell Incantation 7',
            school: 'frost',
            manaCost: 17,
            cooldown: 8,
            baseDamage: 46,
            radius: 57,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 57'
        });
        this.spells.set('spell_8', {
            id: 'spell_8',
            name: 'Spell Incantation 8',
            school: 'arcane',
            manaCost: 18,
            cooldown: 9,
            baseDamage: 49,
            radius: 58,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 58'
        });
        this.spells.set('spell_9', {
            id: 'spell_9',
            name: 'Spell Incantation 9',
            school: 'holy',
            manaCost: 19,
            cooldown: 10,
            baseDamage: 52,
            radius: 59,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 59'
        });
        this.spells.set('spell_10', {
            id: 'spell_10',
            name: 'Spell Incantation 10',
            school: 'shadow',
            manaCost: 20,
            cooldown: 1,
            baseDamage: 55,
            radius: 60,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 60'
        });
        this.spells.set('spell_11', {
            id: 'spell_11',
            name: 'Spell Incantation 11',
            school: 'nature',
            manaCost: 21,
            cooldown: 2,
            baseDamage: 58,
            radius: 61,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 61'
        });
        this.spells.set('spell_12', {
            id: 'spell_12',
            name: 'Spell Incantation 12',
            school: 'fire',
            manaCost: 22,
            cooldown: 3,
            baseDamage: 61,
            radius: 62,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 62'
        });
        this.spells.set('spell_13', {
            id: 'spell_13',
            name: 'Spell Incantation 13',
            school: 'frost',
            manaCost: 23,
            cooldown: 4,
            baseDamage: 64,
            radius: 63,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 63'
        });
        this.spells.set('spell_14', {
            id: 'spell_14',
            name: 'Spell Incantation 14',
            school: 'arcane',
            manaCost: 24,
            cooldown: 5,
            baseDamage: 67,
            radius: 64,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 64'
        });
        this.spells.set('spell_15', {
            id: 'spell_15',
            name: 'Spell Incantation 15',
            school: 'holy',
            manaCost: 25,
            cooldown: 6,
            baseDamage: 70,
            radius: 65,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 65'
        });
        this.spells.set('spell_16', {
            id: 'spell_16',
            name: 'Spell Incantation 16',
            school: 'shadow',
            manaCost: 26,
            cooldown: 7,
            baseDamage: 73,
            radius: 66,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 66'
        });
        this.spells.set('spell_17', {
            id: 'spell_17',
            name: 'Spell Incantation 17',
            school: 'nature',
            manaCost: 27,
            cooldown: 8,
            baseDamage: 76,
            radius: 67,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 67'
        });
        this.spells.set('spell_18', {
            id: 'spell_18',
            name: 'Spell Incantation 18',
            school: 'fire',
            manaCost: 28,
            cooldown: 9,
            baseDamage: 79,
            radius: 68,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 68'
        });
        this.spells.set('spell_19', {
            id: 'spell_19',
            name: 'Spell Incantation 19',
            school: 'frost',
            manaCost: 29,
            cooldown: 10,
            baseDamage: 82,
            radius: 69,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 69'
        });
        this.spells.set('spell_20', {
            id: 'spell_20',
            name: 'Spell Incantation 20',
            school: 'arcane',
            manaCost: 30,
            cooldown: 1,
            baseDamage: 85,
            radius: 70,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 70'
        });
        this.spells.set('spell_21', {
            id: 'spell_21',
            name: 'Spell Incantation 21',
            school: 'holy',
            manaCost: 31,
            cooldown: 2,
            baseDamage: 88,
            radius: 71,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 71'
        });
        this.spells.set('spell_22', {
            id: 'spell_22',
            name: 'Spell Incantation 22',
            school: 'shadow',
            manaCost: 32,
            cooldown: 3,
            baseDamage: 91,
            radius: 72,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 72'
        });
        this.spells.set('spell_23', {
            id: 'spell_23',
            name: 'Spell Incantation 23',
            school: 'nature',
            manaCost: 33,
            cooldown: 4,
            baseDamage: 94,
            radius: 73,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 73'
        });
        this.spells.set('spell_24', {
            id: 'spell_24',
            name: 'Spell Incantation 24',
            school: 'fire',
            manaCost: 34,
            cooldown: 5,
            baseDamage: 97,
            radius: 74,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 74'
        });
        this.spells.set('spell_25', {
            id: 'spell_25',
            name: 'Spell Incantation 25',
            school: 'frost',
            manaCost: 35,
            cooldown: 6,
            baseDamage: 100,
            radius: 75,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 75'
        });
        this.spells.set('spell_26', {
            id: 'spell_26',
            name: 'Spell Incantation 26',
            school: 'arcane',
            manaCost: 36,
            cooldown: 7,
            baseDamage: 103,
            radius: 76,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 76'
        });
        this.spells.set('spell_27', {
            id: 'spell_27',
            name: 'Spell Incantation 27',
            school: 'holy',
            manaCost: 37,
            cooldown: 8,
            baseDamage: 106,
            radius: 77,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 77'
        });
        this.spells.set('spell_28', {
            id: 'spell_28',
            name: 'Spell Incantation 28',
            school: 'shadow',
            manaCost: 38,
            cooldown: 9,
            baseDamage: 109,
            radius: 78,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 78'
        });
        this.spells.set('spell_29', {
            id: 'spell_29',
            name: 'Spell Incantation 29',
            school: 'nature',
            manaCost: 39,
            cooldown: 10,
            baseDamage: 112,
            radius: 79,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 79'
        });
        this.spells.set('spell_30', {
            id: 'spell_30',
            name: 'Spell Incantation 30',
            school: 'fire',
            manaCost: 40,
            cooldown: 1,
            baseDamage: 115,
            radius: 80,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 80'
        });
        this.spells.set('spell_31', {
            id: 'spell_31',
            name: 'Spell Incantation 31',
            school: 'frost',
            manaCost: 41,
            cooldown: 2,
            baseDamage: 118,
            radius: 81,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 81'
        });
        this.spells.set('spell_32', {
            id: 'spell_32',
            name: 'Spell Incantation 32',
            school: 'arcane',
            manaCost: 42,
            cooldown: 3,
            baseDamage: 121,
            radius: 82,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 82'
        });
        this.spells.set('spell_33', {
            id: 'spell_33',
            name: 'Spell Incantation 33',
            school: 'holy',
            manaCost: 43,
            cooldown: 4,
            baseDamage: 124,
            radius: 83,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 83'
        });
        this.spells.set('spell_34', {
            id: 'spell_34',
            name: 'Spell Incantation 34',
            school: 'shadow',
            manaCost: 44,
            cooldown: 5,
            baseDamage: 127,
            radius: 84,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 84'
        });
        this.spells.set('spell_35', {
            id: 'spell_35',
            name: 'Spell Incantation 35',
            school: 'nature',
            manaCost: 45,
            cooldown: 6,
            baseDamage: 130,
            radius: 85,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 85'
        });
        this.spells.set('spell_36', {
            id: 'spell_36',
            name: 'Spell Incantation 36',
            school: 'fire',
            manaCost: 46,
            cooldown: 7,
            baseDamage: 133,
            radius: 86,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 86'
        });
        this.spells.set('spell_37', {
            id: 'spell_37',
            name: 'Spell Incantation 37',
            school: 'frost',
            manaCost: 47,
            cooldown: 8,
            baseDamage: 136,
            radius: 87,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 87'
        });
        this.spells.set('spell_38', {
            id: 'spell_38',
            name: 'Spell Incantation 38',
            school: 'arcane',
            manaCost: 48,
            cooldown: 9,
            baseDamage: 139,
            radius: 88,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 88'
        });
        this.spells.set('spell_39', {
            id: 'spell_39',
            name: 'Spell Incantation 39',
            school: 'holy',
            manaCost: 49,
            cooldown: 10,
            baseDamage: 142,
            radius: 89,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 89'
        });
        this.spells.set('spell_40', {
            id: 'spell_40',
            name: 'Spell Incantation 40',
            school: 'shadow',
            manaCost: 50,
            cooldown: 1,
            baseDamage: 145,
            radius: 90,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 90'
        });
        this.spells.set('spell_41', {
            id: 'spell_41',
            name: 'Spell Incantation 41',
            school: 'nature',
            manaCost: 51,
            cooldown: 2,
            baseDamage: 148,
            radius: 91,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 91'
        });
        this.spells.set('spell_42', {
            id: 'spell_42',
            name: 'Spell Incantation 42',
            school: 'fire',
            manaCost: 52,
            cooldown: 3,
            baseDamage: 151,
            radius: 92,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 92'
        });
        this.spells.set('spell_43', {
            id: 'spell_43',
            name: 'Spell Incantation 43',
            school: 'frost',
            manaCost: 53,
            cooldown: 4,
            baseDamage: 154,
            radius: 93,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 93'
        });
        this.spells.set('spell_44', {
            id: 'spell_44',
            name: 'Spell Incantation 44',
            school: 'arcane',
            manaCost: 54,
            cooldown: 5,
            baseDamage: 157,
            radius: 94,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 94'
        });
        this.spells.set('spell_45', {
            id: 'spell_45',
            name: 'Spell Incantation 45',
            school: 'holy',
            manaCost: 55,
            cooldown: 6,
            baseDamage: 160,
            radius: 95,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 95'
        });
        this.spells.set('spell_46', {
            id: 'spell_46',
            name: 'Spell Incantation 46',
            school: 'shadow',
            manaCost: 56,
            cooldown: 7,
            baseDamage: 163,
            radius: 96,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 96'
        });
        this.spells.set('spell_47', {
            id: 'spell_47',
            name: 'Spell Incantation 47',
            school: 'nature',
            manaCost: 57,
            cooldown: 8,
            baseDamage: 166,
            radius: 97,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 97'
        });
        this.spells.set('spell_48', {
            id: 'spell_48',
            name: 'Spell Incantation 48',
            school: 'fire',
            manaCost: 58,
            cooldown: 9,
            baseDamage: 169,
            radius: 98,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 98'
        });
        this.spells.set('spell_49', {
            id: 'spell_49',
            name: 'Spell Incantation 49',
            school: 'frost',
            manaCost: 59,
            cooldown: 10,
            baseDamage: 172,
            radius: 99,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 99'
        });
        this.spells.set('spell_50', {
            id: 'spell_50',
            name: 'Spell Incantation 50',
            school: 'arcane',
            manaCost: 10,
            cooldown: 1,
            baseDamage: 175,
            radius: 100,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 100'
        });
        this.spells.set('spell_51', {
            id: 'spell_51',
            name: 'Spell Incantation 51',
            school: 'holy',
            manaCost: 11,
            cooldown: 2,
            baseDamage: 178,
            radius: 101,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 101'
        });
        this.spells.set('spell_52', {
            id: 'spell_52',
            name: 'Spell Incantation 52',
            school: 'shadow',
            manaCost: 12,
            cooldown: 3,
            baseDamage: 181,
            radius: 102,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 102'
        });
        this.spells.set('spell_53', {
            id: 'spell_53',
            name: 'Spell Incantation 53',
            school: 'nature',
            manaCost: 13,
            cooldown: 4,
            baseDamage: 184,
            radius: 103,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 103'
        });
        this.spells.set('spell_54', {
            id: 'spell_54',
            name: 'Spell Incantation 54',
            school: 'fire',
            manaCost: 14,
            cooldown: 5,
            baseDamage: 187,
            radius: 104,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 104'
        });
        this.spells.set('spell_55', {
            id: 'spell_55',
            name: 'Spell Incantation 55',
            school: 'frost',
            manaCost: 15,
            cooldown: 6,
            baseDamage: 190,
            radius: 105,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 105'
        });
        this.spells.set('spell_56', {
            id: 'spell_56',
            name: 'Spell Incantation 56',
            school: 'arcane',
            manaCost: 16,
            cooldown: 7,
            baseDamage: 193,
            radius: 106,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 106'
        });
        this.spells.set('spell_57', {
            id: 'spell_57',
            name: 'Spell Incantation 57',
            school: 'holy',
            manaCost: 17,
            cooldown: 8,
            baseDamage: 196,
            radius: 107,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 107'
        });
        this.spells.set('spell_58', {
            id: 'spell_58',
            name: 'Spell Incantation 58',
            school: 'shadow',
            manaCost: 18,
            cooldown: 9,
            baseDamage: 199,
            radius: 108,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 108'
        });
        this.spells.set('spell_59', {
            id: 'spell_59',
            name: 'Spell Incantation 59',
            school: 'nature',
            manaCost: 19,
            cooldown: 10,
            baseDamage: 202,
            radius: 109,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 109'
        });
        this.spells.set('spell_60', {
            id: 'spell_60',
            name: 'Spell Incantation 60',
            school: 'fire',
            manaCost: 20,
            cooldown: 1,
            baseDamage: 205,
            radius: 110,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 110'
        });
        this.spells.set('spell_61', {
            id: 'spell_61',
            name: 'Spell Incantation 61',
            school: 'frost',
            manaCost: 21,
            cooldown: 2,
            baseDamage: 208,
            radius: 111,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 111'
        });
        this.spells.set('spell_62', {
            id: 'spell_62',
            name: 'Spell Incantation 62',
            school: 'arcane',
            manaCost: 22,
            cooldown: 3,
            baseDamage: 211,
            radius: 112,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 112'
        });
        this.spells.set('spell_63', {
            id: 'spell_63',
            name: 'Spell Incantation 63',
            school: 'holy',
            manaCost: 23,
            cooldown: 4,
            baseDamage: 214,
            radius: 113,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 113'
        });
        this.spells.set('spell_64', {
            id: 'spell_64',
            name: 'Spell Incantation 64',
            school: 'shadow',
            manaCost: 24,
            cooldown: 5,
            baseDamage: 217,
            radius: 114,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 114'
        });
        this.spells.set('spell_65', {
            id: 'spell_65',
            name: 'Spell Incantation 65',
            school: 'nature',
            manaCost: 25,
            cooldown: 6,
            baseDamage: 220,
            radius: 115,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 115'
        });
        this.spells.set('spell_66', {
            id: 'spell_66',
            name: 'Spell Incantation 66',
            school: 'fire',
            manaCost: 26,
            cooldown: 7,
            baseDamage: 223,
            radius: 116,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 116'
        });
        this.spells.set('spell_67', {
            id: 'spell_67',
            name: 'Spell Incantation 67',
            school: 'frost',
            manaCost: 27,
            cooldown: 8,
            baseDamage: 226,
            radius: 117,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 117'
        });
        this.spells.set('spell_68', {
            id: 'spell_68',
            name: 'Spell Incantation 68',
            school: 'arcane',
            manaCost: 28,
            cooldown: 9,
            baseDamage: 229,
            radius: 118,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 118'
        });
        this.spells.set('spell_69', {
            id: 'spell_69',
            name: 'Spell Incantation 69',
            school: 'holy',
            manaCost: 29,
            cooldown: 10,
            baseDamage: 232,
            radius: 119,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 119'
        });
        this.spells.set('spell_70', {
            id: 'spell_70',
            name: 'Spell Incantation 70',
            school: 'shadow',
            manaCost: 30,
            cooldown: 1,
            baseDamage: 235,
            radius: 120,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 120'
        });
        this.spells.set('spell_71', {
            id: 'spell_71',
            name: 'Spell Incantation 71',
            school: 'nature',
            manaCost: 31,
            cooldown: 2,
            baseDamage: 238,
            radius: 121,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 121'
        });
        this.spells.set('spell_72', {
            id: 'spell_72',
            name: 'Spell Incantation 72',
            school: 'fire',
            manaCost: 32,
            cooldown: 3,
            baseDamage: 241,
            radius: 122,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 122'
        });
        this.spells.set('spell_73', {
            id: 'spell_73',
            name: 'Spell Incantation 73',
            school: 'frost',
            manaCost: 33,
            cooldown: 4,
            baseDamage: 244,
            radius: 123,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 123'
        });
        this.spells.set('spell_74', {
            id: 'spell_74',
            name: 'Spell Incantation 74',
            school: 'arcane',
            manaCost: 34,
            cooldown: 5,
            baseDamage: 247,
            radius: 124,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 124'
        });
        this.spells.set('spell_75', {
            id: 'spell_75',
            name: 'Spell Incantation 75',
            school: 'holy',
            manaCost: 35,
            cooldown: 6,
            baseDamage: 250,
            radius: 125,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 125'
        });
        this.spells.set('spell_76', {
            id: 'spell_76',
            name: 'Spell Incantation 76',
            school: 'shadow',
            manaCost: 36,
            cooldown: 7,
            baseDamage: 253,
            radius: 126,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 126'
        });
        this.spells.set('spell_77', {
            id: 'spell_77',
            name: 'Spell Incantation 77',
            school: 'nature',
            manaCost: 37,
            cooldown: 8,
            baseDamage: 256,
            radius: 127,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 127'
        });
        this.spells.set('spell_78', {
            id: 'spell_78',
            name: 'Spell Incantation 78',
            school: 'fire',
            manaCost: 38,
            cooldown: 9,
            baseDamage: 259,
            radius: 128,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 128'
        });
        this.spells.set('spell_79', {
            id: 'spell_79',
            name: 'Spell Incantation 79',
            school: 'frost',
            manaCost: 39,
            cooldown: 10,
            baseDamage: 262,
            radius: 129,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 129'
        });
        this.spells.set('spell_80', {
            id: 'spell_80',
            name: 'Spell Incantation 80',
            school: 'arcane',
            manaCost: 40,
            cooldown: 1,
            baseDamage: 265,
            radius: 130,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 130'
        });
        this.spells.set('spell_81', {
            id: 'spell_81',
            name: 'Spell Incantation 81',
            school: 'holy',
            manaCost: 41,
            cooldown: 2,
            baseDamage: 268,
            radius: 131,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 131'
        });
        this.spells.set('spell_82', {
            id: 'spell_82',
            name: 'Spell Incantation 82',
            school: 'shadow',
            manaCost: 42,
            cooldown: 3,
            baseDamage: 271,
            radius: 132,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 132'
        });
        this.spells.set('spell_83', {
            id: 'spell_83',
            name: 'Spell Incantation 83',
            school: 'nature',
            manaCost: 43,
            cooldown: 4,
            baseDamage: 274,
            radius: 133,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 133'
        });
        this.spells.set('spell_84', {
            id: 'spell_84',
            name: 'Spell Incantation 84',
            school: 'fire',
            manaCost: 44,
            cooldown: 5,
            baseDamage: 277,
            radius: 134,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 134'
        });
        this.spells.set('spell_85', {
            id: 'spell_85',
            name: 'Spell Incantation 85',
            school: 'frost',
            manaCost: 45,
            cooldown: 6,
            baseDamage: 280,
            radius: 135,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 135'
        });
        this.spells.set('spell_86', {
            id: 'spell_86',
            name: 'Spell Incantation 86',
            school: 'arcane',
            manaCost: 46,
            cooldown: 7,
            baseDamage: 283,
            radius: 136,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 136'
        });
        this.spells.set('spell_87', {
            id: 'spell_87',
            name: 'Spell Incantation 87',
            school: 'holy',
            manaCost: 47,
            cooldown: 8,
            baseDamage: 286,
            radius: 137,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 137'
        });
        this.spells.set('spell_88', {
            id: 'spell_88',
            name: 'Spell Incantation 88',
            school: 'shadow',
            manaCost: 48,
            cooldown: 9,
            baseDamage: 289,
            radius: 138,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 138'
        });
        this.spells.set('spell_89', {
            id: 'spell_89',
            name: 'Spell Incantation 89',
            school: 'nature',
            manaCost: 49,
            cooldown: 10,
            baseDamage: 292,
            radius: 139,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 139'
        });
        this.spells.set('spell_90', {
            id: 'spell_90',
            name: 'Spell Incantation 90',
            school: 'fire',
            manaCost: 50,
            cooldown: 1,
            baseDamage: 295,
            radius: 140,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 140'
        });
        this.spells.set('spell_91', {
            id: 'spell_91',
            name: 'Spell Incantation 91',
            school: 'frost',
            manaCost: 51,
            cooldown: 2,
            baseDamage: 298,
            radius: 141,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 141'
        });
        this.spells.set('spell_92', {
            id: 'spell_92',
            name: 'Spell Incantation 92',
            school: 'arcane',
            manaCost: 52,
            cooldown: 3,
            baseDamage: 301,
            radius: 142,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 142'
        });
        this.spells.set('spell_93', {
            id: 'spell_93',
            name: 'Spell Incantation 93',
            school: 'holy',
            manaCost: 53,
            cooldown: 4,
            baseDamage: 304,
            radius: 143,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 143'
        });
        this.spells.set('spell_94', {
            id: 'spell_94',
            name: 'Spell Incantation 94',
            school: 'shadow',
            manaCost: 54,
            cooldown: 5,
            baseDamage: 307,
            radius: 144,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 144'
        });
        this.spells.set('spell_95', {
            id: 'spell_95',
            name: 'Spell Incantation 95',
            school: 'nature',
            manaCost: 55,
            cooldown: 6,
            baseDamage: 310,
            radius: 145,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 145'
        });
        this.spells.set('spell_96', {
            id: 'spell_96',
            name: 'Spell Incantation 96',
            school: 'fire',
            manaCost: 56,
            cooldown: 7,
            baseDamage: 313,
            radius: 146,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 146'
        });
        this.spells.set('spell_97', {
            id: 'spell_97',
            name: 'Spell Incantation 97',
            school: 'frost',
            manaCost: 57,
            cooldown: 8,
            baseDamage: 316,
            radius: 147,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 147'
        });
        this.spells.set('spell_98', {
            id: 'spell_98',
            name: 'Spell Incantation 98',
            school: 'arcane',
            manaCost: 58,
            cooldown: 9,
            baseDamage: 319,
            radius: 148,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 148'
        });
        this.spells.set('spell_99', {
            id: 'spell_99',
            name: 'Spell Incantation 99',
            school: 'holy',
            manaCost: 59,
            cooldown: 10,
            baseDamage: 322,
            radius: 149,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 149'
        });
        this.spells.set('spell_100', {
            id: 'spell_100',
            name: 'Spell Incantation 100',
            school: 'shadow',
            manaCost: 10,
            cooldown: 1,
            baseDamage: 325,
            radius: 50,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 50'
        });
        this.spells.set('spell_101', {
            id: 'spell_101',
            name: 'Spell Incantation 101',
            school: 'nature',
            manaCost: 11,
            cooldown: 2,
            baseDamage: 328,
            radius: 51,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 51'
        });
        this.spells.set('spell_102', {
            id: 'spell_102',
            name: 'Spell Incantation 102',
            school: 'fire',
            manaCost: 12,
            cooldown: 3,
            baseDamage: 331,
            radius: 52,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 52'
        });
        this.spells.set('spell_103', {
            id: 'spell_103',
            name: 'Spell Incantation 103',
            school: 'frost',
            manaCost: 13,
            cooldown: 4,
            baseDamage: 334,
            radius: 53,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 53'
        });
        this.spells.set('spell_104', {
            id: 'spell_104',
            name: 'Spell Incantation 104',
            school: 'arcane',
            manaCost: 14,
            cooldown: 5,
            baseDamage: 337,
            radius: 54,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 54'
        });
        this.spells.set('spell_105', {
            id: 'spell_105',
            name: 'Spell Incantation 105',
            school: 'holy',
            manaCost: 15,
            cooldown: 6,
            baseDamage: 340,
            radius: 55,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 55'
        });
        this.spells.set('spell_106', {
            id: 'spell_106',
            name: 'Spell Incantation 106',
            school: 'shadow',
            manaCost: 16,
            cooldown: 7,
            baseDamage: 343,
            radius: 56,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 56'
        });
        this.spells.set('spell_107', {
            id: 'spell_107',
            name: 'Spell Incantation 107',
            school: 'nature',
            manaCost: 17,
            cooldown: 8,
            baseDamage: 346,
            radius: 57,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 57'
        });
        this.spells.set('spell_108', {
            id: 'spell_108',
            name: 'Spell Incantation 108',
            school: 'fire',
            manaCost: 18,
            cooldown: 9,
            baseDamage: 349,
            radius: 58,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 58'
        });
        this.spells.set('spell_109', {
            id: 'spell_109',
            name: 'Spell Incantation 109',
            school: 'frost',
            manaCost: 19,
            cooldown: 10,
            baseDamage: 352,
            radius: 59,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 59'
        });
        this.spells.set('spell_110', {
            id: 'spell_110',
            name: 'Spell Incantation 110',
            school: 'arcane',
            manaCost: 20,
            cooldown: 1,
            baseDamage: 355,
            radius: 60,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 60'
        });
        this.spells.set('spell_111', {
            id: 'spell_111',
            name: 'Spell Incantation 111',
            school: 'holy',
            manaCost: 21,
            cooldown: 2,
            baseDamage: 358,
            radius: 61,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 61'
        });
        this.spells.set('spell_112', {
            id: 'spell_112',
            name: 'Spell Incantation 112',
            school: 'shadow',
            manaCost: 22,
            cooldown: 3,
            baseDamage: 361,
            radius: 62,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 62'
        });
        this.spells.set('spell_113', {
            id: 'spell_113',
            name: 'Spell Incantation 113',
            school: 'nature',
            manaCost: 23,
            cooldown: 4,
            baseDamage: 364,
            radius: 63,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 63'
        });
        this.spells.set('spell_114', {
            id: 'spell_114',
            name: 'Spell Incantation 114',
            school: 'fire',
            manaCost: 24,
            cooldown: 5,
            baseDamage: 367,
            radius: 64,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 64'
        });
        this.spells.set('spell_115', {
            id: 'spell_115',
            name: 'Spell Incantation 115',
            school: 'frost',
            manaCost: 25,
            cooldown: 6,
            baseDamage: 370,
            radius: 65,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 65'
        });
        this.spells.set('spell_116', {
            id: 'spell_116',
            name: 'Spell Incantation 116',
            school: 'arcane',
            manaCost: 26,
            cooldown: 7,
            baseDamage: 373,
            radius: 66,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 66'
        });
        this.spells.set('spell_117', {
            id: 'spell_117',
            name: 'Spell Incantation 117',
            school: 'holy',
            manaCost: 27,
            cooldown: 8,
            baseDamage: 376,
            radius: 67,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 67'
        });
        this.spells.set('spell_118', {
            id: 'spell_118',
            name: 'Spell Incantation 118',
            school: 'shadow',
            manaCost: 28,
            cooldown: 9,
            baseDamage: 379,
            radius: 68,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 68'
        });
        this.spells.set('spell_119', {
            id: 'spell_119',
            name: 'Spell Incantation 119',
            school: 'nature',
            manaCost: 29,
            cooldown: 10,
            baseDamage: 382,
            radius: 69,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 69'
        });
        this.spells.set('spell_120', {
            id: 'spell_120',
            name: 'Spell Incantation 120',
            school: 'fire',
            manaCost: 30,
            cooldown: 1,
            baseDamage: 385,
            radius: 70,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 70'
        });
        this.spells.set('spell_121', {
            id: 'spell_121',
            name: 'Spell Incantation 121',
            school: 'frost',
            manaCost: 31,
            cooldown: 2,
            baseDamage: 388,
            radius: 71,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 71'
        });
        this.spells.set('spell_122', {
            id: 'spell_122',
            name: 'Spell Incantation 122',
            school: 'arcane',
            manaCost: 32,
            cooldown: 3,
            baseDamage: 391,
            radius: 72,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 72'
        });
        this.spells.set('spell_123', {
            id: 'spell_123',
            name: 'Spell Incantation 123',
            school: 'holy',
            manaCost: 33,
            cooldown: 4,
            baseDamage: 394,
            radius: 73,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 73'
        });
        this.spells.set('spell_124', {
            id: 'spell_124',
            name: 'Spell Incantation 124',
            school: 'shadow',
            manaCost: 34,
            cooldown: 5,
            baseDamage: 397,
            radius: 74,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 74'
        });
        this.spells.set('spell_125', {
            id: 'spell_125',
            name: 'Spell Incantation 125',
            school: 'nature',
            manaCost: 35,
            cooldown: 6,
            baseDamage: 400,
            radius: 75,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 75'
        });
        this.spells.set('spell_126', {
            id: 'spell_126',
            name: 'Spell Incantation 126',
            school: 'fire',
            manaCost: 36,
            cooldown: 7,
            baseDamage: 403,
            radius: 76,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 76'
        });
        this.spells.set('spell_127', {
            id: 'spell_127',
            name: 'Spell Incantation 127',
            school: 'frost',
            manaCost: 37,
            cooldown: 8,
            baseDamage: 406,
            radius: 77,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 77'
        });
        this.spells.set('spell_128', {
            id: 'spell_128',
            name: 'Spell Incantation 128',
            school: 'arcane',
            manaCost: 38,
            cooldown: 9,
            baseDamage: 409,
            radius: 78,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 78'
        });
        this.spells.set('spell_129', {
            id: 'spell_129',
            name: 'Spell Incantation 129',
            school: 'holy',
            manaCost: 39,
            cooldown: 10,
            baseDamage: 412,
            radius: 79,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 79'
        });
        this.spells.set('spell_130', {
            id: 'spell_130',
            name: 'Spell Incantation 130',
            school: 'shadow',
            manaCost: 40,
            cooldown: 1,
            baseDamage: 415,
            radius: 80,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 80'
        });
        this.spells.set('spell_131', {
            id: 'spell_131',
            name: 'Spell Incantation 131',
            school: 'nature',
            manaCost: 41,
            cooldown: 2,
            baseDamage: 418,
            radius: 81,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 81'
        });
        this.spells.set('spell_132', {
            id: 'spell_132',
            name: 'Spell Incantation 132',
            school: 'fire',
            manaCost: 42,
            cooldown: 3,
            baseDamage: 421,
            radius: 82,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 82'
        });
        this.spells.set('spell_133', {
            id: 'spell_133',
            name: 'Spell Incantation 133',
            school: 'frost',
            manaCost: 43,
            cooldown: 4,
            baseDamage: 424,
            radius: 83,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 83'
        });
        this.spells.set('spell_134', {
            id: 'spell_134',
            name: 'Spell Incantation 134',
            school: 'arcane',
            manaCost: 44,
            cooldown: 5,
            baseDamage: 427,
            radius: 84,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 84'
        });
        this.spells.set('spell_135', {
            id: 'spell_135',
            name: 'Spell Incantation 135',
            school: 'holy',
            manaCost: 45,
            cooldown: 6,
            baseDamage: 430,
            radius: 85,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 85'
        });
        this.spells.set('spell_136', {
            id: 'spell_136',
            name: 'Spell Incantation 136',
            school: 'shadow',
            manaCost: 46,
            cooldown: 7,
            baseDamage: 433,
            radius: 86,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 86'
        });
        this.spells.set('spell_137', {
            id: 'spell_137',
            name: 'Spell Incantation 137',
            school: 'nature',
            manaCost: 47,
            cooldown: 8,
            baseDamage: 436,
            radius: 87,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 87'
        });
        this.spells.set('spell_138', {
            id: 'spell_138',
            name: 'Spell Incantation 138',
            school: 'fire',
            manaCost: 48,
            cooldown: 9,
            baseDamage: 439,
            radius: 88,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 88'
        });
        this.spells.set('spell_139', {
            id: 'spell_139',
            name: 'Spell Incantation 139',
            school: 'frost',
            manaCost: 49,
            cooldown: 10,
            baseDamage: 442,
            radius: 89,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 89'
        });
        this.spells.set('spell_140', {
            id: 'spell_140',
            name: 'Spell Incantation 140',
            school: 'arcane',
            manaCost: 50,
            cooldown: 1,
            baseDamage: 445,
            radius: 90,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 90'
        });
        this.spells.set('spell_141', {
            id: 'spell_141',
            name: 'Spell Incantation 141',
            school: 'holy',
            manaCost: 51,
            cooldown: 2,
            baseDamage: 448,
            radius: 91,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 91'
        });
        this.spells.set('spell_142', {
            id: 'spell_142',
            name: 'Spell Incantation 142',
            school: 'shadow',
            manaCost: 52,
            cooldown: 3,
            baseDamage: 451,
            radius: 92,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 92'
        });
        this.spells.set('spell_143', {
            id: 'spell_143',
            name: 'Spell Incantation 143',
            school: 'nature',
            manaCost: 53,
            cooldown: 4,
            baseDamage: 454,
            radius: 93,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 93'
        });
        this.spells.set('spell_144', {
            id: 'spell_144',
            name: 'Spell Incantation 144',
            school: 'fire',
            manaCost: 54,
            cooldown: 5,
            baseDamage: 457,
            radius: 94,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 94'
        });
        this.spells.set('spell_145', {
            id: 'spell_145',
            name: 'Spell Incantation 145',
            school: 'frost',
            manaCost: 55,
            cooldown: 6,
            baseDamage: 460,
            radius: 95,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 95'
        });
        this.spells.set('spell_146', {
            id: 'spell_146',
            name: 'Spell Incantation 146',
            school: 'arcane',
            manaCost: 56,
            cooldown: 7,
            baseDamage: 463,
            radius: 96,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 96'
        });
        this.spells.set('spell_147', {
            id: 'spell_147',
            name: 'Spell Incantation 147',
            school: 'holy',
            manaCost: 57,
            cooldown: 8,
            baseDamage: 466,
            radius: 97,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 97'
        });
        this.spells.set('spell_148', {
            id: 'spell_148',
            name: 'Spell Incantation 148',
            school: 'shadow',
            manaCost: 58,
            cooldown: 9,
            baseDamage: 469,
            radius: 98,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 98'
        });
        this.spells.set('spell_149', {
            id: 'spell_149',
            name: 'Spell Incantation 149',
            school: 'nature',
            manaCost: 59,
            cooldown: 10,
            baseDamage: 472,
            radius: 99,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 99'
        });
        this.spells.set('spell_150', {
            id: 'spell_150',
            name: 'Spell Incantation 150',
            school: 'fire',
            manaCost: 10,
            cooldown: 1,
            baseDamage: 475,
            radius: 100,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 100'
        });
        this.spells.set('spell_151', {
            id: 'spell_151',
            name: 'Spell Incantation 151',
            school: 'frost',
            manaCost: 11,
            cooldown: 2,
            baseDamage: 478,
            radius: 101,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 101'
        });
        this.spells.set('spell_152', {
            id: 'spell_152',
            name: 'Spell Incantation 152',
            school: 'arcane',
            manaCost: 12,
            cooldown: 3,
            baseDamage: 481,
            radius: 102,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 102'
        });
        this.spells.set('spell_153', {
            id: 'spell_153',
            name: 'Spell Incantation 153',
            school: 'holy',
            manaCost: 13,
            cooldown: 4,
            baseDamage: 484,
            radius: 103,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 103'
        });
        this.spells.set('spell_154', {
            id: 'spell_154',
            name: 'Spell Incantation 154',
            school: 'shadow',
            manaCost: 14,
            cooldown: 5,
            baseDamage: 487,
            radius: 104,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 104'
        });
        this.spells.set('spell_155', {
            id: 'spell_155',
            name: 'Spell Incantation 155',
            school: 'nature',
            manaCost: 15,
            cooldown: 6,
            baseDamage: 490,
            radius: 105,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 105'
        });
        this.spells.set('spell_156', {
            id: 'spell_156',
            name: 'Spell Incantation 156',
            school: 'fire',
            manaCost: 16,
            cooldown: 7,
            baseDamage: 493,
            radius: 106,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 106'
        });
        this.spells.set('spell_157', {
            id: 'spell_157',
            name: 'Spell Incantation 157',
            school: 'frost',
            manaCost: 17,
            cooldown: 8,
            baseDamage: 496,
            radius: 107,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 107'
        });
        this.spells.set('spell_158', {
            id: 'spell_158',
            name: 'Spell Incantation 158',
            school: 'arcane',
            manaCost: 18,
            cooldown: 9,
            baseDamage: 499,
            radius: 108,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 108'
        });
        this.spells.set('spell_159', {
            id: 'spell_159',
            name: 'Spell Incantation 159',
            school: 'holy',
            manaCost: 19,
            cooldown: 10,
            baseDamage: 502,
            radius: 109,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 109'
        });
        this.spells.set('spell_160', {
            id: 'spell_160',
            name: 'Spell Incantation 160',
            school: 'shadow',
            manaCost: 20,
            cooldown: 1,
            baseDamage: 505,
            radius: 110,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 110'
        });
        this.spells.set('spell_161', {
            id: 'spell_161',
            name: 'Spell Incantation 161',
            school: 'nature',
            manaCost: 21,
            cooldown: 2,
            baseDamage: 508,
            radius: 111,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 111'
        });
        this.spells.set('spell_162', {
            id: 'spell_162',
            name: 'Spell Incantation 162',
            school: 'fire',
            manaCost: 22,
            cooldown: 3,
            baseDamage: 511,
            radius: 112,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 112'
        });
        this.spells.set('spell_163', {
            id: 'spell_163',
            name: 'Spell Incantation 163',
            school: 'frost',
            manaCost: 23,
            cooldown: 4,
            baseDamage: 514,
            radius: 113,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 113'
        });
        this.spells.set('spell_164', {
            id: 'spell_164',
            name: 'Spell Incantation 164',
            school: 'arcane',
            manaCost: 24,
            cooldown: 5,
            baseDamage: 517,
            radius: 114,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 114'
        });
        this.spells.set('spell_165', {
            id: 'spell_165',
            name: 'Spell Incantation 165',
            school: 'holy',
            manaCost: 25,
            cooldown: 6,
            baseDamage: 520,
            radius: 115,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 115'
        });
        this.spells.set('spell_166', {
            id: 'spell_166',
            name: 'Spell Incantation 166',
            school: 'shadow',
            manaCost: 26,
            cooldown: 7,
            baseDamage: 523,
            radius: 116,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 116'
        });
        this.spells.set('spell_167', {
            id: 'spell_167',
            name: 'Spell Incantation 167',
            school: 'nature',
            manaCost: 27,
            cooldown: 8,
            baseDamage: 526,
            radius: 117,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 117'
        });
        this.spells.set('spell_168', {
            id: 'spell_168',
            name: 'Spell Incantation 168',
            school: 'fire',
            manaCost: 28,
            cooldown: 9,
            baseDamage: 529,
            radius: 118,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 118'
        });
        this.spells.set('spell_169', {
            id: 'spell_169',
            name: 'Spell Incantation 169',
            school: 'frost',
            manaCost: 29,
            cooldown: 10,
            baseDamage: 532,
            radius: 119,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 119'
        });
        this.spells.set('spell_170', {
            id: 'spell_170',
            name: 'Spell Incantation 170',
            school: 'arcane',
            manaCost: 30,
            cooldown: 1,
            baseDamage: 535,
            radius: 120,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 120'
        });
        this.spells.set('spell_171', {
            id: 'spell_171',
            name: 'Spell Incantation 171',
            school: 'holy',
            manaCost: 31,
            cooldown: 2,
            baseDamage: 538,
            radius: 121,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 121'
        });
        this.spells.set('spell_172', {
            id: 'spell_172',
            name: 'Spell Incantation 172',
            school: 'shadow',
            manaCost: 32,
            cooldown: 3,
            baseDamage: 541,
            radius: 122,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 122'
        });
        this.spells.set('spell_173', {
            id: 'spell_173',
            name: 'Spell Incantation 173',
            school: 'nature',
            manaCost: 33,
            cooldown: 4,
            baseDamage: 544,
            radius: 123,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 123'
        });
        this.spells.set('spell_174', {
            id: 'spell_174',
            name: 'Spell Incantation 174',
            school: 'fire',
            manaCost: 34,
            cooldown: 5,
            baseDamage: 547,
            radius: 124,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 124'
        });
        this.spells.set('spell_175', {
            id: 'spell_175',
            name: 'Spell Incantation 175',
            school: 'frost',
            manaCost: 35,
            cooldown: 6,
            baseDamage: 550,
            radius: 125,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 125'
        });
        this.spells.set('spell_176', {
            id: 'spell_176',
            name: 'Spell Incantation 176',
            school: 'arcane',
            manaCost: 36,
            cooldown: 7,
            baseDamage: 553,
            radius: 126,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 126'
        });
        this.spells.set('spell_177', {
            id: 'spell_177',
            name: 'Spell Incantation 177',
            school: 'holy',
            manaCost: 37,
            cooldown: 8,
            baseDamage: 556,
            radius: 127,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 127'
        });
        this.spells.set('spell_178', {
            id: 'spell_178',
            name: 'Spell Incantation 178',
            school: 'shadow',
            manaCost: 38,
            cooldown: 9,
            baseDamage: 559,
            radius: 128,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 128'
        });
        this.spells.set('spell_179', {
            id: 'spell_179',
            name: 'Spell Incantation 179',
            school: 'nature',
            manaCost: 39,
            cooldown: 10,
            baseDamage: 562,
            radius: 129,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 129'
        });
        this.spells.set('spell_180', {
            id: 'spell_180',
            name: 'Spell Incantation 180',
            school: 'fire',
            manaCost: 40,
            cooldown: 1,
            baseDamage: 565,
            radius: 130,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 130'
        });
        this.spells.set('spell_181', {
            id: 'spell_181',
            name: 'Spell Incantation 181',
            school: 'frost',
            manaCost: 41,
            cooldown: 2,
            baseDamage: 568,
            radius: 131,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 131'
        });
        this.spells.set('spell_182', {
            id: 'spell_182',
            name: 'Spell Incantation 182',
            school: 'arcane',
            manaCost: 42,
            cooldown: 3,
            baseDamage: 571,
            radius: 132,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 132'
        });
        this.spells.set('spell_183', {
            id: 'spell_183',
            name: 'Spell Incantation 183',
            school: 'holy',
            manaCost: 43,
            cooldown: 4,
            baseDamage: 574,
            radius: 133,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 133'
        });
        this.spells.set('spell_184', {
            id: 'spell_184',
            name: 'Spell Incantation 184',
            school: 'shadow',
            manaCost: 44,
            cooldown: 5,
            baseDamage: 577,
            radius: 134,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 134'
        });
        this.spells.set('spell_185', {
            id: 'spell_185',
            name: 'Spell Incantation 185',
            school: 'nature',
            manaCost: 45,
            cooldown: 6,
            baseDamage: 580,
            radius: 135,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 135'
        });
        this.spells.set('spell_186', {
            id: 'spell_186',
            name: 'Spell Incantation 186',
            school: 'fire',
            manaCost: 46,
            cooldown: 7,
            baseDamage: 583,
            radius: 136,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 136'
        });
        this.spells.set('spell_187', {
            id: 'spell_187',
            name: 'Spell Incantation 187',
            school: 'frost',
            manaCost: 47,
            cooldown: 8,
            baseDamage: 586,
            radius: 137,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 137'
        });
        this.spells.set('spell_188', {
            id: 'spell_188',
            name: 'Spell Incantation 188',
            school: 'arcane',
            manaCost: 48,
            cooldown: 9,
            baseDamage: 589,
            radius: 138,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 138'
        });
        this.spells.set('spell_189', {
            id: 'spell_189',
            name: 'Spell Incantation 189',
            school: 'holy',
            manaCost: 49,
            cooldown: 10,
            baseDamage: 592,
            radius: 139,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 139'
        });
        this.spells.set('spell_190', {
            id: 'spell_190',
            name: 'Spell Incantation 190',
            school: 'shadow',
            manaCost: 50,
            cooldown: 1,
            baseDamage: 595,
            radius: 140,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 140'
        });
        this.spells.set('spell_191', {
            id: 'spell_191',
            name: 'Spell Incantation 191',
            school: 'nature',
            manaCost: 51,
            cooldown: 2,
            baseDamage: 598,
            radius: 141,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 141'
        });
        this.spells.set('spell_192', {
            id: 'spell_192',
            name: 'Spell Incantation 192',
            school: 'fire',
            manaCost: 52,
            cooldown: 3,
            baseDamage: 601,
            radius: 142,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 142'
        });
        this.spells.set('spell_193', {
            id: 'spell_193',
            name: 'Spell Incantation 193',
            school: 'frost',
            manaCost: 53,
            cooldown: 4,
            baseDamage: 604,
            radius: 143,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 143'
        });
        this.spells.set('spell_194', {
            id: 'spell_194',
            name: 'Spell Incantation 194',
            school: 'arcane',
            manaCost: 54,
            cooldown: 5,
            baseDamage: 607,
            radius: 144,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 144'
        });
        this.spells.set('spell_195', {
            id: 'spell_195',
            name: 'Spell Incantation 195',
            school: 'holy',
            manaCost: 55,
            cooldown: 6,
            baseDamage: 610,
            radius: 145,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 145'
        });
        this.spells.set('spell_196', {
            id: 'spell_196',
            name: 'Spell Incantation 196',
            school: 'shadow',
            manaCost: 56,
            cooldown: 7,
            baseDamage: 613,
            radius: 146,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 146'
        });
        this.spells.set('spell_197', {
            id: 'spell_197',
            name: 'Spell Incantation 197',
            school: 'nature',
            manaCost: 57,
            cooldown: 8,
            baseDamage: 616,
            radius: 147,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 147'
        });
        this.spells.set('spell_198', {
            id: 'spell_198',
            name: 'Spell Incantation 198',
            school: 'fire',
            manaCost: 58,
            cooldown: 9,
            baseDamage: 619,
            radius: 148,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 148'
        });
        this.spells.set('spell_199', {
            id: 'spell_199',
            name: 'Spell Incantation 199',
            school: 'frost',
            manaCost: 59,
            cooldown: 10,
            baseDamage: 622,
            radius: 149,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 149'
        });
        this.spells.set('spell_200', {
            id: 'spell_200',
            name: 'Spell Incantation 200',
            school: 'arcane',
            manaCost: 10,
            cooldown: 1,
            baseDamage: 625,
            radius: 50,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 50'
        });
        this.spells.set('spell_201', {
            id: 'spell_201',
            name: 'Spell Incantation 201',
            school: 'holy',
            manaCost: 11,
            cooldown: 2,
            baseDamage: 628,
            radius: 51,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 51'
        });
        this.spells.set('spell_202', {
            id: 'spell_202',
            name: 'Spell Incantation 202',
            school: 'shadow',
            manaCost: 12,
            cooldown: 3,
            baseDamage: 631,
            radius: 52,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 52'
        });
        this.spells.set('spell_203', {
            id: 'spell_203',
            name: 'Spell Incantation 203',
            school: 'nature',
            manaCost: 13,
            cooldown: 4,
            baseDamage: 634,
            radius: 53,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 53'
        });
        this.spells.set('spell_204', {
            id: 'spell_204',
            name: 'Spell Incantation 204',
            school: 'fire',
            manaCost: 14,
            cooldown: 5,
            baseDamage: 637,
            radius: 54,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 54'
        });
        this.spells.set('spell_205', {
            id: 'spell_205',
            name: 'Spell Incantation 205',
            school: 'frost',
            manaCost: 15,
            cooldown: 6,
            baseDamage: 640,
            radius: 55,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 55'
        });
        this.spells.set('spell_206', {
            id: 'spell_206',
            name: 'Spell Incantation 206',
            school: 'arcane',
            manaCost: 16,
            cooldown: 7,
            baseDamage: 643,
            radius: 56,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 56'
        });
        this.spells.set('spell_207', {
            id: 'spell_207',
            name: 'Spell Incantation 207',
            school: 'holy',
            manaCost: 17,
            cooldown: 8,
            baseDamage: 646,
            radius: 57,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 57'
        });
        this.spells.set('spell_208', {
            id: 'spell_208',
            name: 'Spell Incantation 208',
            school: 'shadow',
            manaCost: 18,
            cooldown: 9,
            baseDamage: 649,
            radius: 58,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 58'
        });
        this.spells.set('spell_209', {
            id: 'spell_209',
            name: 'Spell Incantation 209',
            school: 'nature',
            manaCost: 19,
            cooldown: 10,
            baseDamage: 652,
            radius: 59,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 59'
        });
        this.spells.set('spell_210', {
            id: 'spell_210',
            name: 'Spell Incantation 210',
            school: 'fire',
            manaCost: 20,
            cooldown: 1,
            baseDamage: 655,
            radius: 60,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 60'
        });
        this.spells.set('spell_211', {
            id: 'spell_211',
            name: 'Spell Incantation 211',
            school: 'frost',
            manaCost: 21,
            cooldown: 2,
            baseDamage: 658,
            radius: 61,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 61'
        });
        this.spells.set('spell_212', {
            id: 'spell_212',
            name: 'Spell Incantation 212',
            school: 'arcane',
            manaCost: 22,
            cooldown: 3,
            baseDamage: 661,
            radius: 62,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 62'
        });
        this.spells.set('spell_213', {
            id: 'spell_213',
            name: 'Spell Incantation 213',
            school: 'holy',
            manaCost: 23,
            cooldown: 4,
            baseDamage: 664,
            radius: 63,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 63'
        });
        this.spells.set('spell_214', {
            id: 'spell_214',
            name: 'Spell Incantation 214',
            school: 'shadow',
            manaCost: 24,
            cooldown: 5,
            baseDamage: 667,
            radius: 64,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 64'
        });
        this.spells.set('spell_215', {
            id: 'spell_215',
            name: 'Spell Incantation 215',
            school: 'nature',
            manaCost: 25,
            cooldown: 6,
            baseDamage: 670,
            radius: 65,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 65'
        });
        this.spells.set('spell_216', {
            id: 'spell_216',
            name: 'Spell Incantation 216',
            school: 'fire',
            manaCost: 26,
            cooldown: 7,
            baseDamage: 673,
            radius: 66,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 66'
        });
        this.spells.set('spell_217', {
            id: 'spell_217',
            name: 'Spell Incantation 217',
            school: 'frost',
            manaCost: 27,
            cooldown: 8,
            baseDamage: 676,
            radius: 67,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 67'
        });
        this.spells.set('spell_218', {
            id: 'spell_218',
            name: 'Spell Incantation 218',
            school: 'arcane',
            manaCost: 28,
            cooldown: 9,
            baseDamage: 679,
            radius: 68,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 68'
        });
        this.spells.set('spell_219', {
            id: 'spell_219',
            name: 'Spell Incantation 219',
            school: 'holy',
            manaCost: 29,
            cooldown: 10,
            baseDamage: 682,
            radius: 69,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 69'
        });
        this.spells.set('spell_220', {
            id: 'spell_220',
            name: 'Spell Incantation 220',
            school: 'shadow',
            manaCost: 30,
            cooldown: 1,
            baseDamage: 685,
            radius: 70,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 70'
        });
        this.spells.set('spell_221', {
            id: 'spell_221',
            name: 'Spell Incantation 221',
            school: 'nature',
            manaCost: 31,
            cooldown: 2,
            baseDamage: 688,
            radius: 71,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 71'
        });
        this.spells.set('spell_222', {
            id: 'spell_222',
            name: 'Spell Incantation 222',
            school: 'fire',
            manaCost: 32,
            cooldown: 3,
            baseDamage: 691,
            radius: 72,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 72'
        });
        this.spells.set('spell_223', {
            id: 'spell_223',
            name: 'Spell Incantation 223',
            school: 'frost',
            manaCost: 33,
            cooldown: 4,
            baseDamage: 694,
            radius: 73,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 73'
        });
        this.spells.set('spell_224', {
            id: 'spell_224',
            name: 'Spell Incantation 224',
            school: 'arcane',
            manaCost: 34,
            cooldown: 5,
            baseDamage: 697,
            radius: 74,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 74'
        });
        this.spells.set('spell_225', {
            id: 'spell_225',
            name: 'Spell Incantation 225',
            school: 'holy',
            manaCost: 35,
            cooldown: 6,
            baseDamage: 700,
            radius: 75,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 75'
        });
        this.spells.set('spell_226', {
            id: 'spell_226',
            name: 'Spell Incantation 226',
            school: 'shadow',
            manaCost: 36,
            cooldown: 7,
            baseDamage: 703,
            radius: 76,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 76'
        });
        this.spells.set('spell_227', {
            id: 'spell_227',
            name: 'Spell Incantation 227',
            school: 'nature',
            manaCost: 37,
            cooldown: 8,
            baseDamage: 706,
            radius: 77,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 77'
        });
        this.spells.set('spell_228', {
            id: 'spell_228',
            name: 'Spell Incantation 228',
            school: 'fire',
            manaCost: 38,
            cooldown: 9,
            baseDamage: 709,
            radius: 78,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 78'
        });
        this.spells.set('spell_229', {
            id: 'spell_229',
            name: 'Spell Incantation 229',
            school: 'frost',
            manaCost: 39,
            cooldown: 10,
            baseDamage: 712,
            radius: 79,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 79'
        });
        this.spells.set('spell_230', {
            id: 'spell_230',
            name: 'Spell Incantation 230',
            school: 'arcane',
            manaCost: 40,
            cooldown: 1,
            baseDamage: 715,
            radius: 80,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 80'
        });
        this.spells.set('spell_231', {
            id: 'spell_231',
            name: 'Spell Incantation 231',
            school: 'holy',
            manaCost: 41,
            cooldown: 2,
            baseDamage: 718,
            radius: 81,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 81'
        });
        this.spells.set('spell_232', {
            id: 'spell_232',
            name: 'Spell Incantation 232',
            school: 'shadow',
            manaCost: 42,
            cooldown: 3,
            baseDamage: 721,
            radius: 82,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 82'
        });
        this.spells.set('spell_233', {
            id: 'spell_233',
            name: 'Spell Incantation 233',
            school: 'nature',
            manaCost: 43,
            cooldown: 4,
            baseDamage: 724,
            radius: 83,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 83'
        });
        this.spells.set('spell_234', {
            id: 'spell_234',
            name: 'Spell Incantation 234',
            school: 'fire',
            manaCost: 44,
            cooldown: 5,
            baseDamage: 727,
            radius: 84,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 84'
        });
        this.spells.set('spell_235', {
            id: 'spell_235',
            name: 'Spell Incantation 235',
            school: 'frost',
            manaCost: 45,
            cooldown: 6,
            baseDamage: 730,
            radius: 85,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 85'
        });
        this.spells.set('spell_236', {
            id: 'spell_236',
            name: 'Spell Incantation 236',
            school: 'arcane',
            manaCost: 46,
            cooldown: 7,
            baseDamage: 733,
            radius: 86,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 86'
        });
        this.spells.set('spell_237', {
            id: 'spell_237',
            name: 'Spell Incantation 237',
            school: 'holy',
            manaCost: 47,
            cooldown: 8,
            baseDamage: 736,
            radius: 87,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 87'
        });
        this.spells.set('spell_238', {
            id: 'spell_238',
            name: 'Spell Incantation 238',
            school: 'shadow',
            manaCost: 48,
            cooldown: 9,
            baseDamage: 739,
            radius: 88,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 88'
        });
        this.spells.set('spell_239', {
            id: 'spell_239',
            name: 'Spell Incantation 239',
            school: 'nature',
            manaCost: 49,
            cooldown: 10,
            baseDamage: 742,
            radius: 89,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 89'
        });
        this.spells.set('spell_240', {
            id: 'spell_240',
            name: 'Spell Incantation 240',
            school: 'fire',
            manaCost: 50,
            cooldown: 1,
            baseDamage: 745,
            radius: 90,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 90'
        });
        this.spells.set('spell_241', {
            id: 'spell_241',
            name: 'Spell Incantation 241',
            school: 'frost',
            manaCost: 51,
            cooldown: 2,
            baseDamage: 748,
            radius: 91,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 91'
        });
        this.spells.set('spell_242', {
            id: 'spell_242',
            name: 'Spell Incantation 242',
            school: 'arcane',
            manaCost: 52,
            cooldown: 3,
            baseDamage: 751,
            radius: 92,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 92'
        });
        this.spells.set('spell_243', {
            id: 'spell_243',
            name: 'Spell Incantation 243',
            school: 'holy',
            manaCost: 53,
            cooldown: 4,
            baseDamage: 754,
            radius: 93,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 93'
        });
        this.spells.set('spell_244', {
            id: 'spell_244',
            name: 'Spell Incantation 244',
            school: 'shadow',
            manaCost: 54,
            cooldown: 5,
            baseDamage: 757,
            radius: 94,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 94'
        });
        this.spells.set('spell_245', {
            id: 'spell_245',
            name: 'Spell Incantation 245',
            school: 'nature',
            manaCost: 55,
            cooldown: 6,
            baseDamage: 760,
            radius: 95,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 95'
        });
        this.spells.set('spell_246', {
            id: 'spell_246',
            name: 'Spell Incantation 246',
            school: 'fire',
            manaCost: 56,
            cooldown: 7,
            baseDamage: 763,
            radius: 96,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 96'
        });
        this.spells.set('spell_247', {
            id: 'spell_247',
            name: 'Spell Incantation 247',
            school: 'frost',
            manaCost: 57,
            cooldown: 8,
            baseDamage: 766,
            radius: 97,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 97'
        });
        this.spells.set('spell_248', {
            id: 'spell_248',
            name: 'Spell Incantation 248',
            school: 'arcane',
            manaCost: 58,
            cooldown: 9,
            baseDamage: 769,
            radius: 98,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 98'
        });
        this.spells.set('spell_249', {
            id: 'spell_249',
            name: 'Spell Incantation 249',
            school: 'holy',
            manaCost: 59,
            cooldown: 10,
            baseDamage: 772,
            radius: 99,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 99'
        });
        this.spells.set('spell_250', {
            id: 'spell_250',
            name: 'Spell Incantation 250',
            school: 'shadow',
            manaCost: 10,
            cooldown: 1,
            baseDamage: 775,
            radius: 100,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 100'
        });
        this.spells.set('spell_251', {
            id: 'spell_251',
            name: 'Spell Incantation 251',
            school: 'nature',
            manaCost: 11,
            cooldown: 2,
            baseDamage: 778,
            radius: 101,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 101'
        });
        this.spells.set('spell_252', {
            id: 'spell_252',
            name: 'Spell Incantation 252',
            school: 'fire',
            manaCost: 12,
            cooldown: 3,
            baseDamage: 781,
            radius: 102,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 102'
        });
        this.spells.set('spell_253', {
            id: 'spell_253',
            name: 'Spell Incantation 253',
            school: 'frost',
            manaCost: 13,
            cooldown: 4,
            baseDamage: 784,
            radius: 103,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 103'
        });
        this.spells.set('spell_254', {
            id: 'spell_254',
            name: 'Spell Incantation 254',
            school: 'arcane',
            manaCost: 14,
            cooldown: 5,
            baseDamage: 787,
            radius: 104,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 104'
        });
        this.spells.set('spell_255', {
            id: 'spell_255',
            name: 'Spell Incantation 255',
            school: 'holy',
            manaCost: 15,
            cooldown: 6,
            baseDamage: 790,
            radius: 105,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 105'
        });
        this.spells.set('spell_256', {
            id: 'spell_256',
            name: 'Spell Incantation 256',
            school: 'shadow',
            manaCost: 16,
            cooldown: 7,
            baseDamage: 793,
            radius: 106,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 106'
        });
        this.spells.set('spell_257', {
            id: 'spell_257',
            name: 'Spell Incantation 257',
            school: 'nature',
            manaCost: 17,
            cooldown: 8,
            baseDamage: 796,
            radius: 107,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 107'
        });
        this.spells.set('spell_258', {
            id: 'spell_258',
            name: 'Spell Incantation 258',
            school: 'fire',
            manaCost: 18,
            cooldown: 9,
            baseDamage: 799,
            radius: 108,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 108'
        });
        this.spells.set('spell_259', {
            id: 'spell_259',
            name: 'Spell Incantation 259',
            school: 'frost',
            manaCost: 19,
            cooldown: 10,
            baseDamage: 802,
            radius: 109,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 109'
        });
        this.spells.set('spell_260', {
            id: 'spell_260',
            name: 'Spell Incantation 260',
            school: 'arcane',
            manaCost: 20,
            cooldown: 1,
            baseDamage: 805,
            radius: 110,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 110'
        });
        this.spells.set('spell_261', {
            id: 'spell_261',
            name: 'Spell Incantation 261',
            school: 'holy',
            manaCost: 21,
            cooldown: 2,
            baseDamage: 808,
            radius: 111,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 111'
        });
        this.spells.set('spell_262', {
            id: 'spell_262',
            name: 'Spell Incantation 262',
            school: 'shadow',
            manaCost: 22,
            cooldown: 3,
            baseDamage: 811,
            radius: 112,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 112'
        });
        this.spells.set('spell_263', {
            id: 'spell_263',
            name: 'Spell Incantation 263',
            school: 'nature',
            manaCost: 23,
            cooldown: 4,
            baseDamage: 814,
            radius: 113,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 113'
        });
        this.spells.set('spell_264', {
            id: 'spell_264',
            name: 'Spell Incantation 264',
            school: 'fire',
            manaCost: 24,
            cooldown: 5,
            baseDamage: 817,
            radius: 114,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 114'
        });
        this.spells.set('spell_265', {
            id: 'spell_265',
            name: 'Spell Incantation 265',
            school: 'frost',
            manaCost: 25,
            cooldown: 6,
            baseDamage: 820,
            radius: 115,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 115'
        });
        this.spells.set('spell_266', {
            id: 'spell_266',
            name: 'Spell Incantation 266',
            school: 'arcane',
            manaCost: 26,
            cooldown: 7,
            baseDamage: 823,
            radius: 116,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 116'
        });
        this.spells.set('spell_267', {
            id: 'spell_267',
            name: 'Spell Incantation 267',
            school: 'holy',
            manaCost: 27,
            cooldown: 8,
            baseDamage: 826,
            radius: 117,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 117'
        });
        this.spells.set('spell_268', {
            id: 'spell_268',
            name: 'Spell Incantation 268',
            school: 'shadow',
            manaCost: 28,
            cooldown: 9,
            baseDamage: 829,
            radius: 118,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 118'
        });
        this.spells.set('spell_269', {
            id: 'spell_269',
            name: 'Spell Incantation 269',
            school: 'nature',
            manaCost: 29,
            cooldown: 10,
            baseDamage: 832,
            radius: 119,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 119'
        });
        this.spells.set('spell_270', {
            id: 'spell_270',
            name: 'Spell Incantation 270',
            school: 'fire',
            manaCost: 30,
            cooldown: 1,
            baseDamage: 835,
            radius: 120,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 120'
        });
        this.spells.set('spell_271', {
            id: 'spell_271',
            name: 'Spell Incantation 271',
            school: 'frost',
            manaCost: 31,
            cooldown: 2,
            baseDamage: 838,
            radius: 121,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 121'
        });
        this.spells.set('spell_272', {
            id: 'spell_272',
            name: 'Spell Incantation 272',
            school: 'arcane',
            manaCost: 32,
            cooldown: 3,
            baseDamage: 841,
            radius: 122,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 122'
        });
        this.spells.set('spell_273', {
            id: 'spell_273',
            name: 'Spell Incantation 273',
            school: 'holy',
            manaCost: 33,
            cooldown: 4,
            baseDamage: 844,
            radius: 123,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 123'
        });
        this.spells.set('spell_274', {
            id: 'spell_274',
            name: 'Spell Incantation 274',
            school: 'shadow',
            manaCost: 34,
            cooldown: 5,
            baseDamage: 847,
            radius: 124,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 124'
        });
        this.spells.set('spell_275', {
            id: 'spell_275',
            name: 'Spell Incantation 275',
            school: 'nature',
            manaCost: 35,
            cooldown: 6,
            baseDamage: 850,
            radius: 125,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 125'
        });
        this.spells.set('spell_276', {
            id: 'spell_276',
            name: 'Spell Incantation 276',
            school: 'fire',
            manaCost: 36,
            cooldown: 7,
            baseDamage: 853,
            radius: 126,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 126'
        });
        this.spells.set('spell_277', {
            id: 'spell_277',
            name: 'Spell Incantation 277',
            school: 'frost',
            manaCost: 37,
            cooldown: 8,
            baseDamage: 856,
            radius: 127,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 127'
        });
        this.spells.set('spell_278', {
            id: 'spell_278',
            name: 'Spell Incantation 278',
            school: 'arcane',
            manaCost: 38,
            cooldown: 9,
            baseDamage: 859,
            radius: 128,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 128'
        });
        this.spells.set('spell_279', {
            id: 'spell_279',
            name: 'Spell Incantation 279',
            school: 'holy',
            manaCost: 39,
            cooldown: 10,
            baseDamage: 862,
            radius: 129,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 129'
        });
        this.spells.set('spell_280', {
            id: 'spell_280',
            name: 'Spell Incantation 280',
            school: 'shadow',
            manaCost: 40,
            cooldown: 1,
            baseDamage: 865,
            radius: 130,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 130'
        });
        this.spells.set('spell_281', {
            id: 'spell_281',
            name: 'Spell Incantation 281',
            school: 'nature',
            manaCost: 41,
            cooldown: 2,
            baseDamage: 868,
            radius: 131,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 131'
        });
        this.spells.set('spell_282', {
            id: 'spell_282',
            name: 'Spell Incantation 282',
            school: 'fire',
            manaCost: 42,
            cooldown: 3,
            baseDamage: 871,
            radius: 132,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 132'
        });
        this.spells.set('spell_283', {
            id: 'spell_283',
            name: 'Spell Incantation 283',
            school: 'frost',
            manaCost: 43,
            cooldown: 4,
            baseDamage: 874,
            radius: 133,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 133'
        });
        this.spells.set('spell_284', {
            id: 'spell_284',
            name: 'Spell Incantation 284',
            school: 'arcane',
            manaCost: 44,
            cooldown: 5,
            baseDamage: 877,
            radius: 134,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 134'
        });
        this.spells.set('spell_285', {
            id: 'spell_285',
            name: 'Spell Incantation 285',
            school: 'holy',
            manaCost: 45,
            cooldown: 6,
            baseDamage: 880,
            radius: 135,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 135'
        });
        this.spells.set('spell_286', {
            id: 'spell_286',
            name: 'Spell Incantation 286',
            school: 'shadow',
            manaCost: 46,
            cooldown: 7,
            baseDamage: 883,
            radius: 136,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 136'
        });
        this.spells.set('spell_287', {
            id: 'spell_287',
            name: 'Spell Incantation 287',
            school: 'nature',
            manaCost: 47,
            cooldown: 8,
            baseDamage: 886,
            radius: 137,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 137'
        });
        this.spells.set('spell_288', {
            id: 'spell_288',
            name: 'Spell Incantation 288',
            school: 'fire',
            manaCost: 48,
            cooldown: 9,
            baseDamage: 889,
            radius: 138,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 138'
        });
        this.spells.set('spell_289', {
            id: 'spell_289',
            name: 'Spell Incantation 289',
            school: 'frost',
            manaCost: 49,
            cooldown: 10,
            baseDamage: 892,
            radius: 139,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 139'
        });
        this.spells.set('spell_290', {
            id: 'spell_290',
            name: 'Spell Incantation 290',
            school: 'arcane',
            manaCost: 50,
            cooldown: 1,
            baseDamage: 895,
            radius: 140,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 140'
        });
        this.spells.set('spell_291', {
            id: 'spell_291',
            name: 'Spell Incantation 291',
            school: 'holy',
            manaCost: 51,
            cooldown: 2,
            baseDamage: 898,
            radius: 141,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 141'
        });
        this.spells.set('spell_292', {
            id: 'spell_292',
            name: 'Spell Incantation 292',
            school: 'shadow',
            manaCost: 52,
            cooldown: 3,
            baseDamage: 901,
            radius: 142,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 142'
        });
        this.spells.set('spell_293', {
            id: 'spell_293',
            name: 'Spell Incantation 293',
            school: 'nature',
            manaCost: 53,
            cooldown: 4,
            baseDamage: 904,
            radius: 143,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 143'
        });
        this.spells.set('spell_294', {
            id: 'spell_294',
            name: 'Spell Incantation 294',
            school: 'fire',
            manaCost: 54,
            cooldown: 5,
            baseDamage: 907,
            radius: 144,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 144'
        });
        this.spells.set('spell_295', {
            id: 'spell_295',
            name: 'Spell Incantation 295',
            school: 'frost',
            manaCost: 55,
            cooldown: 6,
            baseDamage: 910,
            radius: 145,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 145'
        });
        this.spells.set('spell_296', {
            id: 'spell_296',
            name: 'Spell Incantation 296',
            school: 'arcane',
            manaCost: 56,
            cooldown: 7,
            baseDamage: 913,
            radius: 146,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 146'
        });
        this.spells.set('spell_297', {
            id: 'spell_297',
            name: 'Spell Incantation 297',
            school: 'holy',
            manaCost: 57,
            cooldown: 8,
            baseDamage: 916,
            radius: 147,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 147'
        });
        this.spells.set('spell_298', {
            id: 'spell_298',
            name: 'Spell Incantation 298',
            school: 'shadow',
            manaCost: 58,
            cooldown: 9,
            baseDamage: 919,
            radius: 148,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 148'
        });
        this.spells.set('spell_299', {
            id: 'spell_299',
            name: 'Spell Incantation 299',
            school: 'nature',
            manaCost: 59,
            cooldown: 10,
            baseDamage: 922,
            radius: 149,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 149'
        });
        this.spells.set('spell_300', {
            id: 'spell_300',
            name: 'Spell Incantation 300',
            school: 'fire',
            manaCost: 10,
            cooldown: 1,
            baseDamage: 925,
            radius: 50,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 50'
        });
        this.spells.set('spell_301', {
            id: 'spell_301',
            name: 'Spell Incantation 301',
            school: 'frost',
            manaCost: 11,
            cooldown: 2,
            baseDamage: 928,
            radius: 51,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 51'
        });
        this.spells.set('spell_302', {
            id: 'spell_302',
            name: 'Spell Incantation 302',
            school: 'arcane',
            manaCost: 12,
            cooldown: 3,
            baseDamage: 931,
            radius: 52,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 52'
        });
        this.spells.set('spell_303', {
            id: 'spell_303',
            name: 'Spell Incantation 303',
            school: 'holy',
            manaCost: 13,
            cooldown: 4,
            baseDamage: 934,
            radius: 53,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 53'
        });
        this.spells.set('spell_304', {
            id: 'spell_304',
            name: 'Spell Incantation 304',
            school: 'shadow',
            manaCost: 14,
            cooldown: 5,
            baseDamage: 937,
            radius: 54,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 54'
        });
        this.spells.set('spell_305', {
            id: 'spell_305',
            name: 'Spell Incantation 305',
            school: 'nature',
            manaCost: 15,
            cooldown: 6,
            baseDamage: 940,
            radius: 55,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 55'
        });
        this.spells.set('spell_306', {
            id: 'spell_306',
            name: 'Spell Incantation 306',
            school: 'fire',
            manaCost: 16,
            cooldown: 7,
            baseDamage: 943,
            radius: 56,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 56'
        });
        this.spells.set('spell_307', {
            id: 'spell_307',
            name: 'Spell Incantation 307',
            school: 'frost',
            manaCost: 17,
            cooldown: 8,
            baseDamage: 946,
            radius: 57,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 57'
        });
        this.spells.set('spell_308', {
            id: 'spell_308',
            name: 'Spell Incantation 308',
            school: 'arcane',
            manaCost: 18,
            cooldown: 9,
            baseDamage: 949,
            radius: 58,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 58'
        });
        this.spells.set('spell_309', {
            id: 'spell_309',
            name: 'Spell Incantation 309',
            school: 'holy',
            manaCost: 19,
            cooldown: 10,
            baseDamage: 952,
            radius: 59,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 59'
        });
        this.spells.set('spell_310', {
            id: 'spell_310',
            name: 'Spell Incantation 310',
            school: 'shadow',
            manaCost: 20,
            cooldown: 1,
            baseDamage: 955,
            radius: 60,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 60'
        });
        this.spells.set('spell_311', {
            id: 'spell_311',
            name: 'Spell Incantation 311',
            school: 'nature',
            manaCost: 21,
            cooldown: 2,
            baseDamage: 958,
            radius: 61,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 61'
        });
        this.spells.set('spell_312', {
            id: 'spell_312',
            name: 'Spell Incantation 312',
            school: 'fire',
            manaCost: 22,
            cooldown: 3,
            baseDamage: 961,
            radius: 62,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 62'
        });
        this.spells.set('spell_313', {
            id: 'spell_313',
            name: 'Spell Incantation 313',
            school: 'frost',
            manaCost: 23,
            cooldown: 4,
            baseDamage: 964,
            radius: 63,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 63'
        });
        this.spells.set('spell_314', {
            id: 'spell_314',
            name: 'Spell Incantation 314',
            school: 'arcane',
            manaCost: 24,
            cooldown: 5,
            baseDamage: 967,
            radius: 64,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 64'
        });
        this.spells.set('spell_315', {
            id: 'spell_315',
            name: 'Spell Incantation 315',
            school: 'holy',
            manaCost: 25,
            cooldown: 6,
            baseDamage: 970,
            radius: 65,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 65'
        });
        this.spells.set('spell_316', {
            id: 'spell_316',
            name: 'Spell Incantation 316',
            school: 'shadow',
            manaCost: 26,
            cooldown: 7,
            baseDamage: 973,
            radius: 66,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 66'
        });
        this.spells.set('spell_317', {
            id: 'spell_317',
            name: 'Spell Incantation 317',
            school: 'nature',
            manaCost: 27,
            cooldown: 8,
            baseDamage: 976,
            radius: 67,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 67'
        });
        this.spells.set('spell_318', {
            id: 'spell_318',
            name: 'Spell Incantation 318',
            school: 'fire',
            manaCost: 28,
            cooldown: 9,
            baseDamage: 979,
            radius: 68,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 68'
        });
        this.spells.set('spell_319', {
            id: 'spell_319',
            name: 'Spell Incantation 319',
            school: 'frost',
            manaCost: 29,
            cooldown: 10,
            baseDamage: 982,
            radius: 69,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 69'
        });
        this.spells.set('spell_320', {
            id: 'spell_320',
            name: 'Spell Incantation 320',
            school: 'arcane',
            manaCost: 30,
            cooldown: 1,
            baseDamage: 985,
            radius: 70,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 70'
        });
        this.spells.set('spell_321', {
            id: 'spell_321',
            name: 'Spell Incantation 321',
            school: 'holy',
            manaCost: 31,
            cooldown: 2,
            baseDamage: 988,
            radius: 71,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 71'
        });
        this.spells.set('spell_322', {
            id: 'spell_322',
            name: 'Spell Incantation 322',
            school: 'shadow',
            manaCost: 32,
            cooldown: 3,
            baseDamage: 991,
            radius: 72,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 72'
        });
        this.spells.set('spell_323', {
            id: 'spell_323',
            name: 'Spell Incantation 323',
            school: 'nature',
            manaCost: 33,
            cooldown: 4,
            baseDamage: 994,
            radius: 73,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 73'
        });
        this.spells.set('spell_324', {
            id: 'spell_324',
            name: 'Spell Incantation 324',
            school: 'fire',
            manaCost: 34,
            cooldown: 5,
            baseDamage: 997,
            radius: 74,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 74'
        });
        this.spells.set('spell_325', {
            id: 'spell_325',
            name: 'Spell Incantation 325',
            school: 'frost',
            manaCost: 35,
            cooldown: 6,
            baseDamage: 1000,
            radius: 75,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 75'
        });
        this.spells.set('spell_326', {
            id: 'spell_326',
            name: 'Spell Incantation 326',
            school: 'arcane',
            manaCost: 36,
            cooldown: 7,
            baseDamage: 1003,
            radius: 76,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 76'
        });
        this.spells.set('spell_327', {
            id: 'spell_327',
            name: 'Spell Incantation 327',
            school: 'holy',
            manaCost: 37,
            cooldown: 8,
            baseDamage: 1006,
            radius: 77,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 77'
        });
        this.spells.set('spell_328', {
            id: 'spell_328',
            name: 'Spell Incantation 328',
            school: 'shadow',
            manaCost: 38,
            cooldown: 9,
            baseDamage: 1009,
            radius: 78,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 78'
        });
        this.spells.set('spell_329', {
            id: 'spell_329',
            name: 'Spell Incantation 329',
            school: 'nature',
            manaCost: 39,
            cooldown: 10,
            baseDamage: 1012,
            radius: 79,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 79'
        });
        this.spells.set('spell_330', {
            id: 'spell_330',
            name: 'Spell Incantation 330',
            school: 'fire',
            manaCost: 40,
            cooldown: 1,
            baseDamage: 1015,
            radius: 80,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 80'
        });
        this.spells.set('spell_331', {
            id: 'spell_331',
            name: 'Spell Incantation 331',
            school: 'frost',
            manaCost: 41,
            cooldown: 2,
            baseDamage: 1018,
            radius: 81,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 81'
        });
        this.spells.set('spell_332', {
            id: 'spell_332',
            name: 'Spell Incantation 332',
            school: 'arcane',
            manaCost: 42,
            cooldown: 3,
            baseDamage: 1021,
            radius: 82,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 82'
        });
        this.spells.set('spell_333', {
            id: 'spell_333',
            name: 'Spell Incantation 333',
            school: 'holy',
            manaCost: 43,
            cooldown: 4,
            baseDamage: 1024,
            radius: 83,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 83'
        });
        this.spells.set('spell_334', {
            id: 'spell_334',
            name: 'Spell Incantation 334',
            school: 'shadow',
            manaCost: 44,
            cooldown: 5,
            baseDamage: 1027,
            radius: 84,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 84'
        });
        this.spells.set('spell_335', {
            id: 'spell_335',
            name: 'Spell Incantation 335',
            school: 'nature',
            manaCost: 45,
            cooldown: 6,
            baseDamage: 1030,
            radius: 85,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 85'
        });
        this.spells.set('spell_336', {
            id: 'spell_336',
            name: 'Spell Incantation 336',
            school: 'fire',
            manaCost: 46,
            cooldown: 7,
            baseDamage: 1033,
            radius: 86,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 86'
        });
        this.spells.set('spell_337', {
            id: 'spell_337',
            name: 'Spell Incantation 337',
            school: 'frost',
            manaCost: 47,
            cooldown: 8,
            baseDamage: 1036,
            radius: 87,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 87'
        });
        this.spells.set('spell_338', {
            id: 'spell_338',
            name: 'Spell Incantation 338',
            school: 'arcane',
            manaCost: 48,
            cooldown: 9,
            baseDamage: 1039,
            radius: 88,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 88'
        });
        this.spells.set('spell_339', {
            id: 'spell_339',
            name: 'Spell Incantation 339',
            school: 'holy',
            manaCost: 49,
            cooldown: 10,
            baseDamage: 1042,
            radius: 89,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 89'
        });
        this.spells.set('spell_340', {
            id: 'spell_340',
            name: 'Spell Incantation 340',
            school: 'shadow',
            manaCost: 50,
            cooldown: 1,
            baseDamage: 1045,
            radius: 90,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 90'
        });
        this.spells.set('spell_341', {
            id: 'spell_341',
            name: 'Spell Incantation 341',
            school: 'nature',
            manaCost: 51,
            cooldown: 2,
            baseDamage: 1048,
            radius: 91,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 91'
        });
        this.spells.set('spell_342', {
            id: 'spell_342',
            name: 'Spell Incantation 342',
            school: 'fire',
            manaCost: 52,
            cooldown: 3,
            baseDamage: 1051,
            radius: 92,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 92'
        });
        this.spells.set('spell_343', {
            id: 'spell_343',
            name: 'Spell Incantation 343',
            school: 'frost',
            manaCost: 53,
            cooldown: 4,
            baseDamage: 1054,
            radius: 93,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 93'
        });
        this.spells.set('spell_344', {
            id: 'spell_344',
            name: 'Spell Incantation 344',
            school: 'arcane',
            manaCost: 54,
            cooldown: 5,
            baseDamage: 1057,
            radius: 94,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 94'
        });
        this.spells.set('spell_345', {
            id: 'spell_345',
            name: 'Spell Incantation 345',
            school: 'holy',
            manaCost: 55,
            cooldown: 6,
            baseDamage: 1060,
            radius: 95,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 95'
        });
        this.spells.set('spell_346', {
            id: 'spell_346',
            name: 'Spell Incantation 346',
            school: 'shadow',
            manaCost: 56,
            cooldown: 7,
            baseDamage: 1063,
            radius: 96,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 96'
        });
        this.spells.set('spell_347', {
            id: 'spell_347',
            name: 'Spell Incantation 347',
            school: 'nature',
            manaCost: 57,
            cooldown: 8,
            baseDamage: 1066,
            radius: 97,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 97'
        });
        this.spells.set('spell_348', {
            id: 'spell_348',
            name: 'Spell Incantation 348',
            school: 'fire',
            manaCost: 58,
            cooldown: 9,
            baseDamage: 1069,
            radius: 98,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 98'
        });
        this.spells.set('spell_349', {
            id: 'spell_349',
            name: 'Spell Incantation 349',
            school: 'frost',
            manaCost: 59,
            cooldown: 10,
            baseDamage: 1072,
            radius: 99,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 99'
        });
        this.spells.set('spell_350', {
            id: 'spell_350',
            name: 'Spell Incantation 350',
            school: 'arcane',
            manaCost: 10,
            cooldown: 1,
            baseDamage: 1075,
            radius: 100,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 100'
        });
        this.spells.set('spell_351', {
            id: 'spell_351',
            name: 'Spell Incantation 351',
            school: 'holy',
            manaCost: 11,
            cooldown: 2,
            baseDamage: 1078,
            radius: 101,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 101'
        });
        this.spells.set('spell_352', {
            id: 'spell_352',
            name: 'Spell Incantation 352',
            school: 'shadow',
            manaCost: 12,
            cooldown: 3,
            baseDamage: 1081,
            radius: 102,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 102'
        });
        this.spells.set('spell_353', {
            id: 'spell_353',
            name: 'Spell Incantation 353',
            school: 'nature',
            manaCost: 13,
            cooldown: 4,
            baseDamage: 1084,
            radius: 103,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 103'
        });
        this.spells.set('spell_354', {
            id: 'spell_354',
            name: 'Spell Incantation 354',
            school: 'fire',
            manaCost: 14,
            cooldown: 5,
            baseDamage: 1087,
            radius: 104,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 104'
        });
        this.spells.set('spell_355', {
            id: 'spell_355',
            name: 'Spell Incantation 355',
            school: 'frost',
            manaCost: 15,
            cooldown: 6,
            baseDamage: 1090,
            radius: 105,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 105'
        });
        this.spells.set('spell_356', {
            id: 'spell_356',
            name: 'Spell Incantation 356',
            school: 'arcane',
            manaCost: 16,
            cooldown: 7,
            baseDamage: 1093,
            radius: 106,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 106'
        });
        this.spells.set('spell_357', {
            id: 'spell_357',
            name: 'Spell Incantation 357',
            school: 'holy',
            manaCost: 17,
            cooldown: 8,
            baseDamage: 1096,
            radius: 107,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 107'
        });
        this.spells.set('spell_358', {
            id: 'spell_358',
            name: 'Spell Incantation 358',
            school: 'shadow',
            manaCost: 18,
            cooldown: 9,
            baseDamage: 1099,
            radius: 108,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 108'
        });
        this.spells.set('spell_359', {
            id: 'spell_359',
            name: 'Spell Incantation 359',
            school: 'nature',
            manaCost: 19,
            cooldown: 10,
            baseDamage: 1102,
            radius: 109,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 109'
        });
        this.spells.set('spell_360', {
            id: 'spell_360',
            name: 'Spell Incantation 360',
            school: 'fire',
            manaCost: 20,
            cooldown: 1,
            baseDamage: 1105,
            radius: 110,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 110'
        });
        this.spells.set('spell_361', {
            id: 'spell_361',
            name: 'Spell Incantation 361',
            school: 'frost',
            manaCost: 21,
            cooldown: 2,
            baseDamage: 1108,
            radius: 111,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 111'
        });
        this.spells.set('spell_362', {
            id: 'spell_362',
            name: 'Spell Incantation 362',
            school: 'arcane',
            manaCost: 22,
            cooldown: 3,
            baseDamage: 1111,
            radius: 112,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 112'
        });
        this.spells.set('spell_363', {
            id: 'spell_363',
            name: 'Spell Incantation 363',
            school: 'holy',
            manaCost: 23,
            cooldown: 4,
            baseDamage: 1114,
            radius: 113,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 113'
        });
        this.spells.set('spell_364', {
            id: 'spell_364',
            name: 'Spell Incantation 364',
            school: 'shadow',
            manaCost: 24,
            cooldown: 5,
            baseDamage: 1117,
            radius: 114,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 114'
        });
        this.spells.set('spell_365', {
            id: 'spell_365',
            name: 'Spell Incantation 365',
            school: 'nature',
            manaCost: 25,
            cooldown: 6,
            baseDamage: 1120,
            radius: 115,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 115'
        });
        this.spells.set('spell_366', {
            id: 'spell_366',
            name: 'Spell Incantation 366',
            school: 'fire',
            manaCost: 26,
            cooldown: 7,
            baseDamage: 1123,
            radius: 116,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 116'
        });
        this.spells.set('spell_367', {
            id: 'spell_367',
            name: 'Spell Incantation 367',
            school: 'frost',
            manaCost: 27,
            cooldown: 8,
            baseDamage: 1126,
            radius: 117,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 117'
        });
        this.spells.set('spell_368', {
            id: 'spell_368',
            name: 'Spell Incantation 368',
            school: 'arcane',
            manaCost: 28,
            cooldown: 9,
            baseDamage: 1129,
            radius: 118,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 118'
        });
        this.spells.set('spell_369', {
            id: 'spell_369',
            name: 'Spell Incantation 369',
            school: 'holy',
            manaCost: 29,
            cooldown: 10,
            baseDamage: 1132,
            radius: 119,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 119'
        });
        this.spells.set('spell_370', {
            id: 'spell_370',
            name: 'Spell Incantation 370',
            school: 'shadow',
            manaCost: 30,
            cooldown: 1,
            baseDamage: 1135,
            radius: 120,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 120'
        });
        this.spells.set('spell_371', {
            id: 'spell_371',
            name: 'Spell Incantation 371',
            school: 'nature',
            manaCost: 31,
            cooldown: 2,
            baseDamage: 1138,
            radius: 121,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 121'
        });
        this.spells.set('spell_372', {
            id: 'spell_372',
            name: 'Spell Incantation 372',
            school: 'fire',
            manaCost: 32,
            cooldown: 3,
            baseDamage: 1141,
            radius: 122,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 122'
        });
        this.spells.set('spell_373', {
            id: 'spell_373',
            name: 'Spell Incantation 373',
            school: 'frost',
            manaCost: 33,
            cooldown: 4,
            baseDamage: 1144,
            radius: 123,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 123'
        });
        this.spells.set('spell_374', {
            id: 'spell_374',
            name: 'Spell Incantation 374',
            school: 'arcane',
            manaCost: 34,
            cooldown: 5,
            baseDamage: 1147,
            radius: 124,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 124'
        });
        this.spells.set('spell_375', {
            id: 'spell_375',
            name: 'Spell Incantation 375',
            school: 'holy',
            manaCost: 35,
            cooldown: 6,
            baseDamage: 1150,
            radius: 125,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 125'
        });
        this.spells.set('spell_376', {
            id: 'spell_376',
            name: 'Spell Incantation 376',
            school: 'shadow',
            manaCost: 36,
            cooldown: 7,
            baseDamage: 1153,
            radius: 126,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 126'
        });
        this.spells.set('spell_377', {
            id: 'spell_377',
            name: 'Spell Incantation 377',
            school: 'nature',
            manaCost: 37,
            cooldown: 8,
            baseDamage: 1156,
            radius: 127,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 127'
        });
        this.spells.set('spell_378', {
            id: 'spell_378',
            name: 'Spell Incantation 378',
            school: 'fire',
            manaCost: 38,
            cooldown: 9,
            baseDamage: 1159,
            radius: 128,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 128'
        });
        this.spells.set('spell_379', {
            id: 'spell_379',
            name: 'Spell Incantation 379',
            school: 'frost',
            manaCost: 39,
            cooldown: 10,
            baseDamage: 1162,
            radius: 129,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 129'
        });
        this.spells.set('spell_380', {
            id: 'spell_380',
            name: 'Spell Incantation 380',
            school: 'arcane',
            manaCost: 40,
            cooldown: 1,
            baseDamage: 1165,
            radius: 130,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 130'
        });
        this.spells.set('spell_381', {
            id: 'spell_381',
            name: 'Spell Incantation 381',
            school: 'holy',
            manaCost: 41,
            cooldown: 2,
            baseDamage: 1168,
            radius: 131,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 131'
        });
        this.spells.set('spell_382', {
            id: 'spell_382',
            name: 'Spell Incantation 382',
            school: 'shadow',
            manaCost: 42,
            cooldown: 3,
            baseDamage: 1171,
            radius: 132,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 132'
        });
        this.spells.set('spell_383', {
            id: 'spell_383',
            name: 'Spell Incantation 383',
            school: 'nature',
            manaCost: 43,
            cooldown: 4,
            baseDamage: 1174,
            radius: 133,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 133'
        });
        this.spells.set('spell_384', {
            id: 'spell_384',
            name: 'Spell Incantation 384',
            school: 'fire',
            manaCost: 44,
            cooldown: 5,
            baseDamage: 1177,
            radius: 134,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 134'
        });
        this.spells.set('spell_385', {
            id: 'spell_385',
            name: 'Spell Incantation 385',
            school: 'frost',
            manaCost: 45,
            cooldown: 6,
            baseDamage: 1180,
            radius: 135,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 135'
        });
        this.spells.set('spell_386', {
            id: 'spell_386',
            name: 'Spell Incantation 386',
            school: 'arcane',
            manaCost: 46,
            cooldown: 7,
            baseDamage: 1183,
            radius: 136,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 136'
        });
        this.spells.set('spell_387', {
            id: 'spell_387',
            name: 'Spell Incantation 387',
            school: 'holy',
            manaCost: 47,
            cooldown: 8,
            baseDamage: 1186,
            radius: 137,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 137'
        });
        this.spells.set('spell_388', {
            id: 'spell_388',
            name: 'Spell Incantation 388',
            school: 'shadow',
            manaCost: 48,
            cooldown: 9,
            baseDamage: 1189,
            radius: 138,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 138'
        });
        this.spells.set('spell_389', {
            id: 'spell_389',
            name: 'Spell Incantation 389',
            school: 'nature',
            manaCost: 49,
            cooldown: 10,
            baseDamage: 1192,
            radius: 139,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 139'
        });
        this.spells.set('spell_390', {
            id: 'spell_390',
            name: 'Spell Incantation 390',
            school: 'fire',
            manaCost: 50,
            cooldown: 1,
            baseDamage: 1195,
            radius: 140,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 140'
        });
        this.spells.set('spell_391', {
            id: 'spell_391',
            name: 'Spell Incantation 391',
            school: 'frost',
            manaCost: 51,
            cooldown: 2,
            baseDamage: 1198,
            radius: 141,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 141'
        });
        this.spells.set('spell_392', {
            id: 'spell_392',
            name: 'Spell Incantation 392',
            school: 'arcane',
            manaCost: 52,
            cooldown: 3,
            baseDamage: 1201,
            radius: 142,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 142'
        });
        this.spells.set('spell_393', {
            id: 'spell_393',
            name: 'Spell Incantation 393',
            school: 'holy',
            manaCost: 53,
            cooldown: 4,
            baseDamage: 1204,
            radius: 143,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 143'
        });
        this.spells.set('spell_394', {
            id: 'spell_394',
            name: 'Spell Incantation 394',
            school: 'shadow',
            manaCost: 54,
            cooldown: 5,
            baseDamage: 1207,
            radius: 144,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 144'
        });
        this.spells.set('spell_395', {
            id: 'spell_395',
            name: 'Spell Incantation 395',
            school: 'nature',
            manaCost: 55,
            cooldown: 6,
            baseDamage: 1210,
            radius: 145,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 145'
        });
        this.spells.set('spell_396', {
            id: 'spell_396',
            name: 'Spell Incantation 396',
            school: 'fire',
            manaCost: 56,
            cooldown: 7,
            baseDamage: 1213,
            radius: 146,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 146'
        });
        this.spells.set('spell_397', {
            id: 'spell_397',
            name: 'Spell Incantation 397',
            school: 'frost',
            manaCost: 57,
            cooldown: 8,
            baseDamage: 1216,
            radius: 147,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 147'
        });
        this.spells.set('spell_398', {
            id: 'spell_398',
            name: 'Spell Incantation 398',
            school: 'arcane',
            manaCost: 58,
            cooldown: 9,
            baseDamage: 1219,
            radius: 148,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 148'
        });
        this.spells.set('spell_399', {
            id: 'spell_399',
            name: 'Spell Incantation 399',
            school: 'holy',
            manaCost: 59,
            cooldown: 10,
            baseDamage: 1222,
            radius: 149,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 149'
        });
        this.spells.set('spell_400', {
            id: 'spell_400',
            name: 'Spell Incantation 400',
            school: 'shadow',
            manaCost: 10,
            cooldown: 1,
            baseDamage: 1225,
            radius: 50,
            description: 'Casts an elemental surge of energy dealing damage to enemies in radius 50'
        });
    }
    static getSpell(id) {
        if (this.spells.size === 0)
            this.initialize();
        return this.spells.get(id);
    }
    static getCount() {
        if (this.spells.size === 0)
            this.initialize();
        return this.spells.size;
    }
}
exports.SpellCatalog = SpellCatalog;
//# sourceMappingURL=SpellCatalog.js.map