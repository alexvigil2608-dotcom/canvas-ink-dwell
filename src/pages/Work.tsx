import { useState } from "react";
import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import ISOBadge from "@/components/ISOBadge";
import ProjectCarousel from "@/components/ProjectCarousel";
import excavacion1 from "@/assets/excavacion-1.jpg.asset.json";
import excavacion2 from "@/assets/excavacion-2.jpg.asset.json";
import excavacion3 from "@/assets/excavacion-3.jpg.asset.json";
import excavacion4 from "@/assets/excavacion-4.jpg.asset.json";
import derribos from "@/assets/derribos-1.jpg.asset.json";
import derribos1 from "@/assets/derribos-2.jpg.asset.json";
import derribos2 from "@/assets/derribos-3.jpg.asset.json";
import derribos3 from "@/assets/derribos-4.jpg.asset.json";
import urbanizaciones from "@/assets/urbanizaciones-1.jpg.asset.json";
import urbanizaciones1 from "@/assets/urbanizaciones-2.jpg.asset.json";
import urbanizaciones2 from "@/assets/urbanizaciones-3.jpg.asset.json";
import urbanizaciones3 from "@/assets/urbanizaciones-4.jpg.asset.json";
import obraPublica from "@/assets/obra-publica-1.jpg.asset.json";
import obraPublica1 from "@/assets/obra-publica-2.jpg.asset.json";
import obraPublica2 from "@/assets/obra-publica-3.jpg.asset.json";
import obraPublica3 from "@/assets/obra-publica-4.jpg.asset.json";
import obraPrivada from "@/assets/obra-privada-1.jpg.asset.json";
import obraPrivada1 from "@/assets/obra-privada-2.jpg.asset.json";
import obraPrivada2 from "@/assets/obra-privada-3.jpg.asset.json";
import obraPrivada3 from "@/assets/obra-privada-4.jpg.asset.json";
import colaboraciones1 from "@/assets/colaboraciones-1.jpg.asset.json";
import colaboraciones2 from "@/assets/colaboraciones-2.jpg.asset.json";
import colaboraciones3 from "@/assets/colaboraciones-3.png.asset.json";
import colaboraciones4 from "@/assets/colaboraciones-4.jpg.asset.json";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("TODOS");
  const projects = [
    {
      images: [excavacion1.url, excavacion2.url, excavacion3.url, excavacion4.url],
      title: "EXCAVACIÓN",
      location: "Cantabria",
      category: "EXCAVACIÓN",
      description: "Servicios profesionales de excavación con maquinaria de última generación. Preparación de terrenos, movimientos de tierra y vaciados para cimentaciones.",
      area: "Diversos proyectos",
      year: "2024"
    },
    {
      images: [derribos.url, derribos1.url, derribos2.url, derribos3.url],
      title: "DERRIBOS",
      location: "Cantabria",
      category: "DERRIBOS",
      description: "Demolición controlada de estructuras con máxima seguridad y eficiencia. Gestión integral de residuos y reciclaje de materiales.",
      area: "Diversos proyectos",
      year: "2024"
    },
    {
      images: [urbanizaciones.url, urbanizaciones1.url, urbanizaciones2.url, urbanizaciones3.url],
      title: "URBANIZACIONES",
      location: "Cantabria",
      category: "URBANIZACIONES",
      description: "Desarrollo integral de urbanizaciones: viales, aceras, alumbrado, redes de saneamiento y abastecimiento de agua.",
      area: "Diversos proyectos",
      year: "2024"
    },
    {
      images: [obraPublica.url, obraPublica1.url, obraPublica2.url, obraPublica3.url],
      title: "OBRA PÚBLICA",
      location: "Cantabria",
      category: "OBRA PÚBLICA",
      description: "Ejecución de proyectos de infraestructura pública: carreteras, puentes, obras hidráulicas y equipamientos municipales.",
      area: "Diversos proyectos",
      year: "2024"
    },
    {
      images: [obraPrivada.url, obraPrivada1.url, obraPrivada2.url, obraPrivada3.url],
      title: "OBRA PRIVADA",
      location: "Cantabria",
      category: "OBRA PRIVADA",
      description: "Construcción de viviendas unifamiliares, edificios residenciales y naves industriales. Proyectos a medida con los más altos estándares de calidad.",
      area: "Diversos proyectos",
      year: "2024"
    },
    {
      images: [colaboraciones1.url, colaboraciones2.url, colaboraciones3.url, colaboraciones4.url],
      title: "COLABORACIONES",
      location: "Cantabria y España",
      category: "COLABORACIONES",
      description: "Trabajos conjuntos con otras empresas del sector. Alianzas estratégicas que nos permiten afrontar proyectos de mayor envergadura con las mejores garantías.",
      area: "Diversos proyectos",
      year: "2024"
    }
  ];

  const categories = ["TODOS", "EXCAVACIÓN", "DERRIBOS", "URBANIZACIONES", "OBRA PÚBLICA", "OBRA PRIVADA", "COLABORACIONES"];

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
                  <div className="mb-5">
                    <h3 className="text-3xl lg:text-4xl font-light text-architectural mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.location}
                    </p>
                  </div>

                  <ProjectCarousel
                    images={project.images}
                    alt={project.title}
                    className="w-full h-[50vh] mb-8"
                  />
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

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

      <ISOBadge />
    </div>
  );
};

export default Work;