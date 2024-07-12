'use client'

import { faBars, faClose, faEnvelope, faPhone, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Image from "next/image";
// import { Counter } from "./Counter";

export function MobileNav2(props: any) {
    const [showBurger, setShowBurger] = useState(false);

    return (
        <>
            <header ref={props.topRef} className="fixed flex flex-col lg:hidden m-0 bg-white w-full z-[99]">
                <div className="bg-white flex gap-y-8 py-4 px-6 cursor-pointer w-full flex-row justify-between items-center border-b-2 border-white mt-2">
                    <a href='#top'><Image src='/logo header.png' alt={'logo'} width={128} height={64} /></a>
                    <a className="cursor-pointer text-4xl" onClick={() => setShowBurger(true)}>
                        <FontAwesomeIcon icon={faBars} className="text-light-blue" />
                    </a>
                </div>
            </header>
            {/* <nav className="fixed w-screen flex flex-col bg-light-blue bg-large-background lg:hidden gap-y-12 justify-start pt-48 item-center px-4 text-center z-50 h-screen top-0 transition-all duration-700"
                style={{ left: showBurger ? '0%' : '100%' }}
            >
                <a className=" font-roboto font-bold text-white text-2xl uppercase" href='#about' onClick={() => setShowBurger(false)}>About</a>
                <a className="font-roboto font-bold text-white text-2xl uppercase" href='#demo' onClick={() => setShowBurger(false)}>Demo</a>
                <a className="font-roboto font-bold text-white text-2xl uppercase" href='#why-neofit' onClick={() => setShowBurger(false)}>Why Neofit?</a>
                <a className="font-roboto font-bold text-white text-2xl uppercase" href='#contact' onClick={() => setShowBurger(false)}>Contact</a>
                <a className="text-4xl text-white absolute top-8 left-8 cursor-pointer" onClick={() => { setShowBurger(false) }}><FontAwesomeIcon icon={faClose} /></a>
            </nav> */}
            <div className="fixed w-full flex flex-col bg-light-blue bg-large-background lg:hidden gap-y-12 justify-start pt-48 item-center px-4 text-center z-50 h-full top-0 transition-all duration-700"
                style={{ left: showBurger ? '0%' : '100%' }}>
                <a className="absolute top-24 right-4 text-white text-4xl"
                    onClick={() => setShowBurger(false)}>
                    <FontAwesomeIcon icon={faClose} className="w-12" />
                </a>
                <a className=" font-roboto font-bold text-white text-3xl uppercase" href='#about' onClick={() => setShowBurger(false)}>About</a>
                <a className="font-roboto font-bold text-white text-3xl uppercase" href='#demo' onClick={() => setShowBurger(false)}>Demo</a>
                <a className="font-roboto font-bold text-white text-3xl uppercase" href='#why-neofit' onClick={() => setShowBurger(false)}>Why Neofit?</a>
                <a className="font-roboto font-bold text-white text-3xl uppercase" href='#contact' onClick={() => setShowBurger(false)}>Contact</a>
                <a className="text-4xl text-white absolute top-8 left-8 cursor-pointer" onClick={() => { setShowBurger(false) }}><FontAwesomeIcon icon={faClose} /></a>
            </div>
        </>
    );
}