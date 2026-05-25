import { Footer } from "@/src/_components/footer/Footer";

export default function FooterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <Footer />
    </section>
  );
}
