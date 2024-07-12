'use client'

import Image from "next/image";

import parse from "html-react-parser"
import { motion } from "framer-motion";

interface IComponentInstallationPart {
    number: number,
    title: string,
    text: string,
    imageUrl: string,
    imageAlt: string
}

export function ComponentInstallationPart({ number, title, text, imageUrl, imageAlt }: IComponentInstallationPart) {

    if (text.includes('®')) {
        text = text.replace('®', '<span className="relative -top-2 lg:-top-2">&reg;</span>');
    }

    return (
        <motion.div className="flex flex-col lg:flex-row justify-between lg:py-6 gap-y-4 lg:gap-x-12 items-start"
            initial={{
                y: -50,
                opacity: 0
            }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    delay: .4,
                    duration: .5
                }
            }}
            viewport={{ once: true }}>
            <div className="flex flex-row lg:flex-col items-center gap-x-4">
                <div className="flex items-center justify-center p-4 bg-light-blue rounded-full w-16 h-16 shrink-0 self-start">
                    <p className="font-roboto text-4xl font-bold text-white">{number}</p>
                </div>
                <h4 className="lg:hidden font-roboto text-4xl font-bold text-light-blue">{title}</h4>
            </div>
            <div className="order-2 flex flex-col gap-y-2 lg:gap-y-3 lg:grow lg:basis-2/3">
                <h4 className="hidden lg:inherit font-roboto text-4xl font-bold text-light-blue">{title}</h4>
                <p className="paragraphSmaller">{parse(text)}</p>
            </div>
            <Image className="lg:w-[480px] lg:h-[272px] self-center" src={imageUrl} alt={imageAlt} width={640} height={360} />
        </motion.div>
    )
}