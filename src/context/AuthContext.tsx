import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { UserInfo } from '@firebase/auth-types'

const AuthContext = React.createContext({
  user: { email: '' },
  signUp: (email: string, password: string) => {},
  signIn: (email: string, password: string) => {},
})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<any>({ email: '' }) // ! fix any, user only null or UserInfo?
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((newUser) => {
      setUser(newUser)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  function signUp(email: string, password: string) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function signIn(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const value = {
    user,
    signUp,
    signIn,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
