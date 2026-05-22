"use server";

import { sendContactEmail } from "@/lib/email/send-contact-email";
import { getDb } from "@/lib/db";
import { contactFormSchema } from "@/lib/validations/contact";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<
    Record<"name" | "email" | "company" | "message", string>
  >;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  if (formData.get("_gotcha")) {
    return { status: "success" };
  }

  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") || undefined,
    message: formData.get("message"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactFormState["fieldErrors"] = {};

    for (const issue of parsed.error.issues) {
      const field = issue.path[0];

      if (
        field === "name" ||
        field === "email" ||
        field === "company" ||
        field === "message"
      ) {
        fieldErrors[field] ??= issue.message;
      }
    }

    return {
      status: "error",
      message: "Revise los campos marcados e intente de nuevo.",
      fieldErrors,
    };
  }

  const submittedAt = new Date();
  const data = parsed.data;

  try {
    const db = getDb();

    if (db) {
      try {
        await db.contactLead.create({
          data: {
            name: data.name,
            email: data.email,
            company: data.company || null,
            message: data.message,
          },
        });
      } catch (dbError) {
        console.error("[contact] db", dbError);
      }
    }

    await sendContactEmail({ ...data, submittedAt });

    return {
      status: "success",
      message:
        "Su solicitud fue enviada correctamente. Nuestro equipo responderá en menos de 24 horas hábiles.",
    };
  } catch (error) {
    console.error("[contact]", error);

    return {
      status: "error",
      message:
        "No pudimos enviar su solicitud en este momento. Intente nuevamente o escríbanos directamente a ethosconsultoriadigital@gmail.com.",
    };
  }
}
