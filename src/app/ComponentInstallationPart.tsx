import Image from "next/image";

import parse from "html-react-parser"

interface IComponentInstallationPart {
    number: number,
    title: string,
    text: string,
    imageUrl: string,
    imageAlt: string
}

export function ComponentInstallationPart({ number, title, text, imageUrl, imageAlt }: IComponentInstallationPart) {

    if (text.includes('®')) {
        text = text.replace('®', '<span className="relative -top-2 lg:-top-2">&reg;</span>');
    }

    return (
        <div className="flex justify-between py-6 gap-x-12">
            <div className="flex items-center justify-center p-4 bg-light-blue rounded-full w-16 h-16 shrink-0">
                <p className="font-roboto text-4xl font-bold text-white">{number}</p>
            </div>
            <div className="flex flex-col gap-y-3">
                <h4 className="font-roboto text-4xl font-bold text-light-blue">{title}</h4>
                <p className="paragraphSmaller">{parse(text)}</p>
            </div>
            <Image src={imageUrl} alt={imageAlt} width={640} height={360} />
        </div>
    )
}