import { Link } from 'react-router-dom';
import billboard from '../../pictures/billboard.jpg';
import servedHero from '../../pictures/served1.jpg';

export default function AboutPage() {
  return (
    <main className="flex-grow pt-20">

      {/* Hero */}
      <section className="relative py-32 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${servedHero})` }}
        />
        <div className="absolute inset-0 z-0 bg-white/20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-neutral-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)]">
            Rooted in Community,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Driven by Flavor</span>
          </h1>
          <p className="text-neutral-900 text-lg max-w-2xl mx-auto font-bold leading-relaxed drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)]">
            Graze Local is more than a restaurant it&apos;s a celebration of the people, land, and flavors that make our community special.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden h-80 border border-secondary/30 group">
              <img 
                src={billboard} 
                alt="Graze Local Story" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div>
              <h2 className="text-3xl font-black mb-4">How it all started</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2019, Graze Local was born from a simple belief — great food starts with knowing where it comes from. Our founder, a Malawi-born chef with a passion for local agriculture, set out to bridge the gap between farm and fork.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as a small weekend pop-up has grown into a beloved dining destination, serving hundreds of guests daily with the same dedication to quality and community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Our Values</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">Everything we do is guided by these core principles.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { emoji: '🌱', title: 'Sustainability', desc: 'We minimize waste and choose eco-friendly practices at every step.' },
              { emoji: '🤝', title: 'Community', desc: 'We reinvest in local farms, suppliers, and our neighbourhood.' },
              { emoji: '✨', title: 'Quality', desc: 'Only the finest, freshest ingredients make it onto your plate.' },
              { emoji: '❤️', title: 'Passion', desc: 'Every dish is crafted with love and respect for the ingredients.' },
            ].map((v) => (
              <div key={v.title} className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-colors text-center">
                <span className="text-4xl mb-4 block">{v.emoji}</span>
                <h3 className="font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Meet the Team</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">The passionate people behind every dish.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { name: 'Chef Amara Phiri', role: 'Head Chef & Founder', emoji: '👨‍🍳' },
              { name: 'Thandiwe Banda', role: 'Sous Chef', emoji: '👩‍🍳' },
              { name: 'Kelvin Mwale', role: 'Operations Manager', emoji: '🧑‍💼' },
            ].map((m) => (
              <div key={m.name} className="text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-border flex items-center justify-center text-4xl mx-auto mb-4">
                  {m.emoji}
                </div>
                <h3 className="font-bold text-lg">{m.name}</h3>
                <p className="text-muted-foreground text-sm">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <h2 className="text-3xl font-black mb-4">Come Dine With Us</h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">Experience our story first-hand. We&apos;d love to welcome you.</p>
        <Link to="/contact" className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold hover:bg-primary/90 transition-transform hover:scale-105 shadow-xl shadow-primary/20">
          Make a Reservation
        </Link>
      </section>

    </main>
  );
}
