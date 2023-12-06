import NavBar from '@/components/layout/NavBar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='w-screen h-screen p-[20px] overflow-y-hidden'>
      <NavBar tipo={'color'} / >
      {children}
    </div>
  )
}

export default layout