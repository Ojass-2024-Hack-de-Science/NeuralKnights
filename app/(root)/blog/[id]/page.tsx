"use client";
import Comment from "@/components/comment";
import CommentShow from "@/components/CommentShow";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Params {
  id: string;
}
const BlogPage = ({ params }: { params: Params }) => {
  const { id } = params;
  const [blog, setBlog] = useState({
    email: "",
    content: "",
    title: "",
    comment: [],
  });
  // const blog = {
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
  useEffect(() => {
    axios
      .post("http://localhost:3000/api/getblogid", { id })
      .then((res) => setBlog(res.data.data))
      .catch((e) => console.log(e));
  }, [id]);
  return (
    <div className=" ">
      <div className="w-[100vw] flex justify-center items-center min-h-[100vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]  from-blue-200 to-blue-400">
        <Link href={"/blog"}>
          <div className="absolute top-9 left-9  font-semibold text-xl flex justify-center items-center gap-2">
            <div>{blog.email}</div>
          </div>
        </Link>
        <div className="w-[60%] min-h-[100vh] flex flex-col p-32">
          <h1 className=" text-4xl font-extrabold tracking-wide">
            {blog.title}
          </h1>
          {/* <h5 className="py-3 text-slate-600 text-sm">Posted on {CreatedDate.monthName} {CreatedDate.date},{CreatedDate.year}</h5> */}
          <div className=" text-slate-800">
            {blog.content?.split(".").map((item, i) => (
              <div key={i}>{item}.</div>
            ))}
          </div>
          <div className=" text-xl font-semibold p-3">Comment</div>
          <div className="p-1">
  <Comment id={id} />
  {[...blog.comment].reverse().map((data, i) => {
    return <CommentShow data={data} key={i} />;
  })}
</div>

        </div>
        <div className=" min-h-[140vh] bg-slate-300">
          <div className="w-[60%] h-full  flex  flex-col p-32 gap-2">
            <div className=" font-semibold tracking-wider  text-md">Author</div>
            <div className=" flex  items-center gap-2">
              <div className=" font-semibold text-xl">{blog.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
