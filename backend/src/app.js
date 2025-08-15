import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
    limit: "10000kb"
}))
app.use(express.static("public"))
app.use(cookieParser())


import postRouter from "./routes/card.routes.js"

app.use("/api/v1/posts", postRouter)

export {app}