"use client"

import Image from "next/image"

import { SectionPartHeader } from "./SectionPartHeader"
import { useEffect, useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { Block } from "./Block"
import { BlockInner } from "./BlockInner"
import { motion } from "framer-motion"

interface IBlockContact {
    title: string
}

export function BlockContact({ title }: IBlockContact) {
    const [contactMade, setContactMade] = useState(false)
    const refContactBox = useRef<HTMLDivElement>(null)

    const [contactFormName, setContactFormName] = useState('')
    const [contactFormCompany, setContactFormCompany] = useState('')
    const [contactFormTelephone, setContactFormTelephone] = useState('')
    const [contactFormEmail, setContactFormEmail] = useState('')
    const [contactFormMessage, setContactFormMessage] = useState('')

    const [contactFormNameBlank, setContactFormNameBlank] = useState(false)
    const [contactFormCompanyBlank, setContactFormCompanyBlank] = useState(false)
    const [contactFormEmailBlank, setContactFormEmailBlank] = useState(false)
    const [contactFormEmailInvalid, setContactFormEmailInvalid] = useState(false)

    const [contactFormEmailMessage, setContactFormEmailMessage] = useState('')

    const [clickedContactForm, setClickedContactForm] = useState(false)

    useEffect(() => {
        setContactFormNameBlank(false);
        setContactFormCompanyBlank(false);
        setContactFormEmailBlank(false);
    }, [])

    useEffect(() => {
        if (contactFormName === '') {
            setContactFormNameBlank(true)

        }
        else {
            setContactFormNameBlank(false)
        }
    }, [contactFormName])

    useEffect(() => {
        if (contactFormEmail === '') {
            setContactFormEmailBlank(true)

        }
        else {
            setContactFormEmailBlank(false)
        }
    }, [contactFormEmail])

    useEffect(() => {
        if (contactFormCompany === '') {
            setContactFormCompanyBlank(true)

        }
        else {
            setContactFormCompanyBlank(false)
        }
    }, [contactFormCompany])

    //   useEffect(() => {
    //     if (refMobileNav.current) {
    //       setMobileNavTopOffset(refMobileNav.current.offsetHeight);
    //     }
    //   }, [refMobileNav])

    function emailValidation() {
        const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
        if (regEx.test(contactFormEmail)) {
            return true
        } else {
            false
        }
    }

    function doContactForm() {
        let success = true;

        if (contactFormName === '') {
            success = false;
        }

        if (contactFormCompany === '') {
            success = false;
        }

        if (contactFormEmail === '') {
            success = false;

            setContactFormEmailMessage('Email field is required.');
        } else {
            if (!emailValidation()) {
                success = false;

                console.log('invalid email');

                setContactFormEmailInvalid(true)
                setContactFormEmailMessage('Email address is not valid.')
            }
        }

        setClickedContactForm(true)

        if (success) {
            setTimeout(() => setContactMade(true), 800)
        } else {
            setShowFormNotCompleteMessage(true)
        }

    }

    const [showFormNotCompleteMessage, setShowFormNotCompleteMessage] = useState(false)


    return (
        <Block id="contact" colour="white">
            <div className="absolute top-0 left-0 w-full h-full">
                <Image className="absolute top-0 left-0 object-cover opacity-25 h-full" src={'/caseStudiesBackground.png'} alt={'pipe work'} width={2246} height={1526} />
                <div className="absolute top-0 left-0 w-full h-full bg-light-blue opacity-60 z-10"></div>
            </div>
            <BlockInner z={20}>
                <SectionPartHeader title={title} colour={"white"} />
                <div className="flex flex-col gap-y-4">
                    <h3 className="font-roboto font-bold text-xl lg:text-2xl text-white w-full">Please get in touch for more product information, advice or to request a quote for your project.</h3>
                    <h3 className="font-roboto font-bold text-xl lg:text-2xl text-white w-full">Alternatively, send us a brief message via the form below for a prompt response from one of our advisors.</h3>
                    <h3 className="font-roboto font-bold text-xl lg:text-2xl text-white w-full">We look forward to hearing from you.</h3>
                </div>

                <div ref={refContactBox} className="flex flex-col lg:min-h-[650px] lg:w-full items-center justify-center gap-y-24 y-8 lg:px-8 lg:py-20">
                    {contactMade ?
                        <div className="flex flex-col w-full items-center justify-center gap-y-4 lg:gap-y-8">
                            <p className="font-roboto text-white text-center font-semibold text-2xl lg:text-4xl">
                                Thank you, we&apos;ll be in touch soon
                            </p>
                        </div>
                        :
                        <form className="flex flex-col gap-y-12 w-full px-8 mt-8 lg:mt-0 lg:w-2/3 lg:px-8">
                            <div className="relative">
                                <div className="flex flex-col lg:flex-row w-full justify-start">
                                    <label className="font-roboto font-bold text-xl lg:text-xl text-white lg:w-1/3 lg:self-center mb-4 lg:mb-0">Name:</label>
                                    <input className="font-roboto text-white font-medium text-lg lg:text-xl border-0 border-b-2 bg-transparent border-b-white w-full lg:w-2/3 px-2 py-1 focus-visible:outline-none"
                                        onChange={(event) => { setContactFormName(event.target.value); }}
                                    />
                                </div>
                                {clickedContactForm && contactFormNameBlank && <><p className='text-white text-base lg:text-base lg:text-end mt-2'>Name field required.</p></>}
                            </div>
                            <div className='relative'>
                                <div className="flex flex-col lg:flex-row w-full justify-start">
                                    <label className="font-roboto font-bold text-xl lg:text-xl text-white lg:w-1/3 lg:self-center mb-4 lg:mb-0">Company:</label>
                                    <input className="font-roboto text-white font-medium text-2xl lg:text-xl border-0 border-b-2 bg-transparent border-b-white w-full lg:w-2/3 px-2 py-1 focus-visible:outline-none"
                                        onChange={(event) => setContactFormCompany(event.target.value)}
                                    />
                                </div>
                                {clickedContactForm && contactFormCompanyBlank && <><p className='relative text-white text-base lg:text-base lg:text-end mt-2'>Company field required.</p></>}
                            </div>
                            <div>
                                <div className="flex flex-col lg:flex-row w-full justify-start">
                                    <label className="font-roboto font-bold text-xl lg:text-xl text-white lg:w-1/3 lg:self-center mb-4 lg:mb-0">Email:</label>
                                    <input className="font-roboto text-white font-medium text-2xl lg:text-xl border-0 border-b-2 bg-transparent border-b-white w-full lg:w-2/3 px-2 py-1 focus-visible:outline-none" type="email"
                                        onChange={(event) => setContactFormEmail(event.target.value)}
                                    />
                                </div>
                                {clickedContactForm && (contactFormEmailBlank || contactFormEmailInvalid) && <><p className='text-white text-base lg:text-base lg:text-end mt-2'>{contactFormEmailMessage}</p></>}
                            </div>
                            <div className="flex flex-col lg:flex-row w-full justify-start">
                                <label className="font-roboto font-bold text-xl lg:text-xl text-white lg:w-1/3 lg:self-center mb-4 lg:mb-0">Telephone:</label>
                                <input className="font-roboto text-white font-medium text-2xl lg:text-xl border-0 border-b-2 bg-transparent border-b-white w-full lg:w-2/3 px-2 py-1 focus-visible:outline-none" type="tel"
                                    onChange={(event) => setContactFormTelephone(event.target.value)}
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row w-full justify-start">
                                <label className="font-roboto font-bold text-xl lg:text-xl text-white lg:w-1/3 lg:self-start mb-4 lg:mb-0">Message:</label>
                                <textarea className="font-roboto text-white font-normal lg:font-normal text-lg lg:text-base border-0 border-b-2 bg-transparent border-b-white w-full lg:w-2/3 lg:px-2 lg:py-1 focus-visible:outline-none h-[150px] lg:h-[150px]"
                                    onChange={(event) => setContactFormMessage(event.target.value)}
                                ></textarea>
                            </div>
                            <div className="w-full flex items-center justify-center">
                                <a className="flex w-fit transition-all items-center justify-center font-roboto font-bold text-2xl bg-white lg:border-2 border-white border-solid p-4  text-light-blue hover:bg-light-blue hover:border-2 hover:border-white hover:text-white"

                                    href='#submit'
                                    onClick={() => doContactForm()}
                                >
                                    Submit Form
                                </a>
                            </div>
                        </form>
                    }

                </div>

                <div className="mt-8 lg:mt-0 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-16">
                    <motion.a className=" items-center justify-center flex flex-row font-roboto font-bold text-2xl lg:text-3xl text-white"
                        href='tel:01670700498'
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                    >
                        <FontAwesomeIcon icon={faPhone} className="w-7 lg:mr-4" />
                        01670 700498
                    </motion.a>
                    <motion.a className=" items-center justify-center flex flex-row font-roboto font-bold text-xl lg:text-3xl text-white"
                        href='mailto:enquiries@sanivar.co.uk'
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                    >
                        <FontAwesomeIcon icon={faEnvelope} className="w-7 lg:mr-4" />
                        enquiries@sanivar.co.uk
                    </motion.a>
                </div>
            </BlockInner>
        </Block>
    )
}

function setShowFormNotCompleteMessage(arg0: boolean) {
    throw new Error("Function not implemented.")
}
