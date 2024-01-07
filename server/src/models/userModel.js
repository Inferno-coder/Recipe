const mongoose=require('mongoose')
const userSch=new mongoose.Schema({
username:{
    type:String,
    required:true
},
password:{
type:String,
required:true
}
})

const mod=mongoose.model('Users',userSch)

module.exports=mod 
