import {useStores} from "../../utils/use-stores-hook";
import {Button} from "../../components/ui/Button";
import {useFormik} from "formik";
import {authValidationSchema, regValidationSchema} from "../../utils/validationSchemas";
import styles from "./index.module.sass";
import classNames from "classnames/bind";
import {useNavigate} from "react-router";
import round_image from "../../asserts/icons/round_icon.svg";
import React, {useState} from "react";
import {usePasswordToggle} from "../../utils/usePasswordToggle";
import {Input} from "../ui/Input";

const cx = classNames.bind(styles);

export const SignUpForm = () => {

    let navigate = useNavigate()
    const [passwordInputType, toggleIcon] = usePasswordToggle()
    const [agree, setAgree] = useState(false)
    // const  {authStore: {login, isError}, modalStore: {clearCurrentModal}} = useStores();


    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: regValidationSchema,
        onSubmit: values => {
            // login({
            //     login: values.phone,
            //     password: values.password
            // })
            // if (!isError) {
            //     clearCurrentModal()
            //     navigate('/profile')
            // }
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
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
                    <p>Password</p>
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
                <div className={styles.validation_wrapper}>
                    <div className={styles.validation_item}>
                        <img src={round_image}/>
                        <p>?????????? 8 ????????????????</p>
                    </div>
                    <div className={styles.validation_item}>
                        <img src={round_image}/>
                        <p>???????? ???? 1 ????????. ????????????</p>
                    </div>
                    <div className={styles.validation_item}>
                        <img src={round_image}/>
                        <p>???????? ???? 1 ?????????????????? ??????????</p>
                    </div>
                    <div className={styles.validation_item}>
                        <img src={round_image}/>
                        <p>???????? ???? 1 ??????????</p>
                    </div>
                    <div className={styles.validation_item}>
                        <img src={round_image}/>
                        <p>???????? ???? 1 ??????????</p>
                    </div>
                </div>
            </div>
            <div>
                <input type="checkbox" id="agree" name="scales" onChange={(e)=>setAgree(e.target.checked)}/>
                    <label htmlFor="agree">?? ???????????????? ???? ?????????????????? ???????????????????????? ????????????</label>
            </div>
            <Button
                color
                title='????????????????????????????????????'
                type='submit'
                disabled={!agree || !formik.isValid}
                onClick={()=>{}}
            >????????????????????????????????????</Button>
        </form>
    )
}
