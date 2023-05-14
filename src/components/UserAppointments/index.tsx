import React, { useEffect, useState } from "react";
import styles from "./index.module.sass";
import { UserAppointment } from "./UserAppoinment";
import {
  userAppointmentsByIdGet,
  userByTokenGet,
  userPetsByIdGet,
} from "../../fetchData";
import { UserPet } from "../UserPets/UserPet";

export const UserAppointments = ({ data }: any) => {
  const [userData, setUserData] = useState<any>(null);
  const [userAppointments, setUserAppointments] = useState<any>(null);

  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      userByTokenGet(token).then((data) => setUserData(data.data));
    }
  }, [token]);

  useEffect(() => {
    if (userData) {
      userAppointmentsByIdGet(userData?.id).then((data) =>
        setUserAppointments(data)
      );
    }
  }, [userData]);

  return (
    <div className={styles.wrapper}>
      {userAppointments?.data &&
        userAppointments?.data.map((data: any) => (
          <div className={styles.appointment}>
            <UserAppointment data={data} />
          </div>
        ))}
    </div>
  );
};
