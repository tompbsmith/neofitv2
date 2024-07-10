import { ReactNode } from "react"
import { ComponentTickBlockPart, TypeTickBlockPart } from "./ComponentTickBlockPart"
import { SectionPartHeader } from "./SectionPartHeader"
import { ComponentButton } from "./ComponentButton"

export function BlockWhyNeofit({ title, parts }: { title: string, parts?: any }, ...props: any) {
  return (
    <div className="w-full bg-light-blue bg-large-background bg-repeat bg-cover justify-center flex" id="why-neofit">
      <div className="lg:w-[1280px] lg:py-16 flex flex-col gap-y-12">
        <SectionPartHeader title={'Why Neofit®+Plus?'} colour={'white'} />
        <h3 className="font-roboto font-bold text-2xl text-white w-full">Neofit<span className="sm:text-base lg:text-lg align-super">®</span>+Plus is a minimally invasive, long-lasting solution for pipe rehabilitation and repair and can be installed in steel, copper, plastic and lead pipes in lengths up to 300ft. The smooth bore and thin-wall pipe of Neofit®+Plus provides the same or increased flow capacity and often only a single small access pit is required for installation.</h3>
        <div>
          <h4 className="font-roboto font-bold text-3xl text-white w-full"></h4>
          <p className="font-roboto font-bold text-2xl"></p>
        </div>
        <div className="flex flex-col gap-y-24">
          <ComponentTickBlockPart title={"Versatile use"} text={"Suitable for steel, copper, plastic, and lead pipes, with lengths available up to 300ft, it ensures safety and efficiency."} imageUrls={['/whyneofit1.png']} imageAlts={['pipe']} table={undefined} type={TypeTickBlockPart.singleImage} />
          <ComponentTickBlockPart title={"Improved flow"} text={"The smooth bore and thin-wall design helps to maintain and even improve flow capacity."} imageUrls={['/whyneofit2.png']} imageAlts={['pipe']} table={undefined} type={TypeTickBlockPart.singleImage} />
          <ComponentTickBlockPart title={"Minimally disruptive"} text={"Neofit®+Plus typically only requires a single small access pit, minimising the need for excessive and disruptive works and can be connected to existing infrastructure including internal or external stop taps."} imageUrls={['/whyneofit2.png']} imageAlts={['pipe']} table={undefined} type={TypeTickBlockPart.singleImage} />
          <ComponentTickBlockPart title={"Rapid installation"} text={"With the rapid Neofit®+Plus installation process, multiple installations can be completed in a day, allowing for return to service in as little as two to three hours."} imageUrls={['/whyneofit3.png', '/whyneofit4.png', '/whyneofit5.png', '/whyneofit6.png']} imageAlts={['pipe in ground', 'pipe', 'open pipe', 'ground']} table={undefined} type={TypeTickBlockPart.multipleImages} />
          <ComponentTickBlockPart title={"Cost efficient"} text={"Neofit®+Plus can also provide significant cost savings of up to 85% when used in place of traditional dig-and-replace methods."} imageUrls={['/whyneofit7.png']} imageAlts={['box']} table={undefined} type={TypeTickBlockPart.singleImage} />
        </div>
        <div className="flex gap-x-8 justify-center">
          <ComponentButton type='white' text='Watch Demo' icon='demo' href="#why-neofit" />
          <ComponentButton type='white' text='Contact' icon='email' href="#why-neofit" />
        </div>
      </div>
    </div>
  )
}