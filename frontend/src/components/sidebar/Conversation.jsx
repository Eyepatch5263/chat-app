import React from 'react'

const Conversation = () => {
    return (
        <>
        <div className='flex gap-2 items-center hover:bg-pink-500 rounded py1 p-2 cursor-pointer'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt='user-avatar'/>
                </div>
            </div>
            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>Eyepatch</p>
                    <span className='text-xl'>😣</span>
                </div>
            </div>
        </div>
        <div className='divider my-0 py-0 h-1'/>
        </>
    )
}

export default Conversation
