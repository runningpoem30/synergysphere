import React from 'react'
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp, UserButton } from '@clerk/clerk-react'
import Dashboard from './Dashboard'

const clerkFrontendApi = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

export default function Auth() {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
     
      <SignedIn>
        <UserButton />  
        <Dashboard />   
      </SignedIn>

     
      <SignedOut>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px', margin: 'auto', marginTop: '100px' }}>
          <SignIn
            routing="path"           // default routing mode
            path="/sign-in"
            signUpUrl="/sign-up"
          />
          <SignUp
            routing="path"
            path="/sign-up"
            redirectUrl="/"          // redirect after successful signup
          />
        </div>
      </SignedOut>
    </ClerkProvider>
  )
}
