import Image from "next/image";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function BlockFooter() {
    return (
        <footer className="flex flex-col max-w-full w-full lg:items-center" >
            <div className="lg:flex bg-white max-w-full w-full flex-row justify-between py-20 px-8 lg:max-w-[1280px]">
                <div className="flex ps-7 lg:ps-0">
                    <a className="" href="#top">
                        <Image src='/logo header.png' alt={"Sanivar Logo"} width={207} height={100} />
                    </a>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col justify-start items-start lg:justify-end lg:items-end lg:align-middle w-full gap-8 px-8">
                        <a className=" items-center justify-center flex flex-row font-roboto font-bold text-xl lg:text-2xl text-light-blue"
                            href='mailto:enquiries@sanivar.co.uk' target="_blank"
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="w-5 mr-3" />
                            <span className="hover:underline">enquiries@sanivar.co.uk</span>
                        </a>
                        <a className=" items-center justify-center flex flex-row font-roboto font-bold text-xl lg:text-2xl text-light-blue"
                            href='tel:01670700498' target="_blank"
                        >
                            <FontAwesomeIcon icon={faPhone} className="w-5 mr-3" />
                            <span className="hover:underline">01670 700498</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}