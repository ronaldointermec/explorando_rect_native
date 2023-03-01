import React, {createContext, useState} from 'react';

export const AuthContext = createContext({});

function AuthProvider({children}: {children: any}) {
  const [user, setUser] = useState({});

  function signIn(email: any, password: any, navigation: any) {
    if (email !== '' && password !== '') {
      setUser({
        email: email,
        status: 'Ativo',
      });
      navigation.navigate('Home');
    }
  }

  return (
    <AuthContext.Provider value={{name: 'Bruna Oliveira', signIn, user}}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
