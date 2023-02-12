import React, {createContext, useContext, useMemo} from 'react';
import axios, {AxiosInstance} from 'axios';
import {useAuth} from './AuthContext';

interface IRequestContext {
  axios: AxiosInstance;
}

const url = 'http://localhost:3000/api';

const RequestContext = createContext<IRequestContext>({
  axios: axios.create({
    baseURL: url,
  }),
});

export function useRequest() {
  return useContext(RequestContext);
}

export function RequestProvider({children}: {children: React.ReactNode}) {
  const {token} = useAuth();
  const axiosValue = useMemo(() => {
    const headers = token ? {Authorization: `Bearer ${token}`} : {};
    return axios.create({
      baseURL: url,
      headers,
    });
  }, [token]);

  const value = {
    axios: axiosValue,
  };

  return (
    <RequestContext.Provider value={value}>{children}</RequestContext.Provider>
  );
}
