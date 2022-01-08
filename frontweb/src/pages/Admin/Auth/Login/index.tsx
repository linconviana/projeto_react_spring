import React from "react";
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon';
import { requestBackendLogin } from 'util/requests';

import './styles.css';

type FormData = {
    username: string,
    password: string
}

const Login = () => {

    const { register, handleSubmit } = useForm<FormData>();
    const onSubmit = (formData: FormData) => {
debugger
        
        requestBackendLogin(formData)
        .then(response => {
            debugger
            console.log('Sucesso', response);
        })
        .catch(error => {
            debugger
            console.log('Erro', error.message);
        })
    }

    return(
        <div className="base-card login-card">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <input {...register("username")} type="text" className="form-control base-input" placeholder="Email" name="username" />
                </div>
                <div className="mb-2">
                    <input {...register("password")} type="password" className="form-control base-input" placeholder="Password" name="password" />
                </div>
                <Link to="auth/recover" className="login-link-recover">Esqueci a senha</Link>
                <div className="login-submit">
                    <ButtonIcon text="Logar" />
                </div>
                <div className="signup-container">
                    <span className="not-registered">Não tem Cadastro?</span>
                    <Link to="auth/register" className="login-link-register">Cadastrar</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;