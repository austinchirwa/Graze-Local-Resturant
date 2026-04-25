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

export default function Menu() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {MENU_ITEMS.map((item) => (
        <div 
          key={item.id} 
          className="group relative p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/40 transition-all hover:shadow-xl hover:shadow-primary/5"
        >
          <div className="flex justify-between items-start mb-6">
            <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{item.icon}</span>
            <span className="bg-secondary/10 text-secondary-foreground px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
              {item.category}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {item.description}
          </p>
          <div className="flex justify-between items-center pt-4 border-t border-border/50">
            <span className="text-lg font-black text-foreground">{item.price}</span>
            <button className="w-10 h-10 rounded-full bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
