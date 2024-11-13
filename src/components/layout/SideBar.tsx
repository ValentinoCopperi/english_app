"use client"

import React, { useState } from 'react';
import { Home, ChevronDown, ChevronRight, BookOpen, Brain, Pencil, VolumeX, GraduationCap } from 'lucide-react';
import Link from 'next/link';



export const SideBar = ( ) => {



  const [expandedLevel, setExpandedLevel] = useState<string | null>(null);

  const levels = [
    {
      name: 'beginner',
      icon: '🌱',
      color: 'from-green-600 to-green-700'
    },
    {
      name: 'intermediate',
      icon: '🌟',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'advanced',
      icon: '🏆',
      color: 'from-purple-600 to-purple-700'
    }
  ];

  const types = [
    { name: 'reading', icon: <BookOpen size={18} /> },
    { name: 'multiplechoice', icon: <Brain size={18} /> },
    { name: 'oneword', icon: <Pencil size={18} /> },
    { name: 'vocabulary', icon: <VolumeX size={18} /> }
  ];

  const toggleLevel = (level: string) => {
    setExpandedLevel(expandedLevel === level ? null : level);
  };

  

  return (
    <div className='w-full min-h-screen bg-[#363636] text-gray-100 py-6 flex flex-col  border-r border-gray-500'>

      <div className='px-6 mb-8'>
        <div className='flex items-center space-x-3 mb-6'>
          <GraduationCap className="w-8 h-8" />
          <h1 className='text-xl  font-bold'>English App</h1>
        </div>
        <div className='h-[1px] bg-gray-600 w-full'></div>
      </div>

      <nav className='flex-1 px-3'>

        <Link href="/" className='flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-white/10 mb-4'>
          <Home size={20} />
          <span>Home</span>
        </Link>

        <div className='space-y-2'>
          {levels.map((level) => (
            <div key={level.name}>
              <button
                onClick={() => toggleLevel(level.name)}
                className='w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors hover:bg-white/10'
              >
                <div className='flex items-center space-x-3'>
                  <span className='text-xl'>{level.icon}</span>
                  <span className='capitalize'>{level.name}</span>
                </div>
                {expandedLevel === level.name ? (
                  <ChevronDown size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
              </button>

              {/* Types Dropdown */}
              {expandedLevel === level.name && (
                <div className='mt-2 ml-4 space-y-1'>
                  {types.map((type) => (
                    <Link
                      key={type.name}
                      href={`/exercises/${level.name}/${type.name}`}
                      className={`
                        flex items-center space-x-3 px-3 py-2 rounded-lg
                        transition-all duration-200
                        hover:bg-gradient-to-r ${level.color}
                      `}
                    >
                      {type.icon}
                      <span className='capitalize'>
                        {type.name === 'multiplechoice' ? 'Multiple Choice' :
                         type.name === 'oneword' ? 'One Word' :
                         type.name}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      <div className='px-6 mt-auto'>
        <div className='h-[1px] bg-gray-600 w-full mb-4'></div>
        <div className='text-sm text-gray-400 text-center'>
          © 2024 Valentino Copperi
        </div>
      </div>
    </div>
  );
};