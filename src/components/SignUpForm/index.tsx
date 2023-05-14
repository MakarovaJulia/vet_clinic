import styles from "./index.module.sass";
import classNames from "classnames/bind";
import React, {useState} from "react";
import {regValidationSchema} from "../../utils/validationSchemas";
import {useFormik} from "formik";
import {useStores} from "../../utils/use-stores-hook";
import {Input} from "../ui/Input";
import round_image from "../../asserts/icons/round_icon.svg"
import {Button} from "../ui/Button";
import {useNavigate} from "react-router";
import {usePasswordToggle} from "../../utils/usePasswordToggle";



const cx = classNames.bind(styles);

export const SignUpForm = () => {

    const {authStore: {signup, isError,}} = useStores();
    const [agree, setAgree] = useState(true)
    let navigate = useNavigate()
    const [passwordInputType, toggleIcon] = usePasswordToggle()

    const formik = useFormik({
        initialValues: {
            firstName:'',
            lastName:'',
            phone:'',
            email: '',
            password: '',
            repeatedPassword:'',
        },
        validationSchema: regValidationSchema,
        onSubmit: values => {
            signup({
                firstName:values.firstName,
                lastName:values.lastName,
                repeatedPassword:values.repeatedPassword,
                phone:values.phone,
                email:values.email,
                password:values.password,
            })
          if (!isError) {
            console.log('user')
            navigate('/login')
          }
        },
    })


    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div>
                <p>Имя</p>
                <input
                    className={cx({
                        input: true,
                        inputError: formik.touched.firstName && formik.errors.firstName
                    })}
                    id='firstName'
                    type='firstName'
                    {...formik.getFieldProps('firstName')}
                />
            </div>
            <div>
                <p>Фамилия</p>
                <input
                    className={cx({
                        input: true,
                        inputError: formik.touched.lastName && formik.errors.lastName
                    })}
                    id='lastName'
                    type='lastName'
                    {...formik.getFieldProps('lastName')}
                />
            </div>
            <div>
                <p>Телефон</p>
                <input
                    className={cx({
                        input: true,
                        inputError: formik.touched.phone && formik.errors.phone
                    })}
                    id='phone'
                    type='phone'
                    {...formik.getFieldProps('phone')}
                />
            </div>
            <div>
                <p>Email</p>
                <input
                    className={cx({
                        input: true,
                        inputError: formik.touched.email && formik.errors.email
                    })}
                    id='email'
                    type='email'
                    {...formik.getFieldProps('email')}
                />
            </div>
            {formik.touched.email && formik.errors.email ? (
                <div className={styles.errorMessage}>{formik.errors.email}</div>
            ) : null}
            <div>
                <div className={styles.password_wrapper}>
                    <p>Пароль</p>
                    <span className={styles.password_toggle_icon}>{toggleIcon}</span>
                </div>
                <Input
                    className={cx({
                        input: true,
                        inputError: formik.touched.password && formik.errors.password
                    })}
                    id='password'
                    type={passwordInputType}
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className={styles.errorMessage}>{formik.errors.password}</div>
                ) : null}
                <div className={styles.password_wrapper}>
                    <p>Повторите пароль</p>
                    <span className={styles.password_toggle_icon}>{toggleIcon}</span>
                </div>
                <Input
                    className={cx({
                        input: true,
                        inputError: formik.touched.repeatedPassword && formik.errors.repeatedPassword
                    })}
                    id='repeatedPassword'
                    type={passwordInputType}
                    {...formik.getFieldProps('repeatedPassword')}
                />
                <div className={styles.validation_wrapper}>
                    <div className={styles.validation_item}>
                        <img src={round_image}/>
                        <p>Более 8 символов</p>
                    </div>
                    <div className={styles.validation_item}>
                        <img src={round_image}/>
                        <p>Хотя бы 1 спец. символ</p>
                    </div>
                    <div className={styles.validation_item}>
                        <img src={round_image}/>
                        <p>Хотя бы 1 заглавная буква</p>
                    </div>
                    <div className={styles.validation_item}>
                        <img src={round_image}/>
                        <p>Хотя бы 1 цифра</p>
                    </div>
                    <div className={styles.validation_item}>
                        <img src={round_image}/>
                        <p>Хотя бы 1 буква</p>
                    </div>
                </div>
            </div>
            <div>
                <input type="checkbox" id="agree" name="scales" onChange={(e)=>setAgree(e.target.checked)}/>
                    <label htmlFor="agree">Я согласен на обработку персональных данных</label>
            </div>
            <Button
                color
                title='Зарегистрироваться'
                type='submit'
                disabled={!agree || !formik.isValid}
            >Зарегистрироваться</Button>
        </form>
    )
}