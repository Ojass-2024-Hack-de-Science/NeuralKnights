
import {User} from "@/database/model/User"
import { dbConnect } from "@/database/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod"
import bcrypt from "bcrypt"
export async function POST(req:NextRequest) {
    await dbConnect();
    const signup = z.object({
        username:z.string(),
        email:z.string().email(),
        password:z.string()
    })
    try {
        const body = await req.json();
        console.log(body)
        const validField = signup.safeParse(body);
        if(!validField.success)
        {
            return NextResponse.json({msg: "Enter all fields"});
        }
        const {username,email,password} = validField.data
        const hashedPassword = await bcrypt.hash(password,10)
        const data = await User.create({
                username,
                email,
                password:hashedPassword
        })
        return NextResponse.json({msg:"User created",data})
    } catch (error) {
        console.log(error)
        return NextResponse.json({msg:error})
    }
    
}