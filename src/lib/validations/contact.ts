import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingrese su nombre completo.")
    .max(120, "El nombre es demasiado largo."),
  email: z
    .string()
    .trim()
    .email("Ingrese un correo electrónico válido.")
    .max(254),
  company: z.string().trim().max(160).optional(),
  message: z
    .string()
    .trim()
    .min(10, "Describa su contexto con al menos 10 caracteres.")
    .max(5000, "El mensaje es demasiado largo."),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
