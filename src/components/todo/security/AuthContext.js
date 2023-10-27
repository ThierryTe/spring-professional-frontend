import { createContext, useState,useContext } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const  [username, setUsername] = useState(null)
    function login(username,password) {
          if (username === 'tewende' && password === 'password') {
              setIsAuthenticated(true)
              setUsername(username)
            return true
           
        } else {
              setIsAuthenticated(false)
              setUsername(null)
           return false
        }
    }

    function logout() {
       setIsAuthenticated(false)
   }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, username}}>
            {children}
        </AuthContext.Provider>

    )
}