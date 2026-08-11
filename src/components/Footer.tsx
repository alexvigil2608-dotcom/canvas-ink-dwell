import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground tracking-wider">
            © {year} XTRATOS GESTIÓN Y MEDIO AMBIENTE SLL
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <Link
              to="/politica-de-privacidad"
              className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              POLÍTICA DE PRIVACIDAD
            </Link>
            <Link
              to="/aviso-legal"
              className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              AVISO LEGAL
            </Link>
            <Link
              to="/politica-de-cookies"
              className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              POLÍTICA DE COOKIES
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
