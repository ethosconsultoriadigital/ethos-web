import Link from "next/link";

import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { pageMetadata } from "@/lib/metadata";
import { privacyConfig } from "@/lib/privacy";

export const metadata = pageMetadata({
  title: "Aviso de Privacidad",
  description:
    "Aviso de Privacidad Integral de ETHOS y EthosIA: tratamiento de datos personales, derechos ARCO, WhatsApp y cookies.",
  path: "/aviso-de-privacidad",
});

function PrivacySection({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4 border-t border-border/40 pt-10">
      <h2 className="text-xl font-semibold text-ethos-white md:text-2xl">
        {number}. {title}
      </h2>
      <div className="space-y-4 text-sm leading-relaxed text-ethos-muted md:text-base">
        {children}
      </div>
    </section>
  );
}

export default function AvisoDePrivacidadPage() {
  const {
    lastUpdated,
    legalName,
    commercialBrands,
    address,
    privacyEmail,
    supportEmail,
    phone,
    privacyOfficer,
    website,
    privacyUrl,
    contactUrl,
  } = privacyConfig;

  return (
    <Section className="pt-12 pb-24" containerClassName="max-w-3xl">
      <FadeIn>
        <SectionHeading
          eyebrow="Legal"
          title="Aviso de Privacidad Integral"
          description={`Última actualización: ${lastUpdated}`}
        />
      </FadeIn>

      <FadeIn delay={0.05} className="space-y-10">
        <PrivacySection number={1} title="Identidad del responsable">
          <p>
            <strong className="text-ethos-white">{legalName}</strong>, que opera
            comercialmente bajo las marcas <strong className="text-ethos-white">{commercialBrands}</strong>,
            con domicilio para oír y recibir notificaciones en{" "}
            <strong className="text-ethos-white">{address}</strong>, es responsable
            del tratamiento, uso, almacenamiento y protección de sus datos
            personales.
          </p>
          <p>
            Para cualquier asunto relacionado con privacidad o protección de
            datos personales puede comunicarse mediante:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Correo electrónico:{" "}
              <a
                href={`mailto:${privacyEmail}`}
                className="text-ethos-gold transition-colors hover:text-ethos-gold-light"
              >
                {privacyEmail}
              </a>
            </li>
            <li>
              Sitio web:{" "}
              <a
                href={website}
                className="text-ethos-gold transition-colors hover:text-ethos-gold-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                {website}
              </a>
            </li>
            {phone ? (
              <li>
                Teléfono de atención:{" "}
                <strong className="text-ethos-white">{phone}</strong>
              </li>
            ) : null}
          </ul>
        </PrivacySection>

        <PrivacySection number={2} title="Alcance del aviso">
          <p>
            Este Aviso de Privacidad se aplica a los datos personales recabados
            a través de nuestro sitio web, formularios de contacto, contratos,
            procesos de alta, plataforma de monitoreo, correo electrónico,
            servicio de atención y comunicaciones realizadas mediante WhatsApp.
          </p>
          <p>
            ETHOS y EthosIA ofrecen servicios B2B de monitoreo de medios,
            análisis de reputación, organización de información pública y envío
            de alertas informativas a clientes y usuarios autorizados.
          </p>
        </PrivacySection>

        <PrivacySection number={3} title="Datos personales que podemos recabar">
          <p>
            Dependiendo de la relación que mantenga con nosotros, podremos
            tratar las siguientes categorías de datos:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Datos de identificación, como nombre y puesto.</li>
            <li>
              Datos de contacto, como correo electrónico y número telefónico.
            </li>
            <li>
              Datos profesionales, como empresa, institución u organización a la
              que pertenece.
            </li>
            <li>
              Datos contractuales y de facturación necesarios para administrar
              el servicio.
            </li>
            <li>
              Datos relacionados con la cuenta, configuración y preferencias del
              servicio.
            </li>
            <li>
              Temas, marcas, empresas y fuentes públicas que el cliente solicite
              monitorear.
            </li>
            <li>
              Registros de consentimiento, activación, suspensión o cancelación
              de alertas.
            </li>
            <li>Información intercambiada durante solicitudes de soporte.</li>
            <li>
              Datos técnicos, como dirección IP, tipo de navegador, dispositivo,
              registros de acceso y cookies.
            </li>
          </ul>
          <p>
            No solicitamos intencionalmente datos personales sensibles a través
            del sitio web o de WhatsApp. Le pedimos que no envíe información
            médica, biométrica, financiera completa, contraseñas, documentos
            oficiales ni otros datos sensibles por estos canales.
          </p>
        </PrivacySection>

        <PrivacySection number={4} title="Finalidades primarias y necesarias">
          <p>
            Los datos personales serán tratados para las siguientes finalidades
            necesarias:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Atender solicitudes de información, cotizaciones y contacto.</li>
            <li>Verificar la identidad y autorización de los usuarios.</li>
            <li>Crear, administrar y proteger cuentas de servicio.</li>
            <li>
              Formalizar y gestionar la relación contractual o comercial.
            </li>
            <li>
              Configurar los criterios de monitoreo solicitados por el cliente.
            </li>
            <li>
              Elaborar y entregar reportes y resultados del servicio contratado.
            </li>
            <li>
              Enviar alertas informativas solicitadas por usuarios autorizados.
            </li>
            <li>Proporcionar atención técnica y soporte.</li>
            <li>
              Mantener registros de activación, consentimiento, suspensión y
              cancelación.
            </li>
            <li>
              Emitir comprobantes y cumplir obligaciones administrativas,
              fiscales y legales.
            </li>
            <li>
              Prevenir accesos no autorizados, fraude, abuso o incidentes de
              seguridad.
            </li>
            <li>
              Atender requerimientos legalmente fundados de autoridades
              competentes.
            </li>
          </ul>
        </PrivacySection>

        <PrivacySection number={5} title="Finalidades secundarias">
          <p>
            Con autorización separada, podremos utilizar sus datos para:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Enviar información sobre nuevas funcionalidades o mejoras del
              servicio.
            </li>
            <li>Realizar encuestas de satisfacción.</li>
            <li>Enviar comunicaciones comerciales o promocionales.</li>
          </ul>
          <p>
            La negativa o revocación respecto de estas finalidades secundarias
            no afectará la prestación del servicio contratado.
          </p>
          <p>
            Puede oponerse a estas finalidades escribiendo a{" "}
            <a
              href={`mailto:${privacyEmail}`}
              className="text-ethos-gold transition-colors hover:text-ethos-gold-light"
            >
              {privacyEmail}
            </a>{" "}
            con el asunto “Cancelar comunicaciones comerciales”.
          </p>
        </PrivacySection>

        <PrivacySection number={6} title="Uso de WhatsApp y envío de alertas">
          <p>
            ETHOS y EthosIA utilizan WhatsApp exclusivamente como canal para
            comunicarse con clientes y usuarios autorizados que:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>hayan proporcionado voluntariamente su número telefónico; y</li>
            <li>
              hayan otorgado su consentimiento explícito para recibir mensajes de{" "}
              <strong className="text-ethos-white">EthosIA por WhatsApp</strong>.
            </li>
          </ol>
          <p>A través de este canal podremos enviar:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Mensajes para activar el servicio de alertas.</li>
            <li>Alertas de monitoreo solicitadas por el cliente.</li>
            <li>
              Notificaciones operativas relacionadas con la cuenta o servicio
              contratado.
            </li>
            <li>
              Respuestas a solicitudes de soporte iniciadas por el usuario.
            </li>
            <li>
              Enlaces a publicaciones y fuentes públicas relacionadas con los
              criterios de monitoreo configurados.
            </li>
          </ul>
          <p>
            El servicio no utiliza WhatsApp para enviar mensajes políticos,
            electorales, partidistas, propaganda, contenido no solicitado ni
            comunicaciones masivas a personas que no hayan otorgado su
            consentimiento.
          </p>
          <p>
            Los enlaces incluidos en las alertas pueden dirigir a contenidos
            publicados por medios y fuentes externas. ETHOS y EthosIA no
            necesariamente crean, controlan ni respaldan las opiniones
            contenidas en dichas publicaciones; el servicio se limita a
            localizarlas, organizarlas y notificarlas conforme a los criterios
            contratados.
          </p>
          <p>
            Las conversaciones iniciadas por la empresa podrán enviarse mediante
            plantillas previamente aprobadas por WhatsApp. Cuando el usuario
            responda o seleccione una opción de activación, podrá abrirse el
            periodo de atención permitido por WhatsApp.
          </p>
          <p>
            El consentimiento y las instrucciones de cada usuario se conservarán
            como evidencia mientras sean necesarios para administrar el
            servicio.
          </p>
          <h3 className="pt-2 text-base font-semibold text-ethos-white md:text-lg">
            Suspensión y cancelación de alertas
          </h3>
          <p>
            El usuario puede pausar o cancelar los mensajes de WhatsApp en
            cualquier momento mediante cualquiera de estas opciones:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Responder <strong className="text-ethos-white">“Pausar alertas”</strong>,{" "}
              <strong className="text-ethos-white">“Baja”</strong> o{" "}
              <strong className="text-ethos-white">“STOP”</strong> en la
              conversación.
            </li>
            <li>
              Seleccionar el botón{" "}
              <strong className="text-ethos-white">“No, gracias”</strong> o{" "}
              <strong className="text-ethos-white">“Pausar alertas”</strong>, cuando
              esté disponible.
            </li>
            <li>
              Solicitarlo mediante{" "}
              <a
                href={`mailto:${supportEmail}`}
                className="text-ethos-gold transition-colors hover:text-ethos-gold-light"
              >
                {supportEmail}
              </a>
              .
            </li>
            <li>
              Comunicarse a través del formulario disponible en{" "}
              <Link
                href="/contacto"
                className="text-ethos-gold transition-colors hover:text-ethos-gold-light"
              >
                {contactUrl}
              </Link>
              .
            </li>
          </ul>
          <p>
            La cancelación de mensajes por WhatsApp no cancela automáticamente el
            contrato ni el servicio de monitoreo. Únicamente desactiva WhatsApp
            como canal de notificación, salvo que el usuario solicite
            expresamente algo distinto.
          </p>
        </PrivacySection>

        <PrivacySection number={7} title="Obtención del consentimiento para WhatsApp">
          <p>
            Antes de enviar el primer mensaje, ETHOS o EthosIA deberán obtener el
            consentimiento explícito del usuario mediante contrato, formulario
            electrónico, configuración de cuenta u otro mecanismo verificable.
          </p>
          <p>
            La autorización para recibir mensajes por WhatsApp será independiente
            de la aceptación general de este Aviso de Privacidad y no deberá
            encontrarse marcada previamente.
          </p>
          <p>
            El usuario podrá retirar dicha autorización en cualquier momento. Una
            vez recibida la solicitud, se suspenderán los mensajes posteriores por
            ese canal, salvo aquellos estrictamente necesarios para confirmar la
            baja o cumplir una obligación legal.
          </p>
        </PrivacySection>

        <PrivacySection number={8} title="Encargados, proveedores y transferencias">
          <p>
            Para operar nuestros servicios podemos utilizar proveedores
            tecnológicos que procesan información siguiendo nuestras
            instrucciones, incluyendo:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Proveedores de alojamiento e infraestructura tecnológica.</li>
            <li>Servicios de correo electrónico y soporte.</li>
            <li>Proveedores de seguridad y almacenamiento.</li>
            <li>
              <strong className="text-ethos-white">Twilio Inc.</strong>, como
              proveedor de infraestructura de comunicaciones.
            </li>
            <li>
              <strong className="text-ethos-white">
                Meta Platforms, Inc. y las empresas relacionadas con WhatsApp
              </strong>
              , como operadores de la plataforma WhatsApp Business.
            </li>
          </ul>
          <p>
            Algunos proveedores pueden procesar o almacenar información fuera de
            México, conforme a sus términos, políticas de privacidad y medidas de
            seguridad aplicables.
          </p>
          <p>No vendemos, rentamos ni comercializamos datos personales.</p>
          <p>
            Podremos comunicar información a autoridades cuando exista una
            obligación legal o un requerimiento debidamente fundado. También
            podremos transferir información cuando sea necesaria para el
            reconocimiento, ejercicio o defensa de un derecho, o en los demás
            supuestos permitidos por la legislación aplicable.
          </p>
        </PrivacySection>

        <PrivacySection number={9} title="Derechos ARCO">
          <p>La persona titular puede solicitar en cualquier momento:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ethos-white">Acceso:</strong> conocer qué
              datos conservamos y cómo los utilizamos.
            </li>
            <li>
              <strong className="text-ethos-white">Rectificación:</strong> corregir
              datos inexactos o incompletos.
            </li>
            <li>
              <strong className="text-ethos-white">Cancelación:</strong> solicitar
              la eliminación o bloqueo cuando proceda legalmente.
            </li>
            <li>
              <strong className="text-ethos-white">Oposición:</strong> solicitar
              que sus datos no sean utilizados para determinadas finalidades.
            </li>
          </ul>
          <p>
            Para ejercer estos derechos deberá enviar una solicitud a{" "}
            <a
              href={`mailto:${privacyEmail}`}
              className="text-ethos-gold transition-colors hover:text-ethos-gold-light"
            >
              {privacyEmail}
            </a>{" "}
            con el asunto “Solicitud de derechos ARCO”, incluyendo:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Nombre completo.</li>
            <li>Medio para recibir la respuesta.</li>
            <li>Descripción clara del derecho que desea ejercer.</li>
            <li>Datos o tratamiento relacionado con la solicitud.</li>
            <li>
              Documento o medio razonable para acreditar su identidad.
            </li>
            <li>
              En su caso, documentación que sustente la rectificación
              solicitada.
            </li>
          </ul>
          <p>
            Si la solicitud se presenta mediante representante, deberá
            acreditarse la representación correspondiente.
          </p>
          <p>
            La solicitud será atendida dentro de los plazos establecidos por la
            legislación mexicana aplicable. Cuando resulte procedente, las
            medidas correspondientes serán ejecutadas dentro del plazo legal.
          </p>
        </PrivacySection>

        <PrivacySection number={10} title="Revocación del consentimiento">
          <p>
            Puede revocar su consentimiento para tratamientos que dependan de
            este en cualquier momento enviando una solicitud a{" "}
            <a
              href={`mailto:${privacyEmail}`}
              className="text-ethos-gold transition-colors hover:text-ethos-gold-light"
            >
              {privacyEmail}
            </a>
            .
          </p>
          <p>
            La revocación no tendrá efectos retroactivos y podrá estar limitada
            cuando debamos conservar determinada información para cumplir
            obligaciones contractuales, fiscales, administrativas o legales.
          </p>
          <p>
            Para retirar específicamente el consentimiento de WhatsApp también
            podrá responder <strong className="text-ethos-white">“Baja”</strong>,{" "}
            <strong className="text-ethos-white">“STOP”</strong> o{" "}
            <strong className="text-ethos-white">“Pausar alertas”</strong> en la
            conversación correspondiente.
          </p>
        </PrivacySection>

        <PrivacySection number={11} title="Limitación del uso o divulgación">
          <p>
            La persona titular puede solicitar la limitación del uso o
            divulgación de sus datos mediante el correo{" "}
            <a
              href={`mailto:${privacyEmail}`}
              className="text-ethos-gold transition-colors hover:text-ethos-gold-light"
            >
              {privacyEmail}
            </a>
            .
          </p>
          <p>También puede solicitar:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>La suspensión de mensajes promocionales.</li>
            <li>La desactivación de alertas por WhatsApp.</li>
            <li>El cambio del canal de notificación.</li>
            <li>La actualización de usuarios autorizados.</li>
            <li>
              La eliminación de su número de las listas de mensajería, cuando
              legalmente proceda.
            </li>
          </ul>
        </PrivacySection>

        <PrivacySection number={12} title="Seguridad de la información">
          <p>
            Aplicamos medidas administrativas, técnicas y organizativas
            razonables para proteger los datos personales contra pérdida, acceso
            no autorizado, alteración, divulgación o uso indebido.
          </p>
          <p>
            El acceso a cuentas, criterios de monitoreo, reportes y alertas se
            limita al personal y a los usuarios autorizados que requieren dicha
            información para prestar o recibir el servicio.
          </p>
          <p>
            Ningún sistema es completamente infalible. En caso de identificar
            una vulneración que pueda afectar significativamente los derechos
            patrimoniales o morales de las personas titulares, procederemos
            conforme a la legislación aplicable.
          </p>
        </PrivacySection>

        <PrivacySection number={13} title="Conservación de datos">
          <p>
            Conservaremos los datos personales durante el tiempo necesario para
            cumplir las finalidades descritas, mantener la relación contractual,
            atender solicitudes, demostrar el consentimiento y cumplir
            obligaciones legales.
          </p>
          <p>
            Al concluir dichos periodos, los datos serán eliminados,
            anonimizados o bloqueados conforme a nuestras obligaciones de
            conservación.
          </p>
        </PrivacySection>

        <PrivacySection number={14} title="Cookies y tecnologías similares">
          <p>
            Nuestro sitio puede utilizar cookies y tecnologías similares para:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Mantener el funcionamiento y seguridad del sitio.</li>
            <li>Recordar preferencias técnicas.</li>
            <li>
              Analizar de manera general el funcionamiento y uso del sitio.
            </li>
            <li>Detectar errores o intentos de acceso no autorizado.</li>
          </ul>
          <p>
            Cuando corresponda, el usuario podrá aceptar, rechazar o configurar
            las cookies no indispensables mediante las opciones disponibles en
            el sitio o en su navegador.
          </p>
        </PrivacySection>

        <PrivacySection number={15} title="Menores de edad">
          <p>
            Nuestros servicios están dirigidos a empresas, organizaciones y
            usuarios profesionales mayores de edad. No recabamos
            intencionalmente información de menores de edad.
          </p>
          <p>
            Si detectamos que se proporcionaron datos de una persona menor sin la
            autorización correspondiente, procederemos a eliminarlos o
            bloquearlos conforme a la legislación aplicable.
          </p>
        </PrivacySection>

        <PrivacySection number={16} title="Cambios al Aviso de Privacidad">
          <p>
            Podremos actualizar este Aviso de Privacidad para reflejar cambios
            legales, operativos o relacionados con nuestros servicios.
          </p>
          <p>
            Las modificaciones serán publicadas en:{" "}
            <Link
              href="/aviso-de-privacidad"
              className="text-ethos-gold transition-colors hover:text-ethos-gold-light"
            >
              {privacyUrl}
            </Link>
          </p>
          <p>
            Cuando un cambio requiera un nuevo consentimiento, lo solicitaremos
            por un medio apropiado antes de aplicar el nuevo tratamiento.
          </p>
        </PrivacySection>

        <PrivacySection number={17} title="Contacto">
          <p>
            Para dudas, aclaraciones o solicitudes relacionadas con privacidad y
            protección de datos:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              Responsable:{" "}
              <strong className="text-ethos-white">{privacyOfficer}</strong>
            </li>
            <li>
              Correo:{" "}
              <a
                href={`mailto:${privacyEmail}`}
                className="text-ethos-gold transition-colors hover:text-ethos-gold-light"
              >
                {privacyEmail}
              </a>
            </li>
            <li>
              Domicilio:{" "}
              <strong className="text-ethos-white">{address}</strong>
            </li>
            <li>
              Formulario:{" "}
              <Link
                href="/contacto"
                className="text-ethos-gold transition-colors hover:text-ethos-gold-light"
              >
                {contactUrl}
              </Link>
            </li>
          </ul>
        </PrivacySection>
      </FadeIn>
    </Section>
  );
}
