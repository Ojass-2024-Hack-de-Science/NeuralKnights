import { User } from "@/database/model/User";
import { NEXT_AUTH } from "@/lib/next_auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import * as z from "zod"
import bcrypt from "bcrypt"
export async function POST(req:NextRequest){
    const password = z.object({
        oldPassword:z.string(),
        newPassword:z.string()
    })
    const session = await getServerSession(NEXT_AUTH)
    try {
        const validField = password.safeParse(req.json())
        if(!validField.success){
            return NextResponse.json({msg:"Enter all field"})
        }
        const {oldPassword,newPassword} = validField.data
        const user = await User.findOne({
            id:session.user.id
        })
        if(!user){
            return NextResponse.json({msg:"User not found"})
        }
        const isMatch = await bcrypt.compare(user.password,oldPassword)
        if(!isMatch){
            return NextResponse.json({msg:"Wrong Password"})
        }
        const hashedPassword = await bcrypt.hash(newPassword,10);
        const userUpdated = await User.updateOne({
                id:session.user.id
        },{password:hashedPassword})
        return NextResponse.json({msg:"Password Changed"})
    } catch (error) {
        return NextResponse.json({msg:error})
    }
}