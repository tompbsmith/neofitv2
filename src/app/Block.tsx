import { ReactNode } from "react";

export function Block({ id, colour, backgroundImg, children }: { id: string, colour: string, backgroundImg?: boolean, children: ReactNode }) {
    return (
        <div className={`relative w-full justify-center flex ${colour === 'grey' ? 'bg-lightest-grey' : colour === 'blue' ? 'bg-light-blue' : 'bg-white'} ${backgroundImg ? 'bg-large-background bg-repeat bg-cover' : ''}`} id={id}>
            {children}
        </div>
    )
}