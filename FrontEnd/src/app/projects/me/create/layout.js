import authOptions from '@/app/api/auth/[...nextauth]/authOptions';
import NavBar from '@/components/layout/NavBar'
import { getServerSession } from 'next-auth';
import React from 'react'

const layout = async ({children}) => {
  const session = await getServerSession(authOptions);
  
  return (
    <div className='w-screen h-screen p-[20px] overflow-hidden'>
      <NavBar session={session} tipo={'color'} / >
      {children}
    </div>
  )
}

export default layout