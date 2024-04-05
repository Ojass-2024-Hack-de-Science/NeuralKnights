"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import {RecoilRoot} from "recoil"
const Providers = ({children}:{children:React.ReactNode}) => {
  return (
    <SessionProvider>
      <RecoilRoot>
        {children}
      </RecoilRoot>
    </SessionProvider>
  )
}

export default Providers