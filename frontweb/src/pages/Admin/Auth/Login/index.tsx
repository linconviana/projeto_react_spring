import React, { useState } from "react";
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

    const [hasError, setHasError] = useState(false);
    const { register, handleSubmit, formState: {errors} } = useForm<FormData>();
    const onSubmit = (formData: FormData) => {

        requestBackendLogin(formData)
        .then(response => {
            debugger
            setHasError(false);
            console.log('Sucesso', response);
        })
        .catch(error => {
            debugger
            setHasError(true);
            console.log('Erro', error.message);
        })
    }

    return(
        <div className="base-card login-card">
            <h1>Login</h1>

            {/*Mensagens de erros */}
            {hasError &&
                <div className="alert alert-danger">
                    Ocorreu um erro de preenchimento
                </div>
            }
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <input {...register("username", {
                        required: 'Campo Obrigatorio', 
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Email inválido!'
                        }
                    })} type="text" className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`} placeholder="Email" name="username" />
                    <div className="invalid-feedback d-block">{errors.username?.message}</div>
                </div>
                <div className="mb-2">
                    <input {...register("password", {
                        required: 'Campo Obrigatorio'
                    })} type="password" className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`} placeholder="Password" name="password" />
                    <div className="invalid-feedback d-block">{errors.password?.message}</div>
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