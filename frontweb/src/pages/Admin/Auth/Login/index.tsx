import React, { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import {Link, useHistory, useLocation} from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon';
import { getTokenData, requestBackendLogin, saveAuthData } from 'util/requests';
import { AuthContext } from "AuthContext";

import './styles.css';

type FormData = {
    username: string,
    password: string
}

type LocationState = {
    from: string
}

const Login = () => {

    const location = useLocation<LocationState>();
    const { from } =location.state || { from: { pathname: '/admin'}};
    const {setAuthContextData} = useContext(AuthContext);
    
    const history = useHistory();

    const [hasError, setHasError] = useState(false);
    const { register, handleSubmit, formState: {errors} } = useForm<FormData>();
    const onSubmit = (formData: FormData) => {

        requestBackendLogin(formData)
        .then(response => {
            
            saveAuthData(response.data);

            setHasError(false);

            /// :: Mudar state do navbar ao logar.
            setAuthContextData({
                authenticated: true,
                tokenData: getTokenData()
            })
            /// :: Redirecionar para pagina admin ou ultima rota protegida digitada na url
            /// :: replace para voltar para home ao voltar no navegador
            ///history.push('/admin');
            history.replace(from);
        })
        .catch(error => {           
            setHasError(true);
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