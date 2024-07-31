import * as yup from 'yup';

const validationSchema = yup.object().shape({
  login: yup.string().required('Введите почту').email('Некорректный адрес почты').min(3, 'Минимальная длина почтового адреса: 3').max(50, 'Максимальная длина почтового адреса: 50'),
  password: yup.string().required('Введите пароль').min(8, 'Минимальная длина пароля: 8').max(50, 'Максимальная длина пароля: 50')
})

export default validationSchema;
