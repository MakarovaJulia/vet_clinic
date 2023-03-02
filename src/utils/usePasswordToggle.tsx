import React, {useState} from 'react'
import eye from "../asserts/icons/eye.svg"
import closedEye from "../asserts/icons/closed-eye.svg"
import styles from "./index.module.sass";

export const usePasswordToggle = () => {
    const [visible, setVisible] = useState(false)

    const Icon = (
        <img src={visible ? eye : closedEye} className={styles.eye_icon}
             onClick={() => setVisible(visibility => !visibility)}/>
    )

    const InputType = visible ? "text" : "password"

    return[InputType, Icon]
}