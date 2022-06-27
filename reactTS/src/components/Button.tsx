import React from "react"
import Icon from "./Icon"

//stavit label, disable, interface, bez any, children, ne buttonName
interface Props {
    label?: string,
    disabled: boolean,
    children?: React.ReactNode,
    onClick?: any,
    icon?: string,
    className?:any,
    type?:any
}

const Button = ({className, label, icon, disabled, children, onClick, type}:Props) => (
    <button type={type} disabled={disabled} onClick={onClick}  className={className}>  
        {label} {icon ? <Icon icon={icon} /> : <></>}
    </button>
)

export default Button