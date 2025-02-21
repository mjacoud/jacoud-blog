import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className='pb-6'>
            <div className='border-t-2 border-gray-200 mt-6 flex flex-col items-center'>
                <nav>
                    <ul className="flex flex-col items-center gap-2 py-8">
                        <li className='font-semibold text-xl'><Link href="/about">LinkedIn</Link></li>
                        <li className='font-semibold text-xl'><Link href="/contact">Email</Link></li>
                        <li className='font-semibold text-xl'><Link href="/privacy">Github</Link></li>
                        <li className='font-semibold text-xl'><Link href="/privacy">Rss Feed</Link></li>
                    </ul>
                </nav>
                <p className='font-semibold text-xl'>&copy; {new Date().getFullYear()} </p>
            </div>
        </footer>
    );
};

