import React, {useContext} from 'react'

import {useAuth} from '../contexts/auth'


const AuthRoutes: React.FC = () => {
    //acessando o contexto
    const { signed, signIn, user } = useAuth()
    console.log('*** contexto',signed)
    console.log('*** contexto user', user)

    function handleSignIn(){
        signIn()
    }


    return(
        <div>
            <h1>Auth route</h1>
            <h3>signin</h3>
            <button onClick={handleSignIn}>Entrar</button>
        </div>
    )
}

export default AuthRoutes