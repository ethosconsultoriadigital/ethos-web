import { OFFICIAL_CONTACT_EMAIL } from "@/lib/site";

/**
 * Datos del Aviso de Privacidad.
 * Actualizar domicilio completo y razón social cuando se confirmen legalmente.
 */
export const privacyConfig = {
  lastUpdated: "22 de septiembre de 2026",
  legalName: "TYCHE DATA, S.A. DE C.V.",
  commercialBrands: "ETHOS y EthosIA",
  address: "Guadalajara, Jalisco, México",
  privacyEmail: OFFICIAL_CONTACT_EMAIL,
  supportEmail: OFFICIAL_CONTACT_EMAIL,
  phone: null as string | null,
  privacyOfficer: "Área de Privacidad",
  website: "https://www.ethosconsultoriadigital.com",
  privacyUrl: "https://www.ethosconsultoriadigital.com/aviso-de-privacidad",
  contactUrl: "https://www.ethosconsultoriadigital.com/contacto",
} as const;
