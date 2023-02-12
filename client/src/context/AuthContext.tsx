import React, {useState, createContext, useContext} from 'react';
import jwtDecode from 'jwt-decode';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface IAuthContext {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  authenticate: (token: string) => void;
}

const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  user: null,
  token: null,
  authenticate: () => {},
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const authenticate = (_token: string) => {
    console.log('XXX');
    
    console.log(_token);
    const _user = jwtDecode<User>(_token);
    setToken(token);
    setUser(_user);
  };

  const value = {
    isAuthenticated: !!user,
    token,
    user,
    authenticate,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
