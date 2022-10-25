import { Field, Form, Formik } from 'formik';
import Input from '../../Field/Input';
import Button from '../../Field/Button';
import validationSchema from './validationSchema';

const AuthForm = () => {
  const initialValues = { login: null, password: null };

  return (
    <Formik validateOnChange={false} validateOnBlur={false} initialValues={initialValues} onSubmit={values => console.log('click on button')}>
      {({ values, errors, dirty, ...props })=> (
        <Form>
          <Field name="login" component={Input} title="Логин или почта"/>
          <Field name="password" component={Input} title="Пароль" type="password"/>
          <Button isValid={values.login && values.password} />
        </Form>
      )}
    </Formik>
  );
}

export default AuthForm;
