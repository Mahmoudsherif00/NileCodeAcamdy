/**
 * Global site configuration.
 * The WhatsApp number is the single deployment-specific value:
 * replace it with the academy's real number (international format,
 * digits only). Everything else in the app derives from here.
 */
export const SITE_CONFIG = {
  name: 'Nile Code Academy',
  whatsappNumber: '201140041083', // +20 114 004 1083
  whatsappMessage:
    "Hello Nile Code Academy! I'd like to know more about your AI & Automation tracks.",
}

export function whatsappLink(message = SITE_CONFIG.whatsappMessage) {
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`
}
