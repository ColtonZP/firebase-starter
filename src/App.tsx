import React from 'react'
import { SignUp } from './components/SignUp'
import { AuthProvider } from './context/AuthContext'

export const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <div className="container">
          <SignUp />
        </div>
      </div>
    </AuthProvider>
  )
}
