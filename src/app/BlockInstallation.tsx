import { ComponentButton } from "./ComponentButton"
import { ComponentInstallationPart } from "./ComponentInstallationPart"
import { SectionPartHeader } from "./SectionPartHeader"

interface IBlockInstallation {
    title: string
}

export function BlockInstallation({ title }: IBlockInstallation) {
    return (
        <div className="w-full bg-white justify-center flex">
            <div className="lg:w-[1280px] lg:py-16 flex flex-col gap-y-12">
                <SectionPartHeader title={"Installation"} colour={"blue"} />
                <h3 className="font-roboto font-bold text-3xl text-light-blue w-full">The Neofit<span className="sm:text-base lg:text-lg align-super">®</span>+Plus System is a trusted solution for minimal disruption during installation, making it particularly suitable for pipelines running alongside other infrastructure such as under road crossings, in congested ground with other utilities and under residential dwellings.</h3>
                <h3 className="font-roboto font-bold text-3xl text-light-blue w-full">Neofit<span className="sm:text-base lg:text-lg align-super">®</span>+Plus can effectively rehabilitate old deteriorating pipes and lines with leaching contaminants, such as lead and copper pipe, acting as a barrier to protect potable water.</h3>
                <div className="flex flex-col gap-y-12">
                    <ComponentInstallationPart number={1} title={"Preparation"} text={"The water is shut off and the pipe is disconnected at the water main and the water meter or other convenient connection point within the house."} imageUrl={"/installation1.png"} imageAlt={"Installation Image #1"} />
                    <ComponentInstallationPart number={2} title={"Cleaning"} text={"Air is blown through the lead pipe to remove the remaining water and the sediments which may be present in the lead pipe. Lead pipes do in general not develop hard encrustation, so in most cases mechanical cleaning is not needed, other than using a brush when there is some sediment at the inside which cannot be blown away. A small pig can also be blown through with compressed air or with a draw cord."} imageUrl={"/installation2.png"} imageAlt={"Installation Image #2"} />
                    <ComponentInstallationPart number={3} title={"Insertion"} text={"In this step, the small diameter NEOFIT liner is pushed or pulled into the host pipe. To this end it might be necessary to have a line inside to the host pipe to be able to pull the liner through the host pipe. This line can be inserted when blowing air through the pipe. The fact that the NEOFIT liner is rather flexible before it is expanded helps it navigate around bends etc."} imageUrl={"/installation3.png"} imageAlt={"Installation Image #3"} />
                    <ComponentInstallationPart number={4} title={"Expansion"} text={"After the liner is inserted into the host pipe, the liner is connected to the circulation hoses and via the pressure unit, which regulates the heating of the liner by flushing hot water though and will automatically expand the pipe and cool it down afterwards."} imageUrl={"/installation4.png"} imageAlt={"Installation Image #4"} />
                    <ComponentInstallationPart number={5} title={"Reconnecting"} text={"Then finally the lined host pipe can be reconnected to the water meter or other connection point in the house and to the water main, with Neofit fittings that attach to standard plumbing fittings. Reconnection is done in such a way that no water is in contact with the lead pipe and cannot penetrate between the liner and host pipe. In practice this process is quick, mainly automated and does not require a lot of preparation and time to complete. Depending on the layout at the site, the length of the host pipe etc, the whole process typically takes between 1 and 3 hours. In general the time that the customer is disconnected from the water main is not more than 45 minutes to 1 hour. The water main and the water meter or other convenient connection point within the house."} imageUrl={"/installation5.png"} imageAlt={"Installation Image #5"} />
                </div>
                <div className="flex gap-x-8 justify-center">
                    <ComponentButton type='blue' text='Watch Demo' icon='demo' href="#why-neofit" />
                    <ComponentButton type='blue' text='Contact' icon='email' href="#why-neofit" />
                </div>
            </div>
        </div>
    )
}