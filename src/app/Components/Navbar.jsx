"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  if (!pathName.includes("dashboard")) {
    return (
      <div className="flex justify-between items-center py-6 bg-blue-500 text-white font-bold px-8">
        <nav className="flex justify-center items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/posts">Posts</Link>
          <Link href="/meals">Meals</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div>
          <Link href="/login" className="px-3 py-2 border rounded">
            Signin
          </Link>
          <Link href="/register" className="px-3 py-2 border rounded ml-2">
            Register
          </Link>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Navbar;
