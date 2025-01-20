
type ChipsVariant = "outline" |"withbg"

interface IChips{
    children?:React.ReactNode,
    variants: ChipsVariant,
    className ?:string
}

const index = ({children,variants,className}:IChips) => {

    const variantClasses :Record<ChipsVariant,string> = {
        outline :"border-[1.5px] border-[#e5e5e5] text-black ",
        withbg: "bg-blue-100 text-black ",
    }
  return (
    <div
    className={` ${variantClasses[variants]} ${className} max-w-fit px-[12px] py-[6px] flex gap-3 items-center`}
    >
        {children}
    </div>
  )
}

export default index