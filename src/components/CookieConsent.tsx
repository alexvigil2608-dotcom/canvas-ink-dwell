import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CONSENT_KEY = "cookie-consent";
export const CONSENT_EVENT = "cookie-consent-changed";
export const OPEN_BANNER_EVENT = "open-cookie-banner";

export type ConsentValue = "accepted" | "rejected";

export const getConsent = (): ConsentValue | null => {
  const value = localStorage.getItem(CONSENT_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
};

export const setConsent = (value: ConsentValue) => {
  localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event(CONSENT_EVENT));
};

export const openCookieBanner = () => {
  window.dispatchEvent(new Event(OPEN_BANNER_EVENT));
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
    const open = () => setVisible(true);
    window.addEventListener(OPEN_BANNER_EVENT, open);
    return () => window.removeEventListener(OPEN_BANNER_EVENT, open);
  }, []);

  if (!visible) return null;

  const choose = (value: ConsentValue) => {
    setConsent(value);
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-[60] border-t border-border bg-background/95 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Utilizamos cookies propias y de terceros (Google Analytics) para
            analizar el tráfico y mejorar tu experiencia. Solo se instalan si
            las aceptas. Consulta nuestra{" "}
            <Link
              to="/politica-de-cookies"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              política de cookies
            </Link>
            .
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => choose("rejected")}
              className="text-minimal px-5 py-2.5 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-colors duration-300"
            >
              RECHAZAR
            </button>
            <button
              onClick={() => choose("accepted")}
              className="text-minimal px-5 py-2.5 bg-foreground text-background hover:opacity-80 transition-opacity duration-300"
            >
              ACEPTAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
