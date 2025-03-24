import React from 'react';
import { FaSearch } from 'react-icons/fa';

function Search() {
  return (
     <div className='p-4 bg-[#0a0d17] rounded-lg shadow-md'>
     <div className='relative mt-1 flex items-center gap-2'>
       <input
         type='text'
         id='Search'
         placeholder='Search profiles...'
         className='w-full rounded-lg border border-[#1a1e2e] bg-[#0F172A] p-2.5 pl-10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300'
       />
       <span className='absolute inset-y-0 right-2 flex items-center justify-center text-[#1e90ff] cursor-pointer hover:text-white transition'>
         <FaSearch className='size-5' />
       </span>
     </div>
   </div>
  );
}

export default Search;
