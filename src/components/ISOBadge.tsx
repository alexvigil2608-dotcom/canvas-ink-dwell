import bureauVeritas from "@/assets/bureau-veritas.png.asset.json";

const ISOBadge = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full border-2 border-foreground flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-10 h-10 text-foreground"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <p className="text-minimal text-muted-foreground mb-1">CERTIFICACIÓN</p>
              <p className="text-2xl font-light text-foreground tracking-wider">ISO 9001</p>
              <p className="text-sm text-muted-foreground mt-1">Sistema de Gestión de Calidad</p>
            </div>
          </div>
          <div className="hidden md:block w-px h-16 bg-border" />
          <img
            src={bureauVeritas.url}
            alt="Bureau Veritas Certification ISO 9001"
            className="h-20 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ISOBadge;
