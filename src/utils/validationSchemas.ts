import * as Yup from "yup";

export const authValidationSchema = Yup.object({
    email: Yup.string()
        .email('Неверный адрес электронной почты')
        .required('Введите адрес электронной почты'),
    password: Yup.string()
        .min(4, 'Длина пароля не может быть меньше 8 символов')
        .max(20, 'Длина пароля не может превышать 20 символов')
        .required('Введите пароль')
});

export const regValidationSchema = Yup.object({
    email: Yup.string()
        .email('Неверный адрес электронной почты')
        .required('Введите адрес электронной почты'),
    password: Yup.string()
        .min(4, 'Длина пароля не может быть меньше 8 символов')
        .max(20, 'Длина пароля не может превышать 20 символов')
        .required('Введите пароль')
});

export const petValidationSchema = Yup.object({
    name: Yup.string()
      .min(1, 'Длина имени не может быть меньше 1 символа')
      .max(30, 'Длина пароля не может превышать 30 символов')
      .required('Введите имя')
});