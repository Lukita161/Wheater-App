import { ReactNode } from "react"
import style from './Error.module.css'
type ErrorComponentProps = {
    children: ReactNode
}

export const ErrorComponent = ({ children }:ErrorComponentProps )=> {
    return (
        <h1 className={style.ErrorText}> {children} </h1>
    )
}