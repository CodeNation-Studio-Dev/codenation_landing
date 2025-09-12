import { Motto } from "@components/motto/Motto";
import { Banner } from "@components/banner/Banner";
import { ShowCase } from "@components/showCase/ShowCase";
import { Clients } from "@components/clients/Clients";

export default async function Home() {
  return (
    <>
      <Banner />
      <Motto />
      <Clients />
      <ShowCase />
    </>
  );
}
