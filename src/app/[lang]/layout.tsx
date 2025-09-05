import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@components/header/Header";
import { Footer } from "@components/footer/Footer";
import { getDictionary } from "@lib/getDictionary";
import { TranslationProvider } from "@providers/translationProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Codenation",
  description: "",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang, "home");

  return (
    <html lang={lang}>
      <body className={`${spaceMono.variable} ${inter.variable}`}>
        <TranslationProvider dict={dict}>
          <Header />
          {children}
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}
