import React from 'react'
import Message from './Message'
import useGetMessages from '../../Hooks/useGetMessages'
import MessageSkeleton from '../skeletons/MessageSkeleton'

function Messages() {
    const {loading,messages}=useGetMessages()
    return (
        <div  className='px-4 flex-1 overflow-auto '>
            {loading && [...Array(3)].map((_,idx)=><MessageSkeleton key={idx}/>)}
        
        {!loading && messages.length===0 &&(
            <p className='text-center'> Send a message to start a conversation</p>
        )}
        </div>
    )
}

export default Messages
