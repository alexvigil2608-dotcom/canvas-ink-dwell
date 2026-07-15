import { XTRATOS_INSTAGRAM_URL, XTRATOS_FACEBOOK_URL } from "@/constants/social";

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
                <div className="space-y-4">
                  <a href={XTRATOS_INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    Instagram
                  </a>
                  <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    LinkedIn
                  </a>
                  <a href={XTRATOS_FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    Facebook
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
