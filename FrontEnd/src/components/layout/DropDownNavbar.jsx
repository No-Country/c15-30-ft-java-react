'use client'

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
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";

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

const DropDownNavbar = ({ children }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="text-center">
        <DropdownMenuLabel>
          <Button>Crear</Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={"text-md"}>
          {" "}
          <Link href={'/user'}><FaGithub className=""/> <p>Usuario</p></Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={"text-md"}>
          <Link href={'/workspace'}><FaGithub className=""/> Workspace</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={"text-md"}>
        <Link href={'/explore'}><FaGithub className=""/> Explore</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className={"text-md"}>
        <Link href={'/'}><FaGithub className=""/> Billing</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className={"text-md"} onClick={signOut}>Salir</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDownNavbar;
