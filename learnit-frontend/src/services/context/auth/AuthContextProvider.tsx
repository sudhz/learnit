import { useState } from "react";
import { Auth, AuthContext } from "./authContext";

const AuthContextProvider = ({ children }: { children: JSX.Element }) => {
  const [auth, setAuth] = useState<Auth>({ id: undefined, isLoggedIn: false });
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
