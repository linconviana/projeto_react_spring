import { Redirect, Route } from "react-router-dom";
import { hasAnyRoles, isAuthenticated, Role } from "util/auth";

type Props = {
    children: React.ReactNode;
    path: string;
    roles?: Role[]
}

const PrivateRoute = ({children, path, roles = []} : Props) => {
debugger
    return(
        <>
            {/*Location para armazenar rotas digitadas na url e apos logar redirecionar para ela. */}
            <Route
                path={path}
                render = {({location}) =>

                    /// :: Não Autenticado vai para login
                    !isAuthenticated() 
                    ? 
                        <Redirect to={{ pathname: '/admin/auth/login', state: {from: location} }} /> 
                    :  
                    /// :: Autenticado mas sem permissão vai para productts            /// :: Autenticado e com role vai para a pagina
                    !hasAnyRoles(roles) ? <Redirect to='/admin/products' /> : children
                    /// :: !hasAnyRoles(["ROLE_ADMIN"]) ? <Redirect to='/admin/products' /> : children
                
                }
            />
        </>
    );
}

export default PrivateRoute;