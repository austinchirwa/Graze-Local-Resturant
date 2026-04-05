import { NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Homepage', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Specials', to: '/specials' },
  { label: 'Events', to: '/events' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <NavLink to="/" className="text-xl font-black text-primary">
            Graze <span className="text-foreground">Local</span>
          </NavLink>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `hover:text-primary transition-colors ${isActive ? 'text-primary' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Graze Local Restaurant
          </p>
        </div>
      </div>
    </footer>
  );
}
