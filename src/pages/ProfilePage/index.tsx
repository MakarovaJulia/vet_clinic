import { observer } from "mobx-react";
import { UserPets } from "../../components/UserPets";
import { UserAppointments } from "../../components/UserAppointments";
import styles from "./index.module.sass";
import { Header } from "../../components/Header";
import { useStores } from "../../utils/use-stores-hook";
import { Button } from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { userByTokenGet, userPetsByIdGet } from "../../fetchData";

export const ProfilePage = observer(() => {
  let navigate = useNavigate();
  let userToken = localStorage.getItem("user");
  const [user, setUser] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);

  const {
    authStore: { logout },
  } = useStores();

  const goTo = (path: string): void => {
    navigate(path);
  };

  useEffect(() => {
    if (userToken?.valueOf()) {
      setUser(JSON.parse(userToken));
      console.log(user);
    }
  }, [userToken]);

  const userLogout = (): void => {
    logout();
    navigate("/");
  };

  useEffect(() => {
    if (user) {
      let token = user["accessToken"];
      localStorage.setItem("token", token);
      userByTokenGet(token).then((data) => {
        setUserData(data);
      });
    }
  }, [user]);

  useEffect(() => {
    if (userData) {
      console.log(userData);
    }
  }, [userData]);

  return (
    <>
      <Header />
      {userData ? (
        <div className={styles.user_info}>
          <div className={styles.name}>
            {userData.data.firstName} {userData.data.lastName}
          </div>
          <div className={styles.contacts}>{userData.data.email}</div>
          <Button disabled={false} onClick={() => userLogout()}>
            Выйти
          </Button>
        </div>
      ) : (
        <></>
      )}
      <div className={styles.user_info_wrapper}>
        {/*<Button disabled={false} onClick={() => userLogout()}>*/}
        {/*  Выйти*/}
        {/*</Button>*/}
        <UserPets />
        <UserAppointments />
      </div>
    </>
  );
});
