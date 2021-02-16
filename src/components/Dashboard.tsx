import React from 'react'
import { useAuth } from '../context/AuthContext'

export const Dashboard = () => {
  const { user, signOut } = useAuth()

  function handleLogout() {
    try {
      signOut()
    } catch {
      console.error('error logging out')
    }
  }

  return (
    <div>
      <p>{`${user.email} currently logged in.`}</p>
      <button onClick={handleLogout}>Log out</button>
    </div>
  )
}
