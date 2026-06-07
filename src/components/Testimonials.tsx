const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Martínez",
      role: "Promotor Inmobiliario",
      text: "Excelente trabajo en la urbanización de nuestra promoción. Cumplimiento impecable de plazos y calidad superior en todos los acabados."
    },
    {
      name: "María Gómez",
      role: "Propietaria",
      text: "Contratamos la demolición de una antigua nave y quedamos encantados con la profesionalidad y limpieza del equipo. Totalmente recomendables."
    },
    {
      name: "Ayuntamiento de Piélagos",
      role: "Administración Pública",
      text: "Colaboradores fiables en obras de infraestructura pública. Seriedad, documentación en regla y ejecución impecable."
    },
    {
      name: "Javier Ruiz",
      role: "Constructor",
      text: "La excavación para nuestro edificio residencial fue ejecutada con gran precisión. Maquinaria moderna y operadores expertos."
    },
    {
      name: "Ana López",
      role: "Arquitecta",
      text: "Trabajan con criterio técnico y respeto por el proyecto original. Gran capacidad de adaptación a imprevistos en obra."
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-minimal text-muted-foreground mb-3">OPINIONES</h2>
            <h3 className="text-3xl md:text-5xl font-light text-architectural">
              Lo Que Dicen de Nosotros
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((t, i) => (
              <div
                key={i}
                className="group p-8 border border-border/60 bg-background/50 hover:bg-background transition-colors duration-500"
              >
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                    <span className="text-background text-xs font-medium tracking-wider">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.slice(3).map((t, i) => (
              <div
                key={i + 3}
                className="group p-8 border border-border/60 bg-background/50 hover:bg-background transition-colors duration-500"
              >
                <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                    <span className="text-background text-xs font-medium tracking-wider">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
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

export default Testimonials;
