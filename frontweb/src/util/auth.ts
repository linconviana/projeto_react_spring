import jwtDecode from 'jwt-decode';
import { getAuthData } from './storage';

export type Role = 'ROLE_OPERATOR' | 'ROLE_ADMIN';

export type TokenData = {
    exp: number,
    user_name: string,
    authorities: Role[]
}

export const getTokenData = () : TokenData | undefined => {

    try{
        return jwtDecode(getAuthData().access_token) as TokenData;
    }
    catch(error){
        return undefined;
    }
}

export const isAuthenticated = () : boolean => {

    /// :: Pegar dados do token
    const tokenData = getTokenData();

    /// :: Verificar se o token ja expirou
    return (tokenData && tokenData.exp * 1000 > Date.now()) ? true :  false;
}

/// :: Verificar se o usuario tem permissões / roles
export const hasAnyRoles = (roles: Role[]) : boolean => {

    if(roles.length === 0){
        return true;
    }
    
    const tokenData = getTokenData();

    if(tokenData !== undefined){
        return roles.some(role => tokenData.authorities.includes(role));
    }

    return false;
}