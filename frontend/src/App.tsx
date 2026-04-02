export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-full hidden sm:block bg-muted overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Graze Local Logo" 
                className="w-full h-full object-contain" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <span className="text-2xl font-black tracking-tight text-primary">Graze <span className="text-foreground">Local</span></span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
            <a href="#about" className="hover:text-primary transition-colors">About Us</a>
            <a href="#reservations" className="hover:text-primary transition-colors">Reservations</a>
          </nav>

          <button className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20">
            Book a Table
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow pt-20">
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
          <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-medium text-sm">
              Now Open for Dine-In & Takeaway
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              Savor the flavor of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Locally Sourced
              </span> Eats
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Experience Farm-to-table freshness in a vibrant, welcoming atmosphere. Delicious meals expertly crafted with the finest local ingredients.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-bold hover:bg-primary/90 transition-transform hover:scale-105 shadow-xl shadow-primary/20">
                View Our Menu
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-card text-foreground border border-border rounded-full text-lg font-bold hover:bg-muted transition-colors">
                Order Online
              </button>
            </div>
          </div>
        </section>

        {/* Highlight Section */}
        <section className="py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Farm Fresh</h3>
                <p className="text-muted-foreground">We partner directly with local farmers to bring you the freshest produce and meats.</p>
              </div>
              
              {/* Feature 2 */}
              <div className="p-8 rounded-3xl bg-background border border-border/50 hover:border-secondary/50 transition-colors group">
                <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Heart of the City</h3>
                <p className="text-muted-foreground">Located right in the center of town, perfect for lunch breaks and dinner dates.</p>
              </div>
              
              {/* Feature 3 */}
              <div className="p-8 rounded-3xl bg-background border border-border/50 hover:border-primary/50 transition-colors group">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Service</h3>
                <p className="text-muted-foreground">Enjoy a premium dining experience without the endless wait times.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-background">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Graze Local Restaurant. All rights reserved.</p>
          <p className="mt-2 text-sm">Please upload your logo image to <code className="text-primary">public/logo.png</code></p>
        </div>
      </footer>
    </div>
  );
}
