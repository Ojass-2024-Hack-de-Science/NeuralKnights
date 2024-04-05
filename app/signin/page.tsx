import { SignIn } from '@/components/SignIn'
import { NEXT_AUTH } from '@/lib/next_auth'
import { getServerSession } from 'next-auth'

const page = async() => {
  const sessionInServer =await getServerSession(NEXT_AUTH)
  return (
<div>
      server -&gt; {JSON.stringify(sessionInServer)}
      <SignIn/>
</div>
  )
}

export default page