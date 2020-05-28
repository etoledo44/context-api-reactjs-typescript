import React, {useContext} from 'react'
import {useAuth} from '../contexts/auth'

import AppRoutes from './app.routes'
import AuthRoutes from './auth.routes'

const Routes: React.FC = () => {
  const {signed, load} = useAuth()

  if(load){
    return(
      <h2>carregando...</h2>
    )
  }
  //usando ternário para validar qual rota será mostrada de acordo com o resultado do signed
  return signed ? <AppRoutes /> : <AuthRoutes />
    
}

export default Routes;