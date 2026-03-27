import { useState } from "react";
import Navigation from "@/components/Navigation";
import excavacion from "@/assets/excavacion.jpg";
import derribos from "@/assets/derribos.jpg";
import urbanizaciones from "@/assets/urbanizaciones.jpg";
import obraPublica from "@/assets/obra-publica.jpg";
import obraPrivada from "@/assets/obra-privada.jpg";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("TODOS");
  const projects = [
    {
      image: excavacion,
      title: "EXCAVACIÓN",
      location: "Cantabria",
      category: "EXCAVACIÓN",
      description: "Servicios profesionales de excavación con maquinaria de última generación. Preparación de terrenos, movimientos de tierra y vaciados para cimentaciones.",
      area: "Diversos proyectos",
      year: "2024"
    },
    {
      image: derribos,
      title: "DERRIBOS",
      location: "Cantabria",
      category: "DERRIBOS",
      description: "Demolición controlada de estructuras con máxima seguridad y eficiencia. Gestión integral de residuos y reciclaje de materiales.",
      area: "Diversos proyectos",
      year: "2024"
    },
    {
      image: urbanizaciones,
      title: "URBANIZACIONES",
      location: "Cantabria",
      category: "URBANIZACIONES",
      description: "Desarrollo integral de urbanizaciones: viales, aceras, alumbrado, redes de saneamiento y abastecimiento de agua.",
      area: "Diversos proyectos",
      year: "2024"
    },
    {
      image: obraPublica,
      title: "OBRA PÚBLICA",
      location: "Cantabria",
      category: "OBRA PÚBLICA",
      description: "Ejecución de proyectos de infraestructura pública: carreteras, puentes, obras hidráulicas y equipamientos municipales.",
      area: "Diversos proyectos",
      year: "2024"
    },
    {
      image: obraPrivada,
      title: "OBRA PRIVADA",
      location: "Cantabria",
      category: "OBRA PRIVADA",
      description: "Construcción de viviendas unifamiliares, edificios residenciales y naves industriales. Proyectos a medida con los más altos estándares de calidad.",
      area: "Diversos proyectos",
      year: "2024"
    }
  ];

  const categories = ["TODOS", "EXCAVACIÓN", "DERRIBOS", "URBANIZACIONES", "OBRA PÚBLICA", "OBRA PRIVADA"];

  const filteredProjects = activeCategory === "TODOS" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                NUESTROS PROYECTOS
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                Una selección de nuestros trabajos en excavación, derribos, urbanizaciones 
                y obra pública y privada en Cantabria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-minimal transition-colors duration-300 relative group ${
                    activeCategory === category 
                      ? "text-foreground" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category}
                  <span className={`absolute bottom-0 left-0 w-full h-px bg-foreground transition-transform duration-300 origin-left ${
                    activeCategory === category 
                      ? "scale-x-100" 
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-8">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                      <span className="text-minimal text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-muted-foreground transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-minimal text-muted-foreground">
                        {project.location}
                      </p>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              ¿Listo Para Iniciar
              <br />
              Tu Proyecto?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Hablemos de cómo podemos hacer realidad tu visión de construcción
            </p>
            <a 
              href="/contact" 
              className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
            >
              CONTÁCTANOS
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;