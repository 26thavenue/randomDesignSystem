export interface IButtonProps{
    onClick ?: () => void
    bgColor?: string
    textColor?:string
    loading?:boolean
    iconLeft ?:React.ReactNode
    iconRight ?:React.ReactNode
    type ?: ButtonType
    variant :ButtonVariant
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

export type ButtonType = "submit" | "reset"
export type ButtonVariant = "primary" | "secondary"| "tertiary" | "outline"
export type ButtonSize = "small" | "medium" | "large" |"default"
export type ButtonLoadingStyle = "icon" | "icon-greyed" | "greyed" | "text"


