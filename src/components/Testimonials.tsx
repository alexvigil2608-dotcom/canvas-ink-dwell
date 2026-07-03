import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

type Testimonial = {
  name: string;
  role: string;
  text: string;
};

const STORAGE_KEY = "xtratos_testimonials_v1";

const defaultTestimonials: Testimonial[] = [
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

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <div className="group p-8 border border-border/60 bg-background/50 hover:bg-background transition-colors duration-500">
    <p className="text-muted-foreground leading-relaxed mb-8 text-sm">
      &ldquo;{t.text}&rdquo;
    </p>
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
        <span className="text-background text-xs font-medium tracking-wider">
          {t.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
        </span>
      </div>
      <div>
        <p className="text-sm font-medium">{t.name}</p>
        <p className="text-xs text-muted-foreground">{t.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(defaultTestimonials);
  const [expanded, setExpanded] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Testimonial[];
        if (Array.isArray(parsed) && parsed.length > 0) setTestimonials(parsed);
      }
    } catch {
      // ignore
    }
  }, []);

  const persist = (list: Testimonial[]) => {
    setTestimonials(list);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim().slice(0, 60);
    const cleanRole = role.trim().slice(0, 60);
    const cleanText = text.trim().slice(0, 500);
    if (!cleanName || !cleanText) {
      toast({ title: "Faltan datos", description: "Introduce tu nombre y una opinión." });
      return;
    }
    const next = [{ name: cleanName, role: cleanRole || "Cliente", text: cleanText }, ...testimonials];
    persist(next);
    setName("");
    setRole("");
    setText("");
    toast({ title: "¡Gracias!", description: "Tu opinión se ha añadido." });
  };

  const visible = expanded ? testimonials : testimonials.slice(0, 5);
  const hasMore = testimonials.length > 5;

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
            {visible.slice(0, 3).map((t, i) => (
              <TestimonialCard key={`top-${i}`} t={t} />
            ))}
          </div>

          {visible.length > 3 && (
            <div className="mt-8 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {visible.slice(3).map((t, i) => (
                <TestimonialCard key={`bot-${i}`} t={t} />
              ))}
            </div>
          )}

          {hasMore && (
            <div className="mt-10 flex justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setExpanded(!expanded)}
                className="text-xs tracking-wider"
              >
                {expanded ? "VER MENOS" : `VER MÁS (${testimonials.length - 5})`}
              </Button>
            </div>
          )}

          <div className="mt-16 flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-md p-8 border border-border/60 bg-background/50 hover:bg-background transition-colors duration-500"
            >
              <h4 className="text-minimal text-muted-foreground mb-6 text-center">
                DEJA TU OPINIÓN
              </h4>
              <div className="space-y-4">
                <Input
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={60}
                  required
                />
                <Input
                  placeholder="Tu rol (opcional)"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  maxLength={60}
                />
                <Textarea
                  placeholder="Cuéntanos tu experiencia..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  maxLength={500}
                  rows={4}
                  required
                />
                <Button type="submit" className="w-full">
                  Enviar opinión
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
