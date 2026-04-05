const SPECIALS = [
  {
    name: 'Smoked Brisket Bowl',
    desc: 'Slow-smoked local beef over herbed grains with chimichurri drizzle and pickled red onion.',
    tag: 'Fan Favourite',
    price: 'MWK 8,500',
    category: 'Mains',
  },
  {
    name: 'Garden Harvest Salad',
    desc: 'Crisp seasonal greens, roasted beets, goat cheese & honey-lemon vinaigrette.',
    tag: 'Vegetarian',
    price: 'MWK 5,200',
    category: 'Starters',
  },
  {
    name: 'Graze Signature Burger',
    desc: 'Double patty, caramelized onions, aged cheddar and house sauce on a toasted brioche bun.',
    tag: 'Bestseller',
    price: 'MWK 7,000',
    category: 'Mains',
  },
  {
    name: 'Butternut Soup',
    desc: 'Velvety roasted butternut blended with coconut cream, topped with toasted pumpkin seeds.',
    tag: 'Seasonal',
    price: 'MWK 4,000',
    category: 'Starters',
  },
  {
    name: 'Grilled Tilapia Plate',
    desc: 'Lake-fresh tilapia grilled with lemon-herb butter, served with roasted veg and ugali.',
    tag: 'Local Catch',
    price: 'MWK 9,000',
    category: 'Mains',
  },
  {
    name: 'Mango Cheesecake',
    desc: 'Creamy cheesecake on a biscuit base with a fresh local mango compote.',
    tag: 'Sweet',
    price: 'MWK 3,500',
    category: 'Desserts',
  },
];

const CATEGORIES = ['All', 'Starters', 'Mains', 'Desserts'];

import { useState } from 'react';

export default function SpecialsPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? SPECIALS : SPECIALS.filter((s) => s.category === active);

  return (
    <main className="flex-grow pt-20">

      {/* Hero */}
      <section className="relative py-24 bg-card overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-secondary/10 via-card to-card" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-medium text-sm">This Week</span>
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">Chef's Specials</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Seasonal dishes crafted fresh every week from the finest local ingredients.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 flex items-center gap-3 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === cat
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                  : 'bg-card border border-border hover:border-primary/50 text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Menu Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl bg-card border border-border/50 hover:border-primary/40 transition-all hover:-translate-y-1 overflow-hidden group"
              >
                <div className="h-44 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{item.tag}</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">{item.category}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{item.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary text-lg">{item.price}</span>
                    <button className="text-xs px-4 py-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
