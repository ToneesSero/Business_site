import * as yup from 'yup';

export const defaultSchemas = yup.object().shape({
    name: yup.string().max(15).required('Обязательное поле для ввода'),
    email: yup.string().email('Введите существующую почту').required('Обязательное поле для ввода'),
    subjects: yup.string().min(15, 'Минимальное кол-во символов 15').max(65).required('Обязательное поле для ввода'),
    message: yup.string().required('Обязательное поле для ввода')

})