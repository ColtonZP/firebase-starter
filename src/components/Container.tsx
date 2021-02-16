import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { SignUp } from './SignUp'
import { Dashboard } from './Dashboard'
import { SignIn } from './SignIn'

export const Container = () => {
  const [signUp, toggleSignUp] = useState<boolean>(true)
  const { user } = useAuth()

  return (
    <>
      {!user.email ? (
        <div className="container">
          {signUp ? <SignUp toggleSignUp={toggleSignUp} /> : <SignIn toggleSignUp={toggleSignUp} />}
        </div>
      ) : (
        <Dashboard />
      )}
    </>
  )
}
