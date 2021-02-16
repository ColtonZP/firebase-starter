import React, { useRef, useState } from 'react'
import { useAuth } from '../context/AuthContext'

type Props = {
  toggleSignUp: React.Dispatch<React.SetStateAction<boolean>>
}

export const SignUp = ({ toggleSignUp }: Props) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)
  const { signUp } = useAuth()
  const [error, setError] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (passwordRef.current!.value !== passwordConfirmRef.current!.value) {
      return setError('Passwords do not match.')
    }
    try {
      setError('')
      setLoading(true)
      await signUp(emailRef.current!.value, passwordRef.current!.value)
    } catch (err) {
      setError('Attempt to sign up failed.')

      console.error(err)
    }
    setLoading(false)
  }

  return (
    <div className="sign-up card">
      <h2>Sign Up</h2>
      {error && <span className="error">{error}</span>}
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" autoComplete="email" ref={emailRef} required />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          ref={passwordRef}
          autoComplete="new-password"
          required
        />

        <label htmlFor="password-confirm">Confirm Password:</label>
        <input
          id="password-confirm"
          type="password"
          autoComplete="new-password"
          ref={passwordConfirmRef}
          required
        />

        <input disabled={loading} type="submit" value="Sign Up" />
      </form>
      <span className="toggleSignUp">
        Have an account?
        <button className="link" onClick={() => toggleSignUp(false)}>
          Sign in
        </button>
      </span>
    </div>
  )
}
