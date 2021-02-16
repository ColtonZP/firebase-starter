import React, { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
import { UserInfo } from '@firebase/auth-types'

const defaultUser: UserInfo = {
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  providerId: '',
  uid: '',
}

const AuthContext = createContext({
  user: defaultUser,
  signUp: (email: string, password: string) => {},
  signIn: (email: string, password: string) => {},
  signOut: () => {},
})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<UserInfo>(defaultUser)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((newUser) => {
      if (newUser) {
        setUser({
          displayName: newUser!.displayName,
          email: newUser!.email,
          phoneNumber: user!.phoneNumber,
          photoURL: newUser!.photoURL,
          providerId: newUser!.providerId,
          uid: newUser!.uid,
        })
      } else {
        setUser(defaultUser)
      }
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

  function signOut() {
    return auth.signOut()
  }

  const value = {
    user,
    signUp,
    signIn,
    signOut,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
