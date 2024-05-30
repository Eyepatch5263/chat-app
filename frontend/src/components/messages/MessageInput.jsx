import React from 'react'
import { IoSend } from "react-icons/io5";

const MessageInput = () => {
    return (
        <form className='px-4 my-4'>
            <div className='w-full relative'>
                <input type="text" 
                className='border text-md rounded-3xl block w-full p-2.5 bg-pink-500 border-pink-400 text-white placeholder:"Send a message'
                />
                <button type='submit' className='absolute inset-y-0 end-0 items-center pe-3'>
                    <IoSend className='text-white w-5 h-5' />
                </button>
            </div>
        </form>
    )
}

export default MessageInput
