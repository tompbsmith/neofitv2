import Image from "next/image";
import { SectionPartHeader } from "./SectionPartHeader";
import { ComponentButton } from "./ComponentButton";

export function BlockAboutNeofit(props: any) {
    return (
        <div className="w-full bg-white justify-center flex" id="about">
            <div className="lg:w-[1280px] lg:py-16">
                <SectionPartHeader title={"About Neofit"} colour={"blue"} />
                <div className="flex justify-between py-12 items-start">
                    <div className="basis-1/2 flex flex-col justify-between h-full">
                        <p className="paragraphSmaller">Neofit<span className="text-base lg:text-base align-super">&reg;</span>+Plus is a non-invasive, advanced pipe technology for the repair of underground water services with inside diameters of 1/2&quot; to 2&quot;.</p>
                        <p className="paragraphSmaller">Made of Virgin PET (Polyethylene Terephthalate), this innovative pipeline rehabilitation solution helps maintain the existing service pipe by creating a barrier inside and avoiding unnecessary replacement and extended disruption.</p>
                        <p className="paragraphSmaller">Offering a trenchless, minimally disruptive and environmentally friendly way to protect essential water pipelines, Neofit<span className="text-xl lg:text-base align-super">&reg;</span>+Plus has been used successfully across Europe since 1995.</p>
                        <p className="paragraphSmaller">Neofit<span className="text-base lg:text-base align-super">&reg;</span>+Plus is particularly effective in cases of lead pipe rehabilitation and the maintenance of consumer supply pipes due to the barrier it forms between the pipeline and potable water.</p>
                        <p className="paragraphSmaller">The product is durable and stays resistant to leaching, with structural material that has been scientifically evaluated for longevity of 100+ years. When tested in line with the American Water Work Association&apos;s field guide for the hydrostatic testing of water service lines, results showed 0% lead in the water post installation.</p>
                        <p className="paragraphSmaller">Neofit<span className="text-base lg:text-base align-super">&reg;</span>+Plus is part of Sanivar UK&apos;s range of trenchless rehabilitation solutions.</p>
                        <div className="flex gap-x-8 justify-start mt-12">
                            <ComponentButton type='blue' text='Watch Demo' icon='demo' href="#why-neofit" />
                            <ComponentButton type='blue' text='Contact' icon='email' href="#why-neofit" />
                        </div>
                    </div>
                    <div className="flex lg:flex-col justify-between items-center gap-y-12 basis-1/2">
                        <div className="relative lg:max-w-96">
                            <Image className="grayscale" src="/about2-2.png" alt={"pipe"} width={640} height={320} />
                            <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
                        </div>
                        <div className="relative lg:max-w-96">
                            <Image className="grayscale" src="/about4-2.png" alt={"pipe"} width={640} height={320} />
                            <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
                        </div>
                        <div className="relative lg:max-w-96">
                            <Image className="grayscale" src="/about3.png" alt={"pipe"} width={640} height={320} />
                            <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}