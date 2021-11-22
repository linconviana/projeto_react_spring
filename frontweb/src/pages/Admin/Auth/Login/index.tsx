import ButtonIcon from 'components/ButtonIcon';
//import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import { requestBackendLogin } from 'util/requests';

import './styles.css';

/*type FormData = {
    username: string,
    password: string
}*/

const Login = () => {

    //const { register, handleSubmit } = useForm<FormData>();
    //const onSubmit = (formData: FormData) => {
    const handleSubmit = (event: any) => {

        requestBackendLogin({username:'maria@gmail.com', password:'123456'})
        .then(response => {
            debugger
            console.log('Sucesso', response);
        })
        .catch(error => {
            debugger
            console.log('Erro', error.message);
        })
    }

    // <form onSubmit={handleSubmit(onSubmit)}></form>
    //<input {...register("username")} type="text" className="form-control base-input" placeholder="Email" name="username" />
    //<input {...register("password")} type="password" className="form-control base-input" placeholder="Password" name="password" />
    return(
        <div className="base-card login-card">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input  type="text" className="form-control base-input" placeholder="Email" name="username" />
                </div>
                <div className="mb-2">
                    <input type="password" className="form-control base-input" placeholder="Password" name="password" />
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