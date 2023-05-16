import React from 'react';
import cls from './LoginPage.module.scss'
import {Formik, Form, Field} from 'formik';
import {classNames} from "shared/lib/classNames/classNames";
import {Button} from "shared/ui/Button/Button";
import {useDispatch} from "react-redux";
import {login} from "entities/Login";
import {useAppDispatch} from "shared/lib/redux/redux";

const LoginPage = () => {

    const dispatch = useAppDispatch()

    const validateEmail = (value: string) => {
        console.log('value', value)
        if (!value) return 'Обязательное поле'
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i.test(value)) {
            return 'Некорректный email'
        }
    }

    const validatePassword = (value: string | number) => {
        if (!value) return 'Обязательное поле'
    }

    return (
        <div className={cls.LoginPage}>
            <div className={cls.wrapper}>
                <Formik
                    initialValues={{
                        email: '',
                        password: ''
                    }}
                    onSubmit={values => {
                        dispatch(login({email: values.email, password: values.password}))
                            .unwrap()
                            .then((data) => {
                                console.log('data', data)
                            })
                            .catch((e) => console.log('e', e))
                        console.log('submit', values)
                    }}>
                    {({errors, touched}) => (
                        <Form className={cls.form}>
                            <div className={cls.wrapper_form_item}>
                                <label className={classNames(cls.label, {[cls.error]: errors.email && touched.email}, []) }>Email</label>
                                <div className={classNames(cls.wrapper_input, {[cls.errorInput]:errors.email && touched.email}, []) }>
                                    <Field
                                        name='email'
                                        placeholder={'Введите email...'}
                                        className={cls.input}
                                        validate={validateEmail}
                                    />
                                </div>
                                {errors.email && touched.email && (
                                    <div className={classNames(cls.error_text, {[cls.error]:errors.email}, [])}>{errors.email}</div>
                                )}
                            </div>

                            <div className={cls.wrapper_form_item}>
                                <label className={classNames(cls.label, {[cls.error]: errors.password && touched.password}, []) }>Пароль</label>
                                <div className={classNames(cls.wrapper_input, {[cls.errorInput]:errors.password && touched.password}, []) }>
                                    <Field
                                        name='password'
                                        placeholder={'Введите пароль...'}
                                        className={classNames(cls.input, {}, [])}
                                        validate={validatePassword}
                                    />
                                </div>
                                {errors.password && touched.password && (
                                    <div className={classNames(cls.error_text, {[cls.error]:errors.password}, [])}>{errors.password}</div>
                                )}
                            </div>
                            <Button type={'submit'} className={cls.button}>
                                Войти
                            </Button>
                            {/*<button type={'submit'}>Войти</button>*/}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default LoginPage;