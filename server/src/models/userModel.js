const mongoose=require('mongoose')
const userSch=mongoose.Schema({
username:{
    type:String,
    required:true,
    unique:true
},
password:{
type:String,
required:true
}
})

const mod=mongoose.model('Users',userSch)

module.exports=mod
