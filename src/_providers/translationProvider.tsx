"use client";

import { createContext, useContext } from "react";

export type TranslationDict = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

const TranslationContext = createContext<TranslationDict>({});

export function TranslationProvider({
  dict,
  children,
}: {
  dict: TranslationDict;
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
