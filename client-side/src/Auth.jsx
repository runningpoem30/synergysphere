// Auth.jsx
import React from 'react';
import { 
  ClerkProvider, 
  SignedIn, 
  SignedOut, 
  UserButton 
} from '@clerk/clerk-react';
import { Routes, Route } from 'react-router-dom';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';

const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export default function Auth() {
  return (
    <ClerkProvider 
      frontendApi={clerkFrontendApi}
      navigate={(to) => window.history.pushState(null, '', to)}
    >
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
        {/* Your protected content here */}
      </SignedIn>
      
      <SignedOut>
        <Routes>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
        </Routes>
      </SignedOut>
    </ClerkProvider>
  );
}