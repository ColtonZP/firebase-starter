import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { SignUp } from './SignUp'
import { Dashboard } from './Dashboard'
import { SignIn } from './SignIn'

export const Container = () => {
  const [signUp, toggleSignUp] = useState(true)
  const { user } = useAuth()

  console.log(user)

  return <div className="container">{!user ? signUp ? <SignUp /> : <SignIn /> : <Dashboard />}</div>
}
