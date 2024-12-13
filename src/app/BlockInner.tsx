import { ReactNode } from "react";

export function BlockInner({ z, children }: { z?: number, children: ReactNode[] }) {
    return (
        <div className={`relative lg:w-[1080px] w-full py-8 lg:py-16 flex flex-col px-6 lg:px-3 gap-y-8 lg:gap-y-12`} style={{ zIndex: z ? z : 0 }}>
            {children}
        </div>
    )
}
