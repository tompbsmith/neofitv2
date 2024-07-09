"use client"

import Image from "next/image"

import { SectionPartHeader } from "./SectionPartHeader"
import { useState } from "react"

interface IBlockCaseStudies {
  title: string
}

export function BlockCaseStudies({ title }: IBlockCaseStudies) {

  const [showFrance, setShowFrance] = useState(true)

  return (
    <div className="relative w-full bg-white justify-center flex">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image className="absolute top-0 left-0 object-cover opacity-25 h-full" src={'/caseStudiesBackground.png'} alt={'pipe work'} width={2246} height={1526} />
        <div className="absolute top-0 left-0 w-full h-full bg-light-blue opacity-60 z-10"></div>
      </div>
      <div className="lg:w-[1280px] lg:py-16 flex flex-col gap-y-12 z-20">
        <SectionPartHeader title={title} colour={"white"} />
        <h3 className="font-roboto font-bold text-3xl text-white w-1/2">Prior to being introduced to the UK, Neofit®+Plus has been widely used across Europe for many years.</h3>
        <div className="flex items-center gap-x-24">
          <div className="flex flex-col gap-y-24 shrink-0">
            <div className="cursor-pointer transition-all flex items-center gap-x-6 border-2 border-transparent hover:border-white hover:bg-white hover:bg-opacity-15 p-6">
              <Image src='/flag-france.png' alt={'french flag'} width={180} height={180} className='lg:w-[175px] lg:h-[175px] w-[128px]' />
              <div className="flex flex-col">
                <p className="font-roboto text-white font-bold text-4xl">200,000+</p>
                <p className="font-roboto text-white font-bold text-2xl uppercase">France</p>
              </div>
            </div>
            <div className="cursor-pointer transition-all flex items-center gap-x-6 border-2 border-transparent hover:border-white hover:bg-white hover:bg-opacity-15 p-6">
              <Image src='/flag-germany.png' alt={'french flag'} width={180} height={180} className='lg:w-[175px] lg:h-[175px] w-[128px]' />
              <div className="flex flex-col">
                <p className="font-roboto text-white font-bold text-4xl uppercase">Since 2004</p>
                <p className="font-roboto text-white font-bold text-2xl uppercase">Germany</p>
              </div>
            </div>
            <div className="cursor-pointer transition-all flex items-center gap-x-6 border-2 border-transparent hover:border-white hover:bg-white hover:bg-opacity-15 p-6">
              <div className="flex flex-col">
                <Image src='/flag-belgium.png' alt={'french flag'} width={180} height={180} className='lg:w-[132px] w-[128px]' />
                <Image src='/flag-netherlands.png' alt={'french flag'} width={180} height={180} className='lg:w-[132px] w-[128px]' />
              </div>
              <div className="flex flex-col">
                <p className="font-roboto text-white font-bold text-4xl uppercase">Since 1995</p>
                <p className="font-roboto text-white font-bold text-2xl uppercase">Netherlands/Belgium</p>
              </div>
            </div>
          </div>
          <div className="">
            {showFrance &&
              <div className={`bg-white bg-opacity-15 border border-white border-solid flex flex-col justify-center gap-y-8 px-6 py-12 items-center`}>
                <h3 className={`font-roboto font-bold text-white text-4xl lg:text-4xl`}>Neofit<span className="relative -top-2 lg:-top-2">&reg;</span>+Plus in France</h3>
                <p className="font-roboto font-medium text-white text-lg lg:text-2xl text-center">France alone has over 200,000 lead water services supported by Neofit®+Plus, exceeding 2,000 miles of pipe.</p>
                <div className="flex flex-col lg:flex gap-y-4">
                  <div className="lg:w-full lg:flex items-center justify-center">
                    <table className="table-auto font-roboto text-white text-md lg:text-2xl border-spacing-1 lg:border-spacing-2 border-separate">
                      <thead>
                        <th className="bg-light-blue font-bold lg:text-xl lg:p-4 font-roboto text-white">City</th>
                        <th className="bg-light-blue font-bold lg:text-xl lg:p-4 font-roboto text-white"># of Services</th>
                        <th className="bg-light-blue font-bold lg:text-xl lg:p-4 font-roboto text-white">Installer</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Monbéliard</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">450</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Generale des Eaux</td>
                        </tr>
                        <tr>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Dole</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">200</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">SNCTP</td>
                        </tr>
                        <tr>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Orléans/Chateaudun</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl ">300</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">SAUR</td>
                        </tr>
                        <tr>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">LaTour du Pin</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">300</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Fournier TP</td>
                        </tr>
                        <tr>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Vichy</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl ">200</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">CBSE</td>
                        </tr>
                        <tr>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Cahors</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">300</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Capraro & Dubreuilh</td>
                        </tr>
                        <tr>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Chalons-in-Champagne</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl ">100</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Nord Est TP</td>
                        </tr>
                        <tr>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Lons-le-Saunier</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">100</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Service des Eaux</td>
                        </tr>
                        <tr>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Pontarlier</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl ">200</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-xl">Sté Toubin</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="lg:w-full lg:flex lg:flex-col items-center justify-center">
                    <div className="hidden lg:flex gap-8 gap-y-4 lg:w-full items-center justify-center lg:mb-4">
                      <Image src='/france 1.png' alt={""} width={240} height={0} className="w-[250px]" />
                      <Image src='/france 2.png' alt={""} width={250} height={0} />
                    </div>
                    <div className="hidden lg:flex gap-8 gap-y-4 lg:w-full items-center justify-center">
                      <Image src='/france 3.png' alt={""} width={250} height={0} />
                      <Image src='/france 4.png' alt={""} width={250} height={0} />
                    </div>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>
  )
}