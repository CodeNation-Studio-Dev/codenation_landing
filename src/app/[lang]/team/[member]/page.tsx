import { MoreMembers } from "@components/moreMembers/MoreMembers";
import { Profile } from "@components/profile/Profile";
import { ProjectsCarousel } from "@components/projectsCarousel/ProjectsCarousel";
import { getDictionary } from "@lib/helpers/getDictionary";
import { TranslationProvider } from "@providers/translationProvider";

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
