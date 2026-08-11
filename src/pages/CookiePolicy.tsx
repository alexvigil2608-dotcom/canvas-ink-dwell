import LegalLayout, { LegalSection } from "@/components/LegalLayout";

const CookiePolicy = () => {
  return (
    <LegalLayout
      eyebrow="INFORMACIÓN LEGAL"
      title="Política de Cookies"
      updated="AGOSTO 2026"
    >
      <LegalSection heading="1. ¿Qué son las cookies?">
        <p>
          Las cookies son pequeños archivos de texto que los sitios web almacenan en
          el dispositivo del usuario para recordar información sobre su visita, como
          sus preferencias de navegación.
        </p>
      </LegalSection>

      <LegalSection heading="2. Cookies utilizadas en este sitio">
        <p>
          Este sitio web <strong className="text-foreground font-medium">no utiliza cookies publicitarias, de
          analítica ni de seguimiento de terceros</strong>.
        </p>
        <p>
          Únicamente se emplea almacenamiento local del propio navegador
          (localStorage) con finalidad estrictamente técnica, para dos cosas:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Recordar la preferencia de tema claro u oscuro elegida por el usuario.</li>
          <li>
            Guardar en el propio navegador las opiniones que el usuario escribe en la
            sección de reseñas. Esta información no se envía a ningún servidor ni se
            comparte con terceros.
          </li>
        </ul>
        <p>
          Al tratarse de almacenamiento necesario para el funcionamiento del sitio y
          solicitado por el usuario, no requiere consentimiento previo conforme al
          artículo 22.2 de la LSSI-CE.
        </p>
      </LegalSection>

      <LegalSection heading="3. Cómo eliminar o bloquear estos datos">
        <p>
          El usuario puede borrar en cualquier momento el almacenamiento local y las
          cookies desde la configuración de su navegador:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Google Chrome: Configuración → Privacidad y seguridad → Cookies y otros datos de sitios.</li>
          <li>Mozilla Firefox: Ajustes → Privacidad y seguridad → Cookies y datos del sitio.</li>
          <li>Safari: Preferencias → Privacidad → Gestionar datos de sitios web.</li>
          <li>Microsoft Edge: Configuración → Cookies y permisos del sitio.</li>
        </ul>
        <p>
          El borrado de estos datos puede suponer la pérdida de la preferencia de tema
          y de las opiniones guardadas en el navegador.
        </p>
      </LegalSection>

      <LegalSection heading="4. Cambios en esta política">
        <p>
          Xtratos puede modificar esta política de cookies si en el futuro se
          incorporan nuevos servicios o herramientas al sitio web. Se recomienda
          revisarla periódicamente. Para cualquier duda, puede escribir a{" "}
          <a href="mailto:info@xtratos.es" className="text-foreground hover:text-muted-foreground transition-colors">
            info@xtratos.es
          </a>
          .
        </p>
      </LegalSection>
    </LegalLayout>
  );
};

export default CookiePolicy;
