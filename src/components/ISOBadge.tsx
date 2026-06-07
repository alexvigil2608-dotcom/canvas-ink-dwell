import bureauVeritas from "@/assets/bureau-veritas.png.asset.json";

const ISOBadge = () => {
  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <img
            src={bureauVeritas.url}
            alt="Bureau Veritas Certification ISO 9001"
            className="h-24 w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ISOBadge;
