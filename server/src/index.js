const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const userRouter=require('./routes/userRoute')
const recipeRoute=require('./routes/recipesRoute');
const app=express()

app.use(express.json())
app.use(cors())
app.use('/auth',userRouter)
app.use('/recipes',recipeRoute)
mongoose.connect('mongodb+srv://pradeepceo18:SgCeRSlTfFekCkWH@recipes.e6ex1ag.mongodb.net/Recipes?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true })

app.listen(3001,()=>console.log("Server Started"))
