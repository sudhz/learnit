import React, { createContext, useContext, useState } from "react";

export interface Auth {
  id: number | undefined;
  isLoggedIn: boolean;
}

export interface AuthContextType {
  auth: Auth;
  setAuth: React.Dispatch<Auth>;
}

export const useAuthContext = (): AuthContextType => {
  const [auth, setAuth] = useState<Auth>({
    id: undefined,
    isLoggedIn: false,
  });
  const AuthContext = createContext<AuthContextType>({ auth, setAuth });
  return useContext<AuthContextType>(AuthContext);
};
