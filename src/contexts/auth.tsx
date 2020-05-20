import React, {createContext, useState, useEffect, useContext} from 'react'
import * as auth from '../services/auth'
import { resolve } from 'url'

//interface para tipar o conteudo 
interface User{
    name: string;
    email: string;
}


interface AuthContexData{
    signed: boolean;
    user: User | null;
    signIn(): Promise<void>;
    logOut(): void;
    load: boolean;
}

/************ */

//definindo o contexto
const AuthContext = createContext<AuthContexData>({} as AuthContexData)

//Definindo o provider que ficara por volta da aplicacao
export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [load, setLoad] = useState<boolean>(true)

    useEffect(()=>{
        async function loadStorageData(){
            const storageUser = localStorage.getItem('@ReactAuth:user')
            const storageToken = localStorage.getItem('@ReactAuth:token')

            if(storageUser && storageToken){
                setUser(JSON.parse(storageUser))
                setLoad(false)
            }
        }
        loadStorageData()
    }, [])


    async function signIn(){
        const response = await auth.signIn()
        localStorage.setItem('@ReactAuth:user', JSON.stringify(response.user))
        localStorage.setItem('@ReactAuth:token', response.token)
        setUser(response.user)
    }

    function logOut(){
        localStorage.removeItem('@ReactAuth:user')
        localStorage.removeItem('@ReactAuth:token')
        setUser(null)
    }

    return(
        //ao usar !! transforma a variavel em boolean, mesmo que Boolean(user)
        <AuthContext.Provider value={{signed: !!user, signIn, user, logOut, load}}>
            {children}
        </ AuthContext.Provider>
    )

}


//criar hook
export function useAuth(){
    const context = useContext(AuthContext)

    return context
}