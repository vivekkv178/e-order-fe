import { Hero as HeroComponent, Stat } from "@vivekkv178/library";
import { Icon } from "@iconify/react";
import Link from "next/link";

const Hero = () => {
  const data = {
    heroTitle: "Typescript, Nest.js & React",
    heroDescription:
      "Say goodbye to manual, time-consuming tasks. Let library handle the heavy lifting with ready to use UI components and Javascript functions.",
    cta: {
      contact_me: "/contact",
      download_cv:
        "https://drive.google.com/file/d/1Syy3kBZP3WESV2K-dx8WV6bHSLZoAAVG/view",
    },
  };
  return (
    <div className="mb-20">
      <HeroComponent
        NavigationComponent={Link}
        heroImg={
          <div className="hidden xl:flex">
            {/* <img
              src="/undraw_Asset_selection.png"
              className="w-full h-full -mt-20 rounded-lg"
            /> */}
            <img
              src="https://raw.githubusercontent.com/vivekkv178/cdn/main/library/Hero.png"
              className="w-full h-full -mt-20 rounded-lg"
            />
          </div>
        }
        heroDescription={data?.heroDescription!}
        heroTitle={data?.heroTitle}
        heroText={<h1 className="h1 mb-4">{"Open API"}</h1>}
        primaryButton={{
          icon: <Icon icon="lucide:arrow-down" />,
          label: "Get Started",
          variant: "default",
          link: "#storybook",
        }}
        secondaryButton={{
          icon: <Icon icon="lucide:github" />,
          label: "Github",
          variant: "default",
          link: "https://github.com/vivekkv178/open-api-fe",
          newTab: true,
        }}
      />
    </div>
  );
};

export default Hero;
