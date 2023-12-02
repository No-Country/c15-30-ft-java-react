import NavBar from '@/components/ui/navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className={"p-[20px]"}>
      <NavBar tipo={"colorExtended"} />
      {children}
    </div>
  )
}

export default layout