import type { ReactElement } from 'react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  icon: string;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Smoked Brisket Bowl',
    description: 'Slow-smoked local beef over herbed grains with chimichurri drizzle',
    price: 'MWK 8,500',
    category: 'Mains',
    icon: '🥩',
  },
  {
    id: '2',
    name: 'Garden Harvest Salad',
    description: 'Crisp seasonal greens, roasted beets, goat cheese & honey-lemon vinaigrette',
    price: 'MWK 5,200',
    category: 'Starters',
    icon: '🥗',
  },
  {
    id: '3',
    name: 'Graze Signature Burger',
    description: 'Double patty, caramelized onions, aged cheddar on toasted brioche bun',
    price: 'MWK 7,000',
    category: 'Mains',
    icon: '🍔',
  },
  {
    id: '4',
    name: 'Butternut Soup',
    description: 'Velvety roasted butternut blended with coconut cream, topped with pumpkin seeds',
    price: 'MWK 4,000',
    category: 'Starters',
    icon: '🥣',
  },
  {
    id: '5',
    name: 'Grilled Tilapia Plate',
    description: 'Lake-fresh tilapia grilled with lemon-herb butter, served with roasted veg and ugali',
    price: 'MWK 9,000',
    category: 'Mains',
    icon: '🐟',
  },
  {
    id: '6',
    name: 'Mango Cheesecake',
    description: 'Creamy cheesecake on a biscuit base with fresh local mango compote',
    price: 'MWK 3,500',
    category: 'Desserts',
    icon: '🍰',
  },
];
