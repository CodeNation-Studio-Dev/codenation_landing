import { StoryCard } from "@lib/components/storyCard/StoryCard";
import { ShowUsGallery } from "@components/showUsGallery/ShowUsGallery";
import { TwoColumnText } from "@lib/components/twoColumnText/TwoColumnText";
import { getDictionary } from "@lib/helpers/getDictionary";
import { TranslationProvider } from "@providers/translationProvider";
import Image from "next/image";
import { TrophyShelf } from "@components/trophyShelf/TrophyShelf";
import { OurTeam } from "@components/ourTeam/OurTeam";

const AboutUs = async ({
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) => {
  const { lang } = await params;
  const dict = await getDictionary(lang, "about");

  return (
    <TranslationProvider dict={dict}>
      <div className="px-4">
        <section className="flex w-full max-w-[1540px] justify-center pt-20 pb-[26px] lg:pb-[200px] xl:mx-auto">
          <div className="w-full text-3xl font-semibold sm:text-4xl md:text-5xl lg:px-[72px] lg:text-6xl xl:text-8xl">
            <h1>{dict.title}</h1>
            <h2>{dict.title_extra}</h2>
          </div>
        </section>
        <ShowUsGallery />
        <TwoColumnText
          rightText={dict.purpose.description}
          leftText={dict.purpose.title}
          className="w-full max-w-[1540px] pt-10 xl:mx-auto"
        />
        <StoryCard
          title={dict.story.title}
          description={dict.story.description}
          button={dict.story.link}
          variant="gallery"
          className="w-full max-w-[1540px] xl:mx-auto"
          gallery={[
            <video
              key="video"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              src="/assets/our-work.mp4"
            ></video>,
            <Image
              key="first-image"
              src="/assets/boses.png"
              alt=""
              fill
              className="object-cover"
            />,
            <Image
              key="second-image"
              src="/assets/meeting.png"
              alt=""
              fill
              className="object-cover"
            />,
            <Image
              key="third-image"
              src="/assets/juniors.png"
              alt=""
              fill
              className="object-cover"
            />,
          ]}
        />
        <TwoColumnText
          rightText={dict.solutions.description}
          leftText={dict.solutions.title}
          className="w-full max-w-[1540px] pt-10 xl:mx-auto"
          rotate
        />
        <StoryCard
          title={dict.contact.title}
          description={dict.contact.description}
          button={dict.contact.link}
          variant="full"
          className="w-full max-w-[1540px] xl:mx-auto"
          gallery={
            <Image
              src="/assets/build-ideas.png"
              alt=""
              fill
              className="object-cover"
            />
          }
          rotate
        />
        <TrophyShelf />
        <OurTeam />
      </div>
    </TranslationProvider>
  );
};

export default AboutUs;
