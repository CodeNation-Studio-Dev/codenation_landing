import "server-only";

export async function getDictionary(
  locale: string,
  namespace: string,
): Promise<Record<string, any>> {
  return (await import(`../locales/${locale}/${namespace}.json`)).default;
}
