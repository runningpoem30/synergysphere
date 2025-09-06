// SignUpPage.jsx
import React from 'react';
import { SignUp } from '@clerk/clerk-react';

export default function SignUpPage() {
  return (
    <div style={{ margin: '100px auto', width: '300px' }}>
      <SignUp routing="path" path="/sign-up" redirectUrl="/" />
    </div>
  );
}