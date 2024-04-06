import { dbConnect } from "@/database/dbConnect";
import { BlogModel } from "@/database/model/BlogModel";
import { NEXT_AUTH } from "@/lib/next_auth";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    await dbConnect()
    try {
        const session = await getServerSession(NEXT_AUTH);
        console.log(session)
        const { comment, id } = await req.json();
        const content: any = {
            comment,
            email: session.user.email,
            image: session.user.image,
            createdAt:new Date()
        }
        const blog = await BlogModel.updateOne({ _id: id }, { $push: { comment: content } });
        return NextResponse.json({ blog });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
