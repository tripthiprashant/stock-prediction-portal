import { createContext, useContext, useState } from "react"
import React from 'react'

//create context 
const AuthContext=createContext();
function AuthProvider({children}) {
  const [isLoggedIn,setIsLoggedIn] = useState(
    !! localStorage.getItem('accessToken')
  )
  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext};