import { createContext, ReactNode, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { setCookie, parseCookies, destroyCookie } from 'nookies';

import { api } from '@/services/apiClient';
import { useEffect } from 'react';

type SigInCredential = {
    l: string;
    p: string;
}

type AuthContextData = {
    signIn(credentials: SigInCredential): Promise<void>;
    signOut(): void;
    isAuthenticated: boolean;
    user: IUser;
}

type AuthProviderProps = {
    children: ReactNode;
}

type IUser = {
    hierarquia: string;
    id_usuario: string;
    login: string;
    nome: string;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
    const router = useRouter();

    const [ user, setUser ] = useState<IUser>({} as IUser);

    const isAuthenticated = !!user;

    useEffect(() => {
        const { '@btr-imoveis:token': token, '@btr-imoveis:user': userLogged } = parseCookies();

        if(userLogged) {
            setUser(JSON.parse(userLogged));
        }
    },[])

    function signOut() {
        destroyCookie(undefined, '@btr-imoveis:token', {
            path: '/'
        });
        destroyCookie(undefined, '@btr-imoveis:user', {
            path: '/'
        });
        router.push('/admin/login');
    }

    async function signIn(usuario: SigInCredential) {
        try {
            const { data } = await api.post('/login', { usuario })

            const userLogged = {
                id_usuario: data.usuario.id_usuario,
                hierarquia: data.usuario.hierarquia,
                login: data.usuario.login,
                nome: data.usuario.nome,
            }

            setUser(userLogged);

            setCookie(undefined, '@btr-imoveis:token', data.token, {
                maxAge: 60 * 60 * 24, // one day  
                path: '/',
            });

            setCookie(undefined, '@btr-imoveis:user', JSON.stringify(userLogged), {
                maxAge: 60 * 60 * 24, // one day  
                path: '/'
            });

            api.defaults.headers['Authorization'] = data.token;

            router.push('/admin/imoveis');
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, signIn, signOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used whithin an AuthProvider');
    }
  
    return context;
}