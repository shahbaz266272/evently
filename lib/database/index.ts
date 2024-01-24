import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

let chached = (global as any).mongoose || { con: null, promise: null }

export const connectToDatabase = async () => {
  if (chached.conn) return chached.conn

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing!")

  chached.promise =
    chached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    })

  chached.conn = await chached.promise

  return chached.conn
}
