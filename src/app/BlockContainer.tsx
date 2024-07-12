export function BlockContainer({ children, topOffset }: any) {
    return (
        <div className={`relative w-full top-[82px] lg:top-0`} >
            {children}
        </div>
    )
}