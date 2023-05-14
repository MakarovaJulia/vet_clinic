import { useFormik } from "formik";
import styles from "./index.module.sass";
import classNames from "classnames/bind";
import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { useStores } from "../../utils/use-stores-hook";
import { Button } from "../ui/Button";
import { petTypesGet, userByTokenGet } from "../../fetchData";
import { petValidationSchema } from "../../utils/validationSchemas";

const cx = classNames.bind(styles);

export const PetsForm = () => {
  let navigate = useNavigate();
  const {
    petsStore: { addPet, isError },
  } = useStores();

  const [userData, setUserData] = useState<any>(null);
  const [userId, setUserId] = useState<any>(null);
  const [petType, setPetType] = useState("Выберите тип питомца");
  const [type, setType] = useState<any>(null);
  const [petTypeList, setPetTypeList] = useState<any>(null);

  let token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      userByTokenGet(token).then((data) => setUserData(data.data));
    }
  }, [token]);

  useEffect(() => {
    petTypesGet().then((data) => {
      setPetTypeList(data.data);
    });
  }, []);

  useEffect(() => {
    if (petTypeList) {
      let type = petTypeList.filter((a: any) => a.name === petType);
      setType(type);
    }
  }, [petType]);

  const formik = useFormik({
    initialValues: {
      userId: userData?.id,
      animalTypeId: "",
      name: "",
    },
    validationSchema: petValidationSchema,
    onSubmit: (values) => {
      addPet({
        userId: userData?.id,
        animalTypeId: type["0"].id,
        name: values.name,
      });
      if (!isError) {
        console.log("add pet");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div>
        <input
          className={cx({
            input: true,
            inputError: formik.touched.name && formik.errors.name,
          })}
          id="name"
          type="text"
          placeholder="Имя"
          {...formik.getFieldProps("name")}
        />
      </div>
      {formik.touched.name && formik.errors.name ? (
        <div className={styles.errorMessage}>{formik.errors.name}</div>
      ) : null}
      <select
        className={styles.input}
        required={true}
        value={petType}
        onChange={(e: any) => setPetType(e.target.value)}
      >
        {petTypeList &&
          petTypeList.map((data: any) => (
            <option key={data.id} value={data.name} className={styles.input}>
              {data.name}
            </option>
          ))}
      </select>
      <Button color title="Добавить" type="submit" disabled={false}>
        Добавить
      </Button>
    </form>
  );
};
