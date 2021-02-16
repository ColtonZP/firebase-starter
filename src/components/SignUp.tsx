import React, { useRef } from 'react'

export default function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const passwordConfirmRef = useRef<HTMLInputElement>(null)

  return (
    <div className="sign-up card">
      <h2>Sign Up</h2>
      <form className="sign-up-form" action="">
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" ref={emailRef} required />

        <label htmlFor="password">Password:</label>
        <input id="password" type="password" ref={passwordRef} required />

        <label htmlFor="password-confirm">Confirm Password:</label>
        <input id="password-confirm" type="password" ref={passwordConfirmRef} required />

        <input type="submit" />
      </form>
      <p>
        Have an account? <a href="">Sign in</a>
      </p>
    </div>
  )
}
