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
                  <a href="mailto:info@xtratos.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    info@xtratos.com
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">TELÉFONO</h4>
                  <a href="tel:+1234567890" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    +1 (234) 567-8900
                  </a>
                </div>
                
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">OFICINA</h4>
                  <address className="text-xl not-italic">
                    123 Avenida Principal
                    <br />
                    Ciudad, País
                  </address>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">SÍGUENOS</h4>
                <div className="space-y-4">
                  <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    Instagram
                  </a>
                  <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                    LinkedIn
                  </a>
                  <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
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
