
const INITIAL_STATE = {
  exclusives: [
    {
      'id': 1,
      'item_name': 'Balaclava',
      'item_color': 'Sand',
      'item_price': 100,
      'item_description': 'Brutally fashionable piece! This wearable item will keep you warm during extremely cold winters. Perfect to enter those Alps. Limited edition. Only 40 pieces have been produced.',
      'item_info': [
        '30% cashmere/ 70% merino wool',
        'Perfect fitted, can be worn as a normal beanie as well, when worn as balaclava provides extreme comfort.'
      ],
      'item_images': [
        '../../assets/images/BALACLAVA_SAND.png',
        '../../assets/images/BALACLAVA_SAND_1.jpg',
        '../../assets/images/BALACLAVA_SAND_2.jpg',
        '../../assets/images/BALACLAVA_SAND_3.jpg',
      ],
      'item_url': '/product/balaclava/1',
      'item_quantity': 20,
      'onSale': false,
    },
    {
      'id': 2,
      'item_name': 'Balaclava',
      'item_color': 'Crimson',
      'item_price': 100,
      'item_description': 'Brutally fashionable piece! This wearable item will keep you warm during extremely cold winters. Perfect to enter those Alps. Limited edition. Only 40 pieces have been produced.',
      'item_info': [
        '30% cashmere/ 70% merino wool',
        'Perfect fitted, can be worn as a normal beanie as well, when worn as balaclava provides extreme comfort.'
      ],
      'item_images': [
        '../../assets/images/BALACLAVA_CRIMSON.png',
        '../../assets/images/BALACLAVA_CRIMSON_1.jpg',
        '../../assets/images/BALACLAVA_CRIMSON_2.jpg',
        '../../assets/images/BALACLAVA_CRIMSON_3.jpg',
      ],
      'item_url': '/product/balaclava/2',
      'item_quantity': 20,
      'onSale': false,
    },
    {
      'id': 3,
      'item_name': 'Balaclava',
      'item_color': 'Smoke',
      'item_price': 100,
      'item_description': 'Brutally fashionable piece! This wearable item will keep you warm during extremely cold winters. Perfect to enter those Alps. Limited edition. Only 40 pieces have been produced.',
      'item_info': [
        '30% cashmere/ 70% merino wool',
        'Perfect fitted, can be worn as a normal beanie as well, when worn as balaclava provides extreme comfort.'
      ],
      'item_images': [
        '../../assets/images/BALACLAVA_SMOKE.png',
        '../../assets/images/BALACLAVA_SMOKE_1.jpg',
        '../../assets/images/BALACLAVA_SMOKE_2.jpg',
        '../../assets/images/BALACLAVA_SMOKE_3.jpg',
      ],
      'item_url': '/product/balaclava/3',
      'item_quantity': 20,
      'onSale': false,
    },
    {
      'id': 4,
      'item_name': 'Balaclava',
      'item_color': 'Onyx',
      'item_price': 100,
      'item_description': 'Brutally fashionable piece! This wearable item will keep you warm during extremely cold winters. Perfect to enter those Alps. Limited edition. Only 40 pieces have been produced.',
      'item_info': [
        '30% cashmere/ 70% merino wool',
        'Perfect fitted, can be worn as a normal beanie as well, when worn as balaclava provides extreme comfort.'
      ],
      'item_images': [
        '../../assets/images/BALACLAVA_ONYX.png',
        '../../assets/images/BALACLAVA_ONYX_1.jpg',
        '../../assets/images/BALACLAVA_ONYX_2.jpg',
        '../../assets/images/BALACLAVA_ONYX_3.jpg',
      ],
      'item_url': '/product/balaclava/4',
      'item_quantity': 20,
      'onSale': false,
    },
    {
      'id': 5,
      'item_name': 'Balaclava',
      'item_color': 'Croco',
      'item_price': 100,
      'item_description': 'Brutally fashionable piece! This wearable item will keep you warm during extremely cold winters. Perfect to enter those Alps. Limited edition. Only 40 pieces have been produced.',
      'item_info': [
        '30% cashmere/ 70% merino wool',
        'Perfect fitted, can be worn as a normal beanie as well, when worn as balaclava provides extreme comfort.'
      ],
      'item_images': [
        '../../assets/images/BALACLAVA_CROCO.png',
        '../../assets/images/BALACLAVA_CROCO_1.jpg',
        '../../assets/images/BALACLAVA_CROCO_2.jpg',
      ],
      'item_url': '/product/balaclava/5',
      'item_quantity': 20,
      'onSale': false,
    },
    {
      'id': 6,
      'item_name': 'Felted Scarf',
      'item_color': 'Midnight / Crimson',
      'item_price': 150,
      'item_description': 'Brutally fashionable piece! This wearable item will keep you warm during extremely cold winters. Perfect to enter those Alps. Limited edition. Only 40 pieces have been produced.',
      'item_info': [
        '30% cashmere/ 70% merino wool',
        'Perfect fitted, can be worn as a normal beanie as well, when worn as balaclava provides extreme comfort.'
      ],
      'item_images': [
        '../../assets/images/FILTED_SCARF_MIDNIGHT_CRIMSON.png',
        '../../assets/images/FILTED_SCARF_MIDNIGHT_CRIMSON_1.jpg',
        '../../assets/images/FILTED_SCARF_MIDNIGHT_CRIMSON_2.jpg',
      ],
      'item_url': '/product/felted_scarf/6',
      'item_quantity': 20,
      'onSale': false,
    },
  ],
  newsletter: [],
};

export const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default : 
      return state;
  }
};