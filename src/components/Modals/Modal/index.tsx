import React, {FC, ReactNode, useRef} from 'react';
import styles from './index.module.scss'
import {useStores} from "../../../utils/use-stores-hook";
import {Button} from "../../ui/Button";

interface Props {
    title: ReactNode;
    onClose: () => void;
    hasBtnForPartners: boolean;
    hideCloseBtn?: boolean;
    isBottomSheet?: boolean;
    children: any;
}

export const Modal: FC<Props> = (
    {
        title,
        onClose,
        children,
        hideCloseBtn=false,
    }) => {
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores()
    const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const closeModal = (e:any) => {
      if(modalRef.current === e.target){
          clearCurrentModal()
      }
    }

    return (
        <div className={styles.overlay} ref={modalRef} onClick={closeModal}>
            <div className={styles.modal_window}>
                <div className={styles.modal_header}>
                    <h3>{title}</h3>
                    {!hideCloseBtn &&
                        <Button disabled={false} onClick={onClose} theme='tertiary'>
                          <div className={styles.modal_close_icon}>X</div>
                        </Button>
                    }
                </div>
                <div className={styles.modal_content}>
                    {children}
                </div>
            </div>
        </div>
    )
}