import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext({
  user: null,
  signUp: (email: string, password: string) => {},
})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((newUser) => {
      setUser(newUser)
    })

    return unsubscribe
  }, [])

  function signUp(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const value = {
    user,
    signUp,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
