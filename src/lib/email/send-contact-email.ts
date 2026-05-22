import { Resend } from "resend";

import type { ContactFormInput } from "@/lib/validations/contact";
import { siteConfig } from "@/lib/site";

type SendContactEmailInput = ContactFormInput & {
  submittedAt: Date;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getEmailConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "ethosconsultoriadigital@gmail.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? `${siteConfig.name} Contacto <onboarding@resend.dev>`;

  if (!apiKey) {
    throw new Error("Falta configurar RESEND_API_KEY.");
  }

  return { apiKey, to, from };
}

export async function sendContactEmail(input: SendContactEmailInput) {
  const { apiKey, to, from } = getEmailConfig();
  const resend = new Resend(apiKey);

  const company = input.company?.trim() || "No especificada";
  const formattedDate = new Intl.DateTimeFormat("es-MX", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Mexico_City",
  }).format(input.submittedAt);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: input.email,
    subject: `Nueva solicitud de consulta — ${input.name}`,
    text: [
      "Nueva solicitud de consulta desde el sitio web de ETHOS",
      "",
      `Nombre: ${input.name}`,
      `Correo: ${input.email}`,
      `Institución: ${company}`,
      `Fecha: ${formattedDate}`,
      "",
      "Mensaje:",
      input.message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="margin: 0 0 16px; color: #0f172a;">Nueva solicitud de consulta</h2>
        <p style="margin: 0 0 20px; color: #64748b;">Recibida desde el sitio web de ETHOS.</p>
        <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
          <tr>
            <td style="padding: 8px 0; color: #64748b; width: 140px;">Nombre</td>
            <td style="padding: 8px 0;"><strong>${escapeHtml(input.name)}</strong></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Correo</td>
            <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(input.email)}">${escapeHtml(input.email)}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Institución</td>
            <td style="padding: 8px 0;">${escapeHtml(company)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #64748b;">Fecha</td>
            <td style="padding: 8px 0;">${escapeHtml(formattedDate)}</td>
          </tr>
        </table>
        <h3 style="margin: 24px 0 8px; color: #0f172a;">Mensaje</h3>
        <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(input.message)}</p>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}
