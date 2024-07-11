import { ComponentButton } from "./ComponentButton";
import { ComponentVideo } from "./ComponentVideo";
import { SectionPartHeader } from "./SectionPartHeader";

export function BlockDemo(props: any) {
    return (
        <div className="w-full bg-lightest-grey justify-center flex" id="demo">
            <div className="lg:w-[1080px] lg:py-16 flex flex-col gap-y-12">
                <SectionPartHeader title={'Demo'} colour={"blue"} />
                <h3 className="font-roboto font-bold text-2xl text-light-blue w-full">Watch how Neofit<span className="sm:text-base lg:text-lg relative -top-2">®</span>+Plus is easily installed beneath infrastructure with minimal disruption.</h3>
                <ComponentVideo />
                <div className="flex gap-x-8 justify-center">
                    <ComponentButton type='blue' text='Why Neofit' icon='drop' href="#why-neofit" />
                </div>
            </div>
        </div>
    )
}