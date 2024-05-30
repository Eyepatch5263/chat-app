import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
    return (
        <div className='border-r border-pink-600 p-4 flex flex-col'>
            <SearchInput />
            <div className='divider px-3 py-0 my-0'></div>
            <Conversations />
            <LogoutButton/> 
        </div>
    )
}

export default Sidebar
