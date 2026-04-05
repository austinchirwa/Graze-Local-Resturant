const EVENTS = [
  {
    date: 'Apr 12',
    day: 'Saturday',
    title: 'Live Jazz Night',
    desc: 'An intimate evening of smooth jazz, craft cocktails, and a special 3-course menu curated by our head chef.',
    time: '7:00 PM – 11:00 PM',
    badge: 'Music',
    emoji: '🎷',
  },
  {
    date: 'Apr 19',
    day: 'Saturday',
    title: 'Local Farmers Market',
    desc: 'Meet the farmers behind your food. Fresh produce, artisan goods, live cooking demos, and free tastings.',
    time: '9:00 AM – 2:00 PM',
    badge: 'Community',
    emoji: '🌿',
  },
  {
    date: 'Apr 26',
    day: 'Saturday',
    title: 'Wine & Dine Tasting',
    desc: 'Curated wine pairings with a five-course seasonal meal prepared by our award-winning head chef.',
    time: '6:30 PM – 9:30 PM',
    badge: 'Fine Dining',
    emoji: '🍷',
  },
  {
    date: 'May 3',
    day: 'Saturday',
    title: 'Kids Cook-Along',
    desc: 'A fun, hands-on cooking class for children aged 6–12. Limited spots available — book early!',
    time: '10:00 AM – 12:00 PM',
    badge: 'Family',
    emoji: '🧑‍🍳',
  },
  {
    date: 'May 10',
    day: 'Saturday',
    title: 'Craft Beer & Braai Night',
    desc: 'Local craft beers paired with an open-air braai spread. Live music, good company, great food.',
    time: '5:00 PM – 10:00 PM',
    badge: 'Social',
    emoji: '🍺',
  },
  {
    date: 'May 17',
    day: 'Saturday',
    title: 'Chef\'s Table Dinner',
    desc: 'An exclusive 8-seat dinner at the chef&apos;s table, with a fully bespoke tasting menu and wine pairing.',
    time: '7:00 PM – 10:00 PM',
    badge: 'Exclusive',
    emoji: '⭐',
  },
];

export default function EventsPage() {
  return (
    <main className="flex-grow pt-20">

      {/* Hero */}
      <section className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-secondary/10 to-background" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium text-sm">What&apos;s On</span>
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">Upcoming Events</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Join us for live music, tasting nights, and community gatherings you won&apos;t want to miss.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {EVENTS.map((event) => (
              <div
                key={event.title}
                className="flex gap-5 p-6 rounded-3xl bg-background border border-border/50 hover:border-secondary/50 transition-all hover:-translate-y-0.5 group"
              >
                {/* Date badge */}
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-primary/10 flex flex-col items-center justify-center border border-primary/20">
                  <span className="text-2xl leading-none">{event.emoji}</span>
                  <span className="text-primary font-black text-sm leading-tight mt-1">{event.date.split(' ')[1]}</span>
                  <span className="text-primary/60 text-xs font-medium uppercase tracking-wide">{event.date.split(' ')[0]}</span>
                </div>

                {/* Info */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="text-base font-bold group-hover:text-primary transition-colors leading-tight">{event.title}</h3>
                    <span className="flex-shrink-0 text-xs px-2.5 py-0.5 rounded-full bg-secondary/10 text-secondary border border-secondary/20 font-medium">
                      {event.badge}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{event.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-secondary font-medium">⏰ {event.time}</span>
                    <button className="text-xs px-4 py-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold">
                      RSVP
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Events CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-secondary/30">
            <span className="text-4xl mb-4 block">🎉</span>
            <h2 className="text-3xl font-black mb-4">Planning a Private Event?</h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              We host birthdays, corporate dinners, product launches, and more. Get in touch and let our team create something unforgettable.
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold hover:bg-primary/90 transition-transform hover:scale-105 shadow-xl shadow-primary/20"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
