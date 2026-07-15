import ManualCarousel from "@/components/ManualCarousel";
import colaboraciones1 from "@/assets/colaboraciones-1.jpg.asset.json";
import colaboraciones2 from "@/assets/colaboraciones-2.jpg.asset.json";
import colaboraciones3 from "@/assets/colaboraciones-3.jpg";
import colaboraciones4 from "@/assets/colaboraciones-4.jpg";
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

const Portfolio = () => {
  const projects = [
    {
      images: [excavacion1.url, excavacion2.url, excavacion3.url, excavacion4.url],
      title: "EXCAVACIÓN",
      location: "Cantabria",
      description: "Servicios profesionales de excavación con maquinaria de última generación"
    },
    {
      images: [derribos.url, derribos1.url, derribos2.url, derribos3.url],
      title: "DERRIBOS",
      location: "Cantabria",
      description: "Demolición controlada de estructuras con máxima seguridad y eficiencia"
    },
    {
      images: [urbanizaciones.url, urbanizaciones1.url, urbanizaciones2.url, urbanizaciones3.url],
      title: "URBANIZACIONES",
      location: "Cantabria",
      description: "Desarrollo integral de urbanizaciones: viales, aceras, alumbrado e infraestructuras"
    },
    {
      images: [obraPublica.url, obraPublica1.url, obraPublica2.url, obraPublica3.url],
      title: "OBRA PÚBLICA",
      location: "Cantabria",
      description: "Ejecución de proyectos de infraestructura pública y equipamientos municipales"
    },
    {
      images: [obraPrivada.url, obraPrivada1.url, obraPrivada2.url, obraPrivada3.url],
      title: "OBRA PRIVADA",
      location: "Cantabria",
      description: "Construcción de viviendas, edificios residenciales y naves industriales a medida"
    },
    {
      images: [colaboraciones1.url, colaboraciones2.url, colaboraciones3, colaboraciones4],
      title: "COLABORACIONES",
      location: "Cantabria y España",
      description: "Trabajos conjuntos con otras empresas del sector para proyectos de mayor envergadura"
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
          
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="mb-6">
                  <h4 className="text-3xl font-light text-architectural mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {project.location}
                  </p>
                </div>

                <ManualCarousel
                  images={project.images}
                  alt={project.title}
                  className="w-full h-[55vh]"
                />

                <p className="mt-8 text-muted-foreground leading-relaxed max-w-2xl">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
