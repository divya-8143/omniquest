export interface BiomeTile {
  tileId: number;
  name: string;
  walkable: boolean;
  color: string;
  friction: number;
}

export class BiomeCatalog {
  private static tiles: Map<number, BiomeTile> = new Map();

  static initialize(): void {
    this.tiles.set(1, {
      tileId: 1,
      name: 'Tile Node 1',
      walkable: true,
      color: '#01e240',
      friction: 0.8400000000000001
    });
    this.tiles.set(2, {
      tileId: 2,
      name: 'Tile Node 2',
      walkable: true,
      color: '#03c480',
      friction: 0.88
    });
    this.tiles.set(3, {
      tileId: 3,
      name: 'Tile Node 3',
      walkable: true,
      color: '#05a6c0',
      friction: 0.92
    });
    this.tiles.set(4, {
      tileId: 4,
      name: 'Tile Node 4',
      walkable: true,
      color: '#078900',
      friction: 0.9600000000000001
    });
    this.tiles.set(5, {
      tileId: 5,
      name: 'Tile Node 5',
      walkable: true,
      color: '#096b40',
      friction: 0.8
    });
    this.tiles.set(6, {
      tileId: 6,
      name: 'Tile Node 6',
      walkable: true,
      color: '#0b4d80',
      friction: 0.8400000000000001
    });
    this.tiles.set(7, {
      tileId: 7,
      name: 'Tile Node 7',
      walkable: false,
      color: '#0d2fc0',
      friction: 0.88
    });
    this.tiles.set(8, {
      tileId: 8,
      name: 'Tile Node 8',
      walkable: true,
      color: '#0f1200',
      friction: 0.92
    });
    this.tiles.set(9, {
      tileId: 9,
      name: 'Tile Node 9',
      walkable: true,
      color: '#10f440',
      friction: 0.9600000000000001
    });
    this.tiles.set(10, {
      tileId: 10,
      name: 'Tile Node 10',
      walkable: true,
      color: '#12d680',
      friction: 0.8
    });
    this.tiles.set(11, {
      tileId: 11,
      name: 'Tile Node 11',
      walkable: true,
      color: '#14b8c0',
      friction: 0.8400000000000001
    });
    this.tiles.set(12, {
      tileId: 12,
      name: 'Tile Node 12',
      walkable: true,
      color: '#169b00',
      friction: 0.88
    });
    this.tiles.set(13, {
      tileId: 13,
      name: 'Tile Node 13',
      walkable: true,
      color: '#187d40',
      friction: 0.92
    });
    this.tiles.set(14, {
      tileId: 14,
      name: 'Tile Node 14',
      walkable: false,
      color: '#1a5f80',
      friction: 0.9600000000000001
    });
    this.tiles.set(15, {
      tileId: 15,
      name: 'Tile Node 15',
      walkable: true,
      color: '#1c41c0',
      friction: 0.8
    });
    this.tiles.set(16, {
      tileId: 16,
      name: 'Tile Node 16',
      walkable: true,
      color: '#1e2400',
      friction: 0.8400000000000001
    });
    this.tiles.set(17, {
      tileId: 17,
      name: 'Tile Node 17',
      walkable: true,
      color: '#200640',
      friction: 0.88
    });
    this.tiles.set(18, {
      tileId: 18,
      name: 'Tile Node 18',
      walkable: true,
      color: '#21e880',
      friction: 0.92
    });
    this.tiles.set(19, {
      tileId: 19,
      name: 'Tile Node 19',
      walkable: true,
      color: '#23cac0',
      friction: 0.9600000000000001
    });
    this.tiles.set(20, {
      tileId: 20,
      name: 'Tile Node 20',
      walkable: true,
      color: '#25ad00',
      friction: 0.8
    });
    this.tiles.set(21, {
      tileId: 21,
      name: 'Tile Node 21',
      walkable: false,
      color: '#278f40',
      friction: 0.8400000000000001
    });
    this.tiles.set(22, {
      tileId: 22,
      name: 'Tile Node 22',
      walkable: true,
      color: '#297180',
      friction: 0.88
    });
    this.tiles.set(23, {
      tileId: 23,
      name: 'Tile Node 23',
      walkable: true,
      color: '#2b53c0',
      friction: 0.92
    });
    this.tiles.set(24, {
      tileId: 24,
      name: 'Tile Node 24',
      walkable: true,
      color: '#2d3600',
      friction: 0.9600000000000001
    });
    this.tiles.set(25, {
      tileId: 25,
      name: 'Tile Node 25',
      walkable: true,
      color: '#2f1840',
      friction: 0.8
    });
    this.tiles.set(26, {
      tileId: 26,
      name: 'Tile Node 26',
      walkable: true,
      color: '#30fa80',
      friction: 0.8400000000000001
    });
    this.tiles.set(27, {
      tileId: 27,
      name: 'Tile Node 27',
      walkable: true,
      color: '#32dcc0',
      friction: 0.88
    });
    this.tiles.set(28, {
      tileId: 28,
      name: 'Tile Node 28',
      walkable: false,
      color: '#34bf00',
      friction: 0.92
    });
    this.tiles.set(29, {
      tileId: 29,
      name: 'Tile Node 29',
      walkable: true,
      color: '#36a140',
      friction: 0.9600000000000001
    });
    this.tiles.set(30, {
      tileId: 30,
      name: 'Tile Node 30',
      walkable: true,
      color: '#388380',
      friction: 0.8
    });
    this.tiles.set(31, {
      tileId: 31,
      name: 'Tile Node 31',
      walkable: true,
      color: '#3a65c0',
      friction: 0.8400000000000001
    });
    this.tiles.set(32, {
      tileId: 32,
      name: 'Tile Node 32',
      walkable: true,
      color: '#3c4800',
      friction: 0.88
    });
    this.tiles.set(33, {
      tileId: 33,
      name: 'Tile Node 33',
      walkable: true,
      color: '#3e2a40',
      friction: 0.92
    });
    this.tiles.set(34, {
      tileId: 34,
      name: 'Tile Node 34',
      walkable: true,
      color: '#400c80',
      friction: 0.9600000000000001
    });
    this.tiles.set(35, {
      tileId: 35,
      name: 'Tile Node 35',
      walkable: false,
      color: '#41eec0',
      friction: 0.8
    });
    this.tiles.set(36, {
      tileId: 36,
      name: 'Tile Node 36',
      walkable: true,
      color: '#43d100',
      friction: 0.8400000000000001
    });
    this.tiles.set(37, {
      tileId: 37,
      name: 'Tile Node 37',
      walkable: true,
      color: '#45b340',
      friction: 0.88
    });
    this.tiles.set(38, {
      tileId: 38,
      name: 'Tile Node 38',
      walkable: true,
      color: '#479580',
      friction: 0.92
    });
    this.tiles.set(39, {
      tileId: 39,
      name: 'Tile Node 39',
      walkable: true,
      color: '#4977c0',
      friction: 0.9600000000000001
    });
    this.tiles.set(40, {
      tileId: 40,
      name: 'Tile Node 40',
      walkable: true,
      color: '#4b5a00',
      friction: 0.8
    });
    this.tiles.set(41, {
      tileId: 41,
      name: 'Tile Node 41',
      walkable: true,
      color: '#4d3c40',
      friction: 0.8400000000000001
    });
    this.tiles.set(42, {
      tileId: 42,
      name: 'Tile Node 42',
      walkable: false,
      color: '#4f1e80',
      friction: 0.88
    });
    this.tiles.set(43, {
      tileId: 43,
      name: 'Tile Node 43',
      walkable: true,
      color: '#5100c0',
      friction: 0.92
    });
    this.tiles.set(44, {
      tileId: 44,
      name: 'Tile Node 44',
      walkable: true,
      color: '#52e300',
      friction: 0.9600000000000001
    });
    this.tiles.set(45, {
      tileId: 45,
      name: 'Tile Node 45',
      walkable: true,
      color: '#54c540',
      friction: 0.8
    });
    this.tiles.set(46, {
      tileId: 46,
      name: 'Tile Node 46',
      walkable: true,
      color: '#56a780',
      friction: 0.8400000000000001
    });
    this.tiles.set(47, {
      tileId: 47,
      name: 'Tile Node 47',
      walkable: true,
      color: '#5889c0',
      friction: 0.88
    });
    this.tiles.set(48, {
      tileId: 48,
      name: 'Tile Node 48',
      walkable: true,
      color: '#5a6c00',
      friction: 0.92
    });
    this.tiles.set(49, {
      tileId: 49,
      name: 'Tile Node 49',
      walkable: false,
      color: '#5c4e40',
      friction: 0.9600000000000001
    });
    this.tiles.set(50, {
      tileId: 50,
      name: 'Tile Node 50',
      walkable: true,
      color: '#5e3080',
      friction: 0.8
    });
    this.tiles.set(51, {
      tileId: 51,
      name: 'Tile Node 51',
      walkable: true,
      color: '#6012c0',
      friction: 0.8400000000000001
    });
    this.tiles.set(52, {
      tileId: 52,
      name: 'Tile Node 52',
      walkable: true,
      color: '#61f500',
      friction: 0.88
    });
    this.tiles.set(53, {
      tileId: 53,
      name: 'Tile Node 53',
      walkable: true,
      color: '#63d740',
      friction: 0.92
    });
    this.tiles.set(54, {
      tileId: 54,
      name: 'Tile Node 54',
      walkable: true,
      color: '#65b980',
      friction: 0.9600000000000001
    });
    this.tiles.set(55, {
      tileId: 55,
      name: 'Tile Node 55',
      walkable: true,
      color: '#679bc0',
      friction: 0.8
    });
    this.tiles.set(56, {
      tileId: 56,
      name: 'Tile Node 56',
      walkable: false,
      color: '#697e00',
      friction: 0.8400000000000001
    });
    this.tiles.set(57, {
      tileId: 57,
      name: 'Tile Node 57',
      walkable: true,
      color: '#6b6040',
      friction: 0.88
    });
    this.tiles.set(58, {
      tileId: 58,
      name: 'Tile Node 58',
      walkable: true,
      color: '#6d4280',
      friction: 0.92
    });
    this.tiles.set(59, {
      tileId: 59,
      name: 'Tile Node 59',
      walkable: true,
      color: '#6f24c0',
      friction: 0.9600000000000001
    });
    this.tiles.set(60, {
      tileId: 60,
      name: 'Tile Node 60',
      walkable: true,
      color: '#710700',
      friction: 0.8
    });
    this.tiles.set(61, {
      tileId: 61,
      name: 'Tile Node 61',
      walkable: true,
      color: '#72e940',
      friction: 0.8400000000000001
    });
    this.tiles.set(62, {
      tileId: 62,
      name: 'Tile Node 62',
      walkable: true,
      color: '#74cb80',
      friction: 0.88
    });
    this.tiles.set(63, {
      tileId: 63,
      name: 'Tile Node 63',
      walkable: false,
      color: '#76adc0',
      friction: 0.92
    });
    this.tiles.set(64, {
      tileId: 64,
      name: 'Tile Node 64',
      walkable: true,
      color: '#789000',
      friction: 0.9600000000000001
    });
    this.tiles.set(65, {
      tileId: 65,
      name: 'Tile Node 65',
      walkable: true,
      color: '#7a7240',
      friction: 0.8
    });
    this.tiles.set(66, {
      tileId: 66,
      name: 'Tile Node 66',
      walkable: true,
      color: '#7c5480',
      friction: 0.8400000000000001
    });
    this.tiles.set(67, {
      tileId: 67,
      name: 'Tile Node 67',
      walkable: true,
      color: '#7e36c0',
      friction: 0.88
    });
    this.tiles.set(68, {
      tileId: 68,
      name: 'Tile Node 68',
      walkable: true,
      color: '#801900',
      friction: 0.92
    });
    this.tiles.set(69, {
      tileId: 69,
      name: 'Tile Node 69',
      walkable: true,
      color: '#81fb40',
      friction: 0.9600000000000001
    });
    this.tiles.set(70, {
      tileId: 70,
      name: 'Tile Node 70',
      walkable: false,
      color: '#83dd80',
      friction: 0.8
    });
    this.tiles.set(71, {
      tileId: 71,
      name: 'Tile Node 71',
      walkable: true,
      color: '#85bfc0',
      friction: 0.8400000000000001
    });
    this.tiles.set(72, {
      tileId: 72,
      name: 'Tile Node 72',
      walkable: true,
      color: '#87a200',
      friction: 0.88
    });
    this.tiles.set(73, {
      tileId: 73,
      name: 'Tile Node 73',
      walkable: true,
      color: '#898440',
      friction: 0.92
    });
    this.tiles.set(74, {
      tileId: 74,
      name: 'Tile Node 74',
      walkable: true,
      color: '#8b6680',
      friction: 0.9600000000000001
    });
    this.tiles.set(75, {
      tileId: 75,
      name: 'Tile Node 75',
      walkable: true,
      color: '#8d48c0',
      friction: 0.8
    });
    this.tiles.set(76, {
      tileId: 76,
      name: 'Tile Node 76',
      walkable: true,
      color: '#8f2b00',
      friction: 0.8400000000000001
    });
    this.tiles.set(77, {
      tileId: 77,
      name: 'Tile Node 77',
      walkable: false,
      color: '#910d40',
      friction: 0.88
    });
    this.tiles.set(78, {
      tileId: 78,
      name: 'Tile Node 78',
      walkable: true,
      color: '#92ef80',
      friction: 0.92
    });
    this.tiles.set(79, {
      tileId: 79,
      name: 'Tile Node 79',
      walkable: true,
      color: '#94d1c0',
      friction: 0.9600000000000001
    });
    this.tiles.set(80, {
      tileId: 80,
      name: 'Tile Node 80',
      walkable: true,
      color: '#96b400',
      friction: 0.8
    });
    this.tiles.set(81, {
      tileId: 81,
      name: 'Tile Node 81',
      walkable: true,
      color: '#989640',
      friction: 0.8400000000000001
    });
    this.tiles.set(82, {
      tileId: 82,
      name: 'Tile Node 82',
      walkable: true,
      color: '#9a7880',
      friction: 0.88
    });
    this.tiles.set(83, {
      tileId: 83,
      name: 'Tile Node 83',
      walkable: true,
      color: '#9c5ac0',
      friction: 0.92
    });
    this.tiles.set(84, {
      tileId: 84,
      name: 'Tile Node 84',
      walkable: false,
      color: '#9e3d00',
      friction: 0.9600000000000001
    });
    this.tiles.set(85, {
      tileId: 85,
      name: 'Tile Node 85',
      walkable: true,
      color: '#a01f40',
      friction: 0.8
    });
    this.tiles.set(86, {
      tileId: 86,
      name: 'Tile Node 86',
      walkable: true,
      color: '#a20180',
      friction: 0.8400000000000001
    });
    this.tiles.set(87, {
      tileId: 87,
      name: 'Tile Node 87',
      walkable: true,
      color: '#a3e3c0',
      friction: 0.88
    });
    this.tiles.set(88, {
      tileId: 88,
      name: 'Tile Node 88',
      walkable: true,
      color: '#a5c600',
      friction: 0.92
    });
    this.tiles.set(89, {
      tileId: 89,
      name: 'Tile Node 89',
      walkable: true,
      color: '#a7a840',
      friction: 0.9600000000000001
    });
    this.tiles.set(90, {
      tileId: 90,
      name: 'Tile Node 90',
      walkable: true,
      color: '#a98a80',
      friction: 0.8
    });
    this.tiles.set(91, {
      tileId: 91,
      name: 'Tile Node 91',
      walkable: false,
      color: '#ab6cc0',
      friction: 0.8400000000000001
    });
    this.tiles.set(92, {
      tileId: 92,
      name: 'Tile Node 92',
      walkable: true,
      color: '#ad4f00',
      friction: 0.88
    });
    this.tiles.set(93, {
      tileId: 93,
      name: 'Tile Node 93',
      walkable: true,
      color: '#af3140',
      friction: 0.92
    });
    this.tiles.set(94, {
      tileId: 94,
      name: 'Tile Node 94',
      walkable: true,
      color: '#b11380',
      friction: 0.9600000000000001
    });
    this.tiles.set(95, {
      tileId: 95,
      name: 'Tile Node 95',
      walkable: true,
      color: '#b2f5c0',
      friction: 0.8
    });
    this.tiles.set(96, {
      tileId: 96,
      name: 'Tile Node 96',
      walkable: true,
      color: '#b4d800',
      friction: 0.8400000000000001
    });
    this.tiles.set(97, {
      tileId: 97,
      name: 'Tile Node 97',
      walkable: true,
      color: '#b6ba40',
      friction: 0.88
    });
    this.tiles.set(98, {
      tileId: 98,
      name: 'Tile Node 98',
      walkable: false,
      color: '#b89c80',
      friction: 0.92
    });
    this.tiles.set(99, {
      tileId: 99,
      name: 'Tile Node 99',
      walkable: true,
      color: '#ba7ec0',
      friction: 0.9600000000000001
    });
    this.tiles.set(100, {
      tileId: 100,
      name: 'Tile Node 100',
      walkable: true,
      color: '#bc6100',
      friction: 0.8
    });
    this.tiles.set(101, {
      tileId: 101,
      name: 'Tile Node 101',
      walkable: true,
      color: '#be4340',
      friction: 0.8400000000000001
    });
    this.tiles.set(102, {
      tileId: 102,
      name: 'Tile Node 102',
      walkable: true,
      color: '#c02580',
      friction: 0.88
    });
    this.tiles.set(103, {
      tileId: 103,
      name: 'Tile Node 103',
      walkable: true,
      color: '#c207c0',
      friction: 0.92
    });
    this.tiles.set(104, {
      tileId: 104,
      name: 'Tile Node 104',
      walkable: true,
      color: '#c3ea00',
      friction: 0.9600000000000001
    });
    this.tiles.set(105, {
      tileId: 105,
      name: 'Tile Node 105',
      walkable: false,
      color: '#c5cc40',
      friction: 0.8
    });
    this.tiles.set(106, {
      tileId: 106,
      name: 'Tile Node 106',
      walkable: true,
      color: '#c7ae80',
      friction: 0.8400000000000001
    });
    this.tiles.set(107, {
      tileId: 107,
      name: 'Tile Node 107',
      walkable: true,
      color: '#c990c0',
      friction: 0.88
    });
    this.tiles.set(108, {
      tileId: 108,
      name: 'Tile Node 108',
      walkable: true,
      color: '#cb7300',
      friction: 0.92
    });
    this.tiles.set(109, {
      tileId: 109,
      name: 'Tile Node 109',
      walkable: true,
      color: '#cd5540',
      friction: 0.9600000000000001
    });
    this.tiles.set(110, {
      tileId: 110,
      name: 'Tile Node 110',
      walkable: true,
      color: '#cf3780',
      friction: 0.8
    });
    this.tiles.set(111, {
      tileId: 111,
      name: 'Tile Node 111',
      walkable: true,
      color: '#d119c0',
      friction: 0.8400000000000001
    });
    this.tiles.set(112, {
      tileId: 112,
      name: 'Tile Node 112',
      walkable: false,
      color: '#d2fc00',
      friction: 0.88
    });
    this.tiles.set(113, {
      tileId: 113,
      name: 'Tile Node 113',
      walkable: true,
      color: '#d4de40',
      friction: 0.92
    });
    this.tiles.set(114, {
      tileId: 114,
      name: 'Tile Node 114',
      walkable: true,
      color: '#d6c080',
      friction: 0.9600000000000001
    });
    this.tiles.set(115, {
      tileId: 115,
      name: 'Tile Node 115',
      walkable: true,
      color: '#d8a2c0',
      friction: 0.8
    });
    this.tiles.set(116, {
      tileId: 116,
      name: 'Tile Node 116',
      walkable: true,
      color: '#da8500',
      friction: 0.8400000000000001
    });
    this.tiles.set(117, {
      tileId: 117,
      name: 'Tile Node 117',
      walkable: true,
      color: '#dc6740',
      friction: 0.88
    });
    this.tiles.set(118, {
      tileId: 118,
      name: 'Tile Node 118',
      walkable: true,
      color: '#de4980',
      friction: 0.92
    });
    this.tiles.set(119, {
      tileId: 119,
      name: 'Tile Node 119',
      walkable: false,
      color: '#e02bc0',
      friction: 0.9600000000000001
    });
    this.tiles.set(120, {
      tileId: 120,
      name: 'Tile Node 120',
      walkable: true,
      color: '#e20e00',
      friction: 0.8
    });
    this.tiles.set(121, {
      tileId: 121,
      name: 'Tile Node 121',
      walkable: true,
      color: '#e3f040',
      friction: 0.8400000000000001
    });
    this.tiles.set(122, {
      tileId: 122,
      name: 'Tile Node 122',
      walkable: true,
      color: '#e5d280',
      friction: 0.88
    });
    this.tiles.set(123, {
      tileId: 123,
      name: 'Tile Node 123',
      walkable: true,
      color: '#e7b4c0',
      friction: 0.92
    });
    this.tiles.set(124, {
      tileId: 124,
      name: 'Tile Node 124',
      walkable: true,
      color: '#e99700',
      friction: 0.9600000000000001
    });
    this.tiles.set(125, {
      tileId: 125,
      name: 'Tile Node 125',
      walkable: true,
      color: '#eb7940',
      friction: 0.8
    });
    this.tiles.set(126, {
      tileId: 126,
      name: 'Tile Node 126',
      walkable: false,
      color: '#ed5b80',
      friction: 0.8400000000000001
    });
    this.tiles.set(127, {
      tileId: 127,
      name: 'Tile Node 127',
      walkable: true,
      color: '#ef3dc0',
      friction: 0.88
    });
    this.tiles.set(128, {
      tileId: 128,
      name: 'Tile Node 128',
      walkable: true,
      color: '#f12000',
      friction: 0.92
    });
    this.tiles.set(129, {
      tileId: 129,
      name: 'Tile Node 129',
      walkable: true,
      color: '#f30240',
      friction: 0.9600000000000001
    });
    this.tiles.set(130, {
      tileId: 130,
      name: 'Tile Node 130',
      walkable: true,
      color: '#f4e480',
      friction: 0.8
    });
    this.tiles.set(131, {
      tileId: 131,
      name: 'Tile Node 131',
      walkable: true,
      color: '#f6c6c0',
      friction: 0.8400000000000001
    });
    this.tiles.set(132, {
      tileId: 132,
      name: 'Tile Node 132',
      walkable: true,
      color: '#f8a900',
      friction: 0.88
    });
    this.tiles.set(133, {
      tileId: 133,
      name: 'Tile Node 133',
      walkable: false,
      color: '#fa8b40',
      friction: 0.92
    });
    this.tiles.set(134, {
      tileId: 134,
      name: 'Tile Node 134',
      walkable: true,
      color: '#fc6d80',
      friction: 0.9600000000000001
    });
    this.tiles.set(135, {
      tileId: 135,
      name: 'Tile Node 135',
      walkable: true,
      color: '#fe4fc0',
      friction: 0.8
    });
    this.tiles.set(136, {
      tileId: 136,
      name: 'Tile Node 136',
      walkable: true,
      color: '#003201',
      friction: 0.8400000000000001
    });
    this.tiles.set(137, {
      tileId: 137,
      name: 'Tile Node 137',
      walkable: true,
      color: '#021441',
      friction: 0.88
    });
    this.tiles.set(138, {
      tileId: 138,
      name: 'Tile Node 138',
      walkable: true,
      color: '#03f681',
      friction: 0.92
    });
    this.tiles.set(139, {
      tileId: 139,
      name: 'Tile Node 139',
      walkable: true,
      color: '#05d8c1',
      friction: 0.9600000000000001
    });
    this.tiles.set(140, {
      tileId: 140,
      name: 'Tile Node 140',
      walkable: false,
      color: '#07bb01',
      friction: 0.8
    });
    this.tiles.set(141, {
      tileId: 141,
      name: 'Tile Node 141',
      walkable: true,
      color: '#099d41',
      friction: 0.8400000000000001
    });
    this.tiles.set(142, {
      tileId: 142,
      name: 'Tile Node 142',
      walkable: true,
      color: '#0b7f81',
      friction: 0.88
    });
    this.tiles.set(143, {
      tileId: 143,
      name: 'Tile Node 143',
      walkable: true,
      color: '#0d61c1',
      friction: 0.92
    });
    this.tiles.set(144, {
      tileId: 144,
      name: 'Tile Node 144',
      walkable: true,
      color: '#0f4401',
      friction: 0.9600000000000001
    });
    this.tiles.set(145, {
      tileId: 145,
      name: 'Tile Node 145',
      walkable: true,
      color: '#112641',
      friction: 0.8
    });
    this.tiles.set(146, {
      tileId: 146,
      name: 'Tile Node 146',
      walkable: true,
      color: '#130881',
      friction: 0.8400000000000001
    });
    this.tiles.set(147, {
      tileId: 147,
      name: 'Tile Node 147',
      walkable: false,
      color: '#14eac1',
      friction: 0.88
    });
    this.tiles.set(148, {
      tileId: 148,
      name: 'Tile Node 148',
      walkable: true,
      color: '#16cd01',
      friction: 0.92
    });
    this.tiles.set(149, {
      tileId: 149,
      name: 'Tile Node 149',
      walkable: true,
      color: '#18af41',
      friction: 0.9600000000000001
    });
    this.tiles.set(150, {
      tileId: 150,
      name: 'Tile Node 150',
      walkable: true,
      color: '#1a9181',
      friction: 0.8
    });
    this.tiles.set(151, {
      tileId: 151,
      name: 'Tile Node 151',
      walkable: true,
      color: '#1c73c1',
      friction: 0.8400000000000001
    });
    this.tiles.set(152, {
      tileId: 152,
      name: 'Tile Node 152',
      walkable: true,
      color: '#1e5601',
      friction: 0.88
    });
    this.tiles.set(153, {
      tileId: 153,
      name: 'Tile Node 153',
      walkable: true,
      color: '#203841',
      friction: 0.92
    });
    this.tiles.set(154, {
      tileId: 154,
      name: 'Tile Node 154',
      walkable: false,
      color: '#221a81',
      friction: 0.9600000000000001
    });
    this.tiles.set(155, {
      tileId: 155,
      name: 'Tile Node 155',
      walkable: true,
      color: '#23fcc1',
      friction: 0.8
    });
    this.tiles.set(156, {
      tileId: 156,
      name: 'Tile Node 156',
      walkable: true,
      color: '#25df01',
      friction: 0.8400000000000001
    });
    this.tiles.set(157, {
      tileId: 157,
      name: 'Tile Node 157',
      walkable: true,
      color: '#27c141',
      friction: 0.88
    });
    this.tiles.set(158, {
      tileId: 158,
      name: 'Tile Node 158',
      walkable: true,
      color: '#29a381',
      friction: 0.92
    });
    this.tiles.set(159, {
      tileId: 159,
      name: 'Tile Node 159',
      walkable: true,
      color: '#2b85c1',
      friction: 0.9600000000000001
    });
    this.tiles.set(160, {
      tileId: 160,
      name: 'Tile Node 160',
      walkable: true,
      color: '#2d6801',
      friction: 0.8
    });
    this.tiles.set(161, {
      tileId: 161,
      name: 'Tile Node 161',
      walkable: false,
      color: '#2f4a41',
      friction: 0.8400000000000001
    });
    this.tiles.set(162, {
      tileId: 162,
      name: 'Tile Node 162',
      walkable: true,
      color: '#312c81',
      friction: 0.88
    });
    this.tiles.set(163, {
      tileId: 163,
      name: 'Tile Node 163',
      walkable: true,
      color: '#330ec1',
      friction: 0.92
    });
    this.tiles.set(164, {
      tileId: 164,
      name: 'Tile Node 164',
      walkable: true,
      color: '#34f101',
      friction: 0.9600000000000001
    });
    this.tiles.set(165, {
      tileId: 165,
      name: 'Tile Node 165',
      walkable: true,
      color: '#36d341',
      friction: 0.8
    });
    this.tiles.set(166, {
      tileId: 166,
      name: 'Tile Node 166',
      walkable: true,
      color: '#38b581',
      friction: 0.8400000000000001
    });
    this.tiles.set(167, {
      tileId: 167,
      name: 'Tile Node 167',
      walkable: true,
      color: '#3a97c1',
      friction: 0.88
    });
    this.tiles.set(168, {
      tileId: 168,
      name: 'Tile Node 168',
      walkable: false,
      color: '#3c7a01',
      friction: 0.92
    });
    this.tiles.set(169, {
      tileId: 169,
      name: 'Tile Node 169',
      walkable: true,
      color: '#3e5c41',
      friction: 0.9600000000000001
    });
    this.tiles.set(170, {
      tileId: 170,
      name: 'Tile Node 170',
      walkable: true,
      color: '#403e81',
      friction: 0.8
    });
    this.tiles.set(171, {
      tileId: 171,
      name: 'Tile Node 171',
      walkable: true,
      color: '#4220c1',
      friction: 0.8400000000000001
    });
    this.tiles.set(172, {
      tileId: 172,
      name: 'Tile Node 172',
      walkable: true,
      color: '#440301',
      friction: 0.88
    });
    this.tiles.set(173, {
      tileId: 173,
      name: 'Tile Node 173',
      walkable: true,
      color: '#45e541',
      friction: 0.92
    });
    this.tiles.set(174, {
      tileId: 174,
      name: 'Tile Node 174',
      walkable: true,
      color: '#47c781',
      friction: 0.9600000000000001
    });
    this.tiles.set(175, {
      tileId: 175,
      name: 'Tile Node 175',
      walkable: false,
      color: '#49a9c1',
      friction: 0.8
    });
    this.tiles.set(176, {
      tileId: 176,
      name: 'Tile Node 176',
      walkable: true,
      color: '#4b8c01',
      friction: 0.8400000000000001
    });
    this.tiles.set(177, {
      tileId: 177,
      name: 'Tile Node 177',
      walkable: true,
      color: '#4d6e41',
      friction: 0.88
    });
    this.tiles.set(178, {
      tileId: 178,
      name: 'Tile Node 178',
      walkable: true,
      color: '#4f5081',
      friction: 0.92
    });
    this.tiles.set(179, {
      tileId: 179,
      name: 'Tile Node 179',
      walkable: true,
      color: '#5132c1',
      friction: 0.9600000000000001
    });
    this.tiles.set(180, {
      tileId: 180,
      name: 'Tile Node 180',
      walkable: true,
      color: '#531501',
      friction: 0.8
    });
    this.tiles.set(181, {
      tileId: 181,
      name: 'Tile Node 181',
      walkable: true,
      color: '#54f741',
      friction: 0.8400000000000001
    });
    this.tiles.set(182, {
      tileId: 182,
      name: 'Tile Node 182',
      walkable: false,
      color: '#56d981',
      friction: 0.88
    });
    this.tiles.set(183, {
      tileId: 183,
      name: 'Tile Node 183',
      walkable: true,
      color: '#58bbc1',
      friction: 0.92
    });
    this.tiles.set(184, {
      tileId: 184,
      name: 'Tile Node 184',
      walkable: true,
      color: '#5a9e01',
      friction: 0.9600000000000001
    });
    this.tiles.set(185, {
      tileId: 185,
      name: 'Tile Node 185',
      walkable: true,
      color: '#5c8041',
      friction: 0.8
    });
    this.tiles.set(186, {
      tileId: 186,
      name: 'Tile Node 186',
      walkable: true,
      color: '#5e6281',
      friction: 0.8400000000000001
    });
    this.tiles.set(187, {
      tileId: 187,
      name: 'Tile Node 187',
      walkable: true,
      color: '#6044c1',
      friction: 0.88
    });
    this.tiles.set(188, {
      tileId: 188,
      name: 'Tile Node 188',
      walkable: true,
      color: '#622701',
      friction: 0.92
    });
    this.tiles.set(189, {
      tileId: 189,
      name: 'Tile Node 189',
      walkable: false,
      color: '#640941',
      friction: 0.9600000000000001
    });
    this.tiles.set(190, {
      tileId: 190,
      name: 'Tile Node 190',
      walkable: true,
      color: '#65eb81',
      friction: 0.8
    });
    this.tiles.set(191, {
      tileId: 191,
      name: 'Tile Node 191',
      walkable: true,
      color: '#67cdc1',
      friction: 0.8400000000000001
    });
    this.tiles.set(192, {
      tileId: 192,
      name: 'Tile Node 192',
      walkable: true,
      color: '#69b001',
      friction: 0.88
    });
    this.tiles.set(193, {
      tileId: 193,
      name: 'Tile Node 193',
      walkable: true,
      color: '#6b9241',
      friction: 0.92
    });
    this.tiles.set(194, {
      tileId: 194,
      name: 'Tile Node 194',
      walkable: true,
      color: '#6d7481',
      friction: 0.9600000000000001
    });
    this.tiles.set(195, {
      tileId: 195,
      name: 'Tile Node 195',
      walkable: true,
      color: '#6f56c1',
      friction: 0.8
    });
    this.tiles.set(196, {
      tileId: 196,
      name: 'Tile Node 196',
      walkable: false,
      color: '#713901',
      friction: 0.8400000000000001
    });
    this.tiles.set(197, {
      tileId: 197,
      name: 'Tile Node 197',
      walkable: true,
      color: '#731b41',
      friction: 0.88
    });
    this.tiles.set(198, {
      tileId: 198,
      name: 'Tile Node 198',
      walkable: true,
      color: '#74fd81',
      friction: 0.92
    });
    this.tiles.set(199, {
      tileId: 199,
      name: 'Tile Node 199',
      walkable: true,
      color: '#76dfc1',
      friction: 0.9600000000000001
    });
    this.tiles.set(200, {
      tileId: 200,
      name: 'Tile Node 200',
      walkable: true,
      color: '#78c201',
      friction: 0.8
    });
    this.tiles.set(201, {
      tileId: 201,
      name: 'Tile Node 201',
      walkable: true,
      color: '#7aa441',
      friction: 0.8400000000000001
    });
    this.tiles.set(202, {
      tileId: 202,
      name: 'Tile Node 202',
      walkable: true,
      color: '#7c8681',
      friction: 0.88
    });
    this.tiles.set(203, {
      tileId: 203,
      name: 'Tile Node 203',
      walkable: false,
      color: '#7e68c1',
      friction: 0.92
    });
    this.tiles.set(204, {
      tileId: 204,
      name: 'Tile Node 204',
      walkable: true,
      color: '#804b01',
      friction: 0.9600000000000001
    });
    this.tiles.set(205, {
      tileId: 205,
      name: 'Tile Node 205',
      walkable: true,
      color: '#822d41',
      friction: 0.8
    });
    this.tiles.set(206, {
      tileId: 206,
      name: 'Tile Node 206',
      walkable: true,
      color: '#840f81',
      friction: 0.8400000000000001
    });
    this.tiles.set(207, {
      tileId: 207,
      name: 'Tile Node 207',
      walkable: true,
      color: '#85f1c1',
      friction: 0.88
    });
    this.tiles.set(208, {
      tileId: 208,
      name: 'Tile Node 208',
      walkable: true,
      color: '#87d401',
      friction: 0.92
    });
    this.tiles.set(209, {
      tileId: 209,
      name: 'Tile Node 209',
      walkable: true,
      color: '#89b641',
      friction: 0.9600000000000001
    });
    this.tiles.set(210, {
      tileId: 210,
      name: 'Tile Node 210',
      walkable: false,
      color: '#8b9881',
      friction: 0.8
    });
    this.tiles.set(211, {
      tileId: 211,
      name: 'Tile Node 211',
      walkable: true,
      color: '#8d7ac1',
      friction: 0.8400000000000001
    });
    this.tiles.set(212, {
      tileId: 212,
      name: 'Tile Node 212',
      walkable: true,
      color: '#8f5d01',
      friction: 0.88
    });
    this.tiles.set(213, {
      tileId: 213,
      name: 'Tile Node 213',
      walkable: true,
      color: '#913f41',
      friction: 0.92
    });
    this.tiles.set(214, {
      tileId: 214,
      name: 'Tile Node 214',
      walkable: true,
      color: '#932181',
      friction: 0.9600000000000001
    });
    this.tiles.set(215, {
      tileId: 215,
      name: 'Tile Node 215',
      walkable: true,
      color: '#9503c1',
      friction: 0.8
    });
    this.tiles.set(216, {
      tileId: 216,
      name: 'Tile Node 216',
      walkable: true,
      color: '#96e601',
      friction: 0.8400000000000001
    });
    this.tiles.set(217, {
      tileId: 217,
      name: 'Tile Node 217',
      walkable: false,
      color: '#98c841',
      friction: 0.88
    });
    this.tiles.set(218, {
      tileId: 218,
      name: 'Tile Node 218',
      walkable: true,
      color: '#9aaa81',
      friction: 0.92
    });
    this.tiles.set(219, {
      tileId: 219,
      name: 'Tile Node 219',
      walkable: true,
      color: '#9c8cc1',
      friction: 0.9600000000000001
    });
    this.tiles.set(220, {
      tileId: 220,
      name: 'Tile Node 220',
      walkable: true,
      color: '#9e6f01',
      friction: 0.8
    });
    this.tiles.set(221, {
      tileId: 221,
      name: 'Tile Node 221',
      walkable: true,
      color: '#a05141',
      friction: 0.8400000000000001
    });
    this.tiles.set(222, {
      tileId: 222,
      name: 'Tile Node 222',
      walkable: true,
      color: '#a23381',
      friction: 0.88
    });
    this.tiles.set(223, {
      tileId: 223,
      name: 'Tile Node 223',
      walkable: true,
      color: '#a415c1',
      friction: 0.92
    });
    this.tiles.set(224, {
      tileId: 224,
      name: 'Tile Node 224',
      walkable: false,
      color: '#a5f801',
      friction: 0.9600000000000001
    });
    this.tiles.set(225, {
      tileId: 225,
      name: 'Tile Node 225',
      walkable: true,
      color: '#a7da41',
      friction: 0.8
    });
    this.tiles.set(226, {
      tileId: 226,
      name: 'Tile Node 226',
      walkable: true,
      color: '#a9bc81',
      friction: 0.8400000000000001
    });
    this.tiles.set(227, {
      tileId: 227,
      name: 'Tile Node 227',
      walkable: true,
      color: '#ab9ec1',
      friction: 0.88
    });
    this.tiles.set(228, {
      tileId: 228,
      name: 'Tile Node 228',
      walkable: true,
      color: '#ad8101',
      friction: 0.92
    });
    this.tiles.set(229, {
      tileId: 229,
      name: 'Tile Node 229',
      walkable: true,
      color: '#af6341',
      friction: 0.9600000000000001
    });
    this.tiles.set(230, {
      tileId: 230,
      name: 'Tile Node 230',
      walkable: true,
      color: '#b14581',
      friction: 0.8
    });
    this.tiles.set(231, {
      tileId: 231,
      name: 'Tile Node 231',
      walkable: false,
      color: '#b327c1',
      friction: 0.8400000000000001
    });
    this.tiles.set(232, {
      tileId: 232,
      name: 'Tile Node 232',
      walkable: true,
      color: '#b50a01',
      friction: 0.88
    });
    this.tiles.set(233, {
      tileId: 233,
      name: 'Tile Node 233',
      walkable: true,
      color: '#b6ec41',
      friction: 0.92
    });
    this.tiles.set(234, {
      tileId: 234,
      name: 'Tile Node 234',
      walkable: true,
      color: '#b8ce81',
      friction: 0.9600000000000001
    });
    this.tiles.set(235, {
      tileId: 235,
      name: 'Tile Node 235',
      walkable: true,
      color: '#bab0c1',
      friction: 0.8
    });
    this.tiles.set(236, {
      tileId: 236,
      name: 'Tile Node 236',
      walkable: true,
      color: '#bc9301',
      friction: 0.8400000000000001
    });
    this.tiles.set(237, {
      tileId: 237,
      name: 'Tile Node 237',
      walkable: true,
      color: '#be7541',
      friction: 0.88
    });
    this.tiles.set(238, {
      tileId: 238,
      name: 'Tile Node 238',
      walkable: false,
      color: '#c05781',
      friction: 0.92
    });
    this.tiles.set(239, {
      tileId: 239,
      name: 'Tile Node 239',
      walkable: true,
      color: '#c239c1',
      friction: 0.9600000000000001
    });
    this.tiles.set(240, {
      tileId: 240,
      name: 'Tile Node 240',
      walkable: true,
      color: '#c41c01',
      friction: 0.8
    });
    this.tiles.set(241, {
      tileId: 241,
      name: 'Tile Node 241',
      walkable: true,
      color: '#c5fe41',
      friction: 0.8400000000000001
    });
    this.tiles.set(242, {
      tileId: 242,
      name: 'Tile Node 242',
      walkable: true,
      color: '#c7e081',
      friction: 0.88
    });
    this.tiles.set(243, {
      tileId: 243,
      name: 'Tile Node 243',
      walkable: true,
      color: '#c9c2c1',
      friction: 0.92
    });
    this.tiles.set(244, {
      tileId: 244,
      name: 'Tile Node 244',
      walkable: true,
      color: '#cba501',
      friction: 0.9600000000000001
    });
    this.tiles.set(245, {
      tileId: 245,
      name: 'Tile Node 245',
      walkable: false,
      color: '#cd8741',
      friction: 0.8
    });
    this.tiles.set(246, {
      tileId: 246,
      name: 'Tile Node 246',
      walkable: true,
      color: '#cf6981',
      friction: 0.8400000000000001
    });
    this.tiles.set(247, {
      tileId: 247,
      name: 'Tile Node 247',
      walkable: true,
      color: '#d14bc1',
      friction: 0.88
    });
    this.tiles.set(248, {
      tileId: 248,
      name: 'Tile Node 248',
      walkable: true,
      color: '#d32e01',
      friction: 0.92
    });
    this.tiles.set(249, {
      tileId: 249,
      name: 'Tile Node 249',
      walkable: true,
      color: '#d51041',
      friction: 0.9600000000000001
    });
    this.tiles.set(250, {
      tileId: 250,
      name: 'Tile Node 250',
      walkable: true,
      color: '#d6f281',
      friction: 0.8
    });
    this.tiles.set(251, {
      tileId: 251,
      name: 'Tile Node 251',
      walkable: true,
      color: '#d8d4c1',
      friction: 0.8400000000000001
    });
    this.tiles.set(252, {
      tileId: 252,
      name: 'Tile Node 252',
      walkable: false,
      color: '#dab701',
      friction: 0.88
    });
    this.tiles.set(253, {
      tileId: 253,
      name: 'Tile Node 253',
      walkable: true,
      color: '#dc9941',
      friction: 0.92
    });
    this.tiles.set(254, {
      tileId: 254,
      name: 'Tile Node 254',
      walkable: true,
      color: '#de7b81',
      friction: 0.9600000000000001
    });
    this.tiles.set(255, {
      tileId: 255,
      name: 'Tile Node 255',
      walkable: true,
      color: '#e05dc1',
      friction: 0.8
    });
    this.tiles.set(256, {
      tileId: 256,
      name: 'Tile Node 256',
      walkable: true,
      color: '#e24001',
      friction: 0.8400000000000001
    });
    this.tiles.set(257, {
      tileId: 257,
      name: 'Tile Node 257',
      walkable: true,
      color: '#e42241',
      friction: 0.88
    });
    this.tiles.set(258, {
      tileId: 258,
      name: 'Tile Node 258',
      walkable: true,
      color: '#e60481',
      friction: 0.92
    });
    this.tiles.set(259, {
      tileId: 259,
      name: 'Tile Node 259',
      walkable: false,
      color: '#e7e6c1',
      friction: 0.9600000000000001
    });
    this.tiles.set(260, {
      tileId: 260,
      name: 'Tile Node 260',
      walkable: true,
      color: '#e9c901',
      friction: 0.8
    });
    this.tiles.set(261, {
      tileId: 261,
      name: 'Tile Node 261',
      walkable: true,
      color: '#ebab41',
      friction: 0.8400000000000001
    });
    this.tiles.set(262, {
      tileId: 262,
      name: 'Tile Node 262',
      walkable: true,
      color: '#ed8d81',
      friction: 0.88
    });
    this.tiles.set(263, {
      tileId: 263,
      name: 'Tile Node 263',
      walkable: true,
      color: '#ef6fc1',
      friction: 0.92
    });
    this.tiles.set(264, {
      tileId: 264,
      name: 'Tile Node 264',
      walkable: true,
      color: '#f15201',
      friction: 0.9600000000000001
    });
    this.tiles.set(265, {
      tileId: 265,
      name: 'Tile Node 265',
      walkable: true,
      color: '#f33441',
      friction: 0.8
    });
    this.tiles.set(266, {
      tileId: 266,
      name: 'Tile Node 266',
      walkable: false,
      color: '#f51681',
      friction: 0.8400000000000001
    });
    this.tiles.set(267, {
      tileId: 267,
      name: 'Tile Node 267',
      walkable: true,
      color: '#f6f8c1',
      friction: 0.88
    });
    this.tiles.set(268, {
      tileId: 268,
      name: 'Tile Node 268',
      walkable: true,
      color: '#f8db01',
      friction: 0.92
    });
    this.tiles.set(269, {
      tileId: 269,
      name: 'Tile Node 269',
      walkable: true,
      color: '#fabd41',
      friction: 0.9600000000000001
    });
    this.tiles.set(270, {
      tileId: 270,
      name: 'Tile Node 270',
      walkable: true,
      color: '#fc9f81',
      friction: 0.8
    });
    this.tiles.set(271, {
      tileId: 271,
      name: 'Tile Node 271',
      walkable: true,
      color: '#fe81c1',
      friction: 0.8400000000000001
    });
    this.tiles.set(272, {
      tileId: 272,
      name: 'Tile Node 272',
      walkable: true,
      color: '#006402',
      friction: 0.88
    });
    this.tiles.set(273, {
      tileId: 273,
      name: 'Tile Node 273',
      walkable: false,
      color: '#024642',
      friction: 0.92
    });
    this.tiles.set(274, {
      tileId: 274,
      name: 'Tile Node 274',
      walkable: true,
      color: '#042882',
      friction: 0.9600000000000001
    });
    this.tiles.set(275, {
      tileId: 275,
      name: 'Tile Node 275',
      walkable: true,
      color: '#060ac2',
      friction: 0.8
    });
    this.tiles.set(276, {
      tileId: 276,
      name: 'Tile Node 276',
      walkable: true,
      color: '#07ed02',
      friction: 0.8400000000000001
    });
    this.tiles.set(277, {
      tileId: 277,
      name: 'Tile Node 277',
      walkable: true,
      color: '#09cf42',
      friction: 0.88
    });
    this.tiles.set(278, {
      tileId: 278,
      name: 'Tile Node 278',
      walkable: true,
      color: '#0bb182',
      friction: 0.92
    });
    this.tiles.set(279, {
      tileId: 279,
      name: 'Tile Node 279',
      walkable: true,
      color: '#0d93c2',
      friction: 0.9600000000000001
    });
    this.tiles.set(280, {
      tileId: 280,
      name: 'Tile Node 280',
      walkable: false,
      color: '#0f7602',
      friction: 0.8
    });
    this.tiles.set(281, {
      tileId: 281,
      name: 'Tile Node 281',
      walkable: true,
      color: '#115842',
      friction: 0.8400000000000001
    });
    this.tiles.set(282, {
      tileId: 282,
      name: 'Tile Node 282',
      walkable: true,
      color: '#133a82',
      friction: 0.88
    });
    this.tiles.set(283, {
      tileId: 283,
      name: 'Tile Node 283',
      walkable: true,
      color: '#151cc2',
      friction: 0.92
    });
    this.tiles.set(284, {
      tileId: 284,
      name: 'Tile Node 284',
      walkable: true,
      color: '#16ff02',
      friction: 0.9600000000000001
    });
    this.tiles.set(285, {
      tileId: 285,
      name: 'Tile Node 285',
      walkable: true,
      color: '#18e142',
      friction: 0.8
    });
    this.tiles.set(286, {
      tileId: 286,
      name: 'Tile Node 286',
      walkable: true,
      color: '#1ac382',
      friction: 0.8400000000000001
    });
    this.tiles.set(287, {
      tileId: 287,
      name: 'Tile Node 287',
      walkable: false,
      color: '#1ca5c2',
      friction: 0.88
    });
    this.tiles.set(288, {
      tileId: 288,
      name: 'Tile Node 288',
      walkable: true,
      color: '#1e8802',
      friction: 0.92
    });
    this.tiles.set(289, {
      tileId: 289,
      name: 'Tile Node 289',
      walkable: true,
      color: '#206a42',
      friction: 0.9600000000000001
    });
    this.tiles.set(290, {
      tileId: 290,
      name: 'Tile Node 290',
      walkable: true,
      color: '#224c82',
      friction: 0.8
    });
    this.tiles.set(291, {
      tileId: 291,
      name: 'Tile Node 291',
      walkable: true,
      color: '#242ec2',
      friction: 0.8400000000000001
    });
    this.tiles.set(292, {
      tileId: 292,
      name: 'Tile Node 292',
      walkable: true,
      color: '#261102',
      friction: 0.88
    });
    this.tiles.set(293, {
      tileId: 293,
      name: 'Tile Node 293',
      walkable: true,
      color: '#27f342',
      friction: 0.92
    });
    this.tiles.set(294, {
      tileId: 294,
      name: 'Tile Node 294',
      walkable: false,
      color: '#29d582',
      friction: 0.9600000000000001
    });
    this.tiles.set(295, {
      tileId: 295,
      name: 'Tile Node 295',
      walkable: true,
      color: '#2bb7c2',
      friction: 0.8
    });
    this.tiles.set(296, {
      tileId: 296,
      name: 'Tile Node 296',
      walkable: true,
      color: '#2d9a02',
      friction: 0.8400000000000001
    });
    this.tiles.set(297, {
      tileId: 297,
      name: 'Tile Node 297',
      walkable: true,
      color: '#2f7c42',
      friction: 0.88
    });
    this.tiles.set(298, {
      tileId: 298,
      name: 'Tile Node 298',
      walkable: true,
      color: '#315e82',
      friction: 0.92
    });
    this.tiles.set(299, {
      tileId: 299,
      name: 'Tile Node 299',
      walkable: true,
      color: '#3340c2',
      friction: 0.9600000000000001
    });
    this.tiles.set(300, {
      tileId: 300,
      name: 'Tile Node 300',
      walkable: true,
      color: '#352302',
      friction: 0.8
    });
    this.tiles.set(301, {
      tileId: 301,
      name: 'Tile Node 301',
      walkable: false,
      color: '#370542',
      friction: 0.8400000000000001
    });
    this.tiles.set(302, {
      tileId: 302,
      name: 'Tile Node 302',
      walkable: true,
      color: '#38e782',
      friction: 0.88
    });
    this.tiles.set(303, {
      tileId: 303,
      name: 'Tile Node 303',
      walkable: true,
      color: '#3ac9c2',
      friction: 0.92
    });
    this.tiles.set(304, {
      tileId: 304,
      name: 'Tile Node 304',
      walkable: true,
      color: '#3cac02',
      friction: 0.9600000000000001
    });
    this.tiles.set(305, {
      tileId: 305,
      name: 'Tile Node 305',
      walkable: true,
      color: '#3e8e42',
      friction: 0.8
    });
    this.tiles.set(306, {
      tileId: 306,
      name: 'Tile Node 306',
      walkable: true,
      color: '#407082',
      friction: 0.8400000000000001
    });
    this.tiles.set(307, {
      tileId: 307,
      name: 'Tile Node 307',
      walkable: true,
      color: '#4252c2',
      friction: 0.88
    });
    this.tiles.set(308, {
      tileId: 308,
      name: 'Tile Node 308',
      walkable: false,
      color: '#443502',
      friction: 0.92
    });
    this.tiles.set(309, {
      tileId: 309,
      name: 'Tile Node 309',
      walkable: true,
      color: '#461742',
      friction: 0.9600000000000001
    });
    this.tiles.set(310, {
      tileId: 310,
      name: 'Tile Node 310',
      walkable: true,
      color: '#47f982',
      friction: 0.8
    });
    this.tiles.set(311, {
      tileId: 311,
      name: 'Tile Node 311',
      walkable: true,
      color: '#49dbc2',
      friction: 0.8400000000000001
    });
    this.tiles.set(312, {
      tileId: 312,
      name: 'Tile Node 312',
      walkable: true,
      color: '#4bbe02',
      friction: 0.88
    });
    this.tiles.set(313, {
      tileId: 313,
      name: 'Tile Node 313',
      walkable: true,
      color: '#4da042',
      friction: 0.92
    });
    this.tiles.set(314, {
      tileId: 314,
      name: 'Tile Node 314',
      walkable: true,
      color: '#4f8282',
      friction: 0.9600000000000001
    });
    this.tiles.set(315, {
      tileId: 315,
      name: 'Tile Node 315',
      walkable: false,
      color: '#5164c2',
      friction: 0.8
    });
    this.tiles.set(316, {
      tileId: 316,
      name: 'Tile Node 316',
      walkable: true,
      color: '#534702',
      friction: 0.8400000000000001
    });
    this.tiles.set(317, {
      tileId: 317,
      name: 'Tile Node 317',
      walkable: true,
      color: '#552942',
      friction: 0.88
    });
    this.tiles.set(318, {
      tileId: 318,
      name: 'Tile Node 318',
      walkable: true,
      color: '#570b82',
      friction: 0.92
    });
    this.tiles.set(319, {
      tileId: 319,
      name: 'Tile Node 319',
      walkable: true,
      color: '#58edc2',
      friction: 0.9600000000000001
    });
    this.tiles.set(320, {
      tileId: 320,
      name: 'Tile Node 320',
      walkable: true,
      color: '#5ad002',
      friction: 0.8
    });
    this.tiles.set(321, {
      tileId: 321,
      name: 'Tile Node 321',
      walkable: true,
      color: '#5cb242',
      friction: 0.8400000000000001
    });
    this.tiles.set(322, {
      tileId: 322,
      name: 'Tile Node 322',
      walkable: false,
      color: '#5e9482',
      friction: 0.88
    });
    this.tiles.set(323, {
      tileId: 323,
      name: 'Tile Node 323',
      walkable: true,
      color: '#6076c2',
      friction: 0.92
    });
    this.tiles.set(324, {
      tileId: 324,
      name: 'Tile Node 324',
      walkable: true,
      color: '#625902',
      friction: 0.9600000000000001
    });
    this.tiles.set(325, {
      tileId: 325,
      name: 'Tile Node 325',
      walkable: true,
      color: '#643b42',
      friction: 0.8
    });
    this.tiles.set(326, {
      tileId: 326,
      name: 'Tile Node 326',
      walkable: true,
      color: '#661d82',
      friction: 0.8400000000000001
    });
    this.tiles.set(327, {
      tileId: 327,
      name: 'Tile Node 327',
      walkable: true,
      color: '#67ffc2',
      friction: 0.88
    });
    this.tiles.set(328, {
      tileId: 328,
      name: 'Tile Node 328',
      walkable: true,
      color: '#69e202',
      friction: 0.92
    });
    this.tiles.set(329, {
      tileId: 329,
      name: 'Tile Node 329',
      walkable: false,
      color: '#6bc442',
      friction: 0.9600000000000001
    });
    this.tiles.set(330, {
      tileId: 330,
      name: 'Tile Node 330',
      walkable: true,
      color: '#6da682',
      friction: 0.8
    });
    this.tiles.set(331, {
      tileId: 331,
      name: 'Tile Node 331',
      walkable: true,
      color: '#6f88c2',
      friction: 0.8400000000000001
    });
    this.tiles.set(332, {
      tileId: 332,
      name: 'Tile Node 332',
      walkable: true,
      color: '#716b02',
      friction: 0.88
    });
    this.tiles.set(333, {
      tileId: 333,
      name: 'Tile Node 333',
      walkable: true,
      color: '#734d42',
      friction: 0.92
    });
    this.tiles.set(334, {
      tileId: 334,
      name: 'Tile Node 334',
      walkable: true,
      color: '#752f82',
      friction: 0.9600000000000001
    });
    this.tiles.set(335, {
      tileId: 335,
      name: 'Tile Node 335',
      walkable: true,
      color: '#7711c2',
      friction: 0.8
    });
    this.tiles.set(336, {
      tileId: 336,
      name: 'Tile Node 336',
      walkable: false,
      color: '#78f402',
      friction: 0.8400000000000001
    });
    this.tiles.set(337, {
      tileId: 337,
      name: 'Tile Node 337',
      walkable: true,
      color: '#7ad642',
      friction: 0.88
    });
    this.tiles.set(338, {
      tileId: 338,
      name: 'Tile Node 338',
      walkable: true,
      color: '#7cb882',
      friction: 0.92
    });
    this.tiles.set(339, {
      tileId: 339,
      name: 'Tile Node 339',
      walkable: true,
      color: '#7e9ac2',
      friction: 0.9600000000000001
    });
    this.tiles.set(340, {
      tileId: 340,
      name: 'Tile Node 340',
      walkable: true,
      color: '#807d02',
      friction: 0.8
    });
    this.tiles.set(341, {
      tileId: 341,
      name: 'Tile Node 341',
      walkable: true,
      color: '#825f42',
      friction: 0.8400000000000001
    });
    this.tiles.set(342, {
      tileId: 342,
      name: 'Tile Node 342',
      walkable: true,
      color: '#844182',
      friction: 0.88
    });
    this.tiles.set(343, {
      tileId: 343,
      name: 'Tile Node 343',
      walkable: false,
      color: '#8623c2',
      friction: 0.92
    });
    this.tiles.set(344, {
      tileId: 344,
      name: 'Tile Node 344',
      walkable: true,
      color: '#880602',
      friction: 0.9600000000000001
    });
    this.tiles.set(345, {
      tileId: 345,
      name: 'Tile Node 345',
      walkable: true,
      color: '#89e842',
      friction: 0.8
    });
    this.tiles.set(346, {
      tileId: 346,
      name: 'Tile Node 346',
      walkable: true,
      color: '#8bca82',
      friction: 0.8400000000000001
    });
    this.tiles.set(347, {
      tileId: 347,
      name: 'Tile Node 347',
      walkable: true,
      color: '#8dacc2',
      friction: 0.88
    });
    this.tiles.set(348, {
      tileId: 348,
      name: 'Tile Node 348',
      walkable: true,
      color: '#8f8f02',
      friction: 0.92
    });
    this.tiles.set(349, {
      tileId: 349,
      name: 'Tile Node 349',
      walkable: true,
      color: '#917142',
      friction: 0.9600000000000001
    });
    this.tiles.set(350, {
      tileId: 350,
      name: 'Tile Node 350',
      walkable: false,
      color: '#935382',
      friction: 0.8
    });
    this.tiles.set(351, {
      tileId: 351,
      name: 'Tile Node 351',
      walkable: true,
      color: '#9535c2',
      friction: 0.8400000000000001
    });
    this.tiles.set(352, {
      tileId: 352,
      name: 'Tile Node 352',
      walkable: true,
      color: '#971802',
      friction: 0.88
    });
    this.tiles.set(353, {
      tileId: 353,
      name: 'Tile Node 353',
      walkable: true,
      color: '#98fa42',
      friction: 0.92
    });
    this.tiles.set(354, {
      tileId: 354,
      name: 'Tile Node 354',
      walkable: true,
      color: '#9adc82',
      friction: 0.9600000000000001
    });
    this.tiles.set(355, {
      tileId: 355,
      name: 'Tile Node 355',
      walkable: true,
      color: '#9cbec2',
      friction: 0.8
    });
    this.tiles.set(356, {
      tileId: 356,
      name: 'Tile Node 356',
      walkable: true,
      color: '#9ea102',
      friction: 0.8400000000000001
    });
    this.tiles.set(357, {
      tileId: 357,
      name: 'Tile Node 357',
      walkable: false,
      color: '#a08342',
      friction: 0.88
    });
    this.tiles.set(358, {
      tileId: 358,
      name: 'Tile Node 358',
      walkable: true,
      color: '#a26582',
      friction: 0.92
    });
    this.tiles.set(359, {
      tileId: 359,
      name: 'Tile Node 359',
      walkable: true,
      color: '#a447c2',
      friction: 0.9600000000000001
    });
    this.tiles.set(360, {
      tileId: 360,
      name: 'Tile Node 360',
      walkable: true,
      color: '#a62a02',
      friction: 0.8
    });
    this.tiles.set(361, {
      tileId: 361,
      name: 'Tile Node 361',
      walkable: true,
      color: '#a80c42',
      friction: 0.8400000000000001
    });
    this.tiles.set(362, {
      tileId: 362,
      name: 'Tile Node 362',
      walkable: true,
      color: '#a9ee82',
      friction: 0.88
    });
    this.tiles.set(363, {
      tileId: 363,
      name: 'Tile Node 363',
      walkable: true,
      color: '#abd0c2',
      friction: 0.92
    });
    this.tiles.set(364, {
      tileId: 364,
      name: 'Tile Node 364',
      walkable: false,
      color: '#adb302',
      friction: 0.9600000000000001
    });
    this.tiles.set(365, {
      tileId: 365,
      name: 'Tile Node 365',
      walkable: true,
      color: '#af9542',
      friction: 0.8
    });
    this.tiles.set(366, {
      tileId: 366,
      name: 'Tile Node 366',
      walkable: true,
      color: '#b17782',
      friction: 0.8400000000000001
    });
    this.tiles.set(367, {
      tileId: 367,
      name: 'Tile Node 367',
      walkable: true,
      color: '#b359c2',
      friction: 0.88
    });
    this.tiles.set(368, {
      tileId: 368,
      name: 'Tile Node 368',
      walkable: true,
      color: '#b53c02',
      friction: 0.92
    });
    this.tiles.set(369, {
      tileId: 369,
      name: 'Tile Node 369',
      walkable: true,
      color: '#b71e42',
      friction: 0.9600000000000001
    });
    this.tiles.set(370, {
      tileId: 370,
      name: 'Tile Node 370',
      walkable: true,
      color: '#b90082',
      friction: 0.8
    });
    this.tiles.set(371, {
      tileId: 371,
      name: 'Tile Node 371',
      walkable: false,
      color: '#bae2c2',
      friction: 0.8400000000000001
    });
    this.tiles.set(372, {
      tileId: 372,
      name: 'Tile Node 372',
      walkable: true,
      color: '#bcc502',
      friction: 0.88
    });
    this.tiles.set(373, {
      tileId: 373,
      name: 'Tile Node 373',
      walkable: true,
      color: '#bea742',
      friction: 0.92
    });
    this.tiles.set(374, {
      tileId: 374,
      name: 'Tile Node 374',
      walkable: true,
      color: '#c08982',
      friction: 0.9600000000000001
    });
    this.tiles.set(375, {
      tileId: 375,
      name: 'Tile Node 375',
      walkable: true,
      color: '#c26bc2',
      friction: 0.8
    });
    this.tiles.set(376, {
      tileId: 376,
      name: 'Tile Node 376',
      walkable: true,
      color: '#c44e02',
      friction: 0.8400000000000001
    });
    this.tiles.set(377, {
      tileId: 377,
      name: 'Tile Node 377',
      walkable: true,
      color: '#c63042',
      friction: 0.88
    });
    this.tiles.set(378, {
      tileId: 378,
      name: 'Tile Node 378',
      walkable: false,
      color: '#c81282',
      friction: 0.92
    });
    this.tiles.set(379, {
      tileId: 379,
      name: 'Tile Node 379',
      walkable: true,
      color: '#c9f4c2',
      friction: 0.9600000000000001
    });
    this.tiles.set(380, {
      tileId: 380,
      name: 'Tile Node 380',
      walkable: true,
      color: '#cbd702',
      friction: 0.8
    });
    this.tiles.set(381, {
      tileId: 381,
      name: 'Tile Node 381',
      walkable: true,
      color: '#cdb942',
      friction: 0.8400000000000001
    });
    this.tiles.set(382, {
      tileId: 382,
      name: 'Tile Node 382',
      walkable: true,
      color: '#cf9b82',
      friction: 0.88
    });
    this.tiles.set(383, {
      tileId: 383,
      name: 'Tile Node 383',
      walkable: true,
      color: '#d17dc2',
      friction: 0.92
    });
    this.tiles.set(384, {
      tileId: 384,
      name: 'Tile Node 384',
      walkable: true,
      color: '#d36002',
      friction: 0.9600000000000001
    });
    this.tiles.set(385, {
      tileId: 385,
      name: 'Tile Node 385',
      walkable: false,
      color: '#d54242',
      friction: 0.8
    });
    this.tiles.set(386, {
      tileId: 386,
      name: 'Tile Node 386',
      walkable: true,
      color: '#d72482',
      friction: 0.8400000000000001
    });
    this.tiles.set(387, {
      tileId: 387,
      name: 'Tile Node 387',
      walkable: true,
      color: '#d906c2',
      friction: 0.88
    });
    this.tiles.set(388, {
      tileId: 388,
      name: 'Tile Node 388',
      walkable: true,
      color: '#dae902',
      friction: 0.92
    });
    this.tiles.set(389, {
      tileId: 389,
      name: 'Tile Node 389',
      walkable: true,
      color: '#dccb42',
      friction: 0.9600000000000001
    });
    this.tiles.set(390, {
      tileId: 390,
      name: 'Tile Node 390',
      walkable: true,
      color: '#dead82',
      friction: 0.8
    });
    this.tiles.set(391, {
      tileId: 391,
      name: 'Tile Node 391',
      walkable: true,
      color: '#e08fc2',
      friction: 0.8400000000000001
    });
    this.tiles.set(392, {
      tileId: 392,
      name: 'Tile Node 392',
      walkable: false,
      color: '#e27202',
      friction: 0.88
    });
    this.tiles.set(393, {
      tileId: 393,
      name: 'Tile Node 393',
      walkable: true,
      color: '#e45442',
      friction: 0.92
    });
    this.tiles.set(394, {
      tileId: 394,
      name: 'Tile Node 394',
      walkable: true,
      color: '#e63682',
      friction: 0.9600000000000001
    });
    this.tiles.set(395, {
      tileId: 395,
      name: 'Tile Node 395',
      walkable: true,
      color: '#e818c2',
      friction: 0.8
    });
    this.tiles.set(396, {
      tileId: 396,
      name: 'Tile Node 396',
      walkable: true,
      color: '#e9fb02',
      friction: 0.8400000000000001
    });
    this.tiles.set(397, {
      tileId: 397,
      name: 'Tile Node 397',
      walkable: true,
      color: '#ebdd42',
      friction: 0.88
    });
    this.tiles.set(398, {
      tileId: 398,
      name: 'Tile Node 398',
      walkable: true,
      color: '#edbf82',
      friction: 0.92
    });
    this.tiles.set(399, {
      tileId: 399,
      name: 'Tile Node 399',
      walkable: false,
      color: '#efa1c2',
      friction: 0.9600000000000001
    });
    this.tiles.set(400, {
      tileId: 400,
      name: 'Tile Node 400',
      walkable: true,
      color: '#f18402',
      friction: 0.8
    });
    this.tiles.set(401, {
      tileId: 401,
      name: 'Tile Node 401',
      walkable: true,
      color: '#f36642',
      friction: 0.8400000000000001
    });
    this.tiles.set(402, {
      tileId: 402,
      name: 'Tile Node 402',
      walkable: true,
      color: '#f54882',
      friction: 0.88
    });
    this.tiles.set(403, {
      tileId: 403,
      name: 'Tile Node 403',
      walkable: true,
      color: '#f72ac2',
      friction: 0.92
    });
    this.tiles.set(404, {
      tileId: 404,
      name: 'Tile Node 404',
      walkable: true,
      color: '#f90d02',
      friction: 0.9600000000000001
    });
    this.tiles.set(405, {
      tileId: 405,
      name: 'Tile Node 405',
      walkable: true,
      color: '#faef42',
      friction: 0.8
    });
    this.tiles.set(406, {
      tileId: 406,
      name: 'Tile Node 406',
      walkable: false,
      color: '#fcd182',
      friction: 0.8400000000000001
    });
    this.tiles.set(407, {
      tileId: 407,
      name: 'Tile Node 407',
      walkable: true,
      color: '#feb3c2',
      friction: 0.88
    });
    this.tiles.set(408, {
      tileId: 408,
      name: 'Tile Node 408',
      walkable: true,
      color: '#009603',
      friction: 0.92
    });
    this.tiles.set(409, {
      tileId: 409,
      name: 'Tile Node 409',
      walkable: true,
      color: '#027843',
      friction: 0.9600000000000001
    });
    this.tiles.set(410, {
      tileId: 410,
      name: 'Tile Node 410',
      walkable: true,
      color: '#045a83',
      friction: 0.8
    });
    this.tiles.set(411, {
      tileId: 411,
      name: 'Tile Node 411',
      walkable: true,
      color: '#063cc3',
      friction: 0.8400000000000001
    });
    this.tiles.set(412, {
      tileId: 412,
      name: 'Tile Node 412',
      walkable: true,
      color: '#081f03',
      friction: 0.88
    });
    this.tiles.set(413, {
      tileId: 413,
      name: 'Tile Node 413',
      walkable: false,
      color: '#0a0143',
      friction: 0.92
    });
    this.tiles.set(414, {
      tileId: 414,
      name: 'Tile Node 414',
      walkable: true,
      color: '#0be383',
      friction: 0.9600000000000001
    });
    this.tiles.set(415, {
      tileId: 415,
      name: 'Tile Node 415',
      walkable: true,
      color: '#0dc5c3',
      friction: 0.8
    });
    this.tiles.set(416, {
      tileId: 416,
      name: 'Tile Node 416',
      walkable: true,
      color: '#0fa803',
      friction: 0.8400000000000001
    });
    this.tiles.set(417, {
      tileId: 417,
      name: 'Tile Node 417',
      walkable: true,
      color: '#118a43',
      friction: 0.88
    });
    this.tiles.set(418, {
      tileId: 418,
      name: 'Tile Node 418',
      walkable: true,
      color: '#136c83',
      friction: 0.92
    });
    this.tiles.set(419, {
      tileId: 419,
      name: 'Tile Node 419',
      walkable: true,
      color: '#154ec3',
      friction: 0.9600000000000001
    });
    this.tiles.set(420, {
      tileId: 420,
      name: 'Tile Node 420',
      walkable: false,
      color: '#173103',
      friction: 0.8
    });
    this.tiles.set(421, {
      tileId: 421,
      name: 'Tile Node 421',
      walkable: true,
      color: '#191343',
      friction: 0.8400000000000001
    });
    this.tiles.set(422, {
      tileId: 422,
      name: 'Tile Node 422',
      walkable: true,
      color: '#1af583',
      friction: 0.88
    });
    this.tiles.set(423, {
      tileId: 423,
      name: 'Tile Node 423',
      walkable: true,
      color: '#1cd7c3',
      friction: 0.92
    });
    this.tiles.set(424, {
      tileId: 424,
      name: 'Tile Node 424',
      walkable: true,
      color: '#1eba03',
      friction: 0.9600000000000001
    });
    this.tiles.set(425, {
      tileId: 425,
      name: 'Tile Node 425',
      walkable: true,
      color: '#209c43',
      friction: 0.8
    });
    this.tiles.set(426, {
      tileId: 426,
      name: 'Tile Node 426',
      walkable: true,
      color: '#227e83',
      friction: 0.8400000000000001
    });
    this.tiles.set(427, {
      tileId: 427,
      name: 'Tile Node 427',
      walkable: false,
      color: '#2460c3',
      friction: 0.88
    });
    this.tiles.set(428, {
      tileId: 428,
      name: 'Tile Node 428',
      walkable: true,
      color: '#264303',
      friction: 0.92
    });
    this.tiles.set(429, {
      tileId: 429,
      name: 'Tile Node 429',
      walkable: true,
      color: '#282543',
      friction: 0.9600000000000001
    });
    this.tiles.set(430, {
      tileId: 430,
      name: 'Tile Node 430',
      walkable: true,
      color: '#2a0783',
      friction: 0.8
    });
    this.tiles.set(431, {
      tileId: 431,
      name: 'Tile Node 431',
      walkable: true,
      color: '#2be9c3',
      friction: 0.8400000000000001
    });
    this.tiles.set(432, {
      tileId: 432,
      name: 'Tile Node 432',
      walkable: true,
      color: '#2dcc03',
      friction: 0.88
    });
    this.tiles.set(433, {
      tileId: 433,
      name: 'Tile Node 433',
      walkable: true,
      color: '#2fae43',
      friction: 0.92
    });
    this.tiles.set(434, {
      tileId: 434,
      name: 'Tile Node 434',
      walkable: false,
      color: '#319083',
      friction: 0.9600000000000001
    });
    this.tiles.set(435, {
      tileId: 435,
      name: 'Tile Node 435',
      walkable: true,
      color: '#3372c3',
      friction: 0.8
    });
    this.tiles.set(436, {
      tileId: 436,
      name: 'Tile Node 436',
      walkable: true,
      color: '#355503',
      friction: 0.8400000000000001
    });
    this.tiles.set(437, {
      tileId: 437,
      name: 'Tile Node 437',
      walkable: true,
      color: '#373743',
      friction: 0.88
    });
    this.tiles.set(438, {
      tileId: 438,
      name: 'Tile Node 438',
      walkable: true,
      color: '#391983',
      friction: 0.92
    });
    this.tiles.set(439, {
      tileId: 439,
      name: 'Tile Node 439',
      walkable: true,
      color: '#3afbc3',
      friction: 0.9600000000000001
    });
    this.tiles.set(440, {
      tileId: 440,
      name: 'Tile Node 440',
      walkable: true,
      color: '#3cde03',
      friction: 0.8
    });
    this.tiles.set(441, {
      tileId: 441,
      name: 'Tile Node 441',
      walkable: false,
      color: '#3ec043',
      friction: 0.8400000000000001
    });
    this.tiles.set(442, {
      tileId: 442,
      name: 'Tile Node 442',
      walkable: true,
      color: '#40a283',
      friction: 0.88
    });
    this.tiles.set(443, {
      tileId: 443,
      name: 'Tile Node 443',
      walkable: true,
      color: '#4284c3',
      friction: 0.92
    });
    this.tiles.set(444, {
      tileId: 444,
      name: 'Tile Node 444',
      walkable: true,
      color: '#446703',
      friction: 0.9600000000000001
    });
    this.tiles.set(445, {
      tileId: 445,
      name: 'Tile Node 445',
      walkable: true,
      color: '#464943',
      friction: 0.8
    });
    this.tiles.set(446, {
      tileId: 446,
      name: 'Tile Node 446',
      walkable: true,
      color: '#482b83',
      friction: 0.8400000000000001
    });
    this.tiles.set(447, {
      tileId: 447,
      name: 'Tile Node 447',
      walkable: true,
      color: '#4a0dc3',
      friction: 0.88
    });
    this.tiles.set(448, {
      tileId: 448,
      name: 'Tile Node 448',
      walkable: false,
      color: '#4bf003',
      friction: 0.92
    });
    this.tiles.set(449, {
      tileId: 449,
      name: 'Tile Node 449',
      walkable: true,
      color: '#4dd243',
      friction: 0.9600000000000001
    });
    this.tiles.set(450, {
      tileId: 450,
      name: 'Tile Node 450',
      walkable: true,
      color: '#4fb483',
      friction: 0.8
    });
    this.tiles.set(451, {
      tileId: 451,
      name: 'Tile Node 451',
      walkable: true,
      color: '#5196c3',
      friction: 0.8400000000000001
    });
    this.tiles.set(452, {
      tileId: 452,
      name: 'Tile Node 452',
      walkable: true,
      color: '#537903',
      friction: 0.88
    });
    this.tiles.set(453, {
      tileId: 453,
      name: 'Tile Node 453',
      walkable: true,
      color: '#555b43',
      friction: 0.92
    });
    this.tiles.set(454, {
      tileId: 454,
      name: 'Tile Node 454',
      walkable: true,
      color: '#573d83',
      friction: 0.9600000000000001
    });
    this.tiles.set(455, {
      tileId: 455,
      name: 'Tile Node 455',
      walkable: false,
      color: '#591fc3',
      friction: 0.8
    });
    this.tiles.set(456, {
      tileId: 456,
      name: 'Tile Node 456',
      walkable: true,
      color: '#5b0203',
      friction: 0.8400000000000001
    });
    this.tiles.set(457, {
      tileId: 457,
      name: 'Tile Node 457',
      walkable: true,
      color: '#5ce443',
      friction: 0.88
    });
    this.tiles.set(458, {
      tileId: 458,
      name: 'Tile Node 458',
      walkable: true,
      color: '#5ec683',
      friction: 0.92
    });
    this.tiles.set(459, {
      tileId: 459,
      name: 'Tile Node 459',
      walkable: true,
      color: '#60a8c3',
      friction: 0.9600000000000001
    });
    this.tiles.set(460, {
      tileId: 460,
      name: 'Tile Node 460',
      walkable: true,
      color: '#628b03',
      friction: 0.8
    });
    this.tiles.set(461, {
      tileId: 461,
      name: 'Tile Node 461',
      walkable: true,
      color: '#646d43',
      friction: 0.8400000000000001
    });
    this.tiles.set(462, {
      tileId: 462,
      name: 'Tile Node 462',
      walkable: false,
      color: '#664f83',
      friction: 0.88
    });
    this.tiles.set(463, {
      tileId: 463,
      name: 'Tile Node 463',
      walkable: true,
      color: '#6831c3',
      friction: 0.92
    });
    this.tiles.set(464, {
      tileId: 464,
      name: 'Tile Node 464',
      walkable: true,
      color: '#6a1403',
      friction: 0.9600000000000001
    });
    this.tiles.set(465, {
      tileId: 465,
      name: 'Tile Node 465',
      walkable: true,
      color: '#6bf643',
      friction: 0.8
    });
    this.tiles.set(466, {
      tileId: 466,
      name: 'Tile Node 466',
      walkable: true,
      color: '#6dd883',
      friction: 0.8400000000000001
    });
    this.tiles.set(467, {
      tileId: 467,
      name: 'Tile Node 467',
      walkable: true,
      color: '#6fbac3',
      friction: 0.88
    });
    this.tiles.set(468, {
      tileId: 468,
      name: 'Tile Node 468',
      walkable: true,
      color: '#719d03',
      friction: 0.92
    });
    this.tiles.set(469, {
      tileId: 469,
      name: 'Tile Node 469',
      walkable: false,
      color: '#737f43',
      friction: 0.9600000000000001
    });
    this.tiles.set(470, {
      tileId: 470,
      name: 'Tile Node 470',
      walkable: true,
      color: '#756183',
      friction: 0.8
    });
    this.tiles.set(471, {
      tileId: 471,
      name: 'Tile Node 471',
      walkable: true,
      color: '#7743c3',
      friction: 0.8400000000000001
    });
    this.tiles.set(472, {
      tileId: 472,
      name: 'Tile Node 472',
      walkable: true,
      color: '#792603',
      friction: 0.88
    });
    this.tiles.set(473, {
      tileId: 473,
      name: 'Tile Node 473',
      walkable: true,
      color: '#7b0843',
      friction: 0.92
    });
    this.tiles.set(474, {
      tileId: 474,
      name: 'Tile Node 474',
      walkable: true,
      color: '#7cea83',
      friction: 0.9600000000000001
    });
    this.tiles.set(475, {
      tileId: 475,
      name: 'Tile Node 475',
      walkable: true,
      color: '#7eccc3',
      friction: 0.8
    });
    this.tiles.set(476, {
      tileId: 476,
      name: 'Tile Node 476',
      walkable: false,
      color: '#80af03',
      friction: 0.8400000000000001
    });
    this.tiles.set(477, {
      tileId: 477,
      name: 'Tile Node 477',
      walkable: true,
      color: '#829143',
      friction: 0.88
    });
    this.tiles.set(478, {
      tileId: 478,
      name: 'Tile Node 478',
      walkable: true,
      color: '#847383',
      friction: 0.92
    });
    this.tiles.set(479, {
      tileId: 479,
      name: 'Tile Node 479',
      walkable: true,
      color: '#8655c3',
      friction: 0.9600000000000001
    });
    this.tiles.set(480, {
      tileId: 480,
      name: 'Tile Node 480',
      walkable: true,
      color: '#883803',
      friction: 0.8
    });
    this.tiles.set(481, {
      tileId: 481,
      name: 'Tile Node 481',
      walkable: true,
      color: '#8a1a43',
      friction: 0.8400000000000001
    });
    this.tiles.set(482, {
      tileId: 482,
      name: 'Tile Node 482',
      walkable: true,
      color: '#8bfc83',
      friction: 0.88
    });
    this.tiles.set(483, {
      tileId: 483,
      name: 'Tile Node 483',
      walkable: false,
      color: '#8ddec3',
      friction: 0.92
    });
    this.tiles.set(484, {
      tileId: 484,
      name: 'Tile Node 484',
      walkable: true,
      color: '#8fc103',
      friction: 0.9600000000000001
    });
    this.tiles.set(485, {
      tileId: 485,
      name: 'Tile Node 485',
      walkable: true,
      color: '#91a343',
      friction: 0.8
    });
    this.tiles.set(486, {
      tileId: 486,
      name: 'Tile Node 486',
      walkable: true,
      color: '#938583',
      friction: 0.8400000000000001
    });
    this.tiles.set(487, {
      tileId: 487,
      name: 'Tile Node 487',
      walkable: true,
      color: '#9567c3',
      friction: 0.88
    });
    this.tiles.set(488, {
      tileId: 488,
      name: 'Tile Node 488',
      walkable: true,
      color: '#974a03',
      friction: 0.92
    });
    this.tiles.set(489, {
      tileId: 489,
      name: 'Tile Node 489',
      walkable: true,
      color: '#992c43',
      friction: 0.9600000000000001
    });
    this.tiles.set(490, {
      tileId: 490,
      name: 'Tile Node 490',
      walkable: false,
      color: '#9b0e83',
      friction: 0.8
    });
    this.tiles.set(491, {
      tileId: 491,
      name: 'Tile Node 491',
      walkable: true,
      color: '#9cf0c3',
      friction: 0.8400000000000001
    });
    this.tiles.set(492, {
      tileId: 492,
      name: 'Tile Node 492',
      walkable: true,
      color: '#9ed303',
      friction: 0.88
    });
    this.tiles.set(493, {
      tileId: 493,
      name: 'Tile Node 493',
      walkable: true,
      color: '#a0b543',
      friction: 0.92
    });
    this.tiles.set(494, {
      tileId: 494,
      name: 'Tile Node 494',
      walkable: true,
      color: '#a29783',
      friction: 0.9600000000000001
    });
    this.tiles.set(495, {
      tileId: 495,
      name: 'Tile Node 495',
      walkable: true,
      color: '#a479c3',
      friction: 0.8
    });
    this.tiles.set(496, {
      tileId: 496,
      name: 'Tile Node 496',
      walkable: true,
      color: '#a65c03',
      friction: 0.8400000000000001
    });
    this.tiles.set(497, {
      tileId: 497,
      name: 'Tile Node 497',
      walkable: false,
      color: '#a83e43',
      friction: 0.88
    });
    this.tiles.set(498, {
      tileId: 498,
      name: 'Tile Node 498',
      walkable: true,
      color: '#aa2083',
      friction: 0.92
    });
    this.tiles.set(499, {
      tileId: 499,
      name: 'Tile Node 499',
      walkable: true,
      color: '#ac02c3',
      friction: 0.9600000000000001
    });
    this.tiles.set(500, {
      tileId: 500,
      name: 'Tile Node 500',
      walkable: true,
      color: '#ade503',
      friction: 0.8
    });
    this.tiles.set(501, {
      tileId: 501,
      name: 'Tile Node 501',
      walkable: true,
      color: '#afc743',
      friction: 0.8400000000000001
    });
    this.tiles.set(502, {
      tileId: 502,
      name: 'Tile Node 502',
      walkable: true,
      color: '#b1a983',
      friction: 0.88
    });
    this.tiles.set(503, {
      tileId: 503,
      name: 'Tile Node 503',
      walkable: true,
      color: '#b38bc3',
      friction: 0.92
    });
    this.tiles.set(504, {
      tileId: 504,
      name: 'Tile Node 504',
      walkable: false,
      color: '#b56e03',
      friction: 0.9600000000000001
    });
    this.tiles.set(505, {
      tileId: 505,
      name: 'Tile Node 505',
      walkable: true,
      color: '#b75043',
      friction: 0.8
    });
    this.tiles.set(506, {
      tileId: 506,
      name: 'Tile Node 506',
      walkable: true,
      color: '#b93283',
      friction: 0.8400000000000001
    });
    this.tiles.set(507, {
      tileId: 507,
      name: 'Tile Node 507',
      walkable: true,
      color: '#bb14c3',
      friction: 0.88
    });
    this.tiles.set(508, {
      tileId: 508,
      name: 'Tile Node 508',
      walkable: true,
      color: '#bcf703',
      friction: 0.92
    });
    this.tiles.set(509, {
      tileId: 509,
      name: 'Tile Node 509',
      walkable: true,
      color: '#bed943',
      friction: 0.9600000000000001
    });
    this.tiles.set(510, {
      tileId: 510,
      name: 'Tile Node 510',
      walkable: true,
      color: '#c0bb83',
      friction: 0.8
    });
    this.tiles.set(511, {
      tileId: 511,
      name: 'Tile Node 511',
      walkable: false,
      color: '#c29dc3',
      friction: 0.8400000000000001
    });
    this.tiles.set(512, {
      tileId: 512,
      name: 'Tile Node 512',
      walkable: true,
      color: '#c48003',
      friction: 0.88
    });
    this.tiles.set(513, {
      tileId: 513,
      name: 'Tile Node 513',
      walkable: true,
      color: '#c66243',
      friction: 0.92
    });
    this.tiles.set(514, {
      tileId: 514,
      name: 'Tile Node 514',
      walkable: true,
      color: '#c84483',
      friction: 0.9600000000000001
    });
    this.tiles.set(515, {
      tileId: 515,
      name: 'Tile Node 515',
      walkable: true,
      color: '#ca26c3',
      friction: 0.8
    });
    this.tiles.set(516, {
      tileId: 516,
      name: 'Tile Node 516',
      walkable: true,
      color: '#cc0903',
      friction: 0.8400000000000001
    });
    this.tiles.set(517, {
      tileId: 517,
      name: 'Tile Node 517',
      walkable: true,
      color: '#cdeb43',
      friction: 0.88
    });
    this.tiles.set(518, {
      tileId: 518,
      name: 'Tile Node 518',
      walkable: false,
      color: '#cfcd83',
      friction: 0.92
    });
    this.tiles.set(519, {
      tileId: 519,
      name: 'Tile Node 519',
      walkable: true,
      color: '#d1afc3',
      friction: 0.9600000000000001
    });
    this.tiles.set(520, {
      tileId: 520,
      name: 'Tile Node 520',
      walkable: true,
      color: '#d39203',
      friction: 0.8
    });
    this.tiles.set(521, {
      tileId: 521,
      name: 'Tile Node 521',
      walkable: true,
      color: '#d57443',
      friction: 0.8400000000000001
    });
    this.tiles.set(522, {
      tileId: 522,
      name: 'Tile Node 522',
      walkable: true,
      color: '#d75683',
      friction: 0.88
    });
    this.tiles.set(523, {
      tileId: 523,
      name: 'Tile Node 523',
      walkable: true,
      color: '#d938c3',
      friction: 0.92
    });
    this.tiles.set(524, {
      tileId: 524,
      name: 'Tile Node 524',
      walkable: true,
      color: '#db1b03',
      friction: 0.9600000000000001
    });
    this.tiles.set(525, {
      tileId: 525,
      name: 'Tile Node 525',
      walkable: false,
      color: '#dcfd43',
      friction: 0.8
    });
    this.tiles.set(526, {
      tileId: 526,
      name: 'Tile Node 526',
      walkable: true,
      color: '#dedf83',
      friction: 0.8400000000000001
    });
    this.tiles.set(527, {
      tileId: 527,
      name: 'Tile Node 527',
      walkable: true,
      color: '#e0c1c3',
      friction: 0.88
    });
    this.tiles.set(528, {
      tileId: 528,
      name: 'Tile Node 528',
      walkable: true,
      color: '#e2a403',
      friction: 0.92
    });
    this.tiles.set(529, {
      tileId: 529,
      name: 'Tile Node 529',
      walkable: true,
      color: '#e48643',
      friction: 0.9600000000000001
    });
    this.tiles.set(530, {
      tileId: 530,
      name: 'Tile Node 530',
      walkable: true,
      color: '#e66883',
      friction: 0.8
    });
    this.tiles.set(531, {
      tileId: 531,
      name: 'Tile Node 531',
      walkable: true,
      color: '#e84ac3',
      friction: 0.8400000000000001
    });
    this.tiles.set(532, {
      tileId: 532,
      name: 'Tile Node 532',
      walkable: false,
      color: '#ea2d03',
      friction: 0.88
    });
    this.tiles.set(533, {
      tileId: 533,
      name: 'Tile Node 533',
      walkable: true,
      color: '#ec0f43',
      friction: 0.92
    });
    this.tiles.set(534, {
      tileId: 534,
      name: 'Tile Node 534',
      walkable: true,
      color: '#edf183',
      friction: 0.9600000000000001
    });
    this.tiles.set(535, {
      tileId: 535,
      name: 'Tile Node 535',
      walkable: true,
      color: '#efd3c3',
      friction: 0.8
    });
    this.tiles.set(536, {
      tileId: 536,
      name: 'Tile Node 536',
      walkable: true,
      color: '#f1b603',
      friction: 0.8400000000000001
    });
    this.tiles.set(537, {
      tileId: 537,
      name: 'Tile Node 537',
      walkable: true,
      color: '#f39843',
      friction: 0.88
    });
    this.tiles.set(538, {
      tileId: 538,
      name: 'Tile Node 538',
      walkable: true,
      color: '#f57a83',
      friction: 0.92
    });
    this.tiles.set(539, {
      tileId: 539,
      name: 'Tile Node 539',
      walkable: false,
      color: '#f75cc3',
      friction: 0.9600000000000001
    });
    this.tiles.set(540, {
      tileId: 540,
      name: 'Tile Node 540',
      walkable: true,
      color: '#f93f03',
      friction: 0.8
    });
    this.tiles.set(541, {
      tileId: 541,
      name: 'Tile Node 541',
      walkable: true,
      color: '#fb2143',
      friction: 0.8400000000000001
    });
    this.tiles.set(542, {
      tileId: 542,
      name: 'Tile Node 542',
      walkable: true,
      color: '#fd0383',
      friction: 0.88
    });
    this.tiles.set(543, {
      tileId: 543,
      name: 'Tile Node 543',
      walkable: true,
      color: '#fee5c3',
      friction: 0.92
    });
    this.tiles.set(544, {
      tileId: 544,
      name: 'Tile Node 544',
      walkable: true,
      color: '#00c804',
      friction: 0.9600000000000001
    });
    this.tiles.set(545, {
      tileId: 545,
      name: 'Tile Node 545',
      walkable: true,
      color: '#02aa44',
      friction: 0.8
    });
    this.tiles.set(546, {
      tileId: 546,
      name: 'Tile Node 546',
      walkable: false,
      color: '#048c84',
      friction: 0.8400000000000001
    });
    this.tiles.set(547, {
      tileId: 547,
      name: 'Tile Node 547',
      walkable: true,
      color: '#066ec4',
      friction: 0.88
    });
    this.tiles.set(548, {
      tileId: 548,
      name: 'Tile Node 548',
      walkable: true,
      color: '#085104',
      friction: 0.92
    });
    this.tiles.set(549, {
      tileId: 549,
      name: 'Tile Node 549',
      walkable: true,
      color: '#0a3344',
      friction: 0.9600000000000001
    });
    this.tiles.set(550, {
      tileId: 550,
      name: 'Tile Node 550',
      walkable: true,
      color: '#0c1584',
      friction: 0.8
    });
    this.tiles.set(551, {
      tileId: 551,
      name: 'Tile Node 551',
      walkable: true,
      color: '#0df7c4',
      friction: 0.8400000000000001
    });
    this.tiles.set(552, {
      tileId: 552,
      name: 'Tile Node 552',
      walkable: true,
      color: '#0fda04',
      friction: 0.88
    });
    this.tiles.set(553, {
      tileId: 553,
      name: 'Tile Node 553',
      walkable: false,
      color: '#11bc44',
      friction: 0.92
    });
    this.tiles.set(554, {
      tileId: 554,
      name: 'Tile Node 554',
      walkable: true,
      color: '#139e84',
      friction: 0.9600000000000001
    });
    this.tiles.set(555, {
      tileId: 555,
      name: 'Tile Node 555',
      walkable: true,
      color: '#1580c4',
      friction: 0.8
    });
    this.tiles.set(556, {
      tileId: 556,
      name: 'Tile Node 556',
      walkable: true,
      color: '#176304',
      friction: 0.8400000000000001
    });
    this.tiles.set(557, {
      tileId: 557,
      name: 'Tile Node 557',
      walkable: true,
      color: '#194544',
      friction: 0.88
    });
    this.tiles.set(558, {
      tileId: 558,
      name: 'Tile Node 558',
      walkable: true,
      color: '#1b2784',
      friction: 0.92
    });
    this.tiles.set(559, {
      tileId: 559,
      name: 'Tile Node 559',
      walkable: true,
      color: '#1d09c4',
      friction: 0.9600000000000001
    });
    this.tiles.set(560, {
      tileId: 560,
      name: 'Tile Node 560',
      walkable: false,
      color: '#1eec04',
      friction: 0.8
    });
    this.tiles.set(561, {
      tileId: 561,
      name: 'Tile Node 561',
      walkable: true,
      color: '#20ce44',
      friction: 0.8400000000000001
    });
    this.tiles.set(562, {
      tileId: 562,
      name: 'Tile Node 562',
      walkable: true,
      color: '#22b084',
      friction: 0.88
    });
    this.tiles.set(563, {
      tileId: 563,
      name: 'Tile Node 563',
      walkable: true,
      color: '#2492c4',
      friction: 0.92
    });
    this.tiles.set(564, {
      tileId: 564,
      name: 'Tile Node 564',
      walkable: true,
      color: '#267504',
      friction: 0.9600000000000001
    });
    this.tiles.set(565, {
      tileId: 565,
      name: 'Tile Node 565',
      walkable: true,
      color: '#285744',
      friction: 0.8
    });
    this.tiles.set(566, {
      tileId: 566,
      name: 'Tile Node 566',
      walkable: true,
      color: '#2a3984',
      friction: 0.8400000000000001
    });
    this.tiles.set(567, {
      tileId: 567,
      name: 'Tile Node 567',
      walkable: false,
      color: '#2c1bc4',
      friction: 0.88
    });
    this.tiles.set(568, {
      tileId: 568,
      name: 'Tile Node 568',
      walkable: true,
      color: '#2dfe04',
      friction: 0.92
    });
    this.tiles.set(569, {
      tileId: 569,
      name: 'Tile Node 569',
      walkable: true,
      color: '#2fe044',
      friction: 0.9600000000000001
    });
    this.tiles.set(570, {
      tileId: 570,
      name: 'Tile Node 570',
      walkable: true,
      color: '#31c284',
      friction: 0.8
    });
    this.tiles.set(571, {
      tileId: 571,
      name: 'Tile Node 571',
      walkable: true,
      color: '#33a4c4',
      friction: 0.8400000000000001
    });
    this.tiles.set(572, {
      tileId: 572,
      name: 'Tile Node 572',
      walkable: true,
      color: '#358704',
      friction: 0.88
    });
    this.tiles.set(573, {
      tileId: 573,
      name: 'Tile Node 573',
      walkable: true,
      color: '#376944',
      friction: 0.92
    });
    this.tiles.set(574, {
      tileId: 574,
      name: 'Tile Node 574',
      walkable: false,
      color: '#394b84',
      friction: 0.9600000000000001
    });
    this.tiles.set(575, {
      tileId: 575,
      name: 'Tile Node 575',
      walkable: true,
      color: '#3b2dc4',
      friction: 0.8
    });
    this.tiles.set(576, {
      tileId: 576,
      name: 'Tile Node 576',
      walkable: true,
      color: '#3d1004',
      friction: 0.8400000000000001
    });
    this.tiles.set(577, {
      tileId: 577,
      name: 'Tile Node 577',
      walkable: true,
      color: '#3ef244',
      friction: 0.88
    });
    this.tiles.set(578, {
      tileId: 578,
      name: 'Tile Node 578',
      walkable: true,
      color: '#40d484',
      friction: 0.92
    });
    this.tiles.set(579, {
      tileId: 579,
      name: 'Tile Node 579',
      walkable: true,
      color: '#42b6c4',
      friction: 0.9600000000000001
    });
    this.tiles.set(580, {
      tileId: 580,
      name: 'Tile Node 580',
      walkable: true,
      color: '#449904',
      friction: 0.8
    });
    this.tiles.set(581, {
      tileId: 581,
      name: 'Tile Node 581',
      walkable: false,
      color: '#467b44',
      friction: 0.8400000000000001
    });
    this.tiles.set(582, {
      tileId: 582,
      name: 'Tile Node 582',
      walkable: true,
      color: '#485d84',
      friction: 0.88
    });
    this.tiles.set(583, {
      tileId: 583,
      name: 'Tile Node 583',
      walkable: true,
      color: '#4a3fc4',
      friction: 0.92
    });
    this.tiles.set(584, {
      tileId: 584,
      name: 'Tile Node 584',
      walkable: true,
      color: '#4c2204',
      friction: 0.9600000000000001
    });
    this.tiles.set(585, {
      tileId: 585,
      name: 'Tile Node 585',
      walkable: true,
      color: '#4e0444',
      friction: 0.8
    });
    this.tiles.set(586, {
      tileId: 586,
      name: 'Tile Node 586',
      walkable: true,
      color: '#4fe684',
      friction: 0.8400000000000001
    });
    this.tiles.set(587, {
      tileId: 587,
      name: 'Tile Node 587',
      walkable: true,
      color: '#51c8c4',
      friction: 0.88
    });
    this.tiles.set(588, {
      tileId: 588,
      name: 'Tile Node 588',
      walkable: false,
      color: '#53ab04',
      friction: 0.92
    });
    this.tiles.set(589, {
      tileId: 589,
      name: 'Tile Node 589',
      walkable: true,
      color: '#558d44',
      friction: 0.9600000000000001
    });
    this.tiles.set(590, {
      tileId: 590,
      name: 'Tile Node 590',
      walkable: true,
      color: '#576f84',
      friction: 0.8
    });
    this.tiles.set(591, {
      tileId: 591,
      name: 'Tile Node 591',
      walkable: true,
      color: '#5951c4',
      friction: 0.8400000000000001
    });
    this.tiles.set(592, {
      tileId: 592,
      name: 'Tile Node 592',
      walkable: true,
      color: '#5b3404',
      friction: 0.88
    });
    this.tiles.set(593, {
      tileId: 593,
      name: 'Tile Node 593',
      walkable: true,
      color: '#5d1644',
      friction: 0.92
    });
    this.tiles.set(594, {
      tileId: 594,
      name: 'Tile Node 594',
      walkable: true,
      color: '#5ef884',
      friction: 0.9600000000000001
    });
    this.tiles.set(595, {
      tileId: 595,
      name: 'Tile Node 595',
      walkable: false,
      color: '#60dac4',
      friction: 0.8
    });
    this.tiles.set(596, {
      tileId: 596,
      name: 'Tile Node 596',
      walkable: true,
      color: '#62bd04',
      friction: 0.8400000000000001
    });
    this.tiles.set(597, {
      tileId: 597,
      name: 'Tile Node 597',
      walkable: true,
      color: '#649f44',
      friction: 0.88
    });
    this.tiles.set(598, {
      tileId: 598,
      name: 'Tile Node 598',
      walkable: true,
      color: '#668184',
      friction: 0.92
    });
    this.tiles.set(599, {
      tileId: 599,
      name: 'Tile Node 599',
      walkable: true,
      color: '#6863c4',
      friction: 0.9600000000000001
    });
    this.tiles.set(600, {
      tileId: 600,
      name: 'Tile Node 600',
      walkable: true,
      color: '#6a4604',
      friction: 0.8
    });
  }

  static getTile(id: number): BiomeTile | undefined {
    if (this.tiles.size === 0) this.initialize();
    return this.tiles.get(id);
  }

  static getCount(): number {
    if (this.tiles.size === 0) this.initialize();
    return this.tiles.size;
  }
}
