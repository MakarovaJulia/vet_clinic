import React, {useEffect, useState} from "react"
import styles from "./index.module.sass";
import {Button} from "../ui/Button";


export const AppointmentPin = ({data}: any) => {

  console.log(data)

  return (
    <div className={styles.time_pin_wrapper}>
        <Button disabled={data?.isBooked} theme="secondary">
          <div className={styles.time_wrapper}>
            <h4>{data?.date}</h4>
            <p>{data?.startTime}</p>
          </div>
        </Button>
    </div>
  )
}