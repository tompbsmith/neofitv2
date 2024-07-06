"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlay } from "@fortawesome/free-solid-svg-icons";

export function ComponentVideo(props: any) {

    const refPTLightbox = useRef(null)
    const refVideoSource: any = useRef(null)
    const refVideo: any = useRef(null)
    const [currentVideoUrl, setCurrentVideoUrl] = useState("")
    const [showVideoLightBox, setShowVideoLightbox] = useState(false)

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
        refVideoSource.current.setAttribute('src', currentVideoUrl)
        refVideo.current.load()
    }, [currentVideoUrl])

    return (
        <>
            <motion.div
                className="xs:w-full xs:h-full xl:w-screen xl:h-screen bg-black bg-opacity-90 lg:bg-opacity-40 fixed top-0 left-0 z-[50] flex justify-center items-center pointer-events-none"
                ref={refPTLightbox}
                initial={{ opacity: 0 }}
                animate={{ opacity: showVideoLightBox ? 1 : 0 }}
                style={{ pointerEvents: showVideoLightBox ? 'all' : 'none' }}
            >
                <div className="flex cursor-pointer justify-center align-center p-auto fixed xs:top-24 xs:left-1/2 transform xs:-translate-x-1/2 lg:-translate-x-0 lg:top-4 lg:left-auto lg:right-4 w-[80px] h-[80px] bg-offblack border-2 rounded-full border-offwhite z-50 hover:scale-95 transition-all"
                    onClick={() => closeVideo()}>
                    <FontAwesomeIcon
                        icon={faClose} className="mt-2 w-3/4 h-3/4 text-white"
                    />
                </div>
                <video ref={refVideo} className="absolute z-10" controls autoPlay playsInline style={{ height: "100%" }}>
                    <source ref={refVideoSource} src="" type="video/mp4" style={{ transform: "translate3d(0, 0, 0)" }}></source>
                </video>
            </motion.div>
            <motion.div className="flex w-full items-center justify-center cursor-pointer"
                whileHover={{
                    scale: 0.9,
                }}
                whileTap={{
                    scale: 0.9
                }}

                // whileHover={'hovered'}
                onClick={() => showVideo('/Neofit Demo Animation S2 - 48.webm')}
            >
                {/* <Image className="lg:w-full" src='/video dummy.png' alt={'video'} width={1200} height={600} /> */}
                <div className="relative">
                    <Image className="lg:w-full" src='/video still.png' alt={'video'} width={1280} height={600} />
                    <div className="w-full h-full absolute top-0 left-0 z-20 bg-black bg-opacity-30">
                        <motion.div
                        // variants={{ hovered: { scale: .8 } }}
                        >
                            <FontAwesomeIcon icon={faPlay} className="absolute top-1/2 left-1/2 text-white w-12 h-12 lg:w-48 lg:h-48 -translate-x-1/2 -translate-y-1/2" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}