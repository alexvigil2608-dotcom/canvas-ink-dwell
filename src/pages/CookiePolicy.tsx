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

      <LegalSection heading="2. Almacenamiento técnico local">
        <p>
          Se emplea almacenamiento local del propio navegador (localStorage) con
          finalidad estrictamente técnica, para tres cosas:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Recordar la preferencia de tema claro u oscuro elegida por el usuario.</li>
          <li>
            Guardar en el propio navegador las opiniones que el usuario escribe en la
            sección de reseñas. Esta información no se envía a ningún servidor ni se
            comparte con terceros.
          </li>
          <li>
            Recordar la decisión del usuario sobre el uso de cookies de analítica
            (aceptar o rechazar), para no volver a mostrar el aviso.
          </li>
        </ul>
        <p>
          Al tratarse de almacenamiento necesario para el funcionamiento del sitio y
          solicitado por el usuario, no requiere consentimiento previo conforme al
          artículo 22.2 de la LSSI-CE.
        </p>
      </LegalSection>

      <LegalSection heading="3. Cookies de analítica (Google Analytics 4)">
        <p>
          Este sitio utiliza <strong className="text-foreground font-medium">Google Analytics 4</strong>,
          un servicio de analítica web prestado por Google LLC, únicamente si el
          usuario ha dado su consentimiento expreso mediante el botón "Aceptar" del
          aviso de cookies. Si el usuario rechaza, no se instala ninguna cookie de
          analítica ni se envía dato alguno a Google.
        </p>
        <p>Las cookies que puede instalar Google Analytics son:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-foreground font-medium">_ga</strong>: distingue a los
            usuarios de forma anónima. Duración: 2 años.
          </li>
          <li>
            <strong className="text-foreground font-medium">_ga_*</strong>: mantiene el
            estado de la sesión de forma anónima. Duración: 2 años.
          </li>
        </ul>
        <p>
          La información recogida (páginas visitadas, tiempo de navegación, origen
          del tráfico) se utiliza exclusivamente para elaborar estadísticas
          agregadas que nos ayudan a mejorar el sitio web. Google puede tratar
          estos datos conforme a su propia política de privacidad.
        </p>
      </LegalSection>

      <LegalSection heading="4. Cómo retirar el consentimiento">
        <p>
          El usuario puede cambiar su decisión en cualquier momento desde el
          enlace <strong className="text-foreground font-medium">"Configurar cookies"</strong>{" "}
          disponible en el pie de página de este sitio, que vuelve a mostrar el
          aviso de cookies, o escribiendo a{" "}
          <a href="mailto:info@xtratos.es" className="text-foreground hover:text-muted-foreground transition-colors">
            info@xtratos.es
          </a>
          . También puede eliminar las cookies desde la configuración de su
          navegador, como se indica en el apartado siguiente.
        </p>
      </LegalSection>

      <LegalSection heading="5. Cómo eliminar o bloquear estos datos">
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

      <LegalSection heading="6. Cambios en esta política">
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
