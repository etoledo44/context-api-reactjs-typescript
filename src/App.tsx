import React from 'react';

import Routes from './routes/index'
import {AuthProvider} from './contexts/auth'


//o AuthProvider deve ficar por volta de toda a aplicação, para ficar disponiveis os valores do provider
const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;