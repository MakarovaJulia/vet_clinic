import { useFormik } from "formik";
import styles from "./index.module.sass";
import classNames from "classnames/bind";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { useStores } from "../../utils/use-stores-hook";
import { Button } from "../ui/Button";
import { userByTokenGet, userPetsByIdGet } from "../../fetchData";

const cx = classNames.bind(styles);

export const AppointmentForm = () => {
  let navigate = useNavigate();
  const {
    appointmentStore: { addAppointment, isError },
  } = useStores();

  const [userData, setUserData] = useState<any>(null);
  const [userId, setUserId] = useState<any>(null);
  const [userPets, setUserPets] = useState<any>(null);
  const [pet, setPet] = useState<any>(null);
  const [selectedPet, setSelectedPet] = useState<any>(null);
  const [useDoctorId, setUseDoctorId] = useState<any>(null);
  const [useServiceId, setUseServiceId] = useState<any>(null);
  const [useTimeId, setUseTimeId] = useState<any>(null);

  let token = localStorage.getItem("token");
  let doctorId = localStorage.getItem("doctorId");
  let serviceId = localStorage.getItem("serviceId");
  let timeId = localStorage.getItem("timeId");

  useEffect(() => {
    if (doctorId) {
      setUseDoctorId(doctorId);
    }
  }, [doctorId]);

  useEffect(() => {
    if (serviceId) {
      setUseServiceId(serviceId);
    }
  }, [serviceId]);

  useEffect(() => {
    if (timeId) {
      setUseTimeId(timeId);
    }
  }, [timeId]);

  useEffect(() => {
    if (token) {
      userByTokenGet(token).then((data) => setUserData(data.data));
    }
  }, [token]);

  useEffect(() => {
    if (userData) {
      userPetsByIdGet(userData?.id).then((data) => setUserPets(data));
    }
  }, [userData]);

  useEffect(() => {
    if (userPets) {
      setSelectedPet(userPets?.data.filter((a: any) => a.name === pet));
    }
  }, [userPets, pet]);

  const formik = useFormik({
    initialValues: {
      userId: userData?.id,
      petId: "",
      doctorId: "",
      serviceId: "",
      timeSlotId: "",
    },
    onSubmit: (values) => {
      addAppointment({
        userId: userData?.id,
        petId: selectedPet["0"]?.id,
        doctorId: useDoctorId,
        serviceId: useServiceId,
        timeSlotId: useTimeId,
      });
      if (!isError) {
        console.log("add pet");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <select
        className={styles.input}
        required={true}
        value={pet}
        onChange={(e: any) => setPet(e.target.value)}
      >
        <option value="none" selected disabled>
          Выберите питомца
        </option>
        {userPets?.data &&
          userPets?.data.map((data: any) => (
            <option key={data.id} value={data.name} className={styles.input}>
              {data.name}
            </option>
          ))}
      </select>
      <Button color title="Записаться" type="submit" disabled={false}>
        Записаться
      </Button>
    </form>
  );
};
