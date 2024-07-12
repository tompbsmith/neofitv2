'use client'

import { ComponentButton } from "./ComponentButton";

import Image from "next/image";
import { MobileNav2 } from "./MobileNav2";
import { useEffect, useState, useRef } from "react";

export function BlockNavigation(props: any) {
    const refMobileNav = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (refMobileNav.current) {
            props.setTopOffset(refMobileNav.current.offsetHeight);
            console.log("mobileHeight: " + refMobileNav.current.offsetHeight)
        }
    }, [refMobileNav])

    return (
        <>
            <header className="hidden lg:flex flex-col max-w-full w-full lg:items-center" >
                <div className="lg:flex bg-white max-w-full w-full flex-row justify-between py-6 px-8 lg:max-w-[1280px]">
                    <div className="flex gap-y-8 py-4 px-6">
                        <a href="#top">
                            <Image src='/logo header.png' alt={"Sanivar Logo"} width={207} height={100} />
                        </a>
                    </div>
                    <div className="hidden lg:flex justify-between">
                        <nav className="flex flex-row justify-end items-center align-middle w-full gap-12">
                            <a className="headerLinkSmaller" href='#about'>About</a>
                            <a className="headerLinkSmaller" href='#demo'>Demo</a>
                            <a className="headerLinkSmaller" href='#why-neofit'>Why Neofit<span className="relative -top-2">&reg;</span>+Plus?</a>
                            <ComponentButton type='blue' text='Contact' icon='email' href="#contact" />
                        </nav>
                    </div>
                </div>
                <div className="hidden lg:flex items-center w-full justify-center border-light-blue border-t-2">
                    <div className="lg:w-[1280px] px-8 py-6">
                        <nav className="flex flex-row gap-8 justify-end items-center align-middle w-full">
                            <a className="headerLinkSecondarySmaller" href='#case-studies'>Case Studies</a>
                            <a className="headerLinkSecondarySmaller" href='#installation'>Installation</a>
                            <a className="headerLinkSecondarySmaller" href='#gallery'>Gallery</a>
                        </nav>
                    </div>
                </div>
            </header >

            <MobileNav2 setTopOffset={props.setTopOffset} topRef={refMobileNav} />
        </>
    )
}