const express=require('express')
const app=express()
const dotenv =require('dotenv')
dotenv.config({path:'./.env'})
const web=require('./routes/web')
app.use(express.json())
const connectdb=require('./db/connectdb')


const fileUpload = require("express-fileupload"); 

//Temp file uploader
app.use(fileUpload({useTempFiles: true}));
app.use(express.urlencoded({extended:true}));
const cookieparser=require('cookie-parser')
app.use(cookieparser())
connectdb()

const session = require('express-session')
app.use(session({
  secret: 'secret',
  cookie: { maxAge: 60000 },
  resave: false,
  saveUninitialized: false,
}));
app.use('/',web)
// //server create
app.listen(process.env.PORT,()=>{
  console.log(`server running on localhost: ${process.env.PORT}`)
})
// PORT = 4000
