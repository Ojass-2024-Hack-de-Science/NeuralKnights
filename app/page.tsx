import { SignIn } from '@/components/SignIn'
import { Button } from '@/components/ui/button'
import { NEXT_AUTH } from '@/lib/next_auth'
import { getServerSession } from 'next-auth'
import { signOut } from 'next-auth/react'

const page = async() => {
  const sessionInServer =await getServerSession(NEXT_AUTH)
  return (<div>
          {JSON.stringify(sessionInServer)}
 <main className="w-full  flex justify-center items-center h-[100dvh]  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white to-rose-100">
  <SignIn/>
  </main>
 </div>)
}


{/* <div>
      server -&gt; {JSON.stringify(sessionInServer)}
      <SignIn/>
</div> */}

export default page