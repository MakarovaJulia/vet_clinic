import React, {FC} from "react";
import styles from './index.module.sass';

export interface IBaseLayout {
    children?: React.ReactNode
}

export const TextBlock: FC<IBaseLayout> = ({children}) => {
    return(
        <p className={styles.text_block}>
            {children}
        </p>
    )
}