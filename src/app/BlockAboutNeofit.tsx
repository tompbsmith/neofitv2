import Image from "next/image";
import { SectionPartHeader } from "./SectionPartHeader";
import { ComponentButton } from "./ComponentButton";
import { Block } from "./Block";
import { BlockInner } from "./BlockInner";

export function BlockAboutNeofit(props: any) {
    return (
        <Block id="about" colour="white">
            <BlockInner>
                <SectionPartHeader title={"About Neofit"} colour={"blue"} />
                <div className="flex flex-col lg:flex-row justify-between items-start gap-y-8 lg:gap-y-0">
                    <div className="order-2 lg:order-1 basis-1/2 flex flex-col justify-between h-full">
                        <p className="paragraphSmaller">Neofit<span className="text-base lg:text-base align-super">&reg;</span>+Plus is a non-invasive, advanced pipe technology for the repair of underground water services with inside diameters of 1/2&quot; to 2&quot;.</p>
                        <p className="paragraphSmaller">Made of Virgin PET (Polyethylene Terephthalate), this innovative pipeline rehabilitation solution helps maintain the existing service pipe by creating a barrier inside and avoiding unnecessary replacement and extended disruption.</p>
                        <p className="paragraphSmaller">Offering a trenchless, minimally disruptive and environmentally friendly way to protect essential water pipelines, Neofit<span className="text-xl lg:text-base align-super">&reg;</span>+Plus has been used successfully across Europe since 1995.</p>
                        <p className="paragraphSmaller">Neofit<span className="text-base lg:text-base align-super">&reg;</span>+Plus is particularly effective in cases of lead pipe rehabilitation and the maintenance of consumer supply pipes due to the barrier it forms between the pipeline and potable water.</p>
                        <p className="paragraphSmaller">The product is durable and stays resistant to leaching, with structural material that has been scientifically evaluated for longevity of 100+ years. When tested in line with the American Water Work Association&apos;s field guide for the hydrostatic testing of water service lines, results showed 0% lead in the water post installation.</p>
                        <p className="paragraphSmaller">Neofit<span className="text-base lg:text-base align-super">&reg;</span>+Plus is part of Sanivar UK&apos;s range of trenchless rehabilitation solutions.</p>
                        <div className="flex gap-x-8 justify-center lg:justify-start mt-12">
                            <ComponentButton type='blue' text='Sanivar UK' icon='web' href="https://www.sanivar.co.uk/" targetBlank />
                            <ComponentButton type='blue' text='Contact' icon='email' href="#contact" />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex lg:flex-col justify-between items-start gap-y-12">
                        <div className="hidden lg:block relative lg:max-w-96 lg:min-w-96">
                            <Image className="grayscale w-full" src="/about 1 final.png" alt={"woman drinking a glass of water"} width={640} height={320} />
                            <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
                        </div>
                        <div className="hidden lg:block relative lg:max-w-96 lg:min-w-96">
                            <Image className="grayscale" src="/about 2 final.png" alt={"neofit pipes"} width={640} height={320} />
                            <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
                        </div>
                        <div className=" lg:block relative lg:max-w-96 lg:min-w-96">
                            <Image className="grayscale" src="/about 3 final.png" alt={"plumber working under sink"} width={640} height={320} />
                            <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
                        </div>
                    </div>
                </div>
            </BlockInner>
        </Block>
    );
}