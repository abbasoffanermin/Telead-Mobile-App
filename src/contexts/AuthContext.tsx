import React, {createContext, useState, useContext} from 'react';

interface AuthContextType {
  isAuth: boolean;
  setIsAuth: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuth: false,
  setIsAuth: () => {},
});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
