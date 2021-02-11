import React, { useRef } from 'react';

export default function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <form action="">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" ref={emailRef} required />

        <label htmlFor="password">password</label>
        <input id="password" type="password" ref={passwordRef} required />

        <label htmlFor="password-confirm">password</label>
        <input
          id="password-confirm"
          type="password"
          ref={passwordConfirmRef}
          required
        />

        <input type="submit" />
      </form>
    </div>
  );
}
