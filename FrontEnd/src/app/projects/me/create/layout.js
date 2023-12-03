import NavBar from '@/components/ui/navbar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='w-screen h-screen p-[20px]'>
      <NavBar tipo={'color'} / >
      {children}
    </div>
  )
}

export default layout