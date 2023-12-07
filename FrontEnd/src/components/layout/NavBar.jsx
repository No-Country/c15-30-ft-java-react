"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import Link from "next/link";
import { FaChevronLeft, FaBars, FaSpinner } from "react-icons/fa";
import NavBarBlob from "../../svgs/NavBarBlob";
import NavBarBlob2 from "../../svgs/NavBarBlob2";
import BlobWorkspaceSm from "../../svgs/BlobWorkspaceSm.jsx";
import BlobWorkspaceMd from "../../svgs/BlobWorkspaceMd.jsx";
import BlobWorkspaceLg from "../../svgs/BlobWorkspaceLg.jsx";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import ToolBar from "../ui/toolBar";

const variants = {
  contracted: "",
  expanded: "",
};

/**
 *
 * @props {*} tipo
 * - noLogeado: Navbar usado para cuando no este logeado
 * - logeado: Navbar usado para cuando este logeado
 * - color: Navbar con fondo de color y blobs en svg
 * - colorExtended:  Navbar con fondo de color y blobs en svg de tamaño extendido
 *
 *
 */
const NavBar = ({ tipo, variant, ...props }) => {
  const { data: session, status } = useSession();
  const user = session?.user?.user;
  const path = usePathname();
  const router = useRouter();
  const userImage = user?.imageUrl ? user?.imageUrl : "/images/default-user.png";
  const [isExtended, setExtended] = useState(false);

  const handleAvatarClick = () => {
    setExtended(!isExtended);
  };

  if (!session)
    return (
      <nav className="h-[60px] w-full shadow-sm px-[20px]" {...props}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href={"/"} className={cn(textBold.className)}>
                  CodeGrid
                </Link>
              </div>
            </div>
            <div className="grid grid-flow-col items-center justify-between gap-[20px]">
              {
                <Link href={"/login"}>
                  <Button
                    tipo={"squared"}
                    size={"squaredSm"}
                    variant={""}
                    type={""}
                  >
                    login
                  </Button>
                </Link>
              }
              <FaBars className="text-title cursor-pointer" />
            </div>
          </div>
        </div>
        <ToolBar /> 
      </nav>
    );

  if (session && path === "/")
    return (
      <nav className="h-[60px] w-full shadow-sm px-[20px]" {...props}>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href={"/"} className={cn(textBold.className)}>
                  CodeGrid
                </Link>
              </div>
            </div>
            <div className="grid grid-flow-col items-center justify-between gap-[20px]" onClick={()=>setExtended(!isExtended)}>
              <Avatar className={"z-50"}>
                <AvatarImage src={userImage} />
                <AvatarFallback> </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <ToolBar expanded={isExtended} /> 
      </nav>
    );

  if (path.startsWith("/project") || path.startsWith("/explore"))
    return (
      <nav className="relative mt-5 h-[60px] w-full rounded-full overflow-hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">
            <div className="flex items-center">
              <div className="flex justify-center items-center ml-[20px]">
                <Button
                  tipo={"rounded"}
                  variant="default"
                  size={"roundedSm"}
                  className={"absolute z-10 cursor-pointer"}
                  onClick={() => router.back()}
                >
                  <FaChevronLeft />
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center mr-[20px]" onClick={()=>setExtended(!isExtended)}>
              <Avatar className={"absolute z-10 cursor-pointer"}>
                <AvatarImage src={userImage} />
                <AvatarFallback> </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#372582] to-[#532D60] opacity-50 z-0"></div>
        <NavBarBlob className={"absolute top-0 left-[-25px] opacity-70"} />
        <NavBarBlob2 className={"absolute top-[-20px] right-1 opacity-70"} />
        <ToolBar expanded={isExtended} />
      </nav>
    );

  if (session && (path === "/workspace" || path === "/user"))
    return (
      <nav className="relative h-[250px]">
        <div className="relative mt-5 h-[205px] w-full rounded-[60px] overflow-hidden">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-[60px]">
              <div className="flex items-center">
                <div className="flex justify-center items-center ml-[30px]">
                  <Button
                    tipo={"rounded"}
                    variant="default"
                    size={"rounded"}
                    className={"absolute top-4 z-10 cursor-pointer"}
                    onClick={() => router.back()}
                  >
                    <FaChevronLeft className="text-[25px]" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center mr-[30px]">
                <Button
                  tipo={"rounded"}
                  variant="default"
                  size={"rounded"}
                  className={"absolute top-4 z-10 cursor-pointer"}
                  onClick={()=>setExtended(!isExtended)}
                >
                  <FaBars className="text-[25px]" />
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#372582] to-[#532D60] opacity-50 z-0"></div>
          <BlobWorkspaceSm className={"absolute top-5 right-5"} />
          <BlobWorkspaceMd className={"absolute top-5 left-5"} />
          <BlobWorkspaceLg
            className={"absolute bottom-[-60px] left-[-10px] "}
          />
        </div>
        <div className="flex justify-center">
          <div
            className={
              "absolute bottom-0 z-10 cursor-pointer w-[110px] h-[110px] rounded-full bg-[#532D60] bg-opacity-50 flex justify-center items-center"
            }
          >
            <Avatar variant={"lg"} className={"absolute z-10 cursor-pointer"}>
              <AvatarImage src={userImage} />
              <AvatarFallback> </AvatarFallback>
            </Avatar>
          </div>
        </div>
        <ToolBar expanded={isExtended} />
      </nav>
    );
};
export default NavBar;
