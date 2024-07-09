import { ComponentButton } from "./ComponentButton";
import { ComponentVideo } from "./ComponentVideo";
import { SectionPartHeader } from "./SectionPartHeader";

import Slider from "react-slick"

interface IBlockGallery {
    title: string,
    titleColour: string,
    bgColour: string
}

export function BlockGallery({ title, titleColour, bgColour }: IBlockGallery) {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear'
        // customPaging: function (i: any) {
        //     return (
        //         <a>
        //             <img src={`why neofit ${i + 1}.png`} />
        //         </a>
        //     );
        // },
        // className: "center",
        // centerMode: true
    };

    return (
        <div className={`w-full ${bgColour} justify-center flex`}>
            <div className="lg:w-[1280px] lg:py-16 flex flex-col gap-y-12">
                <SectionPartHeader title={title} colour={titleColour} />
                {/* <Slider {...settings} className="w-full mx-auto lg:w-3/5 lg:mx-auto my-12 lg:my-4">
                    <div className="flex items-center justify-center mx-auto w-1/2">
                        <img src={'/why neofit 1.png'} className="w-full" />
                    </div>
                    <div>
                        <img src={'/why neofit 2.png'} className="w-full" />
                    </div>
                    <div>
                        <img src={'/why neofit 3.png'} className="w-full" />
                    </div>
                </Slider> */}
            </div>
        </div>
    )
}