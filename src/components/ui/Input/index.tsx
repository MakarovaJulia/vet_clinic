import React, {FC, MutableRefObject, useRef} from "react";
import classNames from "classnames/bind";
import styles from './index.module.sass';
import {IInput} from "./index.interfaces";


export const Input = React.forwardRef<HTMLInputElement, IInput>(
    (props, ref) => {
        const {label, type, title, id, value, className, onChange, required, field, children, ...inputProps} = props;
        return (
            <input
                ref={ref}
                type={type}
                title={title}
                value={value}
                onChange={onChange}
                required={required}
                className={className}
                id={id}
                {...field}
                {...inputProps}
            >
                {children}
            </input>
        );
    }
);