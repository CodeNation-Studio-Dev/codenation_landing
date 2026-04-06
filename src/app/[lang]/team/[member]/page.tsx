import { MoreMembers } from "@components/moreMembers/MoreMembers";
import { Profile } from "@components/profile/Profile";
import { ProjectsCarousel } from "@components/projectsCarousel/ProjectsCarousel";
import { getDictionary } from "@lib/helpers/getDictionary";
import { TranslationProvider } from "@providers/translationProvider";
import { Metadata } from "next";

type Members =
  | "francisco-luna"
  | "francisco-marmolejo"
  | "rafael-cabrera"
  | "joel-martinez"
  | "aldair-gonzalez"
  | "victor-zamora"
  | "joshua-torres";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; member: Members }>;
}): Promise<Metadata> {
  const { lang, member } = await params;

  return {
    alternates: {
      canonical: `/${lang}/team/${member}`,
      languages: {
        "en-US": `/en-US/team/${member}`,
        "es-MX": `/es-MX/team/${member}`,
      },
    },
  };
}

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
