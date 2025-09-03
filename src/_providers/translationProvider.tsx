"use client";

import { createContext, useContext } from "react";

const TranslationContext = createContext<any>(null);

export function TranslationProvider({
  dict,
  children,
}: {
  dict: Record<string, any>;
  children: React.ReactNode;
}) {
  return (
    <TranslationContext.Provider value={dict}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations() {
  return useContext(TranslationContext);
}
