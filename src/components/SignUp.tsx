import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'

export const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)
  const { signUp, user } = useAuth()
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (passwordRef.current!.value !== passwordConfirmRef.current!.value) {
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      await signUp(emailRef.current!.value, passwordRef.current!.value)
    } catch {
      setError('Attempt to sign up failed')
    }
    setLoading(false)
  }

  return (
    <div className="sign-up card">
      <h2>Sign Up</h2>
      {error && <span className="error">{error}</span>}
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" ref={emailRef} required />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" ref={passwordRef} required />

        <label htmlFor="password-confirm">Confirm Password:</label>
        <input id="password-confirm" type="password" ref={passwordConfirmRef} required />

        <input disabled={loading} type="submit" />
      </form>
      <p>
        Have an account? <a href="">Sign in</a>
      </p>
    </div>
  )
}
