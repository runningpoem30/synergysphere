// SignInPage.jsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react';

export default function SignInPage() {
  return (
    <div style={{ margin: '100px auto', width: '300px' }}>
      <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
    </div>
  );
}