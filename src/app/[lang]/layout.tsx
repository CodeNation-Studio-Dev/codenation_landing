import type { Metadata } from "next";
import { Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@components/header/Header";
import { Footer } from "@components/footer/Footer";
import { getDictionary } from "@lib/helpers/getDictionary";
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  const isSpanish = lang === "es-MX";
  const title = isSpanish
    ? "CodeNation Studio | Desarrollo de Software a Medida"
    : "CodeNation Studio | Custom Software Development";

  const description = isSpanish
    ? "Desarrollamos software escalable y seguro para startups y empresas en crecimiento. Desde MVP hasta sistemas empresariales, con calidad y alianza a largo plazo."
    : "We build scalable and secure software for startups and growing companies. From MVPs to enterprise systems, delivering quality and long-term partnership.";

  return {
    metadataBase: new URL("https://codenation-studio.com"),
    title,
    description,
    alternates: {
      languages: {
        "en-US": "/en-US",
        "es-MX": "/es-MX",
      },
    },

    openGraph: {
      title,
      description,
      url: `https://codenation-studio.com/${lang}`,
      siteName: "CodeNation Studio",
      locale: isSpanish ? "es_MX" : "en_US",
      type: "website",
      images: [
        {
          url: "https://codenation-studio.com/en-US/opengraph-image.png",
          width: 512,
          height: 512,
          alt: "CodeNation Studio isotipo",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image.png"],
    },
  };
}

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
