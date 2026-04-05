import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className="flex-grow pt-20">

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-medium text-sm">
            Now Open for Dine-In &amp; Takeaway
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Savor the flavor of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Locally Sourced
            </span>{' '}Eats
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Experience Farm-to-table freshness in a vibrant, welcoming atmosphere. Delicious meals expertly crafted with the finest local ingredients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/specials"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold hover:bg-primary/90 transition-transform hover:scale-105 shadow-xl shadow-primary/20 text-center"
            >
              View Our Menu
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-card text-foreground border border-border rounded-full text-lg font-bold hover:bg-muted transition-colors text-center"
            >
              Book a Table
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Why Choose Us?</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">We bring the best of local produce straight to your plate every single day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                ),
                color: 'primary',
                title: 'Farm Fresh',
                desc: 'We partner directly with local farmers to bring you the freshest produce and meats.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                color: 'secondary',
                title: 'Heart of the City',
                desc: 'Located right in the center of town, perfect for lunch breaks and dinner dates.',
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                color: 'primary',
                title: 'Fast Service',
                desc: 'Enjoy a premium dining experience without the endless wait times.',
              },
            ].map((f) => (
              <div key={f.title} className={`p-8 rounded-3xl bg-background border border-border/50 hover:border-${f.color}/50 transition-colors group`}>
                <div className={`w-14 h-14 bg-${f.color}/10 text-${f.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready for a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Memorable Meal?
            </span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Reserve your table today and experience Graze Local for yourself.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold hover:bg-primary/90 transition-transform hover:scale-105 shadow-xl shadow-primary/20"
          >
            Make a Reservation
          </Link>
        </div>
      </section>

    </main>
  );
}
