"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DialogueMatrix = void 0;
class DialogueMatrix {
    static nodes = new Map();
    static initialize() {
        this.nodes.set('node_1', {
            id: 'node_1',
            speaker: 'NPC Guardian 1',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 1?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_2' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_3' }
            ]
        });
        this.nodes.set('node_2', {
            id: 'node_2',
            speaker: 'NPC Guardian 2',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 2?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_3' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_4' }
            ]
        });
        this.nodes.set('node_3', {
            id: 'node_3',
            speaker: 'NPC Guardian 3',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 3?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_4' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_5' }
            ]
        });
        this.nodes.set('node_4', {
            id: 'node_4',
            speaker: 'NPC Guardian 4',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 4?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_5' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_6' }
            ]
        });
        this.nodes.set('node_5', {
            id: 'node_5',
            speaker: 'NPC Guardian 5',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 5?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_6' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_7' }
            ]
        });
        this.nodes.set('node_6', {
            id: 'node_6',
            speaker: 'NPC Guardian 6',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 6?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_7' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_8' }
            ]
        });
        this.nodes.set('node_7', {
            id: 'node_7',
            speaker: 'NPC Guardian 7',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 7?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_8' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_9' }
            ]
        });
        this.nodes.set('node_8', {
            id: 'node_8',
            speaker: 'NPC Guardian 8',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 8?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_9' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_10' }
            ]
        });
        this.nodes.set('node_9', {
            id: 'node_9',
            speaker: 'NPC Guardian 9',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 9?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_10' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_11' }
            ]
        });
        this.nodes.set('node_10', {
            id: 'node_10',
            speaker: 'NPC Guardian 10',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 10?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_11' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_12' }
            ]
        });
        this.nodes.set('node_11', {
            id: 'node_11',
            speaker: 'NPC Guardian 11',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 11?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_12' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_13' }
            ]
        });
        this.nodes.set('node_12', {
            id: 'node_12',
            speaker: 'NPC Guardian 12',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 12?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_13' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_14' }
            ]
        });
        this.nodes.set('node_13', {
            id: 'node_13',
            speaker: 'NPC Guardian 13',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 13?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_14' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_15' }
            ]
        });
        this.nodes.set('node_14', {
            id: 'node_14',
            speaker: 'NPC Guardian 14',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 14?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_15' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_16' }
            ]
        });
        this.nodes.set('node_15', {
            id: 'node_15',
            speaker: 'NPC Guardian 15',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 15?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_16' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_17' }
            ]
        });
        this.nodes.set('node_16', {
            id: 'node_16',
            speaker: 'NPC Guardian 16',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 16?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_17' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_18' }
            ]
        });
        this.nodes.set('node_17', {
            id: 'node_17',
            speaker: 'NPC Guardian 17',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 17?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_18' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_19' }
            ]
        });
        this.nodes.set('node_18', {
            id: 'node_18',
            speaker: 'NPC Guardian 18',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 18?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_19' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_20' }
            ]
        });
        this.nodes.set('node_19', {
            id: 'node_19',
            speaker: 'NPC Guardian 19',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 19?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_20' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_21' }
            ]
        });
        this.nodes.set('node_20', {
            id: 'node_20',
            speaker: 'NPC Guardian 20',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 20?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_21' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_22' }
            ]
        });
        this.nodes.set('node_21', {
            id: 'node_21',
            speaker: 'NPC Guardian 21',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 21?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_22' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_23' }
            ]
        });
        this.nodes.set('node_22', {
            id: 'node_22',
            speaker: 'NPC Guardian 22',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 22?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_23' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_24' }
            ]
        });
        this.nodes.set('node_23', {
            id: 'node_23',
            speaker: 'NPC Guardian 23',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 23?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_24' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_25' }
            ]
        });
        this.nodes.set('node_24', {
            id: 'node_24',
            speaker: 'NPC Guardian 24',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 24?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_25' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_26' }
            ]
        });
        this.nodes.set('node_25', {
            id: 'node_25',
            speaker: 'NPC Guardian 25',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 25?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_26' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_27' }
            ]
        });
        this.nodes.set('node_26', {
            id: 'node_26',
            speaker: 'NPC Guardian 26',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 26?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_27' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_28' }
            ]
        });
        this.nodes.set('node_27', {
            id: 'node_27',
            speaker: 'NPC Guardian 27',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 27?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_28' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_29' }
            ]
        });
        this.nodes.set('node_28', {
            id: 'node_28',
            speaker: 'NPC Guardian 28',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 28?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_29' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_30' }
            ]
        });
        this.nodes.set('node_29', {
            id: 'node_29',
            speaker: 'NPC Guardian 29',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 29?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_30' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_31' }
            ]
        });
        this.nodes.set('node_30', {
            id: 'node_30',
            speaker: 'NPC Guardian 30',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 30?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_31' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_32' }
            ]
        });
        this.nodes.set('node_31', {
            id: 'node_31',
            speaker: 'NPC Guardian 31',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 31?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_32' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_33' }
            ]
        });
        this.nodes.set('node_32', {
            id: 'node_32',
            speaker: 'NPC Guardian 32',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 32?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_33' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_34' }
            ]
        });
        this.nodes.set('node_33', {
            id: 'node_33',
            speaker: 'NPC Guardian 33',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 33?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_34' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_35' }
            ]
        });
        this.nodes.set('node_34', {
            id: 'node_34',
            speaker: 'NPC Guardian 34',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 34?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_35' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_36' }
            ]
        });
        this.nodes.set('node_35', {
            id: 'node_35',
            speaker: 'NPC Guardian 35',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 35?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_36' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_37' }
            ]
        });
        this.nodes.set('node_36', {
            id: 'node_36',
            speaker: 'NPC Guardian 36',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 36?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_37' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_38' }
            ]
        });
        this.nodes.set('node_37', {
            id: 'node_37',
            speaker: 'NPC Guardian 37',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 37?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_38' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_39' }
            ]
        });
        this.nodes.set('node_38', {
            id: 'node_38',
            speaker: 'NPC Guardian 38',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 38?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_39' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_40' }
            ]
        });
        this.nodes.set('node_39', {
            id: 'node_39',
            speaker: 'NPC Guardian 39',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 39?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_40' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_41' }
            ]
        });
        this.nodes.set('node_40', {
            id: 'node_40',
            speaker: 'NPC Guardian 40',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 40?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_41' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_42' }
            ]
        });
        this.nodes.set('node_41', {
            id: 'node_41',
            speaker: 'NPC Guardian 41',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 41?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_42' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_43' }
            ]
        });
        this.nodes.set('node_42', {
            id: 'node_42',
            speaker: 'NPC Guardian 42',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 42?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_43' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_44' }
            ]
        });
        this.nodes.set('node_43', {
            id: 'node_43',
            speaker: 'NPC Guardian 43',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 43?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_44' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_45' }
            ]
        });
        this.nodes.set('node_44', {
            id: 'node_44',
            speaker: 'NPC Guardian 44',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 44?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_45' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_46' }
            ]
        });
        this.nodes.set('node_45', {
            id: 'node_45',
            speaker: 'NPC Guardian 45',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 45?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_46' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_47' }
            ]
        });
        this.nodes.set('node_46', {
            id: 'node_46',
            speaker: 'NPC Guardian 46',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 46?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_47' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_48' }
            ]
        });
        this.nodes.set('node_47', {
            id: 'node_47',
            speaker: 'NPC Guardian 47',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 47?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_48' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_49' }
            ]
        });
        this.nodes.set('node_48', {
            id: 'node_48',
            speaker: 'NPC Guardian 48',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 48?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_49' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_50' }
            ]
        });
        this.nodes.set('node_49', {
            id: 'node_49',
            speaker: 'NPC Guardian 49',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 49?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_50' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_51' }
            ]
        });
        this.nodes.set('node_50', {
            id: 'node_50',
            speaker: 'NPC Guardian 50',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 50?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_51' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_52' }
            ]
        });
        this.nodes.set('node_51', {
            id: 'node_51',
            speaker: 'NPC Guardian 51',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 51?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_52' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_53' }
            ]
        });
        this.nodes.set('node_52', {
            id: 'node_52',
            speaker: 'NPC Guardian 52',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 52?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_53' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_54' }
            ]
        });
        this.nodes.set('node_53', {
            id: 'node_53',
            speaker: 'NPC Guardian 53',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 53?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_54' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_55' }
            ]
        });
        this.nodes.set('node_54', {
            id: 'node_54',
            speaker: 'NPC Guardian 54',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 54?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_55' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_56' }
            ]
        });
        this.nodes.set('node_55', {
            id: 'node_55',
            speaker: 'NPC Guardian 55',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 55?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_56' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_57' }
            ]
        });
        this.nodes.set('node_56', {
            id: 'node_56',
            speaker: 'NPC Guardian 56',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 56?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_57' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_58' }
            ]
        });
        this.nodes.set('node_57', {
            id: 'node_57',
            speaker: 'NPC Guardian 57',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 57?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_58' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_59' }
            ]
        });
        this.nodes.set('node_58', {
            id: 'node_58',
            speaker: 'NPC Guardian 58',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 58?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_59' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_60' }
            ]
        });
        this.nodes.set('node_59', {
            id: 'node_59',
            speaker: 'NPC Guardian 59',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 59?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_60' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_61' }
            ]
        });
        this.nodes.set('node_60', {
            id: 'node_60',
            speaker: 'NPC Guardian 60',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 60?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_61' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_62' }
            ]
        });
        this.nodes.set('node_61', {
            id: 'node_61',
            speaker: 'NPC Guardian 61',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 61?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_62' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_63' }
            ]
        });
        this.nodes.set('node_62', {
            id: 'node_62',
            speaker: 'NPC Guardian 62',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 62?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_63' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_64' }
            ]
        });
        this.nodes.set('node_63', {
            id: 'node_63',
            speaker: 'NPC Guardian 63',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 63?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_64' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_65' }
            ]
        });
        this.nodes.set('node_64', {
            id: 'node_64',
            speaker: 'NPC Guardian 64',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 64?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_65' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_66' }
            ]
        });
        this.nodes.set('node_65', {
            id: 'node_65',
            speaker: 'NPC Guardian 65',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 65?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_66' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_67' }
            ]
        });
        this.nodes.set('node_66', {
            id: 'node_66',
            speaker: 'NPC Guardian 66',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 66?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_67' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_68' }
            ]
        });
        this.nodes.set('node_67', {
            id: 'node_67',
            speaker: 'NPC Guardian 67',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 67?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_68' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_69' }
            ]
        });
        this.nodes.set('node_68', {
            id: 'node_68',
            speaker: 'NPC Guardian 68',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 68?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_69' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_70' }
            ]
        });
        this.nodes.set('node_69', {
            id: 'node_69',
            speaker: 'NPC Guardian 69',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 69?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_70' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_71' }
            ]
        });
        this.nodes.set('node_70', {
            id: 'node_70',
            speaker: 'NPC Guardian 70',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 70?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_71' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_72' }
            ]
        });
        this.nodes.set('node_71', {
            id: 'node_71',
            speaker: 'NPC Guardian 71',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 71?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_72' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_73' }
            ]
        });
        this.nodes.set('node_72', {
            id: 'node_72',
            speaker: 'NPC Guardian 72',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 72?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_73' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_74' }
            ]
        });
        this.nodes.set('node_73', {
            id: 'node_73',
            speaker: 'NPC Guardian 73',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 73?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_74' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_75' }
            ]
        });
        this.nodes.set('node_74', {
            id: 'node_74',
            speaker: 'NPC Guardian 74',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 74?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_75' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_76' }
            ]
        });
        this.nodes.set('node_75', {
            id: 'node_75',
            speaker: 'NPC Guardian 75',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 75?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_76' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_77' }
            ]
        });
        this.nodes.set('node_76', {
            id: 'node_76',
            speaker: 'NPC Guardian 76',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 76?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_77' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_78' }
            ]
        });
        this.nodes.set('node_77', {
            id: 'node_77',
            speaker: 'NPC Guardian 77',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 77?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_78' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_79' }
            ]
        });
        this.nodes.set('node_78', {
            id: 'node_78',
            speaker: 'NPC Guardian 78',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 78?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_79' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_80' }
            ]
        });
        this.nodes.set('node_79', {
            id: 'node_79',
            speaker: 'NPC Guardian 79',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 79?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_80' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_81' }
            ]
        });
        this.nodes.set('node_80', {
            id: 'node_80',
            speaker: 'NPC Guardian 80',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 80?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_81' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_82' }
            ]
        });
        this.nodes.set('node_81', {
            id: 'node_81',
            speaker: 'NPC Guardian 81',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 81?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_82' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_83' }
            ]
        });
        this.nodes.set('node_82', {
            id: 'node_82',
            speaker: 'NPC Guardian 82',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 82?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_83' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_84' }
            ]
        });
        this.nodes.set('node_83', {
            id: 'node_83',
            speaker: 'NPC Guardian 83',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 83?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_84' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_85' }
            ]
        });
        this.nodes.set('node_84', {
            id: 'node_84',
            speaker: 'NPC Guardian 84',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 84?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_85' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_86' }
            ]
        });
        this.nodes.set('node_85', {
            id: 'node_85',
            speaker: 'NPC Guardian 85',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 85?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_86' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_87' }
            ]
        });
        this.nodes.set('node_86', {
            id: 'node_86',
            speaker: 'NPC Guardian 86',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 86?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_87' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_88' }
            ]
        });
        this.nodes.set('node_87', {
            id: 'node_87',
            speaker: 'NPC Guardian 87',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 87?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_88' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_89' }
            ]
        });
        this.nodes.set('node_88', {
            id: 'node_88',
            speaker: 'NPC Guardian 88',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 88?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_89' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_90' }
            ]
        });
        this.nodes.set('node_89', {
            id: 'node_89',
            speaker: 'NPC Guardian 89',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 89?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_90' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_91' }
            ]
        });
        this.nodes.set('node_90', {
            id: 'node_90',
            speaker: 'NPC Guardian 90',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 90?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_91' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_92' }
            ]
        });
        this.nodes.set('node_91', {
            id: 'node_91',
            speaker: 'NPC Guardian 91',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 91?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_92' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_93' }
            ]
        });
        this.nodes.set('node_92', {
            id: 'node_92',
            speaker: 'NPC Guardian 92',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 92?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_93' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_94' }
            ]
        });
        this.nodes.set('node_93', {
            id: 'node_93',
            speaker: 'NPC Guardian 93',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 93?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_94' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_95' }
            ]
        });
        this.nodes.set('node_94', {
            id: 'node_94',
            speaker: 'NPC Guardian 94',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 94?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_95' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_96' }
            ]
        });
        this.nodes.set('node_95', {
            id: 'node_95',
            speaker: 'NPC Guardian 95',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 95?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_96' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_97' }
            ]
        });
        this.nodes.set('node_96', {
            id: 'node_96',
            speaker: 'NPC Guardian 96',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 96?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_97' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_98' }
            ]
        });
        this.nodes.set('node_97', {
            id: 'node_97',
            speaker: 'NPC Guardian 97',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 97?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_98' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_99' }
            ]
        });
        this.nodes.set('node_98', {
            id: 'node_98',
            speaker: 'NPC Guardian 98',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 98?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_99' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_100' }
            ]
        });
        this.nodes.set('node_99', {
            id: 'node_99',
            speaker: 'NPC Guardian 99',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 99?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_100' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_101' }
            ]
        });
        this.nodes.set('node_100', {
            id: 'node_100',
            speaker: 'NPC Guardian 100',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 100?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_101' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_102' }
            ]
        });
        this.nodes.set('node_101', {
            id: 'node_101',
            speaker: 'NPC Guardian 101',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 101?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_102' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_103' }
            ]
        });
        this.nodes.set('node_102', {
            id: 'node_102',
            speaker: 'NPC Guardian 102',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 102?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_103' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_104' }
            ]
        });
        this.nodes.set('node_103', {
            id: 'node_103',
            speaker: 'NPC Guardian 103',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 103?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_104' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_105' }
            ]
        });
        this.nodes.set('node_104', {
            id: 'node_104',
            speaker: 'NPC Guardian 104',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 104?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_105' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_106' }
            ]
        });
        this.nodes.set('node_105', {
            id: 'node_105',
            speaker: 'NPC Guardian 105',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 105?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_106' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_107' }
            ]
        });
        this.nodes.set('node_106', {
            id: 'node_106',
            speaker: 'NPC Guardian 106',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 106?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_107' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_108' }
            ]
        });
        this.nodes.set('node_107', {
            id: 'node_107',
            speaker: 'NPC Guardian 107',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 107?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_108' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_109' }
            ]
        });
        this.nodes.set('node_108', {
            id: 'node_108',
            speaker: 'NPC Guardian 108',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 108?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_109' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_110' }
            ]
        });
        this.nodes.set('node_109', {
            id: 'node_109',
            speaker: 'NPC Guardian 109',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 109?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_110' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_111' }
            ]
        });
        this.nodes.set('node_110', {
            id: 'node_110',
            speaker: 'NPC Guardian 110',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 110?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_111' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_112' }
            ]
        });
        this.nodes.set('node_111', {
            id: 'node_111',
            speaker: 'NPC Guardian 111',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 111?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_112' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_113' }
            ]
        });
        this.nodes.set('node_112', {
            id: 'node_112',
            speaker: 'NPC Guardian 112',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 112?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_113' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_114' }
            ]
        });
        this.nodes.set('node_113', {
            id: 'node_113',
            speaker: 'NPC Guardian 113',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 113?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_114' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_115' }
            ]
        });
        this.nodes.set('node_114', {
            id: 'node_114',
            speaker: 'NPC Guardian 114',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 114?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_115' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_116' }
            ]
        });
        this.nodes.set('node_115', {
            id: 'node_115',
            speaker: 'NPC Guardian 115',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 115?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_116' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_117' }
            ]
        });
        this.nodes.set('node_116', {
            id: 'node_116',
            speaker: 'NPC Guardian 116',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 116?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_117' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_118' }
            ]
        });
        this.nodes.set('node_117', {
            id: 'node_117',
            speaker: 'NPC Guardian 117',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 117?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_118' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_119' }
            ]
        });
        this.nodes.set('node_118', {
            id: 'node_118',
            speaker: 'NPC Guardian 118',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 118?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_119' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_120' }
            ]
        });
        this.nodes.set('node_119', {
            id: 'node_119',
            speaker: 'NPC Guardian 119',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 119?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_120' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_121' }
            ]
        });
        this.nodes.set('node_120', {
            id: 'node_120',
            speaker: 'NPC Guardian 120',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 120?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_121' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_122' }
            ]
        });
        this.nodes.set('node_121', {
            id: 'node_121',
            speaker: 'NPC Guardian 121',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 121?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_122' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_123' }
            ]
        });
        this.nodes.set('node_122', {
            id: 'node_122',
            speaker: 'NPC Guardian 122',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 122?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_123' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_124' }
            ]
        });
        this.nodes.set('node_123', {
            id: 'node_123',
            speaker: 'NPC Guardian 123',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 123?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_124' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_125' }
            ]
        });
        this.nodes.set('node_124', {
            id: 'node_124',
            speaker: 'NPC Guardian 124',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 124?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_125' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_126' }
            ]
        });
        this.nodes.set('node_125', {
            id: 'node_125',
            speaker: 'NPC Guardian 125',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 125?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_126' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_127' }
            ]
        });
        this.nodes.set('node_126', {
            id: 'node_126',
            speaker: 'NPC Guardian 126',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 126?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_127' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_128' }
            ]
        });
        this.nodes.set('node_127', {
            id: 'node_127',
            speaker: 'NPC Guardian 127',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 127?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_128' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_129' }
            ]
        });
        this.nodes.set('node_128', {
            id: 'node_128',
            speaker: 'NPC Guardian 128',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 128?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_129' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_130' }
            ]
        });
        this.nodes.set('node_129', {
            id: 'node_129',
            speaker: 'NPC Guardian 129',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 129?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_130' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_131' }
            ]
        });
        this.nodes.set('node_130', {
            id: 'node_130',
            speaker: 'NPC Guardian 130',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 130?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_131' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_132' }
            ]
        });
        this.nodes.set('node_131', {
            id: 'node_131',
            speaker: 'NPC Guardian 131',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 131?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_132' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_133' }
            ]
        });
        this.nodes.set('node_132', {
            id: 'node_132',
            speaker: 'NPC Guardian 132',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 132?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_133' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_134' }
            ]
        });
        this.nodes.set('node_133', {
            id: 'node_133',
            speaker: 'NPC Guardian 133',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 133?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_134' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_135' }
            ]
        });
        this.nodes.set('node_134', {
            id: 'node_134',
            speaker: 'NPC Guardian 134',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 134?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_135' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_136' }
            ]
        });
        this.nodes.set('node_135', {
            id: 'node_135',
            speaker: 'NPC Guardian 135',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 135?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_136' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_137' }
            ]
        });
        this.nodes.set('node_136', {
            id: 'node_136',
            speaker: 'NPC Guardian 136',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 136?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_137' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_138' }
            ]
        });
        this.nodes.set('node_137', {
            id: 'node_137',
            speaker: 'NPC Guardian 137',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 137?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_138' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_139' }
            ]
        });
        this.nodes.set('node_138', {
            id: 'node_138',
            speaker: 'NPC Guardian 138',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 138?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_139' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_140' }
            ]
        });
        this.nodes.set('node_139', {
            id: 'node_139',
            speaker: 'NPC Guardian 139',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 139?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_140' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_141' }
            ]
        });
        this.nodes.set('node_140', {
            id: 'node_140',
            speaker: 'NPC Guardian 140',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 140?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_141' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_142' }
            ]
        });
        this.nodes.set('node_141', {
            id: 'node_141',
            speaker: 'NPC Guardian 141',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 141?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_142' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_143' }
            ]
        });
        this.nodes.set('node_142', {
            id: 'node_142',
            speaker: 'NPC Guardian 142',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 142?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_143' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_144' }
            ]
        });
        this.nodes.set('node_143', {
            id: 'node_143',
            speaker: 'NPC Guardian 143',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 143?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_144' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_145' }
            ]
        });
        this.nodes.set('node_144', {
            id: 'node_144',
            speaker: 'NPC Guardian 144',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 144?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_145' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_146' }
            ]
        });
        this.nodes.set('node_145', {
            id: 'node_145',
            speaker: 'NPC Guardian 145',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 145?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_146' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_147' }
            ]
        });
        this.nodes.set('node_146', {
            id: 'node_146',
            speaker: 'NPC Guardian 146',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 146?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_147' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_148' }
            ]
        });
        this.nodes.set('node_147', {
            id: 'node_147',
            speaker: 'NPC Guardian 147',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 147?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_148' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_149' }
            ]
        });
        this.nodes.set('node_148', {
            id: 'node_148',
            speaker: 'NPC Guardian 148',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 148?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_149' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_150' }
            ]
        });
        this.nodes.set('node_149', {
            id: 'node_149',
            speaker: 'NPC Guardian 149',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 149?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_150' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_151' }
            ]
        });
        this.nodes.set('node_150', {
            id: 'node_150',
            speaker: 'NPC Guardian 150',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 150?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_151' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_152' }
            ]
        });
        this.nodes.set('node_151', {
            id: 'node_151',
            speaker: 'NPC Guardian 151',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 151?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_152' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_153' }
            ]
        });
        this.nodes.set('node_152', {
            id: 'node_152',
            speaker: 'NPC Guardian 152',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 152?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_153' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_154' }
            ]
        });
        this.nodes.set('node_153', {
            id: 'node_153',
            speaker: 'NPC Guardian 153',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 153?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_154' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_155' }
            ]
        });
        this.nodes.set('node_154', {
            id: 'node_154',
            speaker: 'NPC Guardian 154',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 154?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_155' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_156' }
            ]
        });
        this.nodes.set('node_155', {
            id: 'node_155',
            speaker: 'NPC Guardian 155',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 155?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_156' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_157' }
            ]
        });
        this.nodes.set('node_156', {
            id: 'node_156',
            speaker: 'NPC Guardian 156',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 156?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_157' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_158' }
            ]
        });
        this.nodes.set('node_157', {
            id: 'node_157',
            speaker: 'NPC Guardian 157',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 157?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_158' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_159' }
            ]
        });
        this.nodes.set('node_158', {
            id: 'node_158',
            speaker: 'NPC Guardian 158',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 158?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_159' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_160' }
            ]
        });
        this.nodes.set('node_159', {
            id: 'node_159',
            speaker: 'NPC Guardian 159',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 159?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_160' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_161' }
            ]
        });
        this.nodes.set('node_160', {
            id: 'node_160',
            speaker: 'NPC Guardian 160',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 160?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_161' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_162' }
            ]
        });
        this.nodes.set('node_161', {
            id: 'node_161',
            speaker: 'NPC Guardian 161',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 161?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_162' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_163' }
            ]
        });
        this.nodes.set('node_162', {
            id: 'node_162',
            speaker: 'NPC Guardian 162',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 162?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_163' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_164' }
            ]
        });
        this.nodes.set('node_163', {
            id: 'node_163',
            speaker: 'NPC Guardian 163',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 163?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_164' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_165' }
            ]
        });
        this.nodes.set('node_164', {
            id: 'node_164',
            speaker: 'NPC Guardian 164',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 164?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_165' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_166' }
            ]
        });
        this.nodes.set('node_165', {
            id: 'node_165',
            speaker: 'NPC Guardian 165',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 165?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_166' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_167' }
            ]
        });
        this.nodes.set('node_166', {
            id: 'node_166',
            speaker: 'NPC Guardian 166',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 166?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_167' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_168' }
            ]
        });
        this.nodes.set('node_167', {
            id: 'node_167',
            speaker: 'NPC Guardian 167',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 167?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_168' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_169' }
            ]
        });
        this.nodes.set('node_168', {
            id: 'node_168',
            speaker: 'NPC Guardian 168',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 168?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_169' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_170' }
            ]
        });
        this.nodes.set('node_169', {
            id: 'node_169',
            speaker: 'NPC Guardian 169',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 169?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_170' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_171' }
            ]
        });
        this.nodes.set('node_170', {
            id: 'node_170',
            speaker: 'NPC Guardian 170',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 170?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_171' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_172' }
            ]
        });
        this.nodes.set('node_171', {
            id: 'node_171',
            speaker: 'NPC Guardian 171',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 171?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_172' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_173' }
            ]
        });
        this.nodes.set('node_172', {
            id: 'node_172',
            speaker: 'NPC Guardian 172',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 172?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_173' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_174' }
            ]
        });
        this.nodes.set('node_173', {
            id: 'node_173',
            speaker: 'NPC Guardian 173',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 173?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_174' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_175' }
            ]
        });
        this.nodes.set('node_174', {
            id: 'node_174',
            speaker: 'NPC Guardian 174',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 174?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_175' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_176' }
            ]
        });
        this.nodes.set('node_175', {
            id: 'node_175',
            speaker: 'NPC Guardian 175',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 175?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_176' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_177' }
            ]
        });
        this.nodes.set('node_176', {
            id: 'node_176',
            speaker: 'NPC Guardian 176',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 176?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_177' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_178' }
            ]
        });
        this.nodes.set('node_177', {
            id: 'node_177',
            speaker: 'NPC Guardian 177',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 177?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_178' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_179' }
            ]
        });
        this.nodes.set('node_178', {
            id: 'node_178',
            speaker: 'NPC Guardian 178',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 178?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_179' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_180' }
            ]
        });
        this.nodes.set('node_179', {
            id: 'node_179',
            speaker: 'NPC Guardian 179',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 179?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_180' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_181' }
            ]
        });
        this.nodes.set('node_180', {
            id: 'node_180',
            speaker: 'NPC Guardian 180',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 180?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_181' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_182' }
            ]
        });
        this.nodes.set('node_181', {
            id: 'node_181',
            speaker: 'NPC Guardian 181',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 181?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_182' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_183' }
            ]
        });
        this.nodes.set('node_182', {
            id: 'node_182',
            speaker: 'NPC Guardian 182',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 182?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_183' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_184' }
            ]
        });
        this.nodes.set('node_183', {
            id: 'node_183',
            speaker: 'NPC Guardian 183',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 183?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_184' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_185' }
            ]
        });
        this.nodes.set('node_184', {
            id: 'node_184',
            speaker: 'NPC Guardian 184',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 184?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_185' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_186' }
            ]
        });
        this.nodes.set('node_185', {
            id: 'node_185',
            speaker: 'NPC Guardian 185',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 185?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_186' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_187' }
            ]
        });
        this.nodes.set('node_186', {
            id: 'node_186',
            speaker: 'NPC Guardian 186',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 186?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_187' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_188' }
            ]
        });
        this.nodes.set('node_187', {
            id: 'node_187',
            speaker: 'NPC Guardian 187',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 187?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_188' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_189' }
            ]
        });
        this.nodes.set('node_188', {
            id: 'node_188',
            speaker: 'NPC Guardian 188',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 188?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_189' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_190' }
            ]
        });
        this.nodes.set('node_189', {
            id: 'node_189',
            speaker: 'NPC Guardian 189',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 189?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_190' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_191' }
            ]
        });
        this.nodes.set('node_190', {
            id: 'node_190',
            speaker: 'NPC Guardian 190',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 190?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_191' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_192' }
            ]
        });
        this.nodes.set('node_191', {
            id: 'node_191',
            speaker: 'NPC Guardian 191',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 191?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_192' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_193' }
            ]
        });
        this.nodes.set('node_192', {
            id: 'node_192',
            speaker: 'NPC Guardian 192',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 192?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_193' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_194' }
            ]
        });
        this.nodes.set('node_193', {
            id: 'node_193',
            speaker: 'NPC Guardian 193',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 193?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_194' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_195' }
            ]
        });
        this.nodes.set('node_194', {
            id: 'node_194',
            speaker: 'NPC Guardian 194',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 194?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_195' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_196' }
            ]
        });
        this.nodes.set('node_195', {
            id: 'node_195',
            speaker: 'NPC Guardian 195',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 195?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_196' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_197' }
            ]
        });
        this.nodes.set('node_196', {
            id: 'node_196',
            speaker: 'NPC Guardian 196',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 196?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_197' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_198' }
            ]
        });
        this.nodes.set('node_197', {
            id: 'node_197',
            speaker: 'NPC Guardian 197',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 197?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_198' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_199' }
            ]
        });
        this.nodes.set('node_198', {
            id: 'node_198',
            speaker: 'NPC Guardian 198',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 198?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_199' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_200' }
            ]
        });
        this.nodes.set('node_199', {
            id: 'node_199',
            speaker: 'NPC Guardian 199',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 199?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_200' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_201' }
            ]
        });
        this.nodes.set('node_200', {
            id: 'node_200',
            speaker: 'NPC Guardian 200',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 200?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_201' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_202' }
            ]
        });
        this.nodes.set('node_201', {
            id: 'node_201',
            speaker: 'NPC Guardian 201',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 201?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_202' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_203' }
            ]
        });
        this.nodes.set('node_202', {
            id: 'node_202',
            speaker: 'NPC Guardian 202',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 202?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_203' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_204' }
            ]
        });
        this.nodes.set('node_203', {
            id: 'node_203',
            speaker: 'NPC Guardian 203',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 203?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_204' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_205' }
            ]
        });
        this.nodes.set('node_204', {
            id: 'node_204',
            speaker: 'NPC Guardian 204',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 204?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_205' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_206' }
            ]
        });
        this.nodes.set('node_205', {
            id: 'node_205',
            speaker: 'NPC Guardian 205',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 205?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_206' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_207' }
            ]
        });
        this.nodes.set('node_206', {
            id: 'node_206',
            speaker: 'NPC Guardian 206',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 206?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_207' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_208' }
            ]
        });
        this.nodes.set('node_207', {
            id: 'node_207',
            speaker: 'NPC Guardian 207',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 207?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_208' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_209' }
            ]
        });
        this.nodes.set('node_208', {
            id: 'node_208',
            speaker: 'NPC Guardian 208',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 208?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_209' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_210' }
            ]
        });
        this.nodes.set('node_209', {
            id: 'node_209',
            speaker: 'NPC Guardian 209',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 209?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_210' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_211' }
            ]
        });
        this.nodes.set('node_210', {
            id: 'node_210',
            speaker: 'NPC Guardian 210',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 210?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_211' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_212' }
            ]
        });
        this.nodes.set('node_211', {
            id: 'node_211',
            speaker: 'NPC Guardian 211',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 211?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_212' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_213' }
            ]
        });
        this.nodes.set('node_212', {
            id: 'node_212',
            speaker: 'NPC Guardian 212',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 212?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_213' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_214' }
            ]
        });
        this.nodes.set('node_213', {
            id: 'node_213',
            speaker: 'NPC Guardian 213',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 213?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_214' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_215' }
            ]
        });
        this.nodes.set('node_214', {
            id: 'node_214',
            speaker: 'NPC Guardian 214',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 214?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_215' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_216' }
            ]
        });
        this.nodes.set('node_215', {
            id: 'node_215',
            speaker: 'NPC Guardian 215',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 215?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_216' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_217' }
            ]
        });
        this.nodes.set('node_216', {
            id: 'node_216',
            speaker: 'NPC Guardian 216',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 216?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_217' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_218' }
            ]
        });
        this.nodes.set('node_217', {
            id: 'node_217',
            speaker: 'NPC Guardian 217',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 217?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_218' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_219' }
            ]
        });
        this.nodes.set('node_218', {
            id: 'node_218',
            speaker: 'NPC Guardian 218',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 218?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_219' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_220' }
            ]
        });
        this.nodes.set('node_219', {
            id: 'node_219',
            speaker: 'NPC Guardian 219',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 219?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_220' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_221' }
            ]
        });
        this.nodes.set('node_220', {
            id: 'node_220',
            speaker: 'NPC Guardian 220',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 220?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_221' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_222' }
            ]
        });
        this.nodes.set('node_221', {
            id: 'node_221',
            speaker: 'NPC Guardian 221',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 221?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_222' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_223' }
            ]
        });
        this.nodes.set('node_222', {
            id: 'node_222',
            speaker: 'NPC Guardian 222',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 222?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_223' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_224' }
            ]
        });
        this.nodes.set('node_223', {
            id: 'node_223',
            speaker: 'NPC Guardian 223',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 223?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_224' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_225' }
            ]
        });
        this.nodes.set('node_224', {
            id: 'node_224',
            speaker: 'NPC Guardian 224',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 224?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_225' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_226' }
            ]
        });
        this.nodes.set('node_225', {
            id: 'node_225',
            speaker: 'NPC Guardian 225',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 225?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_226' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_227' }
            ]
        });
        this.nodes.set('node_226', {
            id: 'node_226',
            speaker: 'NPC Guardian 226',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 226?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_227' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_228' }
            ]
        });
        this.nodes.set('node_227', {
            id: 'node_227',
            speaker: 'NPC Guardian 227',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 227?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_228' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_229' }
            ]
        });
        this.nodes.set('node_228', {
            id: 'node_228',
            speaker: 'NPC Guardian 228',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 228?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_229' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_230' }
            ]
        });
        this.nodes.set('node_229', {
            id: 'node_229',
            speaker: 'NPC Guardian 229',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 229?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_230' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_231' }
            ]
        });
        this.nodes.set('node_230', {
            id: 'node_230',
            speaker: 'NPC Guardian 230',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 230?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_231' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_232' }
            ]
        });
        this.nodes.set('node_231', {
            id: 'node_231',
            speaker: 'NPC Guardian 231',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 231?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_232' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_233' }
            ]
        });
        this.nodes.set('node_232', {
            id: 'node_232',
            speaker: 'NPC Guardian 232',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 232?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_233' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_234' }
            ]
        });
        this.nodes.set('node_233', {
            id: 'node_233',
            speaker: 'NPC Guardian 233',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 233?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_234' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_235' }
            ]
        });
        this.nodes.set('node_234', {
            id: 'node_234',
            speaker: 'NPC Guardian 234',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 234?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_235' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_236' }
            ]
        });
        this.nodes.set('node_235', {
            id: 'node_235',
            speaker: 'NPC Guardian 235',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 235?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_236' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_237' }
            ]
        });
        this.nodes.set('node_236', {
            id: 'node_236',
            speaker: 'NPC Guardian 236',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 236?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_237' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_238' }
            ]
        });
        this.nodes.set('node_237', {
            id: 'node_237',
            speaker: 'NPC Guardian 237',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 237?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_238' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_239' }
            ]
        });
        this.nodes.set('node_238', {
            id: 'node_238',
            speaker: 'NPC Guardian 238',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 238?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_239' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_240' }
            ]
        });
        this.nodes.set('node_239', {
            id: 'node_239',
            speaker: 'NPC Guardian 239',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 239?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_240' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_241' }
            ]
        });
        this.nodes.set('node_240', {
            id: 'node_240',
            speaker: 'NPC Guardian 240',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 240?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_241' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_242' }
            ]
        });
        this.nodes.set('node_241', {
            id: 'node_241',
            speaker: 'NPC Guardian 241',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 241?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_242' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_243' }
            ]
        });
        this.nodes.set('node_242', {
            id: 'node_242',
            speaker: 'NPC Guardian 242',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 242?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_243' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_244' }
            ]
        });
        this.nodes.set('node_243', {
            id: 'node_243',
            speaker: 'NPC Guardian 243',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 243?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_244' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_245' }
            ]
        });
        this.nodes.set('node_244', {
            id: 'node_244',
            speaker: 'NPC Guardian 244',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 244?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_245' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_246' }
            ]
        });
        this.nodes.set('node_245', {
            id: 'node_245',
            speaker: 'NPC Guardian 245',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 245?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_246' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_247' }
            ]
        });
        this.nodes.set('node_246', {
            id: 'node_246',
            speaker: 'NPC Guardian 246',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 246?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_247' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_248' }
            ]
        });
        this.nodes.set('node_247', {
            id: 'node_247',
            speaker: 'NPC Guardian 247',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 247?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_248' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_249' }
            ]
        });
        this.nodes.set('node_248', {
            id: 'node_248',
            speaker: 'NPC Guardian 248',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 248?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_249' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_250' }
            ]
        });
        this.nodes.set('node_249', {
            id: 'node_249',
            speaker: 'NPC Guardian 249',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 249?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_250' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_251' }
            ]
        });
        this.nodes.set('node_250', {
            id: 'node_250',
            speaker: 'NPC Guardian 250',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 250?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_251' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_252' }
            ]
        });
        this.nodes.set('node_251', {
            id: 'node_251',
            speaker: 'NPC Guardian 251',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 251?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_252' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_253' }
            ]
        });
        this.nodes.set('node_252', {
            id: 'node_252',
            speaker: 'NPC Guardian 252',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 252?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_253' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_254' }
            ]
        });
        this.nodes.set('node_253', {
            id: 'node_253',
            speaker: 'NPC Guardian 253',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 253?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_254' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_255' }
            ]
        });
        this.nodes.set('node_254', {
            id: 'node_254',
            speaker: 'NPC Guardian 254',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 254?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_255' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_256' }
            ]
        });
        this.nodes.set('node_255', {
            id: 'node_255',
            speaker: 'NPC Guardian 255',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 255?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_256' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_257' }
            ]
        });
        this.nodes.set('node_256', {
            id: 'node_256',
            speaker: 'NPC Guardian 256',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 256?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_257' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_258' }
            ]
        });
        this.nodes.set('node_257', {
            id: 'node_257',
            speaker: 'NPC Guardian 257',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 257?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_258' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_259' }
            ]
        });
        this.nodes.set('node_258', {
            id: 'node_258',
            speaker: 'NPC Guardian 258',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 258?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_259' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_260' }
            ]
        });
        this.nodes.set('node_259', {
            id: 'node_259',
            speaker: 'NPC Guardian 259',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 259?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_260' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_261' }
            ]
        });
        this.nodes.set('node_260', {
            id: 'node_260',
            speaker: 'NPC Guardian 260',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 260?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_261' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_262' }
            ]
        });
        this.nodes.set('node_261', {
            id: 'node_261',
            speaker: 'NPC Guardian 261',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 261?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_262' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_263' }
            ]
        });
        this.nodes.set('node_262', {
            id: 'node_262',
            speaker: 'NPC Guardian 262',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 262?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_263' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_264' }
            ]
        });
        this.nodes.set('node_263', {
            id: 'node_263',
            speaker: 'NPC Guardian 263',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 263?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_264' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_265' }
            ]
        });
        this.nodes.set('node_264', {
            id: 'node_264',
            speaker: 'NPC Guardian 264',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 264?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_265' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_266' }
            ]
        });
        this.nodes.set('node_265', {
            id: 'node_265',
            speaker: 'NPC Guardian 265',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 265?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_266' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_267' }
            ]
        });
        this.nodes.set('node_266', {
            id: 'node_266',
            speaker: 'NPC Guardian 266',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 266?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_267' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_268' }
            ]
        });
        this.nodes.set('node_267', {
            id: 'node_267',
            speaker: 'NPC Guardian 267',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 267?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_268' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_269' }
            ]
        });
        this.nodes.set('node_268', {
            id: 'node_268',
            speaker: 'NPC Guardian 268',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 268?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_269' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_270' }
            ]
        });
        this.nodes.set('node_269', {
            id: 'node_269',
            speaker: 'NPC Guardian 269',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 269?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_270' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_271' }
            ]
        });
        this.nodes.set('node_270', {
            id: 'node_270',
            speaker: 'NPC Guardian 270',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 270?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_271' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_272' }
            ]
        });
        this.nodes.set('node_271', {
            id: 'node_271',
            speaker: 'NPC Guardian 271',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 271?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_272' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_273' }
            ]
        });
        this.nodes.set('node_272', {
            id: 'node_272',
            speaker: 'NPC Guardian 272',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 272?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_273' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_274' }
            ]
        });
        this.nodes.set('node_273', {
            id: 'node_273',
            speaker: 'NPC Guardian 273',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 273?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_274' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_275' }
            ]
        });
        this.nodes.set('node_274', {
            id: 'node_274',
            speaker: 'NPC Guardian 274',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 274?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_275' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_276' }
            ]
        });
        this.nodes.set('node_275', {
            id: 'node_275',
            speaker: 'NPC Guardian 275',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 275?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_276' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_277' }
            ]
        });
        this.nodes.set('node_276', {
            id: 'node_276',
            speaker: 'NPC Guardian 276',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 276?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_277' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_278' }
            ]
        });
        this.nodes.set('node_277', {
            id: 'node_277',
            speaker: 'NPC Guardian 277',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 277?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_278' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_279' }
            ]
        });
        this.nodes.set('node_278', {
            id: 'node_278',
            speaker: 'NPC Guardian 278',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 278?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_279' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_280' }
            ]
        });
        this.nodes.set('node_279', {
            id: 'node_279',
            speaker: 'NPC Guardian 279',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 279?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_280' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_281' }
            ]
        });
        this.nodes.set('node_280', {
            id: 'node_280',
            speaker: 'NPC Guardian 280',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 280?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_281' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_282' }
            ]
        });
        this.nodes.set('node_281', {
            id: 'node_281',
            speaker: 'NPC Guardian 281',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 281?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_282' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_283' }
            ]
        });
        this.nodes.set('node_282', {
            id: 'node_282',
            speaker: 'NPC Guardian 282',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 282?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_283' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_284' }
            ]
        });
        this.nodes.set('node_283', {
            id: 'node_283',
            speaker: 'NPC Guardian 283',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 283?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_284' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_285' }
            ]
        });
        this.nodes.set('node_284', {
            id: 'node_284',
            speaker: 'NPC Guardian 284',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 284?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_285' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_286' }
            ]
        });
        this.nodes.set('node_285', {
            id: 'node_285',
            speaker: 'NPC Guardian 285',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 285?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_286' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_287' }
            ]
        });
        this.nodes.set('node_286', {
            id: 'node_286',
            speaker: 'NPC Guardian 286',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 286?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_287' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_288' }
            ]
        });
        this.nodes.set('node_287', {
            id: 'node_287',
            speaker: 'NPC Guardian 287',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 287?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_288' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_289' }
            ]
        });
        this.nodes.set('node_288', {
            id: 'node_288',
            speaker: 'NPC Guardian 288',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 288?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_289' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_290' }
            ]
        });
        this.nodes.set('node_289', {
            id: 'node_289',
            speaker: 'NPC Guardian 289',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 289?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_290' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_291' }
            ]
        });
        this.nodes.set('node_290', {
            id: 'node_290',
            speaker: 'NPC Guardian 290',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 290?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_291' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_292' }
            ]
        });
        this.nodes.set('node_291', {
            id: 'node_291',
            speaker: 'NPC Guardian 291',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 291?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_292' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_293' }
            ]
        });
        this.nodes.set('node_292', {
            id: 'node_292',
            speaker: 'NPC Guardian 292',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 292?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_293' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_294' }
            ]
        });
        this.nodes.set('node_293', {
            id: 'node_293',
            speaker: 'NPC Guardian 293',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 293?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_294' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_295' }
            ]
        });
        this.nodes.set('node_294', {
            id: 'node_294',
            speaker: 'NPC Guardian 294',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 294?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_295' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_296' }
            ]
        });
        this.nodes.set('node_295', {
            id: 'node_295',
            speaker: 'NPC Guardian 295',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 295?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_296' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_297' }
            ]
        });
        this.nodes.set('node_296', {
            id: 'node_296',
            speaker: 'NPC Guardian 296',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 296?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_297' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_298' }
            ]
        });
        this.nodes.set('node_297', {
            id: 'node_297',
            speaker: 'NPC Guardian 297',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 297?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_298' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_299' }
            ]
        });
        this.nodes.set('node_298', {
            id: 'node_298',
            speaker: 'NPC Guardian 298',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 298?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_299' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_300' }
            ]
        });
        this.nodes.set('node_299', {
            id: 'node_299',
            speaker: 'NPC Guardian 299',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 299?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_300' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_301' }
            ]
        });
        this.nodes.set('node_300', {
            id: 'node_300',
            speaker: 'NPC Guardian 300',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 300?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_301' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_302' }
            ]
        });
        this.nodes.set('node_301', {
            id: 'node_301',
            speaker: 'NPC Guardian 301',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 301?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_302' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_303' }
            ]
        });
        this.nodes.set('node_302', {
            id: 'node_302',
            speaker: 'NPC Guardian 302',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 302?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_303' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_304' }
            ]
        });
        this.nodes.set('node_303', {
            id: 'node_303',
            speaker: 'NPC Guardian 303',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 303?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_304' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_305' }
            ]
        });
        this.nodes.set('node_304', {
            id: 'node_304',
            speaker: 'NPC Guardian 304',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 304?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_305' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_306' }
            ]
        });
        this.nodes.set('node_305', {
            id: 'node_305',
            speaker: 'NPC Guardian 305',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 305?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_306' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_307' }
            ]
        });
        this.nodes.set('node_306', {
            id: 'node_306',
            speaker: 'NPC Guardian 306',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 306?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_307' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_308' }
            ]
        });
        this.nodes.set('node_307', {
            id: 'node_307',
            speaker: 'NPC Guardian 307',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 307?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_308' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_309' }
            ]
        });
        this.nodes.set('node_308', {
            id: 'node_308',
            speaker: 'NPC Guardian 308',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 308?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_309' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_310' }
            ]
        });
        this.nodes.set('node_309', {
            id: 'node_309',
            speaker: 'NPC Guardian 309',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 309?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_310' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_311' }
            ]
        });
        this.nodes.set('node_310', {
            id: 'node_310',
            speaker: 'NPC Guardian 310',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 310?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_311' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_312' }
            ]
        });
        this.nodes.set('node_311', {
            id: 'node_311',
            speaker: 'NPC Guardian 311',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 311?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_312' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_313' }
            ]
        });
        this.nodes.set('node_312', {
            id: 'node_312',
            speaker: 'NPC Guardian 312',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 312?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_313' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_314' }
            ]
        });
        this.nodes.set('node_313', {
            id: 'node_313',
            speaker: 'NPC Guardian 313',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 313?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_314' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_315' }
            ]
        });
        this.nodes.set('node_314', {
            id: 'node_314',
            speaker: 'NPC Guardian 314',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 314?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_315' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_316' }
            ]
        });
        this.nodes.set('node_315', {
            id: 'node_315',
            speaker: 'NPC Guardian 315',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 315?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_316' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_317' }
            ]
        });
        this.nodes.set('node_316', {
            id: 'node_316',
            speaker: 'NPC Guardian 316',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 316?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_317' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_318' }
            ]
        });
        this.nodes.set('node_317', {
            id: 'node_317',
            speaker: 'NPC Guardian 317',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 317?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_318' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_319' }
            ]
        });
        this.nodes.set('node_318', {
            id: 'node_318',
            speaker: 'NPC Guardian 318',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 318?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_319' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_320' }
            ]
        });
        this.nodes.set('node_319', {
            id: 'node_319',
            speaker: 'NPC Guardian 319',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 319?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_320' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_321' }
            ]
        });
        this.nodes.set('node_320', {
            id: 'node_320',
            speaker: 'NPC Guardian 320',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 320?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_321' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_322' }
            ]
        });
        this.nodes.set('node_321', {
            id: 'node_321',
            speaker: 'NPC Guardian 321',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 321?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_322' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_323' }
            ]
        });
        this.nodes.set('node_322', {
            id: 'node_322',
            speaker: 'NPC Guardian 322',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 322?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_323' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_324' }
            ]
        });
        this.nodes.set('node_323', {
            id: 'node_323',
            speaker: 'NPC Guardian 323',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 323?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_324' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_325' }
            ]
        });
        this.nodes.set('node_324', {
            id: 'node_324',
            speaker: 'NPC Guardian 324',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 324?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_325' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_326' }
            ]
        });
        this.nodes.set('node_325', {
            id: 'node_325',
            speaker: 'NPC Guardian 325',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 325?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_326' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_327' }
            ]
        });
        this.nodes.set('node_326', {
            id: 'node_326',
            speaker: 'NPC Guardian 326',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 326?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_327' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_328' }
            ]
        });
        this.nodes.set('node_327', {
            id: 'node_327',
            speaker: 'NPC Guardian 327',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 327?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_328' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_329' }
            ]
        });
        this.nodes.set('node_328', {
            id: 'node_328',
            speaker: 'NPC Guardian 328',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 328?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_329' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_330' }
            ]
        });
        this.nodes.set('node_329', {
            id: 'node_329',
            speaker: 'NPC Guardian 329',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 329?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_330' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_331' }
            ]
        });
        this.nodes.set('node_330', {
            id: 'node_330',
            speaker: 'NPC Guardian 330',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 330?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_331' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_332' }
            ]
        });
        this.nodes.set('node_331', {
            id: 'node_331',
            speaker: 'NPC Guardian 331',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 331?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_332' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_333' }
            ]
        });
        this.nodes.set('node_332', {
            id: 'node_332',
            speaker: 'NPC Guardian 332',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 332?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_333' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_334' }
            ]
        });
        this.nodes.set('node_333', {
            id: 'node_333',
            speaker: 'NPC Guardian 333',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 333?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_334' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_335' }
            ]
        });
        this.nodes.set('node_334', {
            id: 'node_334',
            speaker: 'NPC Guardian 334',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 334?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_335' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_336' }
            ]
        });
        this.nodes.set('node_335', {
            id: 'node_335',
            speaker: 'NPC Guardian 335',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 335?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_336' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_337' }
            ]
        });
        this.nodes.set('node_336', {
            id: 'node_336',
            speaker: 'NPC Guardian 336',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 336?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_337' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_338' }
            ]
        });
        this.nodes.set('node_337', {
            id: 'node_337',
            speaker: 'NPC Guardian 337',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 337?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_338' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_339' }
            ]
        });
        this.nodes.set('node_338', {
            id: 'node_338',
            speaker: 'NPC Guardian 338',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 338?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_339' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_340' }
            ]
        });
        this.nodes.set('node_339', {
            id: 'node_339',
            speaker: 'NPC Guardian 339',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 339?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_340' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_341' }
            ]
        });
        this.nodes.set('node_340', {
            id: 'node_340',
            speaker: 'NPC Guardian 340',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 340?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_341' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_342' }
            ]
        });
        this.nodes.set('node_341', {
            id: 'node_341',
            speaker: 'NPC Guardian 341',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 341?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_342' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_343' }
            ]
        });
        this.nodes.set('node_342', {
            id: 'node_342',
            speaker: 'NPC Guardian 342',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 342?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_343' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_344' }
            ]
        });
        this.nodes.set('node_343', {
            id: 'node_343',
            speaker: 'NPC Guardian 343',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 343?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_344' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_345' }
            ]
        });
        this.nodes.set('node_344', {
            id: 'node_344',
            speaker: 'NPC Guardian 344',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 344?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_345' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_346' }
            ]
        });
        this.nodes.set('node_345', {
            id: 'node_345',
            speaker: 'NPC Guardian 345',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 345?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_346' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_347' }
            ]
        });
        this.nodes.set('node_346', {
            id: 'node_346',
            speaker: 'NPC Guardian 346',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 346?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_347' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_348' }
            ]
        });
        this.nodes.set('node_347', {
            id: 'node_347',
            speaker: 'NPC Guardian 347',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 347?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_348' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_349' }
            ]
        });
        this.nodes.set('node_348', {
            id: 'node_348',
            speaker: 'NPC Guardian 348',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 348?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_349' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_350' }
            ]
        });
        this.nodes.set('node_349', {
            id: 'node_349',
            speaker: 'NPC Guardian 349',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 349?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_350' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_351' }
            ]
        });
        this.nodes.set('node_350', {
            id: 'node_350',
            speaker: 'NPC Guardian 350',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 350?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_351' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_352' }
            ]
        });
        this.nodes.set('node_351', {
            id: 'node_351',
            speaker: 'NPC Guardian 351',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 351?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_352' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_353' }
            ]
        });
        this.nodes.set('node_352', {
            id: 'node_352',
            speaker: 'NPC Guardian 352',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 352?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_353' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_354' }
            ]
        });
        this.nodes.set('node_353', {
            id: 'node_353',
            speaker: 'NPC Guardian 353',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 353?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_354' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_355' }
            ]
        });
        this.nodes.set('node_354', {
            id: 'node_354',
            speaker: 'NPC Guardian 354',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 354?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_355' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_356' }
            ]
        });
        this.nodes.set('node_355', {
            id: 'node_355',
            speaker: 'NPC Guardian 355',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 355?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_356' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_357' }
            ]
        });
        this.nodes.set('node_356', {
            id: 'node_356',
            speaker: 'NPC Guardian 356',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 356?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_357' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_358' }
            ]
        });
        this.nodes.set('node_357', {
            id: 'node_357',
            speaker: 'NPC Guardian 357',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 357?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_358' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_359' }
            ]
        });
        this.nodes.set('node_358', {
            id: 'node_358',
            speaker: 'NPC Guardian 358',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 358?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_359' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_360' }
            ]
        });
        this.nodes.set('node_359', {
            id: 'node_359',
            speaker: 'NPC Guardian 359',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 359?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_360' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_361' }
            ]
        });
        this.nodes.set('node_360', {
            id: 'node_360',
            speaker: 'NPC Guardian 360',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 360?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_361' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_362' }
            ]
        });
        this.nodes.set('node_361', {
            id: 'node_361',
            speaker: 'NPC Guardian 361',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 361?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_362' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_363' }
            ]
        });
        this.nodes.set('node_362', {
            id: 'node_362',
            speaker: 'NPC Guardian 362',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 362?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_363' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_364' }
            ]
        });
        this.nodes.set('node_363', {
            id: 'node_363',
            speaker: 'NPC Guardian 363',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 363?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_364' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_365' }
            ]
        });
        this.nodes.set('node_364', {
            id: 'node_364',
            speaker: 'NPC Guardian 364',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 364?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_365' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_366' }
            ]
        });
        this.nodes.set('node_365', {
            id: 'node_365',
            speaker: 'NPC Guardian 365',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 365?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_366' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_367' }
            ]
        });
        this.nodes.set('node_366', {
            id: 'node_366',
            speaker: 'NPC Guardian 366',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 366?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_367' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_368' }
            ]
        });
        this.nodes.set('node_367', {
            id: 'node_367',
            speaker: 'NPC Guardian 367',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 367?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_368' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_369' }
            ]
        });
        this.nodes.set('node_368', {
            id: 'node_368',
            speaker: 'NPC Guardian 368',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 368?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_369' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_370' }
            ]
        });
        this.nodes.set('node_369', {
            id: 'node_369',
            speaker: 'NPC Guardian 369',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 369?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_370' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_371' }
            ]
        });
        this.nodes.set('node_370', {
            id: 'node_370',
            speaker: 'NPC Guardian 370',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 370?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_371' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_372' }
            ]
        });
        this.nodes.set('node_371', {
            id: 'node_371',
            speaker: 'NPC Guardian 371',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 371?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_372' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_373' }
            ]
        });
        this.nodes.set('node_372', {
            id: 'node_372',
            speaker: 'NPC Guardian 372',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 372?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_373' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_374' }
            ]
        });
        this.nodes.set('node_373', {
            id: 'node_373',
            speaker: 'NPC Guardian 373',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 373?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_374' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_375' }
            ]
        });
        this.nodes.set('node_374', {
            id: 'node_374',
            speaker: 'NPC Guardian 374',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 374?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_375' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_376' }
            ]
        });
        this.nodes.set('node_375', {
            id: 'node_375',
            speaker: 'NPC Guardian 375',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 375?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_376' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_377' }
            ]
        });
        this.nodes.set('node_376', {
            id: 'node_376',
            speaker: 'NPC Guardian 376',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 376?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_377' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_378' }
            ]
        });
        this.nodes.set('node_377', {
            id: 'node_377',
            speaker: 'NPC Guardian 377',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 377?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_378' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_379' }
            ]
        });
        this.nodes.set('node_378', {
            id: 'node_378',
            speaker: 'NPC Guardian 378',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 378?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_379' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_380' }
            ]
        });
        this.nodes.set('node_379', {
            id: 'node_379',
            speaker: 'NPC Guardian 379',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 379?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_380' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_381' }
            ]
        });
        this.nodes.set('node_380', {
            id: 'node_380',
            speaker: 'NPC Guardian 380',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 380?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_381' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_382' }
            ]
        });
        this.nodes.set('node_381', {
            id: 'node_381',
            speaker: 'NPC Guardian 381',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 381?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_382' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_383' }
            ]
        });
        this.nodes.set('node_382', {
            id: 'node_382',
            speaker: 'NPC Guardian 382',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 382?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_383' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_384' }
            ]
        });
        this.nodes.set('node_383', {
            id: 'node_383',
            speaker: 'NPC Guardian 383',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 383?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_384' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_385' }
            ]
        });
        this.nodes.set('node_384', {
            id: 'node_384',
            speaker: 'NPC Guardian 384',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 384?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_385' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_386' }
            ]
        });
        this.nodes.set('node_385', {
            id: 'node_385',
            speaker: 'NPC Guardian 385',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 385?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_386' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_387' }
            ]
        });
        this.nodes.set('node_386', {
            id: 'node_386',
            speaker: 'NPC Guardian 386',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 386?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_387' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_388' }
            ]
        });
        this.nodes.set('node_387', {
            id: 'node_387',
            speaker: 'NPC Guardian 387',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 387?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_388' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_389' }
            ]
        });
        this.nodes.set('node_388', {
            id: 'node_388',
            speaker: 'NPC Guardian 388',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 388?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_389' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_390' }
            ]
        });
        this.nodes.set('node_389', {
            id: 'node_389',
            speaker: 'NPC Guardian 389',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 389?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_390' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_391' }
            ]
        });
        this.nodes.set('node_390', {
            id: 'node_390',
            speaker: 'NPC Guardian 390',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 390?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_391' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_392' }
            ]
        });
        this.nodes.set('node_391', {
            id: 'node_391',
            speaker: 'NPC Guardian 391',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 391?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_392' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_393' }
            ]
        });
        this.nodes.set('node_392', {
            id: 'node_392',
            speaker: 'NPC Guardian 392',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 392?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_393' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_394' }
            ]
        });
        this.nodes.set('node_393', {
            id: 'node_393',
            speaker: 'NPC Guardian 393',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 393?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_394' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_395' }
            ]
        });
        this.nodes.set('node_394', {
            id: 'node_394',
            speaker: 'NPC Guardian 394',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 394?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_395' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_396' }
            ]
        });
        this.nodes.set('node_395', {
            id: 'node_395',
            speaker: 'NPC Guardian 395',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 395?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_396' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_397' }
            ]
        });
        this.nodes.set('node_396', {
            id: 'node_396',
            speaker: 'NPC Guardian 396',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 396?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_397' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_398' }
            ]
        });
        this.nodes.set('node_397', {
            id: 'node_397',
            speaker: 'NPC Guardian 397',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 397?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_398' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_399' }
            ]
        });
        this.nodes.set('node_398', {
            id: 'node_398',
            speaker: 'NPC Guardian 398',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 398?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_399' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_400' }
            ]
        });
        this.nodes.set('node_399', {
            id: 'node_399',
            speaker: 'NPC Guardian 399',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 399?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_400' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_401' }
            ]
        });
        this.nodes.set('node_400', {
            id: 'node_400',
            speaker: 'NPC Guardian 400',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 400?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_401' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_402' }
            ]
        });
        this.nodes.set('node_401', {
            id: 'node_401',
            speaker: 'NPC Guardian 401',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 401?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_402' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_403' }
            ]
        });
        this.nodes.set('node_402', {
            id: 'node_402',
            speaker: 'NPC Guardian 402',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 402?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_403' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_404' }
            ]
        });
        this.nodes.set('node_403', {
            id: 'node_403',
            speaker: 'NPC Guardian 403',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 403?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_404' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_405' }
            ]
        });
        this.nodes.set('node_404', {
            id: 'node_404',
            speaker: 'NPC Guardian 404',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 404?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_405' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_406' }
            ]
        });
        this.nodes.set('node_405', {
            id: 'node_405',
            speaker: 'NPC Guardian 405',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 405?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_406' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_407' }
            ]
        });
        this.nodes.set('node_406', {
            id: 'node_406',
            speaker: 'NPC Guardian 406',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 406?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_407' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_408' }
            ]
        });
        this.nodes.set('node_407', {
            id: 'node_407',
            speaker: 'NPC Guardian 407',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 407?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_408' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_409' }
            ]
        });
        this.nodes.set('node_408', {
            id: 'node_408',
            speaker: 'NPC Guardian 408',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 408?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_409' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_410' }
            ]
        });
        this.nodes.set('node_409', {
            id: 'node_409',
            speaker: 'NPC Guardian 409',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 409?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_410' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_411' }
            ]
        });
        this.nodes.set('node_410', {
            id: 'node_410',
            speaker: 'NPC Guardian 410',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 410?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_411' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_412' }
            ]
        });
        this.nodes.set('node_411', {
            id: 'node_411',
            speaker: 'NPC Guardian 411',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 411?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_412' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_413' }
            ]
        });
        this.nodes.set('node_412', {
            id: 'node_412',
            speaker: 'NPC Guardian 412',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 412?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_413' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_414' }
            ]
        });
        this.nodes.set('node_413', {
            id: 'node_413',
            speaker: 'NPC Guardian 413',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 413?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_414' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_415' }
            ]
        });
        this.nodes.set('node_414', {
            id: 'node_414',
            speaker: 'NPC Guardian 414',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 414?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_415' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_416' }
            ]
        });
        this.nodes.set('node_415', {
            id: 'node_415',
            speaker: 'NPC Guardian 415',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 415?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_416' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_417' }
            ]
        });
        this.nodes.set('node_416', {
            id: 'node_416',
            speaker: 'NPC Guardian 416',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 416?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_417' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_418' }
            ]
        });
        this.nodes.set('node_417', {
            id: 'node_417',
            speaker: 'NPC Guardian 417',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 417?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_418' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_419' }
            ]
        });
        this.nodes.set('node_418', {
            id: 'node_418',
            speaker: 'NPC Guardian 418',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 418?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_419' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_420' }
            ]
        });
        this.nodes.set('node_419', {
            id: 'node_419',
            speaker: 'NPC Guardian 419',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 419?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_420' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_421' }
            ]
        });
        this.nodes.set('node_420', {
            id: 'node_420',
            speaker: 'NPC Guardian 420',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 420?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_421' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_422' }
            ]
        });
        this.nodes.set('node_421', {
            id: 'node_421',
            speaker: 'NPC Guardian 421',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 421?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_422' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_423' }
            ]
        });
        this.nodes.set('node_422', {
            id: 'node_422',
            speaker: 'NPC Guardian 422',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 422?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_423' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_424' }
            ]
        });
        this.nodes.set('node_423', {
            id: 'node_423',
            speaker: 'NPC Guardian 423',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 423?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_424' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_425' }
            ]
        });
        this.nodes.set('node_424', {
            id: 'node_424',
            speaker: 'NPC Guardian 424',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 424?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_425' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_426' }
            ]
        });
        this.nodes.set('node_425', {
            id: 'node_425',
            speaker: 'NPC Guardian 425',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 425?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_426' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_427' }
            ]
        });
        this.nodes.set('node_426', {
            id: 'node_426',
            speaker: 'NPC Guardian 426',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 426?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_427' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_428' }
            ]
        });
        this.nodes.set('node_427', {
            id: 'node_427',
            speaker: 'NPC Guardian 427',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 427?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_428' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_429' }
            ]
        });
        this.nodes.set('node_428', {
            id: 'node_428',
            speaker: 'NPC Guardian 428',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 428?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_429' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_430' }
            ]
        });
        this.nodes.set('node_429', {
            id: 'node_429',
            speaker: 'NPC Guardian 429',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 429?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_430' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_431' }
            ]
        });
        this.nodes.set('node_430', {
            id: 'node_430',
            speaker: 'NPC Guardian 430',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 430?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_431' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_432' }
            ]
        });
        this.nodes.set('node_431', {
            id: 'node_431',
            speaker: 'NPC Guardian 431',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 431?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_432' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_433' }
            ]
        });
        this.nodes.set('node_432', {
            id: 'node_432',
            speaker: 'NPC Guardian 432',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 432?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_433' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_434' }
            ]
        });
        this.nodes.set('node_433', {
            id: 'node_433',
            speaker: 'NPC Guardian 433',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 433?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_434' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_435' }
            ]
        });
        this.nodes.set('node_434', {
            id: 'node_434',
            speaker: 'NPC Guardian 434',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 434?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_435' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_436' }
            ]
        });
        this.nodes.set('node_435', {
            id: 'node_435',
            speaker: 'NPC Guardian 435',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 435?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_436' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_437' }
            ]
        });
        this.nodes.set('node_436', {
            id: 'node_436',
            speaker: 'NPC Guardian 436',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 436?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_437' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_438' }
            ]
        });
        this.nodes.set('node_437', {
            id: 'node_437',
            speaker: 'NPC Guardian 437',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 437?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_438' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_439' }
            ]
        });
        this.nodes.set('node_438', {
            id: 'node_438',
            speaker: 'NPC Guardian 438',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 438?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_439' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_440' }
            ]
        });
        this.nodes.set('node_439', {
            id: 'node_439',
            speaker: 'NPC Guardian 439',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 439?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_440' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_441' }
            ]
        });
        this.nodes.set('node_440', {
            id: 'node_440',
            speaker: 'NPC Guardian 440',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 440?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_441' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_442' }
            ]
        });
        this.nodes.set('node_441', {
            id: 'node_441',
            speaker: 'NPC Guardian 441',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 441?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_442' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_443' }
            ]
        });
        this.nodes.set('node_442', {
            id: 'node_442',
            speaker: 'NPC Guardian 442',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 442?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_443' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_444' }
            ]
        });
        this.nodes.set('node_443', {
            id: 'node_443',
            speaker: 'NPC Guardian 443',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 443?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_444' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_445' }
            ]
        });
        this.nodes.set('node_444', {
            id: 'node_444',
            speaker: 'NPC Guardian 444',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 444?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_445' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_446' }
            ]
        });
        this.nodes.set('node_445', {
            id: 'node_445',
            speaker: 'NPC Guardian 445',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 445?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_446' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_447' }
            ]
        });
        this.nodes.set('node_446', {
            id: 'node_446',
            speaker: 'NPC Guardian 446',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 446?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_447' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_448' }
            ]
        });
        this.nodes.set('node_447', {
            id: 'node_447',
            speaker: 'NPC Guardian 447',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 447?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_448' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_449' }
            ]
        });
        this.nodes.set('node_448', {
            id: 'node_448',
            speaker: 'NPC Guardian 448',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 448?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_449' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_450' }
            ]
        });
        this.nodes.set('node_449', {
            id: 'node_449',
            speaker: 'NPC Guardian 449',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 449?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_450' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_450' }
            ]
        });
        this.nodes.set('node_450', {
            id: 'node_450',
            speaker: 'NPC Guardian 450',
            text: 'Greetings traveler! Will you assist in conquering dungeon level 450?',
            options: [
                { responseText: 'Yes, I shall fight!', nextNodeId: 'node_451' },
                { responseText: 'Tell me more about rewards.', nextNodeId: 'node_450' }
            ]
        });
    }
    static getNode(id) {
        if (this.nodes.size === 0)
            this.initialize();
        return this.nodes.get(id);
    }
    static getCount() {
        if (this.nodes.size === 0)
            this.initialize();
        return this.nodes.size;
    }
}
exports.DialogueMatrix = DialogueMatrix;
//# sourceMappingURL=DialogueMatrix.js.map