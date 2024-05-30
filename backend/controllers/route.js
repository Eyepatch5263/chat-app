const User = require("../model/user")
const bcryptjs = require("bcryptjs")
const { generateTokenAndSetCookie } = require("../utilis/generateToken")
const signUp = async (req, res) => {
    try {
        const { name, username, password, gender, email, confirmPassword } = req.body

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" })
        }
        const user = await User.findOne({ username: username, email: email })
        if (user) {
            return res.status(400).json({ error: "User already exists" })
        }

            const salt = await bcryptjs.genSalt(10)
            const hashedPassword = await bcryptjs.hash(password, salt)

            const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${name}`
            const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${name}`
            const newUser = await User.create({ name, username, password: hashedPassword, gender, email, profilePic: gender === "male" ? boyProfilePic : girlProfilePic })
            const token=generateTokenAndSetCookie(newUser)
            res.cookie("token",token)
            return res.status(201).json({message:"User Created successfully"})
        //hash password


    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}

const login = async (req, res) => {
    try {
        const {username,password}=req.body
        const user=await User.findOne({username})
        if(!user){
            return res.status(400).json({error:"User not found"})
        }
        const isMatched=bcryptjs.compare(password,user.password)
        if(!isMatched){
            return res.status(400).json({error:"Invalid Password or username"})
        }
        
            const token=generateTokenAndSetCookie(user)
            res.cookie("token",token)
            return res.status(201).json({message:"User logged in successfully"})
        
    } catch (error) {
        console.log(error)
        res.end({error})
    }
}
const logOut = async (req, res) => {
    try {
        res.clearCookie("jwt")
        res.status(200).json({ message: "User logged out successfully" })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}

module.exports = { login, logOut, signUp }