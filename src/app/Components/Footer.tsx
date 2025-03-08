import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <>
        <footer className='pb-6 md:py-8'>
            <div className='border-t-2 border-gray-200 mt-6 flex flex-col items-center md:items-start'>
                <nav>
                    <ul className="flex flex-col items-center gap-6 py-8 md:flex-row  md:gap-12 md:py-12 lg:gap-20 ">
                        <li className='font-semibold text-2xl'><Link href="/about">LinkedIn</Link></li>
                        <li className='font-semibold text-2xl'><Link href="/contact">Email</Link></li>
                        <li className='font-semibold text-2xl'><Link href="/privacy">Github</Link></li>
                        <li className='font-semibold text-2xl'><Link href="/privacy">RSS Feed</Link></li>
                    <p className='font-semibold text-xl'>&copy; {new Date().getFullYear()} </p>
                    </ul>
                </nav>
            </div>
        </footer>
        </>
    );
};

