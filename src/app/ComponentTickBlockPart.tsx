'use client'

import Image from "next/image";

import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import parse from "html-react-parser"
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";

export interface ITickBlockPart {
  title: string,
  text: string,
  imageUrls: string[],
  imageAlts: string[],
  table: any,
  type: TypeTickBlockPart,
  number: number
}

export enum TypeTickBlockPart {
  singleImage,
  table,
  multipleImages
}

export function ComponentTickBlockPart({ title, text, imageUrls, imageAlts, table, type, number }: ITickBlockPart) {

  if (text.includes('®')) {
    text = text.replace('®', '<span className="relative -top-2 lg:-top-2">&reg;</span>');
  }

  return (
    isMobile && <motion.div className="w-full flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-4"
      initial={{
        // x: 50 * (number % 2 ? 1 : -1),
        opacity: 0
      }}
      whileInView={{
        // x: 0,
        opacity: 1,
        transition: {
          delay: .4,
          duration: .5
        }
      }}
      viewport={{ once: true }}
    >
      <FontAwesomeIcon icon={faCircleCheck} className="hidden lg:inherit text-white w-12 h-12 lg:w-24 lg:h-24 mr-4" />
      <div className="lg:hidden flex gap-x-4 items-center">
        <FontAwesomeIcon icon={faCircleCheck} className="hidden text-white w-12 h-12 lg:w-24 lg:h-24 mr-4" />
        <div className="flex flex-col lg:w-1/2 gap-y-2 lg:gap-y-9 justify-center grow-1">
          <p className="font-roboto text-white text-3xl lg:text-3xl font-bold">{title}</p>
          <p className="font-roboto text-white text-lg lg:text-xl font-semibold">{parse(text)}</p>
        </div>
      </div>
      <div className="hidden lg:flex flex-col lg:w-1/2 gap-y-2 lg:gap-y-9 justify-center grow-1">
        <p className="font-roboto text-white text-3xl lg:text-3xl font-bold">{title}</p>
        <p className="font-roboto text-white text-lg lg:text-xl font-semibold">{parse(text)}</p>
      </div>
      <div className="">
        {type == TypeTickBlockPart.singleImage &&
          (
            <div className="relative">
              <Image className="grayscale lg:max-w-[420px]" src={imageUrls[0]} alt={imageAlts[0]} width={640} height={480} />
              <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
            </div>
          )
        }
        {type == TypeTickBlockPart.table &&
          <div className="flex lg:w-full items-center justify-center">
            <table className="table-auto font-roboto text-grey text-md lg:text-lg border-spacing-1 border-separate bg-white">
              <thead>
                <tr>
                  <th className="bg-lightest-grey text-center text-base" colSpan={2} rowSpan={2}>Life-cycle<br />stage</th>
                  <th className="bg-lightest-grey text-center py-3 px-3 text-base" colSpan={2}>GHG Emissions <br /><span className="text-sm">(kg CO2eq/15m of replaced piping)</span></th>
                </tr>
                <tr>
                  <th className="bg-lightest-grey text-center py-3 text-base">Neofit<span className="relative -top-2 text-xs lg:text-base">®</span>+Plus</th>
                  <th className="bg-lightest-grey text-center text-base">Open-cut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base" colSpan={2}>Manufacturing</td>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base">Neofit<span className="relative -top-2 text-xs lg:text-base">®</span>+Plus</td>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base">Open-cut</td>
                </tr>
                <tr>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base" colSpan={2}>Upstream Transport</td>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base">11</td>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base">Life-113 stage</td>
                </tr>
                <tr>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base" colSpan={2}>Installation</td>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base">0.08</td>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base">0.64</td>
                </tr>
                <tr>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base" colSpan={2}>End-of-life</td>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base">0.10</td>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base">0.09</td>
                </tr>
                <tr>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base font-bold" colSpan={2}>Total</td>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base font-bold">164</td>
                  <td className="bg-table-light-grey p-2 lg:p-3 text-sm lg:text-base font-bold">1334</td>
                </tr>
              </tbody>
            </table>
          </div>
        }
        {type == TypeTickBlockPart.multipleImages &&
          (
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              {imageUrls.map((url, i) => {
                return (
                  <div key={"gridImage" + i} className="relative">
                    <Image className="grayscale max-w-[210px]" src={imageUrls[i]} alt={imageAlts[i]} width={320} height={240} />
                    <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
                  </div>
                );
              }
              )}
            </div>
          )
        }
      </div>
    </motion.div>
  )
}