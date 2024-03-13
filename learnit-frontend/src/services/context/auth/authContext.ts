import React, { createContext } from "react";

export interface Auth {
  id: number | undefined;
  isLoggedIn: boolean;
}

export interface AuthContextType {
  auth: Auth;
  setAuth: React.Dispatch<Auth>;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
