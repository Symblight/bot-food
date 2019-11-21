import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { withFormik, FormikProps, FormikErrors } from 'formik';

import { FormTemplate, Input, PasswordInput, Button, Image } from 'ui';
import { RobotFace } from '@webroot/img';

import './SignIn.less';

interface SingInPageProps extends RouteComponentProps {}

interface FormValues {
  email: string;
  password: string;
}

const Index: React.FC<SingInPageProps & FormikProps<FormValues>> = ({
  handleSubmit,
  handleChange,
  values,
  errors,
}) => {
  return (
    <FormTemplate>
      <div className="bf-login-form">
        <div className="bf-login-form__header">
          <Image src={RobotFace} alt="logo" />
          <h3>Авторизация в систему</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="bf-login-form__field">
            <Input
              placeholder="Почта"
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              error={errors.email}
            />
          </div>
          <div className="bf-login-form__field">
            <PasswordInput
              placeholder="пароль"
              name="password"
              onChange={handleChange}
              value={values.password}
              error={errors.password}
            />
          </div>
          <div className="bf-login-form__submit">
            <Button
              className="bf-login-form__submit"
              priority="primary"
              type="submit"
            >
              Войти
            </Button>
          </div>
        </form>
      </div>
    </FormTemplate>
  );
};

export const SignInPage = withFormik<SingInPageProps, FormValues>({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!values.email) {
      errors.email = 'Заполните поле';
    } else if (!values.email) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Заполните поле';
    }
    return errors;
  },
  handleSubmit: (values) => {
    console.log(values, 'loginIn!');
  },
  displayName: 'loginForm',
})(Index);
