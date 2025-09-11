import { Motto } from "@components/motto/Motto";
import { Banner } from "@components/banner/Banner";
import { ShowCase } from "@components/showCase/ShowCase";

export default async function Home() {
  return (
    <>
      <Banner />
      <Motto />
      <ShowCase />
    </>
  );
}
