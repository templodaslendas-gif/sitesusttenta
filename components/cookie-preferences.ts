export const COOKIE_CONSENT_VERSION = 1 as const;
export const COOKIE_STORAGE_KEY = "susttenta_cookie_consent_v1";

export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

export type CookieConsentRecord = CookiePreferences & {
  version: typeof COOKIE_CONSENT_VERSION;
  updatedAt: string;
};

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function parseCookieConsent(raw: string | null): CookieConsentRecord | null {
  if (!raw) return null;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object") return null;
    const record = value as Partial<CookieConsentRecord>;
    if (
      record.version !== COOKIE_CONSENT_VERSION ||
      record.necessary !== true ||
      typeof record.analytics !== "boolean" ||
      typeof record.marketing !== "boolean" ||
      typeof record.updatedAt !== "string" ||
      Number.isNaN(Date.parse(record.updatedAt))
    ) return null;
    return record as CookieConsentRecord;
  } catch {
    return null;
  }
}

export function createCookieConsentRecord(preferences: CookiePreferences): CookieConsentRecord {
  return { ...preferences, version: COOKIE_CONSENT_VERSION, updatedAt: new Date().toISOString() };
}
