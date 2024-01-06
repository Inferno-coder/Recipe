const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
app.use(express.json())
app.use(cors())
app.listen(3001,()=>console.log("Server Started"))
console.log('pradeep is best coder');