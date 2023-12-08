import NavBar from '@/components/layout/NavBar';
import React from 'react'

const layout = ({children}) => {
  return (
    <div className={"flex w-screen flex-col justify-center overflow-y-hidden overflow-x-hidden"}>
      <div className="p-[20px] ">
        <NavBar tipo={"colorExtended"} />
      </div>

      {children}
    </div>
  );
}

export default layout