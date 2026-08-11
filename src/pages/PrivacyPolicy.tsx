import LegalLayout, { LegalSection } from "@/components/LegalLayout";

const PrivacyPolicy = () => {
  return (
    <LegalLayout
      eyebrow="INFORMACIÓN LEGAL"
      title="Política de Privacidad"
      updated="AGOSTO 2026"
    >
      <LegalSection heading="1. Responsable del tratamiento">
        <p>
          El responsable del tratamiento de los datos personales recabados a través
          de este sitio web es XTRATOS GESTIÓN Y MEDIO AMBIENTE SLL (en adelante,
          «Xtratos»), con domicilio social en Barrio de Rubo S/N, Polígono La
          Helguera, 39478 Boo de Piélagos (Cantabria).
        </p>
        <p>
          Correo electrónico de contacto:{" "}
          <a href="mailto:info@xtratos.es" className="text-foreground hover:text-muted-foreground transition-colors">
            info@xtratos.es
          </a>
          <br />
          Teléfono:{" "}
          <a href="tel:+34942945054" className="text-foreground hover:text-muted-foreground transition-colors">
            +34 942 94 50 54
          </a>
        </p>
      </LegalSection>

      <LegalSection heading="2. Datos que tratamos">
        <p>
          Tratamos únicamente los datos que el usuario nos facilita de forma
          voluntaria al ponerse en contacto con nosotros por correo electrónico o
          teléfono: nombre, datos de contacto y cualquier información incluida en el
          mensaje.
        </p>
        <p>
          Si el usuario publica una opinión en la sección de reseñas, el nombre y el
          texto introducidos se almacenan localmente en su propio navegador y no se
          envían a nuestros servidores.
        </p>
      </LegalSection>

      <LegalSection heading="3. Finalidad y legitimación">
        <p>
          Los datos se tratan con la finalidad de atender consultas, elaborar
          presupuestos y mantener la relación comercial o contractual solicitada.
          La base jurídica es el consentimiento del interesado y, en su caso, la
          ejecución de un contrato o de medidas precontractuales.
        </p>
      </LegalSection>

      <LegalSection heading="4. Conservación de los datos">
        <p>
          Los datos se conservarán durante el tiempo necesario para atender la
          solicitud y, posteriormente, durante los plazos legalmente exigidos para
          atender posibles responsabilidades derivadas del tratamiento.
        </p>
      </LegalSection>

      <LegalSection heading="5. Destinatarios">
        <p>
          No se ceden datos a terceros salvo obligación legal. Determinados
          proveedores de servicios tecnológicos (alojamiento web y correo
          electrónico) pueden acceder a los datos en calidad de encargados del
          tratamiento, bajo contrato y con las garantías exigidas por la normativa.
        </p>
      </LegalSection>

      <LegalSection heading="6. Derechos del usuario">
        <p>
          El usuario puede ejercer los derechos de acceso, rectificación, supresión,
          oposición, limitación del tratamiento y portabilidad escribiendo a{" "}
          <a href="mailto:info@xtratos.es" className="text-foreground hover:text-muted-foreground transition-colors">
            info@xtratos.es
          </a>
          , indicando el derecho que desea ejercer y adjuntando copia de un documento
          identificativo.
        </p>
        <p>
          Asimismo, puede presentar una reclamación ante la Agencia Española de
          Protección de Datos (
          <a
            href="https://www.aepd.es"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-muted-foreground transition-colors"
          >
            www.aepd.es
          </a>
          ) si considera que sus derechos no han sido debidamente atendidos.
        </p>
      </LegalSection>

      <LegalSection heading="7. Seguridad">
        <p>
          Xtratos aplica medidas técnicas y organizativas apropiadas para proteger
          los datos personales frente a su pérdida, uso indebido o acceso no
          autorizado.
        </p>
      </LegalSection>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
