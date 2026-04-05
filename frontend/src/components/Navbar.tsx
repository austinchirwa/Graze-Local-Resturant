import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Homepage', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Specials', to: '/specials' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-1 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-primary after:transition-all after:duration-300 ${
      isActive
        ? 'text-primary after:w-full'
        : 'hover:text-primary after:w-0 hover:after:w-full'
    }`;

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 transition-transform group-hover:scale-105">
            <img
              src="/logo.png"
              alt="Graze Local Logo"
              className="w-full h-full object-contain"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-black tracking-tight text-primary leading-none">Graze</span>
            <span className="text-[10px] font-bold tracking-widest text-foreground uppercase leading-none mt-0.5">Local Restaurant</span>
          </div>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-7 text-sm font-medium">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink key={label} to={to} end={to === '/'} className={linkClass}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <NavLink
            to="/contact"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 hidden sm:block text-sm"
          >
            Book a Table
          </NavLink>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-foreground transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <nav className="flex flex-col gap-1 px-6 pb-5 pt-2 border-t border-border bg-background/95 backdrop-blur-md">
          {NAV_LINKS.map(({ label, to }) => (
            <NavLink
              key={label}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `py-2.5 text-sm font-medium transition-colors border-b border-border/30 last:border-0 ${
                  isActive ? 'text-primary' : 'hover:text-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold hover:bg-primary/90 transition-all text-sm text-center"
          >
            Book a Table
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
