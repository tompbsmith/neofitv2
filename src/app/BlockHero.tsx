import Image from "next/image";
import { ComponentButton } from "./ComponentButton";

export function BlockHero(props: any) {
  return (
    <div className="w-full flex flex-col lg:flex-row h-full space-0 gap-0 p-0 m-0">
      <div className="basis-1/2 flex flex-col justify-center bg-light-blue bg-large-background gap-y-8 lg:px-16 lg:pt-12 lg:pb-24 flex-1">
        <Image src="/neofit logo.png" alt={"neofit logo"} width={128} height={128} />
        <h1 className="font-roboto text-white text-4xl lg:text-6xl font-bold text-balance w-full">Neofit<span className="lg:text-3xl align-super">&reg;</span>+Plus Expandable Pressure Pipe <span className="text-2xl">(EPP)</span></h1>
        <h2 className="font-roboto text-white lg:text-3xl font-semibold text-balance">New to UK markets, the Neofit<span className="lg:text-2xl align-super">&reg;</span>+Plus<span className="text-xl align-super">&reg;</span> Expandable Pressure Pipe (EPP) is provided
          exclusively by <a className="underline" href='https://www.sanivar.co.uk' target='blank'>Sanivar UK</a>.</h2>
        <div className="flex gap-x-8">
          <ComponentButton type='white' text='Watch Demo' icon='demo' href="#demo" />
          <ComponentButton type='white' text='Why Neofit' icon='drop' href="#why-neofit" />
        </div>
      </div>
      <div className="basis-1/2 relative flex-1"> {/* why does adding h-full here make it less tall? */}
        <Image className="w-full h-full object-cover grayscale" src="/hero image 3-2.png" alt={"water"} width={960} height={960} />
        <div className="absolute top-0 left-0 w-full h-full opacity-40 bg-light-blue z-10"></div>
      </div>
    </div>
  )
}