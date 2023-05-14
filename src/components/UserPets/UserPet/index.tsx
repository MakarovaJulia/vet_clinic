import React from "react";
import styles from "./index.module.sass";

export const UserPet = ({ data }: any) => {
  return (
    <div className={styles.pet_wrapper}>
      <p>
        {data.name} {data.animalType}
      </p>
      {/*<Button disabled={false} className={styles.btn} onClick={()=>{}}>Удалить</Button>*/}
    </div>
  );
};
