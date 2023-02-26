import React from "react";

export interface IButton {
    id?: string,
    type?: "button" | "submit" | "reset"
    onClick?: () => void,
    disabled: boolean,
    theme?: 'primary' | 'secondary',
    className?: string,
    children?: React.ReactNode,
    [key: string] : any;
}