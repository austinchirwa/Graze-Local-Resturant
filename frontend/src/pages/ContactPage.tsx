import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="flex-grow pt-20">

      {/* Hero */}
      <section className="relative py-24 bg-card overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-secondary/10 via-card to-card" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-medium text-sm">Get in Touch</span>
          <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">Contact Us</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Reservations, catering enquiries, or just want to say hello — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Info */}
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-black mb-2">Find Us</h2>
              {[
                { icon: '📍', title: 'Address', detail: '12 Market Street, Old Town, Lilongwe, Malawi' },
                { icon: '📞', title: 'Phone', detail: '+265 999 123 456' },
                { icon: '✉️', title: 'Email', detail: 'hello@grazelocal.mw' },
                { icon: '🕐', title: 'Opening Hours', detail: 'Mon – Fri: 11am – 10pm  |  Sat – Sun: 9am – 11pm' },
              ].map((info) => (
                <div key={info.title} className="flex gap-4 p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/40 transition-colors">
                  <span className="text-2xl flex-shrink-0">{info.icon}</span>
                  <div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mb-0.5">{info.title}</p>
                    <p className="font-medium text-sm">{info.detail}</p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
              <div className="mt-4 rounded-2xl overflow-hidden border border-border/50 h-48 bg-card flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <span className="text-4xl mb-2 block">🗺️</span>
                  <p className="text-sm">Map coming soon</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-black mb-6">Send a Message</h2>
              {sent ? (
                <div className="flex flex-col items-center justify-center h-80 rounded-3xl bg-card border border-border/50 text-center p-8">
                  <span className="text-5xl mb-4">🎉</span>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 px-6 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm font-semibold"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 rounded-3xl bg-card border border-border/50">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Subject</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm text-foreground">
                      <option value="">How can we help?</option>
                      <option>Table Reservation</option>
                      <option>Private Event</option>
                      <option>Catering Enquiry</option>
                      <option>General Question</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-2 w-full py-3.5 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
