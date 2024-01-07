const mongoose=require('mongoose')
const userSch=new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    savedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  });

const mod=mongoose.model('Users',userSch)

module.exports=mod 
