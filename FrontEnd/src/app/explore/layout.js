import NavBar from '@/components/layout/NavBar';
import { getServerSession } from 'next-auth';
import React from 'react'
import authOptions from '../api/auth/[...nextauth]/authOptions';

export const metadata = {
  title: "CoCode - explore",
  description: "Projectos activos en CoCode",
};

const layout = async ({children}) => {
  const session = await getServerSession(authOptions);

  return (
    <div className={"flex w-screen flex-col justify-center overflow-x-hidden"}>
      <div className="p-[20px] ">
        <NavBar session={session} />
      </div>
      {children}
    </div>
  );
}

export default layout