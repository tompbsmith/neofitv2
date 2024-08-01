"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPlay } from "@fortawesome/free-solid-svg-icons";

export function ComponentVideo(props: any) {

    return (
        <div className="relative">

            <motion.div className="flex w-full items-center justify-center cursor-pointer"
                whileHover={{
                    scale: 0.9,
                }}
                whileTap={{
                    scale: 0.9
                }}

                // whileHover={'hovered'}
                onClick={() => props.showVideo('https://s3-us-west-2.amazonaws.com/converterpoint-22/encodings/e96d689a68a59259b82b35348390cafa.mp4')}
            >
                {/* <Image className="lg:w-full" src='/video dummy.png' alt={'video'} width={1200} height={600} /> */}
                <div className="relative">
                    <Image className="lg:w-full" src='/video still.png' alt={'video'} width={1280} height={600} />
                    <div className="w-full h-full absolute top-0 left-0 z-60 bg-black bg-opacity-30">
                        <motion.div
                        // variants={{ hovered: { scale: .8 } }}
                        >
                            <FontAwesomeIcon icon={faPlay} className="absolute top-1/2 left-1/2 text-white w-12 h-12 lg:w-48 lg:h-48 -translate-x-1/2 -translate-y-1/2" />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
