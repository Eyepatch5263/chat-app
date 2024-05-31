import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useConversation from '../../zustand/useConversation';
import useGetConversation from '../../Hooks/useGetConversation';
import toast from 'react-hot-toast';

function SearchInput() {
  const [search, setSearch] = useState("")
  const { setSelectedConversation } = useConversation()
  const { conversations } = useGetConversation()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!search) return;
    if (search.length < 3) return toast.error("Searched Item must be 3 characters long")
    const searchedConversation = conversations.find((e) => e.name.toLowerCase().includes(search.toLowerCase()))
    if(searchedConversation){
    setSelectedConversation(searchedConversation)
    setSearch("")
    }
    else{
      toast.error("No user found")
  }

  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex py-2 px-2 items-center gap-2'>
        <input value={search} onChange={(e) => { setSearch(e.target.value) }} type='text' placeholder='Search' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-pink-600 hover:bg-pink-500 text-white'>
          <IoSearch className='w-5 h-5' />
        </button>
      </form>
    </div>
  )
}

export default SearchInput
