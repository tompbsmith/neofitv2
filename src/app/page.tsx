'use client'

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

import { isMobile } from 'react-device-detect';
import { useEffect, useRef, useState } from "react";


export default function Home() {

  const [topOffset, setTopOffset] = useState(0)

  return (
    <main className="w-full flex-col p-0 m-0 bg-white">
      <BlockNavigation setTopOffset={setTopOffset} />
      <div className="relative w-full" style={{ top: isMobile ? topOffset + 'px' : '0px' }}>
        <BlockHero />
        <BlockAboutNeofit />
        <BlockDemo />
        <BlockWhyNeofit title={"Why Neofit"} />
        <BlockCaseStudies title={"Case Studies"} />
        <BlockInstallation title="Installation" />
        <BlockGallery title="Gallery" titleColour="blue" bgColour="bg-lightest-grey" images={['/why neofit 1.png', '/why neofit 2.png', '/why neofit 3.png']} />
        <BlockContact title="Contact" />
        <BlockFooter />
      </div>
    </main>
  );
}
