import NavBar from '@/components/layout/NavBar';
import { getServerSession } from 'next-auth';
import authOptions from '../api/auth/[...nextauth]/authOptions';

export const metadata = {
  title: "Usuario CoCode",
  description: "Usuario de CoCode",
};

const layout = async ({children}) => {
  const session = await getServerSession(authOptions);
  
  return (
    <div className={"flex w-screen flex-col justify-center overflow-y-hidden overflow-x-hidden"}>
      <div className="">
        <NavBar session={session} tipo={"colorExtended"} />
      </div>

      {children}
    </div>
  );
}

export default layout