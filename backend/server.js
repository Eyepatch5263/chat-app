const express=require('express')
const path=require('path')
const dotenv=require("dotenv")
dotenv.config()
const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')
const PORT=process.env.PORT
const {connectToMongoDb}=require("./db/connectionToMongoDb")
const authRoutes=require('./routes/routes')
const messageRoutes=require('./routes/message')
const userRoutes=require('./routes/userRouter')
const { app,server } = require('./socket/socket')


//middlewares
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(bodyParser())
connectToMongoDb()

var __dirname = path.resolve();


app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*",(req,res)=>{
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
})

server.listen(PORT,()=>{
    console.log(`server is running on ${PORT} `)
})