const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female","weeb"]
    },
    profilePic:{
        type:String,
        default:"",
    }
},{timestamps:true})

const User=mongoose.model("User",userSchema)

module.exports=User