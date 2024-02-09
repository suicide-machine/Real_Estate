import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRouter from "./Routes/auth.route.js"
dotenv.config()

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to mongoDB")
  })
  .catch((err) => {
    console.log(err)
  })

const app = express()

// to make input as json
app.use(express.json())

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

app.use("/api/auth", authRouter)
