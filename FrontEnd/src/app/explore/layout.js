import NavBar from '@/components/layout/NavBar';
import React from 'react'

const layout = ({children}) => {
  return (
    <div className={"flex w-screen flex-col justify-center overflow-x-hidden"}>
      <div className="p-[20px] ">
        <NavBar />
      </div>
      {children}
    </div>
  );
}

export default layout