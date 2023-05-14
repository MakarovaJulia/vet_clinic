import { useFormik } from "formik";
import { authValidationSchema } from "../../utils/validationSchemas";
import styles from "./index.module.sass";
import classNames from "classnames/bind";
import { useNavigate } from "react-router";
import React from "react";
import { usePasswordToggle } from "../../utils/usePasswordToggle";
import { Input } from "../ui/Input";
import { useStores } from "../../utils/use-stores-hook";
import { Button } from "../ui/Button";

const cx = classNames.bind(styles);

export const AuthForm = () => {
  let navigate = useNavigate();
  const [passwordInputType, toggleIcon] = usePasswordToggle();
  const {
    authStore: { login, isError },
  } = useStores();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: authValidationSchema,
    onSubmit: (values) => {
      login({
        email: values.email,
        password: values.password,
      });
      if (!isError) {
        setTimeout(() => navigate("/profile"), 300);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div>
        <p>Email</p>
        <input
          className={cx({
            input: true,
            inputError: formik.touched.email && formik.errors.email,
          })}
          id="email"
          type="email"
          placeholder="Email"
          {...formik.getFieldProps("email")}
        />
      </div>
      {formik.touched.email && formik.errors.email ? (
        <div className={styles.errorMessage}>{formik.errors.email}</div>
      ) : null}
      <div>
        <div className={styles.password_wrapper}>
          <p>Password</p>
          <span className={styles.password_toggle_icon}>{toggleIcon}</span>
        </div>
        <Input
          className={cx({
            input: true,
            inputError: formik.touched.password && formik.errors.password,
          })}
          id="password"
          type={passwordInputType}
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className={styles.errorMessage}>{formik.errors.password}</div>
        ) : null}
      </div>
      <Button color title="Войти" type="submit" disabled={false}>
        Войти
      </Button>
    </form>
  );
};
