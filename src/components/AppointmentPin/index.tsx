import React, {useEffect, useState} from "react"
import styles from "./index.module.sass";
import {Button} from "../ui/Button";
import {useStores} from "../../utils/use-stores-hook";
import {PetsAddModal} from "../Modals/PetsAddModal";
import {AppointmentAddModal} from "../Modals/AppointmentAddModal";


export const AppointmentPin = ({data}: any) => {

  console.log(data)
  const {modalStore: {setCurrentModal, clearCurrentModal}} = useStores();

  const openModal = () => {
    clearCurrentModal()
    setCurrentModal(AppointmentAddModal)
  }

  return (
    <div className={styles.time_pin_wrapper}>
        <Button disabled={data?.isBooked} theme="secondary" onClick={()=>openModal()}>
          <div className={styles.time_wrapper}>
            <h4>{data?.date}</h4>
            <p>{data?.startTime}</p>
          </div>
        </Button>
    </div>
  )
}