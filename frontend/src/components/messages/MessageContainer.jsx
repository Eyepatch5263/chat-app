import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { LuMessagesSquare } from "react-icons/lu";
import useConversation from '../../zustand/useConversation';
import { useAuthContext } from '../../../context/AuthContext';

const MessageContainer = () => {
    const {selectedConversation,setSelectedConversation}= useConversation()
    useEffect(()=>{
        //clean the selected chat after log out
        return ()=>setSelectedConversation(null)
    },[setSelectedConversation])
    return (
        <div style={{width:"700px"}} className='md:min-w[450px] flex flex-col'>
            { !selectedConversation?<NoChatSelected/>:<>
            <div className='bg-pink-600 px-4 py-4 mb-2'>
                <span className='text-white text-lg'>{selectedConversation.name}</span>
            </div>
            <Messages/>
            <MessageInput/>
            </>}
        </div>
    )
}

const NoChatSelected=()=>{
    return(
        <div style={{width:"700px"}} className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome 👋 Eyepatch</p>
                <p>Select a chat to start messaging</p>
                <LuMessagesSquare className='text-3xl md:text-6xl text-center'/>

            </div>
        </div>
    )
}

export default MessageContainer
