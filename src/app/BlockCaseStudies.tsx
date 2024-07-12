"use client"

import Image from "next/image"

import { SectionPartHeader } from "./SectionPartHeader"
import { useEffect, useRef, useState } from "react"
import { BlockInner } from "./BlockInner"
import { Block } from "./Block"
import { isMobile } from "react-device-detect"

interface IBlockCaseStudies {
  title: string
}

export function BlockCaseStudies({ title }: IBlockCaseStudies) {

  const [showFrance, setShowFrance] = useState(true)
  const [showGermany, setShowGermany] = useState(false)
  const [showNetherlands, setShowNetherlands] = useState(false)

  const refGermany = useRef<HTMLDivElement>(null)
  const refOther = useRef<HTMLDivElement>(null)

  function scrollToGermany() {
    setTimeout(() => {
      if (isMobile) {
        window.scrollBy({
          top: refGermany.current ? refGermany.current.getBoundingClientRect().top - 100 : 0,
          left: 0,
          behavior: "smooth"
        })

        console.log('scrolling to germany')
      }
    }, 50);
  }

  function scrollToOther() {
    setTimeout(() => {
      if (isMobile) {
        window.scrollBy({
          top: refOther.current ? refOther.current.getBoundingClientRect().top - 100 : 0,
          left: 0,
          behavior: "smooth"
        })

        console.log('scrolling to germany')
      }
    }, 50);
  }

  return (
    <Block id="case-studies" colour="white">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image className="absolute top-0 left-0 object-cover opacity-25 h-full" src={'/caseStudiesBackground.png'} alt={'pipe work'} width={2246} height={1526} />
        <div className="absolute top-0 left-0 w-full h-full bg-light-blue opacity-60 z-10"></div>
      </div>
      <BlockInner z={20}>
        <SectionPartHeader title={title} colour={"white"} />
        <h3 className="font-roboto font-bold text-xl lg:text-2xl text-white lg:w-1/2">Prior to being introduced to the UK, Neofit®+Plus has been widely used across Europe for many years.</h3>
        <div className="flex flex-col lg:flex-row items-start lg:gap-x-12">
          <div className="flex flex-col gap-y-12 lg:gap-y-24 shrink-0 justify-start lg:justify-between lg:h-full lg:grow-1">
            <div className="cursor-pointer transition-all flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-x-4 p-2 lg:gap-x-6 lg:p-6 border border-transparent hover:border-white hover:bg-white hover:bg-opacity-15"
              style={{ border: showFrance ? 'solid white 1px' : '', background: showFrance ? 'rgba(255, 255, 255, .15' : '' }}
              onClick={() => { setShowGermany(false); setShowNetherlands(false); setShowFrance(true) }}>
              <Image src='/flag-france.png' alt={'french flag'} width={180} height={180} className='lg:w-[175px] lg:h-[175px] w-[128px]' />
              <div className="flex flex-col">
                <p className="font-roboto text-white font-bold text-4xl text-center lg:text-start">200,000+</p>
                <p className="font-roboto text-white font-bold text-2xl uppercase text-center lg:text-start">France</p>
              </div>
              {showFrance &&
                <div className={`lg:hidden flex flex-col justify-center px-2 py-4 mt-8 gap-y-4 items-center h-full`}>
                  <h3 className={`hidden font-roboto font-bold text-white text-3xl lg:text-3xl justify-self-start text-center`}>Neofit<span className="relative -top-2 lg:-top-2">&reg;</span>+Plus in France</h3>
                  <p className="font-roboto font-medium text-white text-lg lg:text-xl text-center">France alone has over 200,000 lead water services supported by Neofit®+Plus, exceeding 2,000 miles of pipe.</p>
                  <div className="flex flex-col lg:flex gap-y-4">
                    <div className="lg:w-full lg:flex items-center justify-center">
                      <table className="table-auto font-roboto text-white text-sm lg:text-2xl border-spacing-1 lg:border-spacing-1 border-separate">
                        <thead>
                          <tr>
                            <th className="bg-light-blue font-bold lg:text-base lg:p-4 font-roboto text-white">City</th>
                            <th className="bg-light-blue font-bold lg:text-base p-1 lg:p-4 font-roboto text-white"># of Services</th>
                            <th className="bg-light-blue font-bold lg:text-base lg:p-4 font-roboto text-white">Installer</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Monbéliard</td>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">450</td>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Generale des Eaux</td>
                          </tr>
                          <tr>
                            <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Dole</td>
                            <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">200</td>
                            <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">SNCTP</td>
                          </tr>
                          <tr>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Orléans/Chateaudun</td>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base ">300</td>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">SAUR</td>
                          </tr>
                          <tr>
                            <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">LaTour du Pin</td>
                            <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">300</td>
                            <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Fournier TP</td>
                          </tr>
                          <tr>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Vichy</td>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base ">200</td>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">CBSE</td>
                          </tr>
                          <tr>
                            <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Cahors</td>
                            <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">300</td>
                            <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Capraro & Dubreuilh</td>
                          </tr>
                          <tr>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Chalons-in-Champagne</td>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base ">100</td>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Nord Est TP</td>
                          </tr>
                          <tr>
                            <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Lons-le-Saunier</td>
                            <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">100</td>
                            <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Service des Eaux</td>
                          </tr>
                          <tr>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Pontarlier</td>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base ">200</td>
                            <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Sté Toubin</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* <div className="lg:w-full lg:flex lg:flex-col items-center justify-center">
                    <div className="hidden lg:flex gap-8 gap-y-4 lg:w-full items-center justify-center lg:mb-4">
                      <Image src='/france 1.png' alt={""} width={240} height={0} className="w-[250px]" />
                      <Image src='/france 2.png' alt={""} width={250} height={0} />
                    </div>
                    <div className="hidden lg:flex gap-8 gap-y-4 lg:w-full items-center justify-center">
                      <Image src='/france 3.png' alt={""} width={250} height={0} />
                      <Image src='/france 4.png' alt={""} width={250} height={0} />
                    </div>
                  </div> */}
                  </div>
                </div>}
            </div>
            <div ref={refGermany} className="cursor-pointer transition-all flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-x-4 p-6 lg:gap-x-6 lg:p-6 border border-transparent hover:border-white hover:bg-white hover:bg-opacity-15"
              style={{ border: showGermany ? 'solid white 1px' : '', background: showGermany ? 'rgba(255, 255, 255, .15' : '' }}
              onClick={() => { setShowNetherlands(false); setShowFrance(false); setShowGermany(true); scrollToGermany(); }}>
              <Image src='/flag-germany.png' alt={'french flag'} width={180} height={180} className='lg:w-[175px] lg:h-[175px] w-[128px]' />
              <div className="flex flex-col">
                <p className="font-roboto text-white font-bold text-4xl text-center lg:text-start uppercase">Since 2004</p>
                <p className="font-roboto text-white font-bold text-2xl uppercase text-center lg:text-start">Germany</p>
              </div>
              {showGermany &&
                <div className={`lg:hidden flex flex-col justify-center px-4 py-4 mt-8 gap-y-4 items-center h-full`}>
                  <h3 className={`hidden font-roboto font-bold text-white text-3xl text-center lg:text-center`}>Neofit®+Plus in Germany</h3>
                  <p className="w-full font-roboto font-medium text-white text-xl text-center lg:text-center">Local water supply Trinkwasserzweckverband Weißeritzgruppe in Freital, Germany, installed Neofit®+Plus in 1995 and is still in operation today.</p>
                </div>}
            </div>
            <div ref={refOther} className="cursor-pointer transition-all flex flex-col lg:flex-row justify-center lg:justify-start items-center gap-x-4 p-6 lg:gap-x-6 lg:p-6 border border-transparent hover:border-white hover:bg-white hover:bg-opacity-15"
              style={{ border: showNetherlands ? 'solid white 1px' : '', background: showNetherlands ? 'rgba(255, 255, 255, .15' : '' }}
              onClick={() => { setShowFrance(false); setShowGermany(false); setShowNetherlands(true); scrollToOther(); }}>
              <div className="flex flew-row items-center gap-x-2 lg:flex-col">
                <Image src='/flag-belgium-resized.png' alt={'french flag'} width={180} height={180} className='lg:w-[132px] w-[128px] h-[94px]' />
                <Image src='/flag-netherlands.png' alt={'french flag'} width={180} height={180} className='lg:w-[132px] w-[128px]' />
              </div>
              <div className="flex flex-col">
                <p className="font-roboto text-white font-bold text-4xl text-center lg:text-start uppercase">Since 1995</p>
                <p className="font-roboto text-white font-bold text-2xl uppercase text-center lg:text-start">Netherlands/Belgium</p>
              </div>
              {showNetherlands &&
                <div className={`lg:hidden flex flex-col justify-center px-4 py-4 mt-8 gap-y-4 items-center h-full`}>
                  <h3 className={`hidden font-roboto font-bold text-white text-3xl text-center lg:text-center`}>Neofit®+Plus in The Netherlands and Belgium</h3>
                  <p className="w-full font-roboto font-medium text-white text-xl text-center lg:text-center">The Netherlands and Belgium have both been using Neofit®+Plus since 1995.</p>
                </div>}
            </div>
          </div>
          <div className="hidden lg:h-full lg:flex items-start lg:flex-1">
            {showFrance &&
              <div className={`bg-white bg-opacity-15 border border-white border-solid flex flex-col justify-center gap-y-6 px-6 py-8 items-center h-full`}>
                <h3 className={`font-roboto font-bold text-white text-4xl lg:text-3xl justify-self-start`}>Neofit<span className="relative -top-2 lg:-top-2">&reg;</span>+Plus in France</h3>
                <p className="font-roboto font-medium text-white text-lg lg:text-xl text-center">France alone has over 200,000 lead water services supported by Neofit®+Plus, exceeding 2,000 miles of pipe.</p>
                <div className="flex flex-col lg:flex gap-y-4">
                  <div className="lg:w-full lg:flex items-center justify-center">
                    <table className="table-auto font-roboto text-white text-md lg:text-2xl border-spacing-1 lg:border-spacing-1 border-separate">
                      <thead>
                        <tr>
                          <th className="bg-light-blue font-bold lg:text-base lg:p-4 font-roboto text-white">City</th>
                          <th className="bg-light-blue font-bold lg:text-base lg:p-4 font-roboto text-white"># of Services</th>
                          <th className="bg-light-blue font-bold lg:text-base lg:p-4 font-roboto text-white">Installer</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Monbéliard</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">450</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Generale des Eaux</td>
                        </tr>
                        <tr>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Dole</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">200</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">SNCTP</td>
                        </tr>
                        <tr>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Orléans/Chateaudun</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base ">300</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">SAUR</td>
                        </tr>
                        <tr>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">LaTour du Pin</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">300</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Fournier TP</td>
                        </tr>
                        <tr>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Vichy</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base ">200</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">CBSE</td>
                        </tr>
                        <tr>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Cahors</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">300</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Capraro & Dubreuilh</td>
                        </tr>
                        <tr>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Chalons-in-Champagne</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base ">100</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Nord Est TP</td>
                        </tr>
                        <tr>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Lons-le-Saunier</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">100</td>
                          <td className="bg-lightest-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Service des Eaux</td>
                        </tr>
                        <tr>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Pontarlier</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base ">200</td>
                          <td className="bg-lighter-blue text-white font-roboto p-2 lg:p-4 text-sm lg:text-base">Sté Toubin</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* <div className="lg:w-full lg:flex lg:flex-col items-center justify-center">
                    <div className="hidden lg:flex gap-8 gap-y-4 lg:w-full items-center justify-center lg:mb-4">
                      <Image src='/france 1.png' alt={""} width={240} height={0} className="w-[250px]" />
                      <Image src='/france 2.png' alt={""} width={250} height={0} />
                    </div>
                    <div className="hidden lg:flex gap-8 gap-y-4 lg:w-full items-center justify-center">
                      <Image src='/france 3.png' alt={""} width={250} height={0} />
                      <Image src='/france 4.png' alt={""} width={250} height={0} />
                    </div>
                  </div> */}
                </div>
              </div>}
            {showGermany &&
              <div className={`  flex flex-col bg-white bg-opacity-15 border border-white border-solid px-16 py-12 gap-y-8 w-full h-full items-center justify-center`}>
                <h3 className={` w-3/4 font-roboto font-bold text-white text-3xl text-center lg:text-center`}>Neofit®+Plus in Germany</h3>
                <p className="w-full font-roboto font-medium text-white text-xl text-center lg:text-center">Local water supply Trinkwasserzweckverband Weißeritzgruppe in Freital, Germany, installed Neofit®+Plus in 1995 and is still in operation today.</p>
              </div>}
            {showNetherlands &&
              <div className={`$ flex flex-col bg-white bg-opacity-15 border border-white border-solid px-6 py-12 gap-y-8 w-full h-full items-center justify-end pb-24`}>
                <h3 className={` w-3/4 font-roboto font-bold text-white text-3xl text-center lg:text-center`}>Neofit®+Plus in The Netherlands and Belgium</h3>
                <p className="w-full font-roboto font-medium text-white text-xl text-center lg:text-center">The Netherlands and Belgium have both been using Neofit®+Plus since 1995.</p>
              </div>}
          </div>
        </div>
      </BlockInner>
    </Block>
  )
}