import { IButtonProps,ButtonVariant,ButtonSize,ButtonType,ButtonLoadingStyle } from "./type";


const index = ({
    onClick,
    bgColor,
    textColor,
    loading,
    iconLeft,
    iconRight,
    type,
    variant,
    size,
    isActive,
    isDisabled,
    id,
    children,
    className,
}:IButtonProps) => {

  const variantClass: Record<ButtonVariant, string>= {
    primary :  "bg-black text-white hover:opacity-80 transition-opacity ",
    secondary: "bg-white text-black hover:bg-gray-100 transition-colors",
    tertiary: bgColor ||  "bg-transparent text-black",
    outline : bgColor || "border-[2px] bg-primary",
  } 

//   const loadingStyle : Record<ButtonLoadingStyle,string> ={

//   }


  return (
    <button
        id={id}
        onClick={onClick}
        disabled={isDisabled}
        className={`${variantClass[variant]} ${className} px-[12px] py-[6px] flex gap-2 items-center `}
    >
        {iconLeft}
        {children}
        {iconRight} 
    </button>
  )
}

export default index