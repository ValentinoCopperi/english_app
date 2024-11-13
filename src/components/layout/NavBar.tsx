

"use client"

import React from 'react';
import { Instagram, Facebook, Twitter, Youtube, Github,GraduationCap } from 'lucide-react';
import Link from 'next/link';



export const NavBar = ( ) => {


  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      href: 'https://instagram.com',
      hoverColor: 'hover:text-pink-500',
    },
    {
      icon: <Facebook size={20} />,
      href: 'https://facebook.com',
      hoverColor: 'hover:text-blue-500',
    },
    {
      icon: <Twitter size={20} />,
      href: 'https://twitter.com',
      hoverColor: 'hover:text-sky-500',
    },
    {
      icon: <Youtube size={20} />,
      href: 'https://youtube.com',
      hoverColor: 'hover:text-red-500',
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com',
      hoverColor: 'hover:text-purple-500',
    },
  ];

  return (
    <nav className='w-full bg-[#1e1e1e] px-4 md:px-6 shadow-md'>

      <div className='max-w-7xl mx-auto h-14 flex items-center justify-between'>

      <Link href={"/"} className=' block lg:hidden'>
        <div className='flex items-center space-x-3  text-[#e5e7eb]'>
          <GraduationCap className="w-8 h-8" />
          <h1 className='text-xl  font-bold'>English App</h1>
        </div>
      </Link>
      
        <div className='  flex items-center '>
          {/* Social Media Icons */}
          <div className='flex items-center space-x-4'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                text-gray-400 
                ${social.hoverColor}
                transition-all 
                duration-300 
                transform 
                hover:scale-110
                hover:-translate-y-1
              `}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </nav>
  );
};