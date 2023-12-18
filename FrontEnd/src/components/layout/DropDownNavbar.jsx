"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaGithub, FaHome, FaUser, FaBook } from "react-icons/fa";
import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

/**
 * =======================
 *    DropDownNavbar
 * =======================
 * @props {ReactNode} children - Contenido del desplegable del menú.
 * **************************************************************
 *
 * @example
 * import DropDownNavbar from './Ruta';
 *
 * // Uso del componente
 * const MyDropDownNavbar = () => {
 *   return (
 *     <DropDownNavbar>
 *       {/* Contenido del activador del menú (por ejemplo, un botón o ícono) *\/}
 *       <Button>Mi Botón</Button>
 *     </DropDownNavbar>
 *   );
 * };
 */

//reparar este componente
const DropDownNavbar = ({ children }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="text-center">
        <DropdownMenuLabel>Crear</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={"text-md"}>
          {" "}
          <Link
            className={cn("flex justify-center items-center gap-2 w-full")}
            href={"/user"}
          >
            <FaGithub className="" /> <p>Usuario</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={"text-md"}>
          <Link
            className={cn("flex justify-center items-center gap-2 w-full")}
            href={"/workspace"}
          >
            <FaGithub className="" /> <p>Workspace</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={"text-md"}>
          <Link
            className={cn("flex justify-center items-center gap-2 w-full")}
            href={"/explore"}
          >
            <FaGithub className="" /> <p>Explore</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={"text-md"}>
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "flex justify-center items-center gap-2 w-full"
            )}
            href={"/explore"}
          >
            <FaGithub className="" /> <p>Explore</p>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className={"text-md"} onClick={signOut}>
          Salir
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownNavbar;
