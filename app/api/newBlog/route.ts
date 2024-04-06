import { NEXT_AUTH } from "@/lib/next_auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import {BlogModel} from "@/database/model/BlogModel"
import { dbConnect } from "@/database/dbConnect";

export async function POST(req:NextRequest){
    await dbConnect();
    try{
        const {title,content} = await req.json();
    const session = await getServerSession(NEXT_AUTH)
    console.log(session.user.id)
    const user = await BlogModel.create({
        user:session.user.id,
        email:session.user.email,
        image:session.user.image,
        title,
        content,
    })

return NextResponse.json({msg:"Blog Published"})
    }catch(e){
        return NextResponse.json({e})
    }
}