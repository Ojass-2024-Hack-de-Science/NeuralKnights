"use client"
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { FcApproval } from "react-icons/fc";
import axios from "axios";
import CommentShow from "./CommentShow";

const Comment = ({id}:any) => {
const [comment,setComment] = useState("");
    const handler =async ()=>{
      if(comment==""){
        return null
      }
        try {
            const data = await axios.post("http://localhost:3000/api/addComment",{id,comment})
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="p-4">
      <div className=" flex gap-1">
        <Input onChange={(e)=>{setComment(e.target.value)}} />
        <Button onClick={handler} variant={"secondary"}>
        <FcApproval size={30}/>
        </Button>
      </div>
    </div>
  );
};

export default Comment;
