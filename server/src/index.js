const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const {userRouter} = require('./routes/userRoute')
const app=express()

app.use(express.json())
app.use(cors())
//app.use('/auth',userRouter)

mongoose.connect('mongodb+srv://pradeepceo18:SgCeRSlTfFekCkWH@recipes.e6ex1ag.mongodb.net/Recipes?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })

app.listen(3001,()=>console.log("Server Started"))
console.log('pradeep is best coder');