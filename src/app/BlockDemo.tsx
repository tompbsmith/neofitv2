import { Block } from "./Block";
import { BlockInner } from "./BlockInner";
import { ComponentButton } from "./ComponentButton";
import { ComponentVideo } from "./ComponentVideo";
import { SectionPartHeader } from "./SectionPartHeader";

export function BlockDemo(props: any) {
    return (
        <Block id={"demo"} colour={"grey"}>
            <BlockInner>
                <SectionPartHeader title={'Demo'} colour={"blue"} />
                <h3 className="font-roboto font-bold text-2xl text-light-blue w-full">Watch how Neofit<span className="sm:text-base lg:text-lg relative -top-2">®</span>+Plus is easily installed beneath infrastructure with minimal disruption.</h3>
                <ComponentVideo />
                <div className="flex gap-x-8 justify-center">
                    <ComponentButton type='blue' text='Why Neofit' icon='drop' href="#why-neofit" />
                </div>
            </BlockInner>
        </Block>
    )
}