import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  XTRATOS_INSTAGRAM_URL,
  XTRATOS_FACEBOOK_URL,
  XTRATOS_LINKEDIN_URL,
} from "@/constants/social";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-minimal text-foreground">
          XTRATOS
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
          <a href="/" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
            INICIO
          </a>
          <a href="/work" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
            PROYECTOS
          </a>
          <a href="/services" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
            SERVICIOS
          </a>
          <a href="/about" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
            NOSOTROS
          </a>
          <a href="/contact" className="text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
            CONTACTO
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href={XTRATOS_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Xtratos"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <InstagramIcon />
          </a>
          <a
            href={XTRATOS_FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook de Xtratos"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <FacebookIcon />
          </a>
          <a
            href={XTRATOS_LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Xtratos"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <LinkedInIcon />
          </a>
          <ThemeToggle />
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="container mx-auto px-6 py-6 space-y-4">
            <a href="/" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              INICIO
            </a>
            <a href="/work" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              PROYECTOS
            </a>
            <a href="/services" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              SERVICIOS
            </a>
            <a href="/about" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              NOSOTROS
            </a>
            <a href="/contact" className="block text-minimal text-muted-foreground hover:text-foreground transition-colors duration-300">
              CONTACTO
            </a>
            
            {/* Mobile Theme Toggle */}
            <div className="pt-4 border-t border-border">
              <ThemeToggle />
            </div>
            
            {/* Mobile Social Icons */}
            <div className="flex items-center space-x-4 pt-4">
              <a
                href={XTRATOS_INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Xtratos"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <InstagramIcon />
              </a>
              <a
                href={XTRATOS_FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook de Xtratos"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href={XTRATOS_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Xtratos"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;