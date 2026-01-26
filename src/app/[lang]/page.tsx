import { Motto } from "@components/motto/Motto";
import { Banner } from "@components/banner/Banner";
import { ShowCase } from "@components/showCase/ShowCase";
import { Clients } from "@components/clients/Clients";
import { Categories } from "@components/categories/Categories";
import { FloatingWidget } from "@/src/_components/floatingWidget/FloatingWidget";

export default async function Home() {
  return (
    <>
      <Banner />
      <Motto />
      <Categories />
      <Clients />
      <ShowCase />
      <FloatingWidget />
    </>
  );
}
