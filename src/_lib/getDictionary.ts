import "server-only";
import { TranslationDict } from "@providers/translationProvider";

export async function getDictionary(
  locale: string,
  namespace: string,
): Promise<TranslationDict> {
  return (await import(`../locales/${locale}/${namespace}.json`)).default;
}
