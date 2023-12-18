"use client";

import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import TextDispalyWithTitle from "../ui/textDisplayWIthTitle";
import { Button } from "../ui/button";

const ContentFallback = () => {
  return <div className="w-full bg-gray-500 animate-pulse"></div>;
};

/**
 * Para este componente se necesitaria:
 * - una lista de colaboradores en el proyecto.
 * - nombre y descripcion del proyecto
 *
 * debe recibir un prop que contenga un array de length 3 con los proyectos recientes.
 * @returns
 */
const LoginCard = () => {
  const session = useSession();
  const user = session?.data?.user?.user;

  const content = {
    title: user ? "Perfil" : "loading...",
    data: (
      <Button tipo={"squared"} variant={"ghost"} size={"xs"}>
        Editar
      </Button>
    ),
  };

  return (
    <div className="shadow-md h-auto min-w-[400px] max-w-md p-[40px] flex flex-col rounded-[50px]">
      <section
        className={cn(
          textBold.className,
          "flex justify-between items-center mb-2"
        )}
      >
        <TextDispalyWithTitle type={""} content={content} />
      </section>
      <section className="flex flex-col gap-3 mt-5">
        <div className="flex justify-between items-center">
          <TextDispalyWithTitle
            type={"vertical"}
            variant={"primary"}
            content={
              user
                ? { title: "Nombre", data: user.nombre + " " + user.apellido }
                : { title: "...", data: "..." }
            }
          />
          {/* eslint-disable */}
          <img
            width={25}
            height={25}
            src="https://flagsapi.com/CO/shiny/64.png"
            className="rounded-full overflow-hidden"
          />
          {/* eslint-enable */}
        </div>
        <TextDispalyWithTitle
          type={"vertical"}
          variant={"primary"}
          content={
            user
              ? { title: "Password", data: "********" }
              : { title: "...", data: "..." }
          }
        />
        <TextDispalyWithTitle
          type={"vertical"}
          variant={"primary"}
          content={
            user
              ? { title: "Email", data: user.email }
              : { title: "...", data: "..." }
          }
        />
        <TextDispalyWithTitle
          type={"vertical"}
          variant={"primary"}
          content={
            user
              ? { title: "Rol", data: user.rol }
              : { title: "...", data: "..." }
          }
          className={""}
        />
      </section>
      <hr className="mt-10 border-2 border-gray-300" />
    </div>
  );
};

export default LoginCard;
