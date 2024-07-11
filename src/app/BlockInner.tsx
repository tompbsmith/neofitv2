import { ReactNode } from "react";

export function BlockInner({ z, children }: { z?: number, children: ReactNode[] }) {
    return (
        <div className={`lg:w-[1080px] lg:py-16 flex flex-col gap-y-12`} style={{ zIndex: z ? z : 0 }}>
            {children}
        </div>
    )
}
