import LegalLayout, { LegalSection } from "@/components/LegalLayout";

const LegalNotice = () => {
  return (
    <LegalLayout
      eyebrow="INFORMACIÓN LEGAL"
      title="Aviso Legal"
      updated="AGOSTO 2026"
    >
      <LegalSection heading="1. Datos identificativos">
        <p>
          En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la
          Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa
          de los siguientes datos:
        </p>
        <p>
          Titular: XTRATOS GESTIÓN Y MEDIO AMBIENTE SLL
          <br />
          Domicilio: Barrio de Rubo S/N, Polígono La Helguera, 39478 Boo de Piélagos
          (Cantabria)
          <br />
          Correo electrónico:{" "}
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

      <LegalSection heading="2. Objeto">
        <p>
          El presente aviso legal regula el acceso y uso del sitio web de Xtratos,
          cuya finalidad es informar sobre los servicios de construcción,
          excavación, derribos, urbanizaciones y obra pública y privada que presta la
          empresa.
        </p>
      </LegalSection>

      <LegalSection heading="3. Condiciones de uso">
        <p>
          El acceso al sitio web atribuye la condición de usuario e implica la
          aceptación de las presentes condiciones. El usuario se compromete a hacer
          un uso adecuado de los contenidos y a no emplearlos para fines ilícitos o
          lesivos para terceros.
        </p>
      </LegalSection>

      <LegalSection heading="4. Propiedad intelectual e industrial">
        <p>
          Todos los contenidos del sitio web (textos, fotografías, logotipos, marcas,
          diseño y código) son titularidad de Xtratos o de terceros que han
          autorizado su uso, y están protegidos por la normativa de propiedad
          intelectual e industrial. Queda prohibida su reproducción, distribución o
          transformación sin autorización expresa.
        </p>
      </LegalSection>

      <LegalSection heading="5. Responsabilidad">
        <p>
          Xtratos no se hace responsable de los daños derivados del uso del sitio
          web, ni de las posibles interrupciones del servicio por causas técnicas
          ajenas a su control. La información publicada tiene carácter meramente
          informativo y no constituye una oferta contractual vinculante.
        </p>
      </LegalSection>

      <LegalSection heading="6. Enlaces externos">
        <p>
          Este sitio puede contener enlaces a páginas de terceros (por ejemplo, redes
          sociales). Xtratos no controla ni se responsabiliza de los contenidos ni de
          las políticas de privacidad de dichos sitios.
        </p>
      </LegalSection>

      <LegalSection heading="7. Legislación aplicable">
        <p>
          Las presentes condiciones se rigen por la legislación española. Para la
          resolución de cualquier controversia, las partes se someten a los juzgados
          y tribunales que correspondan conforme a la normativa vigente.
        </p>
      </LegalSection>
    </LegalLayout>
  );
};

export default LegalNotice;
