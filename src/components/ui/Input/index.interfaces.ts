import React, {MutableRefObject} from "react";

export interface IInput {
    ref?: MutableRefObject<HTMLInputElement>;
    type?: any;
    value?:string;
    title?:string;
    id?:string;
    onChange?: any;
    required?: boolean;
    label?: string;
    field?: any;
    children?: React.ReactNode;
}