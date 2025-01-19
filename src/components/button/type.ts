export interface IButtonProps{
    name : string
    onClick ?: () => void
    bgColor?: string
    textColor?:string
    loading?:boolean
    iconLeft:React.ReactNode
    iconRight:React.ReactNode
    type ?: ButtonType
    variant :ButtonVaraiant
    size?: ButtonSize
    isActive ?: boolean
    isDisabled ?: boolean
    id ?: string
    children ?:React.ReactNode
    className ?: any
    loadingStyle ?: ButtonLoadingStyle
    loadingIcon ?:any
}

export type IconButton  = Omit<IButtonProps, "iconLeft" | "iconRight">

type ButtonType = "submit" | "reset"
type ButtonVaraiant = "primary" | "secondary"| "tertiary" | "outline"
type ButtonSize = "small" | "medium" | "large" |"default"
type ButtonLoadingStyle = "icon" | "icon-greyed" | "greyed" | "text"


