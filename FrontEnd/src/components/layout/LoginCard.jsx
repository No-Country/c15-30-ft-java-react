import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import React from "react";
import TextDispalyWithTitle from "../ui/textDisplayWIthTitle";

/**
 * Para este componente se necesitaria:
 * - una lista de colaboradores en el proyecto.
 * - nombre y descripcion del proyecto
 *
 * debe recibir un prop que contenga un array de length 3 con los proyectos recientes.
 * @returns
 */
const LoginCard = () => {

  const content = {
    title: "informacion",
    data: ["editar"],
  };
  
  return (
    <div className="cardConfig h-screen p-[40px] flex flex-col rounded-t-[50px]">
      <section
        className={cn(
          textBold.className,
          "flex justify-between items-center mb-2"
        )}
      >
        <TextDispalyWithTitle type={""} content={content} />
      </section>

      <section className="flex flex-col gap-3 px-[20px]">
          hola
      </section>
    </div>
  );
};

export default LoginCard;
