import { NavLink } from 'react-router-dom';
import grazeLogo from '../../pictures/GrazeLocal.png';


export default function Footer() {
  return (
    <footer className="border-t border-border py-10 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <NavLink to="/" className="flex items-center gap-3 group">
            <img
              src={grazeLogo}
              alt="Graze Local Logo"
              className="h-12 w-12 rounded-lg object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-black text-primary whitespace-nowrap">
              Graze <span className="text-foreground">Local</span> Restaurant
            </span>
          </NavLink>

          <p className="text-sm text-muted-foreground">
            Copyright {new Date().getFullYear()} Graze Local Restaurant
          </p>
        </div>
      </div>
    </footer>
  );
}
