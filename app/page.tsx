"use client"
import { SignUp } from '@/components/SignUp'
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      {JSON.stringify(session)}
      <SignUp />
    </div>
  );
    <main className="w-full  flex justify-center items-center h-[100dvh]  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-rose-100">
      <SignIn />
    </main>
  );
}
