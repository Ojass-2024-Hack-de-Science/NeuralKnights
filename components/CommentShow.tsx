import React from 'react'
import Image from "next/image"
const CommentShow = ({data}:any) => {
    console.log(data)
  return (
    <div>
        <div className=' flex gap-3 text-slate-500'><Image src={data.image} alt='img' width={20} height={20} className=' rounded-full'/><div>{data.email}</div></div>
        <div className=' font-medium px-10'>{data.comment}</div>
    </div>
  )
}

export default CommentShow