import Image from "next/image";

import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import parse from "html-react-parser"

export interface ITickBlockPart {
  title: string,
  text: string,
  imageUrls: string[],
  imageAlts: string[],
  table: any,
  type: TypeTickBlockPart
}

export enum TypeTickBlockPart {
  singleImage,
  table,
  multipleImages
}

export function ComponentTickBlockPart({ title, text, imageUrls, imageAlts, table, type }: ITickBlockPart) {

  if (text.includes('®')) {
    text = text.replace('®', '<span className="relative -top-2 lg:-top-2">&reg;</span>');
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <FontAwesomeIcon icon={faCircleCheck} className=" text-white w-12 h-12 lg:w-24 lg:h-24" />
      <div className="flex flex-col w-1/2 gap-y-9 justify-center grow-1">
        <p className="font-roboto text-white text-4xl font-bold">{title}</p>
        <p className="font-roboto text-white text-2xl font-semibold">{parse(text)}</p>
      </div>
      <div className="">
        {type == TypeTickBlockPart.singleImage &&
          (
            <div className="relative">
              <Image className="grayscale max-w-[420px]" src={imageUrls[0]} alt={imageAlts[0]} width={640} height={480} />
              <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
            </div>
          )
        }
        {type == TypeTickBlockPart.table &&
          table
        }
        {type == TypeTickBlockPart.multipleImages &&
          (
            <div className="grid grid-cols-2 grid-rows-2 gap-2">
              {imageUrls.map((url, i) => {
                return (
                  <div key={"gridImage" + 1} className="relative">
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
    </div>
  )
}