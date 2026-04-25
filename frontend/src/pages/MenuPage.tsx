import { useState } from 'react';
import serviceBg from '../../pictures/service.jpg';
import fishImg from '../../pictures/fish.jpg';
import nsimaImg from '../../pictures/nsima.jpg';
import riceChickenImg from '../../pictures/ricenchicken.jpg';
import nsimaChickenImg from '../../pictures/nsimandchicken.jpg';
import riceBeefImg from '../../pictures/ricebeef.jpg';
import nsimaBeefImg from '../../pictures/nsimabeef.jpg';

const MENU_ITEMS = [
  {
    name: 'Grilled Tilapia Plate',
    desc: 'Lake-fresh tilapia grilled with lemon-herb butter, served with roasted vegetables.',
    tag: 'Local Catch',
    price: 'MWK 10,000',
    category: 'Mains',
    image: fishImg
  },
  {
    name: 'Nsima Traditional',
    desc: 'The heart of our kitchen. Traditional nsima served with seasonal greens and beans.',
    tag: 'Classic',
    price: 'MWK 10,000',
    category: 'Mains',
    image: nsimaImg
  },
  {
    name: 'Rice And Chicken',
    desc: 'Savory rice paired with perfectly seasoned roasted chicken.',
    tag: 'Popular',
    price: 'MWK 10,000',
    category: 'Mains',
    image: riceChickenImg
  },
  {
    name: 'Nsima and Chicken',
    desc: 'Our signature roasted chicken served with fresh nsima and delicious relish.',
    tag: 'Bestseller',
    price: 'MWK 10,000',
    category: 'Mains',
    image: nsimaChickenImg
  },
  {
    name: 'Rice and Beef',
    desc: 'Tender beef stew served over a bed of fluffy white rice.',
    tag: 'Hearty',
    price: 'MWK 7,000',
    category: 'Mains',
    image: riceBeefImg
  },
  {
    name: 'Nsima and Beef',
    desc: 'Slow-cooked local beef served with traditional nsima and garden greens.',
    tag: 'Traditional',
    price: 'MWK 7,000',
    category: 'Mains',
    image: nsimaBeefImg
  },
];




export default function MenuPage() {
  const filtered = MENU_ITEMS;

  return (
    <main className="flex-grow pt-20">

      <section className="relative min-h-[60vh] py-52 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${serviceBg})` }}
        />
        <div className="absolute inset-0 z-0 bg-white/20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-medium text-sm">Delicious Choices</span>
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight text-neutral-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)]">Our Menu</h1>
          <p className="text-neutral-900 text-lg max-w-xl mx-auto font-bold drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)]">
            Explore our curated selection of seasonal dishes, crafted fresh from the finest local ingredients.
          </p>
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
                <div className="h-64 overflow-hidden bg-muted">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
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
