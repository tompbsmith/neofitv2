'use client'

import { ComponentTickBlockPart, TypeTickBlockPart } from "./ComponentTickBlockPart"
import { SectionPartHeader } from "./SectionPartHeader"
import { ComponentButton } from "./ComponentButton"
import { Block } from "./Block"
import { BlockInner } from "./BlockInner"

export function BlockWhyNeofit({ title, parts }: { title: string, parts?: any }, ...props: any) {
  return (
    <Block id="why-neofit" colour="blue" backgroundImg>
      <BlockInner>
        <SectionPartHeader title={'Why Neofit®+Plus?'} colour={'white'} />
        <h3 className="font-roboto font-bold text-2xl text-white w-full">Neofit<span className="sm:text-base lg:text-lg align-super">®</span>+Plus is a minimally invasive, long-lasting solution for pipe rehabilitation and repair and can be installed in steel, copper, plastic and lead pipes in lengths up to 300ft. The smooth bore and thin-wall pipe of Neofit®+Plus provides the same or increased flow capacity and often only a single small access pit is required for installation.</h3>
        <div>
          <h4 className="font-roboto font-medium text-2xl text-white w-full mb-6">Lead pipe refurbishment</h4>
          <p className="font-roboto font-medium text-xl text-white">Neofit®+Plus is a reliable solution for Lead Replacement Programmes, forming a continuous barrier between existing pipes and potable water. The presence of lead in drinking water can pose a significant threat to consumers which is where the trenchless and minimally invasive solution can provide significant support in preserving the flow of safe, clean water.</p>
        </div>
        <div>
          <h4 className="font-roboto font-medium text-2xl text-white w-full mb-6">Customer supply pipes</h4>
          <p className="font-roboto font-medium text-xl text-white">The Neofit®+Plus solution is also strongly supported in the repair and maintenance of consumer supply pipes, by helping to prevent leakage and protect the supply of potable water. The pipe is made from a lightweight, strong plastic, widely used for food and beverage packaging, along with medical and pharmaceutical applications as it does not contain bisphenol-A (BPA) or phthalates (plasticisers). It is made from a stable, inert material that does not react with food or beverages, is resistant to attack by micro-organisms and will not biologically degrade.</p>
        </div>
        <div className="flex flex-col gap-y-24 my-12">
          <ComponentTickBlockPart number={0} title={"Versatile use"} text={"Suitable for steel, copper, plastic, and lead pipes, with lengths available up to 300ft, it ensures safety and efficiency."} imageUrls={['/whyneofit1.png']} imageAlts={['pipe']} table={undefined} type={TypeTickBlockPart.singleImage} />
          <ComponentTickBlockPart number={1} title={"Improved flow"} text={"The smooth bore and thin-wall design helps to maintain and even improve flow capacity."} imageUrls={['/whyneofit9-2.png']} imageAlts={['pipe']} table={undefined} type={TypeTickBlockPart.singleImage} />
          {/* <ComponentTickBlockPart title={"Minimally disruptive"} text={"Neofit®+Plus typically only requires a single small access pit, minimising the need for excessive and disruptive works and can be connected to existing infrastructure including internal or external stop taps."} type={TypeTickBlockPart.table} imageUrls={[]} imageAlts={[]} table={undefined} /> */}
          <ComponentTickBlockPart number={2} title={"Minimally disruptive"} text={"Neofit®+Plus typically only requires a single small access pit, minimising the need for excessive and disruptive works and can be connected to existing infrastructure including internal or external stop taps."} type={TypeTickBlockPart.singleImage} imageUrls={['/whyneofit2.png']} imageAlts={['neofit pipes']} table={undefined} />
          <ComponentTickBlockPart number={3} title={"Rapid installation"} text={"With the rapid Neofit®+Plus installation process, multiple installations can be completed in a day, allowing for return to service in as little as two to three hours."} imageUrls={['/whyneofit8.png']} imageAlts={['pipe in ground', 'pipe', 'open pipe', 'ground']} table={undefined} type={TypeTickBlockPart.singleImage} />
          <ComponentTickBlockPart number={4} title={"Cost efficient"} text={"Neofit®+Plus can also provide significant cost savings of up to 85% when used in place of traditional dig-and-replace methods."} imageUrls={['/whyneofit7.png']} imageAlts={['box']} table={undefined} type={TypeTickBlockPart.singleImage} />
        </div>
        <div className="flex gap-x-8 justify-center">
          <ComponentButton type='white' text='Watch Demo' icon='demo' href="#demo" />
          <ComponentButton type='white' text='Contact' icon='email' href="#contact" />
        </div>
      </BlockInner>
    </Block>
  )
}