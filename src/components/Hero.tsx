import heroImage from "@/assets/hero-portada-user.asset.json";
import logo from "@/assets/xtratos-logo.png.asset.json";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.url})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="mb-8 reveal">
          <img
            src={logo.url}
            alt="XTRATOS - Construcción de Excelencia"
            className="w-full max-w-2xl mx-auto h-auto"
          />
        </h1>
        <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto reveal-delayed">
          Más de 10 años construyendo espacios extraordinarios con calidad y compromiso
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 reveal-delayed">
        <div className="w-px h-16 bg-white/40" />
        <div className="text-minimal text-white/60 mt-4 rotate-90 origin-center">
          SCROLL
        </div>
      </div>
    </section>
  );
};

export default Hero;
