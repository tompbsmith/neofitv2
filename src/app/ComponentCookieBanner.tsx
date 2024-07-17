"use client"

import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper'
import { useState, useEffect } from 'react'

export default function ComponentCookieBanner() {

    const [cookieConsent, setCookieConsent] = useState<boolean | null>(null);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null);

        // console.log('storedcc: ' + storedCookieConsent)

        setCookieConsent(storedCookieConsent);
    }, []);

    useEffect(() => {
        if (cookieConsent != null) {
            const newValue = cookieConsent ? "granted" : "denied";

            window.gtag("consent", "update", {
                analytics_storage: newValue,
            });

            setLocalStorage("cookie_consent", cookieConsent);
        }
    }, [cookieConsent]);

    return (
        <div className={`${cookieConsent !== null ? "hidden" : "flex"}  flex-col lg:flex-row mx-auto w-full px-10 py-4 justify-between items-center gap-4 z-[99] bg-lightest-grey fixed bottom-0 border-t border-light-blue`}>
            <div className='text-center font-roboto font-normal text-grey text-sm lg:text-base'>
                We use cookies to ensure that we give you the best experience on our website.
            </div>
            <div className="flex gap-4 lg:gap-2">
                <button className="transition-all items-center justify-center flex flex-row font-roboto font-bold text-sm sm:text-base lg:text-base bg-white border-2 border-light-blue border-solid p-2 sm:p-2 lg:p-3  text-light-blue hover:bg-light-blue hover:border-2 hover:border-light-blue hover:text-white uppercase"
                    onClick={() => setCookieConsent(false)}
                >
                    Decline
                </button>
                <button className="transition-all items-center justify-center flex flex-row font-roboto font-bold text-sm sm:text-base lg:text-base bg-light-blue border-2 border-light-blue border-solid p-1 sm:p-2 lg:p-3  text-white hover:bg-white hover:border-2 hover:border-light-blue hover:text-light-blue uppercase"
                    onClick={() => setCookieConsent(true)}
                >
                    Allow Cookies
                </button>
            </div>
        </div>
    )
}