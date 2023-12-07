import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {FaGithub, FaHome, FaUser, FaBook} from 'react-icons/fa'
const ToolBar = ({ expanded }) => {
  // Determina las clases dinámicamente basándote en el valor de la prop 'expanded'
  const containerClasses = `absolute top-0 right-3 rounded-[100px] bg-gradient-to-b from-black to-primary transition-all duration-500 ${
    expanded ? 'w-[86px] h-full' : 'w-[86px] h-0 overflow-hidden'
  }`;

  const innerSectionClasses = `${expanded ? 'flex h-full' : 'hidden'}`;

  return (
    <div className={cn(containerClasses)}>
      <section className={cn(innerSectionClasses)}>
        <div className='h-full w-full flex flex-col justify-center items-center gap-5 text-white '>
          <Link href={'/workspace'} className='cursor-pointer text-[34px]'><FaBook /></Link>
          <Link href={'/user'} className='cursor-pointer text-[34px]'><FaUser /></Link>
          <Link href={'/projects'} className='cursor-pointer text-[34px]'><FaGithub /></Link>
          <Link href={'/login'} className='cursor-pointer text-[34px]'><FaHome /></Link>
        </div>
      </section>

    </div>
  );
};

export default ToolBar;
