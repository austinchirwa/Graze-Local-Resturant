import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import grazeLogo from '../../pictures/GrazeLocal.png';

const NAV_LINKS = [
  { label: 'Homepage', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-border py-4 shadow-sm"
    >
      <div className="w-full px-4 md:px-8">
        <nav className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src={grazeLogo} 
                alt="Graze Local Logo" 
                className="h-10 w-10 md:h-12 md:w-12 rounded-xl object-contain transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-xl bg-primary/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-tight whitespace-nowrap">
              Graze <span className="text-primary">Local</span> Restaurant
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-semibold transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              to="/contact" 
              className="hidden sm:inline-block px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-bold hover:bg-primary/90 transition-transform hover:scale-105 shadow-lg shadow-primary/20"
            >
              Reserve Table
            </Link>
            
            <button 
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top duration-300">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={to === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-bold transition-colors ${
                    isActive ? 'text-primary' : 'text-foreground'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-xl text-center font-bold"
            >
              Reserve Table
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}