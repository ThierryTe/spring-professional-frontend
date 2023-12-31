import { createContext, useState,useContext } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    function login(username,password) {
          if (username === 'tewende' && password === 'password') {
             setIsAuthenticated(true)
            return true
           
        } else {
            setIsAuthenticated(false)
           return false
        }
    }

    function logout() {
       setIsAuthenticated(false)
   }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>

    )
}