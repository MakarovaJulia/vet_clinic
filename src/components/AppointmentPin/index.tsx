import React, { useEffect, useState } from "react";
import styles from "./index.module.sass";
import { Button } from "../ui/Button";
import { useStores } from "../../utils/use-stores-hook";
import { AppointmentAddModal } from "../Modals/AppointmentAddModal";

export const AppointmentPin = (props: any) => {
  const { data, doctorId } = props;

  useEffect(() => {
    if (doctorId) {
      if (localStorage.getItem("doctorId")) {
        localStorage.removeItem("doctorId");
      }
      localStorage.setItem("doctorId", doctorId);
    }
  }, [doctorId]);

  console.log(data);
  const {
    modalStore: { setCurrentModal, clearCurrentModal },
  } = useStores();

  const openModal = () => {
    clearCurrentModal();
    if (data) {
      if (localStorage.getItem("timeId")) {
        localStorage.removeItem("timeId");
      }
      localStorage.setItem("timeId", data?.id);
    }
    setCurrentModal(AppointmentAddModal);
  };

  return (
    <div className={styles.time_pin_wrapper}>
      <Button
        disabled={data?.isBooked}
        theme="secondary"
        onClick={() => openModal()}
      >
        <div className={styles.time_wrapper}>
          <h4>{data?.date}</h4>
          <p>{data?.startTime}</p>
        </div>
      </Button>
    </div>
  );
};
