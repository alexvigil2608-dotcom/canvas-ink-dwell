import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">NOSOTROS</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Nuestra Filosofía
                </h2>
                
                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Fundada en 2012 sobre una sólida y prolongada experiencia previa en el sector, Xtratos Gestión y Medio Ambiente SLL es una compañía cántabra en constante expansión que ha consolidado un modelo de negocio moderno, eficiente y con un crecimiento anual ininterrumpido.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    En Xtratos creemos que la construcción debe mejorar la experiencia humana 
                    respetando el entorno natural. Nos enfocamos en crear espacios 
                    funcionales, duraderos y de alta calidad.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Con más de 10 años de trayectoria, hemos completado más de 200 proyectos 
                    en los sectores residencial, comercial e industrial. Cada proyecto comienza 
                    con escuchar al cliente y termina con una ejecución impecable.
                  </p>
                </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">ENFOQUE</h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Planificación</h4>
                      <p className="text-muted-foreground">Análisis profundo del contexto, terreno y necesidades del cliente</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Colaboración</h4>
                      <p className="text-muted-foreground">Trabajo estrecho con clientes, ingenieros y especialistas</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Calidad</h4>
                      <p className="text-muted-foreground">Materiales de primera y soluciones constructivas innovadoras</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">EXPERIENCIA</h3>
                      <p className="text-xl">+10 Años</p>
                    </div>
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">PROYECTOS</h3>
                      <p className="text-xl">200+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
