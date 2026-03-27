import excavacion from "@/assets/excavacion.jpg";
import derribos from "@/assets/derribos.jpg";
import urbanizaciones from "@/assets/urbanizaciones.jpg";
import obraPublica from "@/assets/obra-publica.jpg";
import obraPrivada from "@/assets/obra-privada.jpg";

const Portfolio = () => {
  const projects = [
    {
      image: excavacion,
      title: "EXCAVACIÓN",
      location: "Cantabria",
      description: "Servicios profesionales de excavación con maquinaria de última generación"
    },
    {
      image: derribos,
      title: "DERRIBOS",
      location: "Cantabria",
      description: "Demolición controlada de estructuras con máxima seguridad y eficiencia"
    },
    {
      image: urbanizaciones,
      title: "URBANIZACIONES",
      location: "Cantabria",
      description: "Desarrollo integral de urbanizaciones: viales, aceras, alumbrado e infraestructuras"
    },
    {
      image: obraPublica,
      title: "OBRA PÚBLICA",
      location: "Cantabria",
      description: "Ejecución de proyectos de infraestructura pública y equipamientos municipales"
    },
    {
      image: obraPrivada,
      title: "OBRA PRIVADA",
      location: "Cantabria",
      description: "Construcción de viviendas, edificios residenciales y naves industriales a medida"
    }
  ];

  return (
    <section id="work" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">PROYECTOS DESTACADOS</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Nuestros Proyectos
            </h3>
          </div>
          
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <h4 className="text-3xl font-light text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-white/70 mb-4">
                      {project.location}
                    </p>
                    <p className="text-white/80 leading-relaxed max-w-2xl">
                      {project.description}
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

export default Portfolio;