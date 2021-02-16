import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { Container } from './components/Container'

export const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <Container />
      </div>
    </AuthProvider>
  )
}
