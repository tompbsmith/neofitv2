'use client'

import Image from "next/image";

import { ComponentButton } from "./ComponentButton";
import { ComponentVideo } from "./ComponentVideo";
import { SectionPartHeader } from "./SectionPartHeader";

import Slider from "react-slick"
import { createRef, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface IBlockGallery {
    title: string,
    titleColour: string,
    bgColour: string
    images: string[]
}

export function BlockGallery({ title, titleColour, bgColour, images }: IBlockGallery) {
    const refImages = useRef(new Array())
    refImages.current = images.map((el: any, i: number) => refImages.current[i] ?? createRef())

    const [currentX, setCurrentX] = useState(0)
    const [currentI, setCurrentI] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('none')

    const spacing = 64;

    function scrollImages(direction: any) {
        if (direction == 'none')
            return

        if (direction == 'left')
            setCurrentI(currentI > 0 ? currentI - 1 : images.length - 1)
        else
            setCurrentI(currentI < images.length - 1 ? currentI + 1 : 0)


        setScrollDirection(direction)
    }

    useEffect(() => {
        console.log('currentI: ' + currentI)

        let w = refImages.current[currentI].current.offsetWidth;

        console.log("w: " + w);

        if (currentI == 0) {
            setCurrentX(0)
        } else {
            setCurrentX((currentI * -w) - spacing)
        }
    }, [currentI])

    useEffect(() => {
        console.log("currentX " + currentX)
    }, [currentX])

    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     cssEase: 'linear'
    //     // customPaging: function (i: any) {
    //     //     return (
    //     //         <a>
    //     //             <img src={`why neofit ${i + 1}.png`} />
    //     //         </a>
    //     //     );
    //     // },
    //     // className: "center",
    //     // centerMode: true
    // };

    return (
        <div className={`w-full ${bgColour} justify-center flex`} id="gallery">
            <div className="lg:w-[1280px] lg:py-16 flex flex-col gap-y-12">
                <SectionPartHeader title={title} colour={titleColour} />
                <div className="w-full overflow-hidden">
                    <div className="flex gap-x-16 w-screen">
                        {images.map((image: string, i: number) => (
                            <motion.div className="relative w-[512px]"
                                key={"image" + i}
                                ref={refImages.current[i]}
                                initial={{ x: 0 }}
                                animate={{ x: currentX }}
                            >
                                <img
                                    className="grayscale object-cover" src={image} alt={"alt"}
                                />
                                <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
                            </motion.div>
                        ))}
                        {/* <div className="relative w-[512px]">
                            <img ref={refImages.current[1]} className="grayscale object-cover" src="/why neofit 1.png" alt="neofit alt 1" />
                            <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
                        </div>
                        <div className="relative">
                            <img ref={refImages.current[1]} className="grayscale" src="/why neofit 2.png" alt="neofit alt 1" />
                            <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
                        </div>
                        <div className="relative">
                            <img ref={refImages.current[2]} className="grayscale" src="/why neofit 3.png" alt="neofit alt 1" />
                            <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
                        </div> */}
                    </div>
                </div>
                <div className="w-full flex items-center justify-center gap-x-8">
                    <a className="cursor-pointer block rounded-full bg-light-blue w-6 h-6" onClick={() => setCurrentI(0)} style={{ opacity: currentI == 0 ? 1 : .5 }}></a>
                    <a className="cursor-pointer block rounded-full bg-light-blue w-6 h-6" onClick={() => setCurrentI(1)} style={{ opacity: currentI == 1 ? 1 : .5 }}></a>
                    <a className="cursor-pointer block rounded-full bg-light-blue w-6 h-6" onClick={() => setCurrentI(2)} style={{ opacity: currentI == 2 ? 1 : .5 }}></a>
                </div>
                {/* <Slider {...settings} className="w-full mx-auto lg:w-3/5 lg:mx-auto my-12 lg:my-4">
                    <div className="flex items-center justify-center mx-auto w-1/2">
                        <img src={'/why neofit 1.png'} className="w-full" />
                    </div>
                    <div>
                        <img src={'/why neofit 2.png'} className="w-full" />
                    </div>
                    <div>
                        <img src={'/why neofit 3.png'} className="w-full" />
                    </div>
                </Slider> */}
            </div>
        </div>
    )
}