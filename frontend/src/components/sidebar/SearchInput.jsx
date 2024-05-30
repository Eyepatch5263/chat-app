import React from 'react'
import { IoSearch } from "react-icons/io5";

function SearchInput() {
  return (
    <div>
    <form className='flex py-2 px-2 items-center gap-2'>
        <input type='text' placeholder='Search' className='input input-bordered rounded-full'/>
        <button type='submit' className='btn btn-circle bg-pink-600 hover:bg-pink-500 text-white'>
        <IoSearch className='w-5 h-5'/>
        </button>
    </form>
    </div>
  )
}

export default SearchInput
