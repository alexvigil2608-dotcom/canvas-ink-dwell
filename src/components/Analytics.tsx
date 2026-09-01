import { useEffect } from "react";
import { CONSENT_EVENT, getConsent } from "@/components/CookieConsent";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const GA4_SCRIPT_ID = "ga4-gtag-script";

const loadGA4 = () => {
  if (getConsent() !== "accepted") return;

  const measurementId = import.meta.env
    .VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY as string | undefined;
  if (!measurementId) return;
  if (document.getElementById(GA4_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = GA4_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["js", new Date()]);
  window.dataLayer.push(["config", measurementId]);
};

const Analytics = () => {
  useEffect(() => {
    loadGA4();
    window.addEventListener(CONSENT_EVENT, loadGA4);
    return () => window.removeEventListener(CONSENT_EVENT, loadGA4);
  }, []);

  return null;
};

export default Analytics;
