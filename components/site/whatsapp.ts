export const WHATSAPP_NUMBER = "5546999259777";

export const whatsappMessages = {
  general:
    "Olá! Vim pelo site da Susttenta e gostaria de conhecer as soluções.",
  embiofert:
    "Olá! Gostaria de receber orientação sobre o Tratamento Embiofert.",
  embio3100:
    "Olá! Gostaria de saber mais sobre a aplicação do Embio 3100.",
  embio6000:
    "Olá! Gostaria de saber mais sobre o Embio 6000 para propriedades com biodigestor.",
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
