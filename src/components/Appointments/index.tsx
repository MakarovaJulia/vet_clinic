import React from "react"
import styles from "./index.module.sass";
import {AppointmentPin} from "../AppointmentPin";

export const AppointmentsBlock = (props: any) => {

  const {time} = props;

  return (
    <div className={styles.time_gallery_wrapper}>
      <h1 className={styles.time_gallery_header}>Время для записи</h1>
      <div className={styles.time_gallery}>
        {time && time.map((data: any) => (
          <AppointmentPin data={data}/>
        ))}
      </div>
    </div>
  )
}