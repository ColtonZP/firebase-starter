import React, { useState, useRef } from 'react'
import { useAuth } from '../context/AuthContext'

type Props = {
  toggleSignUp: React.Dispatch<React.SetStateAction<boolean>>
}

export const SignIn = ({ toggleSignUp }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const { signIn } = useAuth()
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await signIn(emailRef.current!.value, passwordRef.current!.value)
    } catch (err) {
      setError('Failed to sign in.')
      console.error(err)
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
      <span className="toggleSignUp">
        Need an account?
        <button className="link" onClick={() => toggleSignUp(true)}>
          Sign up
        </button>
      </span>
    </div>
  )
}
