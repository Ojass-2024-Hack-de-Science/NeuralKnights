import { SignUp } from '@/components/SignUp';
import React from 'react'

const SignupPage = () => {
  return (
    <main className="w-full  flex flex-col justify-center items-center h-[100dvh]  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-rose-100">
      <SignUp />
    </main>
  );
}

export default SignupPage