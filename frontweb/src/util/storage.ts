type LoginResponse = {
    access_token :  string,
    token_type: string,
    expires_in: number,
    scope: string,
    userFirstName: string,
    userId: number
}

const tokenKey = 'authData';

/// :: Salvar dados do login/token no localStorage.
export const saveAuthData = (obj : LoginResponse) => {
    localStorage.setItem(tokenKey, JSON.stringify(obj));
}

/// :: Pegar dados do login/token no localStorage.
export const getAuthData = () => {
    const str = localStorage.getItem(tokenKey) ?? '{}';
    return JSON.parse(str) as LoginResponse;
}

/// :: Remover dados do login/token no localStorage.
export const removeAuthData = () => {
    localStorage.removeItem(tokenKey);
}