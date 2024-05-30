const Conversation = require("../model/conversation")
const Message = require("../model/message")
const cookieParser=require('cookie-parser')
const express=require("express")
const app=express()
const sentMessage=async(req,res)=>{
    cookieParser()

    try {
        const {message}=req.body
        const receiverId=req.params.id //receiver id
        console.log("RID",receiverId)
        const senderId=req.user._id
        let conversation=await Conversation.findOne({
            participants:{$all:[senderId,receiverId]}
        })

        if(!conversation){
            conversation= await Conversation.create({
                participants:[senderId,receiverId],
            
            })
        }
            const newMessage=await Message.create({
                senderId,
                receiverId,
                message
            })
            if(newMessage){
                conversation.messages.push(newMessage._id)
            }
            await conversation.save()
            res.status(201).json({newMessage})
        

    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal server error"})
    }
}

const getMessages=async(req,res)=>{
    try {
        const userToChatId=req.params.id
        const senderId=req.user._id
        const conversation=await Conversation.findOne({
            participants:{$all:[senderId,userToChatId]}
        }).populate("messages")
        if(!conversation){
            return res.status(404).json({error:"No conversation found"})
        }
        const messages=conversation.messages
        res.status(200).json(messages)

    } catch (error) {
        console.log(error)
        return res.status(500).json({error:"Internal server error"})
    }
}
module.exports={sentMessage,getMessages}