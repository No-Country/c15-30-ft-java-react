"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import Link from "next/link";
import {
  FaChevronLeft,
  FaBars,
  FaSpinner,
  FaSearch,
  FaInfo,
  FaBell,
  FaAngleLeft,
} from "react-icons/fa";
import NavBarBlob from "../../svgs/NavBarBlob";
import NavBarBlob2 from "../../svgs/NavBarBlob2";
import BlobWorkspaceSm from "../../svgs/BlobWorkspaceSm.jsx";
import BlobWorkspaceMd from "../../svgs/BlobWorkspaceMd.jsx";
import BlobWorkspaceLg from "../../svgs/BlobWorkspaceLg.jsx";
import { usePathname, useRouter } from "next/navigation";
import DropDownNavbar from "./DropDownNavbar";
import { ModeToggle } from "./ModeToggle";
import { Badge } from "../ui/badge";
import NavBarScrollProgress from "./NavBarScrollProgress";
import { motion } from "framer-motion";
import SearchBar from "../ui/searchBar";

const linkVariants = {
  initial: { y: -100 },
  animate: { y: 0 },
};

export const WorkspaceNavBar = ({ user }) => {
  const router = useRouter();

  return (
    <div className="hidden md:flex justify-between items-center px-10 bg-secondary ">
      <div className="hidden md:flex flex-col md:h-20">
        <div className="hidden md:flex gap-2 items-center">
          <Button
            tipo={"rounded"}
            variant="secondary"
            size={"roundedSm"}
            className={"cursor-pointer"}
            onClick={() => router.back()}
          >
            <FaAngleLeft />
          </Button>
          <h2 className={cn(textBold.className, "")}>Hola,</h2>
          <p className={cn(textBold.className, "text-primary")}>
            {user.nombre}
          </p>
          <p className={cn(textBold.className, "text-[34px]")}>👋</p>
        </div>
        <p className="text-sm text-gray-400">
          Administra tus proyectos y consulta la info más relevante a tu
          alrededor.
        </p>
      </div>

      <div className="text-gray-400 flex items-center gap-5">
        <SearchBar></SearchBar>
        <FaSearch className="cursor-pointer" />
        <FaInfo className="cursor-pointer" />
        <div className="relative">
          <Badge
            size={"sm"}
            className={
              "absolute top-[-2px] right-0 w-2 h-2 bg-green-500 animate-pulse"
            }
          />
          <FaBell className="cursor-pointer animate-pulse" />
        </div>
        <ModeToggle />
      </div>
    </div>
  );
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
const NavBar = ({ tipo, variant, session, ...props }) => {
  const user = session?.user?.user;
  const path = usePathname();
  const router = useRouter();
  const avatar = user?.avatar
    ? user?.avatar
    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png";
  const [isExtended, setExtended] = useState(false);

  const handleAvatarClick = () => {
    setExtended(!isExtended);
  };

  if (!session)
    return (
      <nav
        className="fixed top-0 bg-card rounded-b-[32px] h-[60px] md:h-[80px] w-full md:w-full shadow-sm md:px-0 z-50"
        {...props}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 md:w-full">
          <div className="h-[60px] md:h-[80px]  flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center gap-16">
                <Link href={"/"} className={cn(textBold.className, "text-lg")}>
                  Co<span className="text-primary font-bold">Code</span>
                </Link>
                <ul className="hidden md:flex md:items-center md:gap-16">
                  <motion.li
                    variants={linkVariants}
                    initial={"initial"}
                    animate={"animate"}
                    transition={{ delay: 0.2 }}
                    className="hover:underline hover:text-primary hover:font-bold cursor-pointer"
                  >
                    <Link href="/user">usuario</Link>
                  </motion.li>
                  <motion.li
                    variants={linkVariants}
                    initial={"initial"}
                    animate={"animate"}
                    transition={{ delay: 0.4 }}
                    className="hover:underline hover:text-primary hover:font-bold cursor-pointer"
                  >
                    <Link href="/workspace">workspace</Link>
                  </motion.li>
                  <motion.li
                    variants={linkVariants}
                    initial={"initial"}
                    animate={"animate"}
                    transition={{ delay: 0.6 }}
                    className="hover:underline hover:text-primary hover:font-bold cursor-pointer"
                  >
                    <Link href="/explore">explore</Link>
                  </motion.li>
                </ul>
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
        <NavBarScrollProgress />
      </nav>
    );

  if ((session && path === "/") || path === "/user")
    return (
      <nav
        className="fixed top-0 bg-card rounded-b-[32px] h-[60px] md:h-[80px] w-full md:w-full shadow-sm md:px-0 z-50"
        {...props}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 md:w-full">
          <div className="h-[60px] md:h-[80px]  flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex items-center gap-16">
                <Link href={"/"} className={cn(textBold.className, "text-lg")}>
                  Co<span className="text-primary font-bold">Code</span>
                </Link>
                <ul className="hidden md:flex md:items-center md:gap-16">
                  <motion.li
                    variants={linkVariants}
                    initial={"initial"}
                    animate={"animate"}
                    transition={{ delay: 0.2 }}
                    className="hover:underline hover:text-primary hover:font-bold cursor-pointer"
                  >
                    <Link href="/user">usuario</Link>
                  </motion.li>
                  <motion.li
                    variants={linkVariants}
                    initial={"initial"}
                    animate={"animate"}
                    transition={{ delay: 0.4 }}
                    className="hover:underline hover:text-primary hover:font-bold cursor-pointer"
                  >
                    <Link href="/workspace">workspace</Link>
                  </motion.li>
                  <motion.li
                    variants={linkVariants}
                    initial={"initial"}
                    animate={"animate"}
                    transition={{ delay: 0.6 }}
                    className="hover:underline hover:text-primary hover:font-bold cursor-pointer"
                  >
                    <Link href="/explore">explore</Link>
                  </motion.li>
                </ul>
              </div>
            </div>
            <div className="grid grid-flow-col items-center justify-between gap-[20px]">
              <ul className="hidden md:flex gap-8 mr-2  items-center">
                <li>
                  <ModeToggle />
                </li>
                <li>
                  <Button size={"sm"}>crear</Button>
                </li>
              </ul>

              <Avatar className={"z-50 md:w-16 md:h-16"}>
                <AvatarImage src={avatar} />
                <AvatarFallback> </AvatarFallback>
              </Avatar>

              <div className={"md:hidden"}>
                <DropDownNavbar>
                  <FaBars className="text-title cursor-pointer" />
                </DropDownNavbar>
              </div>
            </div>
          </div>
        </div>
        <NavBarScrollProgress />
      </nav>
    );

  if (path.startsWith("/project") || path.startsWith("/explore"))
    return (
      <nav className="relative mt-5 h-[60px] w-full rounded-full overflow-hidden ">
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
                  <FaAngleLeft />
                </Button>
              </div>
            </div>
            <div
              className="flex justify-center items-center mr-[20px]"
              onClick={() => setExtended(!isExtended)}
            >
              <Avatar className={"absolute z-10 cursor-pointer"}>
                <AvatarImage src={avatar} />
                <AvatarFallback> </AvatarFallback>
              </Avatar>
              <DropDownNavbar>
                <FaBars className="text-title cursor-pointer" />
              </DropDownNavbar>
            </div>
          </div>
        </div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#372582] to-[#532D60] opacity-50 z-0"></div>
        <NavBarBlob className={"absolute top-0 left-[-25px] opacity-70"} />
        <NavBarBlob2 className={"absolute top-[-20px] right-1 opacity-70"} />
      </nav>
    );

  if (session && (path.startsWith("/workspace") || path.startsWith("/user")))
    return (
      <nav className="relative h-[250px] md:hidden ">
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
                  onClick={() => setExtended(!isExtended)}
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
              <AvatarImage src={avatar} />
              <AvatarFallback> </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    );
};
export default NavBar;
