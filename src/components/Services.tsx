const Services = () => {
  const services = [
    {
      number: "01",
      title: "RESIDENCIAL",
      description: "Construcción de viviendas que reflejan estilos de vida únicos con los más altos estándares de calidad"
    },
    {
      number: "02", 
      title: "COMERCIAL",
      description: "Edificaciones comerciales funcionales que potencian los negocios y la experiencia del usuario"
    },
    {
      number: "03",
      title: "REMODELACIÓN",
      description: "Transformación de estructuras existentes con técnicas modernas y prácticas sostenibles"
    },
    {
      number: "04",
      title: "OBRA CIVIL",
      description: "Proyectos de infraestructura con precisión técnica y cumplimiento de los más altos estándares"
    }
  ];

  return (
    <section id="services" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">SERVICIOS</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Lo Que Hacemos
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-6">
                  <span className="text-minimal text-muted-foreground font-medium">
                    {service.number}
                  </span>
                  <div>
                    <h4 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
