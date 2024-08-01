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

//import { isMobile } from 'react-device-detect';
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import { useIsClient } from "./is-client-ctx";

import { useWindowWidth } from '@react-hook/window-size'
import { BlockContainer } from "./BlockContainer";

import { isMobile, isSafari } from 'react-device-detect';

export default function Home() {

  const [topOffset, setTopOffset] = useState(0)

  const refPTLightbox = useRef(null)
  const refVideoSource: any = useRef(null)
  const refVideo: any = useRef(null)
  const [currentVideoUrl, setCurrentVideoUrl] = useState("")
  const [showVideoLightBox, setShowVideoLightbox] = useState(false)

  const videomp4 = "https://s3-us-west-2.amazonaws.com/converterpoint-22/encodings/e96d689a68a59259b82b35348390cafa.mp4";

  const windowWidth = useWindowWidth()

  function showVideo(url: any) {

    if (url != null && url.length > 0) {
      setCurrentVideoUrl(url)
      setShowVideoLightbox(true)
    }
  }

  function closeVideo() {
    if (refVideoSource !== null) {
      setShowVideoLightbox(false)
      if (refVideoSource.current) {
        refVideoSource.current.setAttribute('src', '')
      }
      setCurrentVideoUrl('')
      refVideo.current.pause()
    }
  }

  useEffect(() => {
    if (refVideoSource.current) {
      refVideoSource.current.setAttribute('src', currentVideoUrl)
      refVideo.current.load()
    }
  }, [currentVideoUrl])

  // const isClient = useIsClient()

  console.log('isSafari: ' + isSafari);
  console.log('isMobile: ' + isMobile);

  return (
    <main className="w-full flex-col p-0 m-0 bg-white">

      <motion.div
        className="w-full h-full xl:w-screen xl:h-screen bg-black bg-opacity-90 lg:bg-opacity-40 fixed top-0 left-0 z-[99] flex justify-center items-center pointer-events-none"
        ref={refPTLightbox}
        initial={{ opacity: 0 }}
        animate={{ opacity: showVideoLightBox ? 1 : 0 }}
        style={{ pointerEvents: showVideoLightBox ? 'all' : 'none' }}
      >
        <div className="flex cursor-pointer justify-center align-center p-auto fixed top-28 xs:left-1/2 transform xs:-translate-x-1/2 lg:-translate-x-0 lg:top-4 lg:left-auto lg:right-4 w-[80px] h-[80px] bg-offblack border-2 rounded-full border-offwhite z-50 hover:scale-95 transition-all"
          onClick={() => closeVideo()}>
          <FontAwesomeIcon
            icon={faClose} className="mt-2 w-3/4 h-3/4 text-white"
          />
        </div>
        {(isMobile && isSafari) ?
          <video ref={refVideo} className="" controls autoPlay playsInline muted style={{ height: "100%" }}>
          <source src="https://s3-us-west-2.amazonaws.com/converterpoint-22/encodings/e96d689a68a59259b82b35348390cafa.mp4" type="video/mp4" style={{ transform: "translate3d(0, 0, 0)" }}></source>
        </video>
        :
        <video ref={refVideo} className="" controls autoPlay playsInline style={{ height: "100%" }}>
          <source ref={refVideoSource} src="" type="video/webm" style={{ transform: "translate3d(0, 0, 0)" }}></source>
        </video>
        }
      </motion.div>

      <BlockNavigation setTopOffset={setTopOffset} />
      <BlockContainer>
        <BlockHero />
        {/* <p>{windowWidth}</p> */}
        <BlockAboutNeofit />
        <BlockDemo showVideo={showVideo} />
        <BlockWhyNeofit title={"Why Neofit"} />
        <BlockCaseStudies title={"Case Studies"} />
        <BlockInstallation title="Installation" />
        <BlockGallery title="Gallery" titleColour="blue" bgColour="bg-lightest-grey" images={['/why neofit 1.png', '/why neofit 2.png', '/why neofit 3.png']} />
        <BlockContact title="Contact" />
        <BlockFooter />
      </BlockContainer>
    </main>
  );
}
