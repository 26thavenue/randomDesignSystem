import { ButtonVariant, IconButton } from "./type"

const IconButtons = ({children,className,onClick,variant}:IconButton) => { 
   const variantClass: Record<ButtonVariant, string>= {
    primary :  "bg-black text-white hover:opacity-80 transition-opacity ",
    secondary: "bg-white text-black hover:bg-gray-100 transition-colors",
    tertiary:   "bg-transparent text-black",
    outline : "border-[2px] bg-primary",
  }

  return (
    <button
    onClick={onClick}
    className = {`${variantClass[variant]} ${className} p-3 `}
    >
        {children}
    </button>
  )
}

export default IconButtons