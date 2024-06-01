const jwt=require('jsonwebtoken')

const generateTokenAndSetCookie=(user,res)=>{
    const payload={
        _id:user._id,
        name:user.name,
        email:user.email,
        profilePic:user.profilePic
    }
    const token=jwt.sign(payload,process.env.JWT_SECRET_KEY,{expiresIn:"15d"})
    res.cookie("token",token,{
        maxAge:1000*60*60*24*7,
        httpOnly:true,
        sameSite:"strict",
        secure:process.env.NODE_ENV!=="development"

    })
}

module.exports={generateTokenAndSetCookie}