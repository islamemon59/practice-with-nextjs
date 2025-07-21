import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-6 bg-blue-500 text-white font-bold px-8'>
            <nav className='flex justify-center items-center gap-8'>
                <Link href="/">Home</Link>
                <Link href="/services">Services</Link>
                <Link href="/about">About Us</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <div>
                <button className='px-3 py-2 border rounded'>Signin</button>
                <button className='px-3 py-2 border rounded ml-2'>Register</button>
            </div>
        </div>
    );
};

export default Navbar;