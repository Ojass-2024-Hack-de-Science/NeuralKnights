import { NextResponse } from "next/server";
import Payment from "../../../components/database/model/Payment";
import dbConnect from "../../../components/database/database";
export async function POST(req, res) {
  const { email } = await req.json();
  try {
    await dbConnect();
    const isExist = await Payment.findOne({ email });
    if (isExist) {
      return NextResponse.json(
        {
          message: "Yes, the user exists",
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "No, the user does not exist",
        },
        {
          status: 404,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error fetching data",
      },
      {
        status: 500,
      }
    );
  }
}
