import React from "react";
import styles from "./index.module.sass";
import { Button } from "../../ui/Button";

export const UserAppointment = ({ data }: any) => {
  return (
    <div className={styles.appointment_wrapper}>
      <div className={styles.row_container}>
        <div className={styles.row_container_info}>{data.appointmentDate}</div>
        <div className={styles.row_container_info}>{data.startTime}</div>
      </div>
      <div className={styles.row_container}>
        <div className={styles.date}>{data.serviceName}</div>
        <div className={styles.date}>{data.servicePrice} руб.</div>
      </div>
      <div className={styles.doctor}>{data.fullDoctorName}</div>
      <div className={styles.pet}>Питомец: {data.petName}</div>
      {/*<Button disabled={false} className={styles.btn}>*/}
      {/*  Отменить запись*/}
      {/*</Button>*/}
    </div>
  );
};
