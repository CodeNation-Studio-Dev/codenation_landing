import { MoreMembers } from "@/src/_components/moreMembers/MoreMembers";
import { Profile } from "@/src/_components/profile/Profile";
import { ProjectsCarousel } from "@/src/_components/projectsCarousel/ProjectsCarousel";
import { getDictionary } from "@/src/_lib/helpers/getDictionary";
import { TranslationProvider } from "@/src/_providers/translationProvider";

type Members =
  | "francisco-luna"
  | "francisco-marmolejo"
  | "rafael-cabrera"
  | "joel-martinez"
  | "aldair-gonzalez"
  | "victor-zamora"
  | "joshua-torres";

const Page = async ({
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{
    lang: string;
    member: Members;
  }>;
}>) => {
  const { lang, member } = await params;
  const dict = await getDictionary(lang, "members");

  return (
    <TranslationProvider dict={dict}>
      <Profile user={member} />
      <ProjectsCarousel user={member} />
      <MoreMembers user={member} />
    </TranslationProvider>
  );
};

export default Page;
