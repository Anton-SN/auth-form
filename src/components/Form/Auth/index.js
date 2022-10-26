import { Field, Form, Formik } from 'formik';
import Input from '../../Field/Input';
import Button from '../../Field/Button';
import validationSchema from './validationSchema';
import styles from './styles.module.css';

const AuthForm = () => {
  const initialValues = { login: '', password: '' };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values)
        setTimeout( () => {
          window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        }, 1000 );
      }}
    >
      {({ values, errors })=> (
        <Form className={styles.container}>
          <Field name="login" component={Input} title="Почта"/>
          <Field name="password" component={Input} title="Пароль" type="password"/>
          <Button errors={errors} hide={values.login.length === 0 && values.password.length === 0} />
        </Form>
      )}
    </Formik>
  );
}

export default AuthForm;
