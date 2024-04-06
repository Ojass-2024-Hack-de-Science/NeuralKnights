import { dbConnect } from "@/database/dbConnect";
import { BlogModel } from "@/database/model/BlogModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
    await dbConnect()
    try {
        const blog = await BlogModel.find({}).sort({createdAt:-1});
        return NextResponse.json({blog})
    } catch (e) {
        return NextResponse.json({e})
    }
}