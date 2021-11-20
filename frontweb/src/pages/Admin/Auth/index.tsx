import Imagem from 'assets/images/auth-image.svg'
import { Route, Switch } from 'react-router';
import Login from './Login';

import './styles.css'

const Auth = () => {
    return(
        <div className="auth-container">
            <div className="auth-banner-container">
                <h1>Divulgue seus produto no DS Catalog</h1>
                <p>Faça parte do nosso catalogo de divulgação e aumente a venda dos seus produtos.</p>
                <img src={Imagem} alt="imagem"/>
            </div>
            <div className="auth-form-container">
                <Switch>
                    <Route path="/admin/auth/login">
                        <Login />
                    </Route>
                    <Route path="/admin/auth/signup">
                        <h1>Card Signup</h1>
                    </Route>
                    <Route path="/admin/auth/recover">
                        <h1>Card Recover</h1>
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Auth;