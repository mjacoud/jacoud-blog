'use client'

import Link from "next/link"
import { useState } from "react"
import {ThemeSwitch } from "./Switch"
import Image from "next/image"
import sun from '../assets/icons/sun.png'
import moon from '../assets/icons/moon.png'

const menuOptions = ["Blog", "Projects", "About"]

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [animate, setAnimate] = useState<boolean>(false)

  const handleMenu = () => {
    setAnimate(true)
    setMenuOpen(!menuOpen)
    setTimeout(() => {setAnimate(false)

    }
    , 900) 
  }


  return (
    <nav className="p-8 shadow dark:shadow-white flex justify-between items-center md:pl-16 md:p-20 lg:pl-28 ">
      <Link href={'/'}>
        <h1 className="font-inter font-bold text-4xl text-black dark:text-white md:text-6xl xl:text-8xl">Jacoud</h1>
      </Link>
      {screen.width <= 768 ?
        <div >
        {menuOpen || animate?
          <div 
          className={`fixed dark:bg-black w-full h-full right-0 top-0 ${animate ? (menuOpen ? 'bg-white animate-slideinright' : 'animate-slideoutup bg-white') : 'bg-white'}`}>
            <div className="flex flex-col">
              <div className="flex items-center justify-center flex-col gap-16 pt-48">
                {menuOptions.map(option =>
                  <Link href={option.toLowerCase()} key={option} className={`text-5xl transition animate-slideinright ${animate ? (menuOpen ? 'text-transparent' : 'text-black dark:text-white') : 'text-black  dark:text-white'} `}>{option}</Link>
                )}
                <div className={`flex gap-4 opacity-0 ${`${animate ? (menuOpen ? '' : 'bg-white dark:bg-black opacity-100') : 'opacity-100'}`} }`}>
                  
                  <Image src={sun} width={50}  height={50} alt="sun" />
                  <ThemeSwitch />
                  <Image src={moon} width={45}  height={50} alt="moon" />
                </div>
                </div>


              <div className="flex justify-center pt-24">
                <svg onClick={handleMenu} className="text-red-600" 
                  width="80px" height="80px" viewBox="0 0 24 24" fill={`${animate ? 'transparent': 'black'}`} xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke={`${animate ? (menuOpen ? 'transparent' : 'white') : 'white'}`} strokeWidth="2" />
                  <path d="M9 9L15 15M15 9L9 15" stroke={`${animate ? (menuOpen ? 'transparent' : 'white') : 'white'}`} strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>


              : ""}

          <div className="h-12 w-12 sm:h-16 sm:w-16">
            <svg onClick={handleMenu}
               viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <path className="stroke-black dark:stroke-white" d="M4 18L20 18" stroke="#000000" strokeWidth={`${screen.width >= 768 ? "3": "2"}`} strokeLinecap="round"  />
              <path className="stroke-black dark:stroke-white" d="M4 12L20 12" stroke="#000000" strokeWidth={`${screen.width >= 768 ? "3": "2"}`} strokeLinecap="round" />
              <path className="stroke-black dark:stroke-white" d="M4 6L20 6" stroke="pink" strokeWidth={`${screen.width >= 768 ? "3": "2"}`} strokeLinecap="round" />
            </svg>
          </div>
      </div>
     :
     <div className="flex gap-8 lg:gap-12 items-center">
       {menuOptions.map(option =>
        <Link href={option.toLowerCase()} key={option} className={`text-3xl lg:text-3xl xl:text-5xl transition animate-slideinright ${animate ? (menuOpen ? 'text-transparent' : 'text-black dark:text-white') : 'text-black  dark:text-white'} `}>{option}</Link>
           )}
           <ThemeSwitch />
     </div>
      }
    </nav>
  )
}
