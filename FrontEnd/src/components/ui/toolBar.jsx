import React from 'react';
import { cn } from '@/lib/utils';

const ToolBar = ({ expanded }) => {
  // Determina las clases dinámicamente basándote en el valor de la prop 'expanded'
  const containerClasses = `absolute top-0 right-3 rounded-[100px] bg-gradient-to-b from-black to-primary transition-all duration-500 ${
    expanded ? 'w-[86px] h-full' : 'w-[86px] h-0 overflow-hidden'
  }`;

  const innerSectionClasses = `${expanded ? 'flex h-full' : 'hidden'}`;

  const blurBackdropClasses = 'absolute w-full h-full bg-reg-50 fixed inset-0 bg-blur';

  return (
    <div className={cn(containerClasses)}>
      <section className={cn(innerSectionClasses)}>
        <div className='h-full w-full flex flex-col justify-center items-center text-white '>
          <p>holaaaaa</p>
          <p>holaa</p>
          <p>hola</p>
          <p>hola</p>
        </div>
      </section>
      {expanded && <div className={blurBackdropClasses}></div>}
    </div>
  );
};

export default ToolBar;
