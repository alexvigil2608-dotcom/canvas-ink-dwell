import { XTRATOS_INSTAGRAM_URL, XTRATOS_FACEBOOK_URL, XTRATOS_LINKEDIN_URL } from "@/constants/social";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">CONTÁCTANOS</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Construyamos Algo
                <br />
                Extraordinario
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                  <a href="mailto:info@xtratos.es" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    info@xtratos.es
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">TELÉFONO</h4>
                  <a href="tel:+34942945054" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    +34 942 94 50 54
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">OFICINA</h4>
                  <address className="text-xl not-italic">
                    Barrio de Rubo S/N. Polígono La Helguera
                    <br />
                    39478, Boo de Piélagos (Cantabria)
                  </address>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">SÍGUENOS</h4>
                <div className="flex items-center space-x-6">
                  <a
                    href={XTRATOS_INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram de Xtratos"
                    className="text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href={XTRATOS_FACEBOOK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook de Xtratos"
                    className="text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href={XTRATOS_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn de Xtratos"
                    className="text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
              
              <div className="pt-12 border-t border-border">
                <p className="text-muted-foreground">
                  Abordamos cada proyecto con profesionalismo, rigor y compromiso con la excelencia. 
                  Nuestro proceso comienza escuchando tu visión y transformándola 
                  en espacios que superan expectativas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
