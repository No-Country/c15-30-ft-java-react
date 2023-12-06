import NavBar from '@/components/ui/navbar';
import React from 'react'

const layout = ({children}) => {
  return (
    <div className={"flex w-full flex-col overflo-y-hidden"}>
      <div className="p-[20px] ">
        <NavBar tipo={"colorExtended"} />
      </div>

      {children}
    </div>
  );
}

export default layout