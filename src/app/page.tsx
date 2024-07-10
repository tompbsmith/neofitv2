import Image from "next/image";
import { ComponentButton } from "./ComponentButton";
import { BlockNavigation } from "./BlockNavigation";
import { BlockHero } from "./BlockHero";
import { BlockAboutNeofit } from "./BlockAboutNeofit";
import { BlockDemo } from "./BlockDemo";
import { BlockWhyNeofit } from "./BlockWhyNeofit";
import { BlockCaseStudies } from "./BlockCaseStudies";
import { BlockInstallation } from "./BlockInstallation";
import { BlockGallery } from "./BlockGallery";
import { BlockContact } from "./BlockContact";
import { BlockFooter } from "./BlockFooter";

export default function Home() {
  return (
    <main className="w-full flex-col p-0 m-0 bg-white">
      <BlockNavigation />
      <BlockHero />
      <BlockAboutNeofit />
      <BlockDemo />
      <BlockWhyNeofit title={"Why Neofit"} />
      <BlockCaseStudies title={"Case Studies"} />
      <BlockInstallation title="Installation" />
      <BlockGallery title="Gallery" titleColour="blue" bgColour="bg-lightest-grey" images={['/why neofit 1.png', 'why neofit 2.png', 'why neofit 3.png',]} />
      <BlockContact title="Contact" />
      <BlockFooter />
    </main>
  );
}
