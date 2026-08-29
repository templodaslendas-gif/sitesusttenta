export const WHATSAPP_NUMBER = "5546999259777";

export const whatsappMessages = {
  general:
    "Olá! Vim pelo site da Susttenta e gostaria de receber orientação sobre as soluções Embio.",
  embio:
    "Olá! Vim pelo site da Susttenta e gostaria de receber orientação sobre as soluções Embio.",
  embiofert:
    "Olá! Gostaria de receber orientação sobre o Tratamento Embiofert com Embio 3000 e Propulsor.",
  embio3100:
    "Olá! Gostaria de saber mais sobre a aplicação do Embio 3100.",
  embio6000:
    "Olá! Gostaria de receber orientação sobre o Embio 6000 para uma instalação com biodigestor.",
  embio5000:
    "Olá! Gostaria de receber orientação sobre a aplicação do Embio 5000+.",
  embio8000:
    "Olá! Gostaria de receber orientação sobre o Embio 8000 para efluentes industriais ou agroindustriais.",
  ecomax:
    "Olá! Gostaria de receber orientação sobre a linha Ecomax para controle de moscas.",
  pedro:
    "Olá, Pedro! Vim pelo site da Susttenta e gostaria de conversar sobre uma solução para minha operação.",
} as const;

export function createWhatsAppUrl(message: string): string {
  const normalizedMessage = message.trim();

  if (!normalizedMessage) {
    throw new Error("A mensagem do WhatsApp é obrigatória.");
  }

  const url = new URL(`https://wa.me/${WHATSAPP_NUMBER}`);
  url.search = new URLSearchParams({ text: normalizedMessage }).toString();
  return url.toString();
}
