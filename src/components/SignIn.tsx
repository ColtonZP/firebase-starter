import React, { useState, useRef } from 'react'
import { useAuth } from '../context/AuthContext'

export const SignIn = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { signUp } = useAuth()
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await signUp(emailRef.current!.value, passwordRef.current!.value)
    } catch {
      setError('Failed to sign in.')
    }
    setLoading(false)
  }

  return (
    <div className="sign-up card">
      <h2>Sign In</h2>
      {error && <span className="error">{error}</span>}
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" ref={emailRef} required />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" ref={passwordRef} required />

        <input disabled={loading} type="submit" value="Sign In" />
      </form>
      <span>
        Need an account? <a href="">Sign in</a>
      </span>
    </div>
  )
}
