import mongoose from "mongoose";

export async function dbConnect() {
    try {
        const {connection} = await mongoose.connect(process.env.DATABASE_URL)
        console.log("Database connected",connection.host)
    } catch (error) {
        console.log(connection)
    }
}