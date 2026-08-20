export const phoneNumber = "34687412989";

export const whatsappMessage =
  "Hola, quiero información sobre estimulación cognitiva a domicilio en Guadalajara.";

export function createWhatsappHref(message: string) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappHref = createWhatsappHref(whatsappMessage);
