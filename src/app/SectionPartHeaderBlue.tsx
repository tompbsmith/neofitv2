"use client"

import Image from "next/image";
import { motion } from "framer-motion";

import parse from "html-react-parser"

export function SectionPartHeaderBlue({ title }: any) {

    if (title.includes('®')) {
        title = title.replace('®', '<span className="relative -top-2 lg:-top-2">&reg;</span>');
    }

    return (
        <motion.div className={`relative bg-light-blue flex items-center px-4 lg:px-8 lg:py-12  h-[80px] w-fit lg:min-h-[115px] lg:max-h-[115px]`}
            initial={{ x: -50 }}
            whileInView={{
                x: 0,
                transition: {
                    delay: .2,
                }
            }}
        >
            <h2 className={`sectionPartHeaderBlueSmaller`}>{parse(title)}</h2>
            <Image className="absolute h-[80px] w-[78px] -right-[77px] lg:h-[115px] lg:w-[112px] lg:-right-[110px] z-10" height={229} width={225}
                src={'/title end blue.png'}
                alt={""} />
        </motion.div>
    );
}