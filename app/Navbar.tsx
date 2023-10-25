'use client'
import React from 'react'
import Link from 'next/link'
import {AiTwotoneBug} from "react-icons/ai"
import { usePathname } from 'next/navigation'
const Links=[
    {label:'dashboard',href:'/'},
    {label:'issues',href:'/issues'},
    {label:'logout',href:'/'}
]
const Navbar = () => {
    const currentPath=usePathname();
  return (
    
    <nav className='bg-white px-5 py-3 shadow-md flex items-center justify-between'>
  <Link href="/" className='text-2xl font-bold'>
    <AiTwotoneBug/>
  </Link>
  <ul className='flex list-none space-x-6 items-end'>
    {Links.map(link=>(
        <li><Link href={link.href} className={`${link.href=== currentPath? 'text-gray-900':'text-gray-400'} hover:underline hover:text-gray-400`}>{link.label}</Link></li>
    ))}
    
  </ul>
</nav>

  )
}

export default Navbar