import { Motto } from "@components/motto/Motto";
import { Banner } from "@components/banner/Banner";

export default async function Home() {
  return (
    <>
      <Banner />
      <Motto />
    </>
  );
}
