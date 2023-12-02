import React from "react";
import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import Link from "next/link";

/**
 *
 * @props {*} tipo
 * - noLogeado: Navbar usado para cuando no este logeado
 * - logeado: Navbar usado para cuando este logeado
 *
 *
 */
const NavBar = ({ tipo }) => {
  if (tipo === "noLogeado")
    return (
      <nav className="h-[60px] w-full shadow-sm px-[20px]">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className={cn(textBold.className)}>
                  CodeGrid
                </a>
              </div>
            </div>
            <div className="grid grid-flow-col items-center justify-between gap-[20px]">
              <Link href={"/login"}>
                <Button variant="default" size={"sm"}>
                  Login
                </Button>
              </Link>

              <FaBars className="text-title cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
    );
  if (tipo === "logeado")
    return (
      <nav className="h-[60px] w-full shadow-xl">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-black">
                  CodeGrid
                </a>
              </div>
            </div>
            <div>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>
    );
};
export default NavBar;
