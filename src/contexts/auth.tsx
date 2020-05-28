import React, {createContext, useState, useEffect, useContext} from 'react'
import * as auth from '../services/auth'

//interface para tipar o conteudo 
//interface User, para definir o objeto
interface User{
    name: string;
    email: string;
}

//interface AuthContextData, para definir o tipo de conteudo do Context
interface AuthContexData{
    signed: boolean;
    user: User | null;
    signIn(): Promise<void>;
    logOut(): void;
    load: boolean;
}

/************ */

//definindo o contexto, e passando a interface como tipo <Tipo>
const AuthContext = createContext<AuthContexData>({} as AuthContexData)

//Definindo o provider que ficara por volta da aplicacao -- o children são os filhos que ficaram por dentro desse componente, no App.tsx
export const AuthProvider: React.FC = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [load, setLoad] = useState<boolean>(false)

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
        //ao usar !! transforma a variavel em boolean, mesmo que usar Boolean(user)
        //no value sao enviados as variaveis ou funcoes que poderam ser usadas nos componentes filhos
        <AuthContext.Provider value={{signed: !!user, signIn, user, logOut, load}}>
            {children}
        </ AuthContext.Provider>
    )
}


//criando um hook para usar nos componentes
export function useAuth(){
    const context = useContext(AuthContext)

    //dentro do context de rotorno estao as variaveis que podem ser acessadas usando o useAuth
    return context
}