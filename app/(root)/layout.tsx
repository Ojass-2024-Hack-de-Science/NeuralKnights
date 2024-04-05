
import React from 'react'
import Chatbot from './chatbot'

const layout = ({children}:{children:React.ReactNode}) => {

  return (
    <div>
      <Chatbot/>
{children}
        </div>
  )
}

export default layout