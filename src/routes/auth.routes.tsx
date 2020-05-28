import React, {useContext} from 'react'

import {useAuth} from '../contexts/auth'


const AuthRoutes: React.FC = () => {
    //acessando o contexto
    const { signed, signIn, user } = useAuth()

    function handleSignIn(){
        signIn()
    }


    return(
        <div>
            <h2>Auth route</h2>
            <h3>signin</h3>
            <button onClick={handleSignIn}>Entrar</button>
        </div>
    )
}

export default AuthRoutes