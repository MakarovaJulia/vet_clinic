import React, {FC} from "react";
import classNames from "classnames/bind";
import styles from './index.module.sass';
import {IButton} from "./index.interfaces";

const cx = classNames.bind(styles)

export const Button: FC<IButton> =
    ({id,
         type,
         onClick,
         disabled,
         theme= 'primary',
         className,
         children,
         ...otherProps
     }) => {
        return (
            <button
                id={id}
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={cx(styles.button, `button--${theme}`, className)}
            >
                {children}
            </button>
        )
    }