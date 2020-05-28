import React from 'react';
import {useAuth} from '../contexts/auth'


const AppRoutes: React.FC = () => {
  const {logOut, user} = useAuth()

  function handleLogOut(){
    logOut()
  }

  return(
      <div>
        <h2>App route</h2>
        <h3>dashboard</h3>
        <h4>Bem-vindx, <small>{user?.name}</small></h4><br/>
        <button onClick={handleLogOut}>sair</button>
      </div>
  );
}

export default AppRoutes;