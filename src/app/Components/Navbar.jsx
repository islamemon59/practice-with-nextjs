import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-center items-center py-6 bg-blue-500 text-white font-bold'>
            <nav className='flex justify-center items-center gap-8'>
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default Navbar;