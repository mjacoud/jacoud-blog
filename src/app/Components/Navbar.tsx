'use client'

import Link from "next/link"
import { useState } from "react"

const menuOptions = ["Blog","Projects","About"]

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [isClosing, setIsClosing] = useState(false);

  const handleMenu = () => {
    if (menuOpen) {
      // Inicia a animação de fechamento
      setIsClosing(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsClosing(false);
      }, 1300); // Define a duração da animação de saída (500ms)
    } else {
      // Abre o menu
      setMenuOpen(true);
    }
  };

  return (
    <nav className="p-8 bg-blue-400 flex justify-between items-center">
      <div>
        <h1 className="font-inter font-bold text-3xl text-white">Jacoud</h1>
      </div>
    <div>
        {menuOpen || isClosing  ?
        <div className={`bg-black w-full h-full absolute right-0 top-0 transition-transform duration-1300 ${menuOpen && !isClosing ? 'animate-slideinright':'animate-slideoutup' }`}>
          <div className="flex flex-col">
            <div className="flex items-center justify-center flex-col gap-16 pt-48">
              {menuOptions.map(option=>
              <Link href={option.toLowerCase()} key={option} className="text-white text-5xl">{option}</Link>
                      )
              }
            </div>
            <div className="flex justify-center pt-24">
            <svg onClick={handleMenu}
            width="80px" height="80px" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" stroke="#000000" strokeWidth="2"/>
            <path d="M9 9L15 15M15 9L9 15" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            </div>
          </div>
        </div>
        :
        <svg onClick={handleMenu}
        width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="stroke-white" d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        <path className="stroke-white" d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        <path className="stroke-white" d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
        </svg>}
    </div>
    </nav>
  )
}
