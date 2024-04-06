"use client"
// import { useBlog } from "@/hooks";
// import img from "/images.png";
import Link from "next/link";
// import Card from "./Card";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import Blogcard from "@/components/blogCard";
import { useEffect, useState } from "react";
import axios from "axios"
const Blog = () => {
  const session = useSession()
  const [allBlog,setBlog] = useState<any[]>([
    {image:"",
    _id:"",
    title:"",
    content: "",
    email:"",
    user:""}
  ]);
//   const data = {
//     "id": "1f1936e1-c50a-4dd0-9262-8b9814d4bee5",
//     "title": "Kate Middleton’s Doctored Photo is a Sign of Something Much More Serious",
//     "content": "This weekend Kate Middleton, the Princess of Wales, caused a stir in media circles when she published a UK Mother’s Day photo taken by Prince William. The photo shows Kate Middleton with her children in a happy, smiling moment. Several news agencies picked up the photo and distributed it widely.The problem? It turns out the photo was faked — or at least heavily edited.Kate Middleton eventually addressed the controversy, apologizing and stating that, “Like many amateur photographers, I do occasionally experiment with editing.",
//     "published": false,
//     "authorId": "b817f590-0ae6-418b-96a6-7c8bc8109cfa",
//     "createdAt": "2024-03-27T20:52:24.563Z",
//     "author": {
//         "id": "b817f590-0ae6-418b-96a6-7c8bc8109cfa",
//         "email": "aayushkumarhigh@gmail.com",
//         "name": null,
//         "image":"https://lh3.googleusercontent.com/a/ACg8ocLjU0FRSlTbmUZ0xExn4GGCdD1BGwtJLfnJ3E0M7mkcSaUUKYeZ=s96-c",
//         "password": "1234567890",
//         "createdAt": "2024-03-27T20:49:33.891Z"
//     }
// }
useEffect(()=>{
    axios.get("http://localhost:3000/api/getBlog").then((res)=>setBlog(res.data.blog)).catch((e)=>console.log(e))
},[])
console.log(allBlog)
  return (
    <div
     className="flex min-h-[100vh] w-[100vw] flex-col p-28  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]  from-blue-200 to-blue-400">
      <div className="absolute top-9 left-9  font-semibold text-2xl flex justify-center items-center gap-2 ">
        <Link href={"/dashboard"} ><div className="">Community Chat</div></Link>
      </div>
      <div className="absolute top-10  right-8   font-semibold text-xl flex justify-center items-center gap-2">
        <Button
          onClick={()=>signOut()}
          className=" font-bold "
          variant={"outline"}
        >
          SignOut
        </Button>
      </div>
      <Link href={"/createnew"}>
        <div className="absolute top-10 right-36 font-semibold text-xl flex justify-center items-center gap-2">
          <Button className=" font-bold " variant={"outline"}>
            New
          </Button>
        </div>
      </Link>
      <div className=" flex flex-col gap-4 p-14">
        {allBlog && allBlog.map((data,i)=>(
          <Blogcard data={data} key={i}/>
        ))}
      </div>
    </div>
  );
};

export default Blog;

