interface Item {
  itemName: string;
  author?: string;
  returnWindow: string;
  price: number;
}

interface Order {
  orderPlacedOn: string;
  total: number;
  shipTo: string;
  orderNumber: string;
  deliveredOn: string;
  message?: string;
  item: Item[];
}

const orderHistory: Order[] = [
  {
    orderPlacedOn: 'August 4, 2020',
    total: 34,
    shipTo: 'JS Masher',
    orderNumber: '114-3941689-8772232',
    deliveredOn: 'Aug 8, 2020',
    item: [
      {
        itemName: 'JavaScript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        returnWindow: 'Sept 7, 2020',
        price: 31.55,
      },
    ],
  },
  {
    orderPlacedOn: 'July 19, 2020',
    total: 44.53,
    shipTo: 'JS Masher',
    orderNumber: '113-9984268-1280257',
    deliveredOn: 'Jul 20, 2020',
    message:
      'Your package was delivered. It was handed directly to a resident.',
    item: [
      {
        itemName: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        returnWindow: 'Aug 19, 2020',
        price: 31.33,
      },
    ],
  },
  {
    orderPlacedOn: 'July 4, 2020',
    total: 17.22,
    shipTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    deliveredOn: 'Jul 7, 2020',
    message:
      'Your package was delivered. It was handed directly to a resident.',
    item: [
      {
        itemName:
          'Gamecude Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
        returnWindow: 'Aug 5, 2020',
        price: 15.98,
      },
    ],
  },
  {
    orderPlacedOn: 'July 3, 2020',
    total: 138.98,
    shipTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    deliveredOn: 'Jul 5, 2020',
    item: [
      {
        itemName:
          'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        returnWindow: 'Aug 4, 2020',
        price: 94.95,
      },
      {
        itemName: 'The Art of Sql',
        author: 'Faroult, Stephane',
        returnWindow: 'Aug 4, 2020',
        price: 33.99,
      },
    ],
  },
];
