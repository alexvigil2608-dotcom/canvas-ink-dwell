import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface LegalLayoutProps {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}

const LegalLayout = ({ eyebrow, title, updated, children }: LegalLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-minimal text-muted-foreground mb-4">{eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-light text-architectural mb-6">
              {title}
            </h1>
            <p className="text-xs tracking-wider text-muted-foreground mb-16">
              ÚLTIMA ACTUALIZACIÓN: {updated}
            </p>
            <div className="space-y-12">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const LegalSection = ({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) => (
  <section>
    <h2 className="text-xl md:text-2xl font-light text-architectural mb-4">
      {heading}
    </h2>
    <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
      {children}
    </div>
  </section>
);

export default LegalLayout;
