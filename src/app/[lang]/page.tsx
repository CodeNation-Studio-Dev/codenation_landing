import type { Metadata } from "next";
import { Motto } from "@components/motto/Motto";
import { Banner } from "@components/banner/Banner";
import { ShowCase } from "@components/showCase/ShowCase";
import { Clients } from "@components/clients/Clients";
import { Categories } from "@components/categories/Categories";
import { FloatingWidget } from "@/src/_components/floatingWidget/FloatingWidget";
import { MoreMembers } from "@components/moreMembers/MoreMembers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  return {
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "en-US": "/en-US",
        "es-MX": "/es-MX",
        "x-default": "/",
      },
    },
  };
}

export default async function Home() {
  return (
    <>
      <Banner />
      <Motto />
      <Categories />
      <MoreMembers />
      <Clients />
      <ShowCase />
      <FloatingWidget />
    </>
  );
}
