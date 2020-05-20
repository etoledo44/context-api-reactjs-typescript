import React from 'react';
import {useAuth} from '../contexts/auth'


const AppRoutes: React.FC = () => {
  const {logOut, user} = useAuth()


  function handleLogOut(){
    logOut()
  }

  return(
      <div>
        <h2>Approute</h2>
        <p>dashboard</p>
        <small>{user?.name}</small>
        <button onClick={handleLogOut}>sair</button>

      </div>
  );
}

export default AppRoutes;