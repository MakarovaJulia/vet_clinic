import {useStores} from "../../utils/use-stores-hook";
import {Button} from "../../components/ui/Button";
import {useFormik} from "formik";
import {authValidationSchema} from "../../utils/validationSchemas";
import styles from "./index.module.sass";
import classNames from "classnames/bind";
import {useNavigate} from "react-router";

const cx = classNames.bind(styles);

export const AuthForm = () => {

    let navigate = useNavigate()

    // const  {authStore: {login, isError}, modalStore: {clearCurrentModal}} = useStores();


    const formik = useFormik({
        initialValues: {
            phone: '',
            password: ''
        },
        validationSchema: authValidationSchema,
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
                        inputError: formik.touched.phone && formik.errors.phone
                    })}
                    id='phone'
                    type='tel'
                    placeholder='Телефон'
                    {...formik.getFieldProps('phone')}
                />
            </div>
            {formik.touched.phone && formik.errors.phone ? (
                <div className={styles.errorMessage}>{formik.errors.phone}</div>
            ) : null}
            <div>
                <p>Password</p>
                <input
                    className={cx({
                        input: true,
                        inputError: formik.touched.password && formik.errors.password
                    })}
                    id='password'
                    type='password'
                    placeholder='Пароль'
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className={styles.errorMessage}>{formik.errors.password}</div>
                ) : null}
            </div>
            <Button
                color
                title='Войти'
                type='submit'
                disabled={false}>Зарегистрироваться</Button>
        </form>
    )
}
