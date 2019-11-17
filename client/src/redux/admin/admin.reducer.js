
const INITIAL_STATE = {
  exclusives: [
    {
      'id': 1,
      'item_name': 'Balaclava',
      'item_color': 'Sand',
      'item_price': 100,
      'item_image': '../../assets/images/BALACLAVA_SAND.png',
      'onSale': false,
    },
    {
      'id': 2,
      'item_name': 'Balaclava',
      'item_color': 'Crimson',
      'item_price': 100,
      'item_image': '../../assets/images/BALACLAVA_CRIMSON.png',
      'onSale': false,
    },
    {
      'id': 3,
      'item_name': 'Balaclava',
      'item_color': 'Smoke',
      'item_price': 100,
      'item_image': '../../assets/images/BALACLAVA_SMOKE.png',
      'onSale': false,
    },
    {
      'id': 4,
      'item_name': 'Balaclava',
      'item_color': 'Onyx',
      'item_price': 100,
      'item_image': '../../assets/images/BALACLAVA_ONYX.png',
      'onSale': false,
    },
    {
      'id': 5,
      'item_name': 'Balaclava',
      'item_color': 'Croco',
      'item_price': 100,
      'item_image': '../../assets/images/BALACLAVA_CROCO.png',
      'onSale': false,
    },
    {
      'id': 6,
      'item_name': 'Felted Scarf',
      'item_color': 'Midnight / Crimson',
      'item_price': 150,
      'item_image': '../../assets/images/FILTED_SCARF_MIDNIGHT_CRIMSON.png',
      'onSale': false,
    },
  ]
};

export const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default : 
      return state;
  }
};