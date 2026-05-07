import { Link } from 'react-router-dom';
import grazeLogo from '../../pictures/GrazeLocal.png';
import servedBg from '../../pictures/served.jpg';
import riceChicken from '../../pictures/ricenchicken.jpg';

export default function HomePage() {
  return (
    <main className="flex-grow">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-105" 
          style={{ backgroundImage: `url(${servedBg})` }}
        />


        <div className="container mx-auto px-4 relative z-10 -mt-32">
          <div className="max-w-4xl mx-auto text-center">

            
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight text-neutral-900 drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
              Fresh Local <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">Flavours</span>
            </h1>
            
            <p className="text-neutral-900 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-bold leading-relaxed drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)] animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
              Every dish tells a story of our region. Come experience a culinary journey defined by local tradition and seasonal change.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
              <Link 
                to="/menu" 
                className="w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground rounded-full text-lg font-bold hover:bg-primary/90 transition-all hover:scale-105 shadow-2xl shadow-primary/20 flex items-center justify-center gap-2 group"
              >
                View Menu
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: '🌽', title: 'Farm Fresh', desc: 'Sourced daily from local farmers within a 50km radius.' },
              { icon: '📍', title: 'Location', desc: 'Conveniently located in the heart of Mzuzu Old Town.' },
              { icon: '📶', title: 'Free WiFi', desc: 'Stay connected with our complimentary high-speed internet access.' },
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-3xl hover:bg-background transition-colors duration-500">
                <span className="text-5xl mb-6 block group-hover:scale-110 transition-transform">{feature.icon}</span>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Menu Preview */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Signature Dishes</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tight">Taste the local difference in every bite.</h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Our chefs work closely with local growers to bring you a menu that changes with the seasons, ensuring every ingredient is at its peak flavor.
            </p>
            <Link to="/menu" className="text-primary font-bold text-lg border-b-2 border-primary pb-1 hover:text-primary/70 hover:border-primary/70 transition-all">
              Explore Our Menu
            </Link>
          </div>
          <div className="flex-1 relative w-full">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/10 rounded-[3rem] border border-border relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src={riceChicken} 
                    alt="Smoked Brisket Bowl" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-card/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-primary uppercase">Chef&apos;s Pick</span>
                    <span className="font-bold">MWK 10,000</span>
                  </div>
                  <h4 className="text-xl font-bold">Rice And Chicken</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
