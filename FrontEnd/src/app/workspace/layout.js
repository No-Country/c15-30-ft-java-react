import NavBar, { WorkspaceNavBar } from "@/components/layout/NavBar";
import { getServerSession } from "next-auth";
import React from "react";
import authOptions from "../api/auth/[...nextauth]/authOptions";
import Footer from "@/components/layout/Footer";
import WorkspaceSideBar from "@/components/layout/WorkspaceSideBar";
import { ScrollArea } from "@/components/ui/scroll-area";

const layout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  const user = session?.user?.user;

  return (
    <div className="w-full flex gap-5 h-screen overflow-y-hidden">
      {/* Dashboard */}
      <section className="relative hidden md:flex md:flex-col md:w-1/6 bg-card shadow-md overflow-hidden">
        <WorkspaceSideBar user={user} />
      </section>
      <section className={"flex flex-col md:w-5/6"}>
        <div>
        <WorkspaceNavBar user={user} />
        </div>
        <div className="relative">
          <NavBar session={session} tipo={"colorExtended"} />
        </div>
        <div>
          <ScrollArea className="w-full h-full md:h-[calc(100vh-72px)]">
            {children}
          </ScrollArea>
        </div>
        <div className="md:hidden">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default layout;
