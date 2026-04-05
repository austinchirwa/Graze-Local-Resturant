import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main className="flex-grow pt-20">

      {/* Hero */}
      <section className="relative py-28 flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-secondary/10 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight">
            Rooted in Community,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Driven by Flavor</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Graze Local is more than a restaurant — it&apos;s a celebration of the people, land, and flavors that make our community special.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden h-80 bg-gradient-to-br from-primary/20 via-secondary/10 to-background border border-secondary/30 flex items-center justify-center">
              <svg className="w-24 h-24 text-primary/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
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
