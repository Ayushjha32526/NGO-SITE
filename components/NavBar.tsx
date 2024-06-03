import React from 'react'
import Image from 'next/image'
import { UserButton } from "@clerk/nextjs";
import About from '@/components/About/about'
import Link from 'next/link';
const NavBar = () => {
  return (
    <div className='flex justify-between p-3 px-10 border-b-[3px] shadow-sm'>
        <div className='flex gap-10 items-center'>
          <a href='/'> <Image src='/vitbhopal.png'
           alt='vitbhopal'
            width={120}
           height ={60}></Image>
           </a>
           <div className='hidden md:flex gap-6'>
            <a href='/'><h1 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all' >Home</h1></a>
            <a href='/ '> <h1 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>About</h1></a>
            <h1 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Members</h1>
            <h1 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Contact Us</h1>
           </div>
          
            </div>
            <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default NavBar