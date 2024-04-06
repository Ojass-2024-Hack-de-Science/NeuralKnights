import { NEXT_AUTH } from "@/lib/next_auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import {BlogModel} from "@/database/model/BlogModel"
import { dbConnect } from "@/database/dbConnect";

export async function POST(req:NextRequest){
    await dbConnect();
    try{
        const {id} = await req.json();
        const data = await BlogModel.findOne({
            _id:id
        })
return NextResponse.json({data})
    }catch(e){
        return NextResponse.json({e})
    }
}