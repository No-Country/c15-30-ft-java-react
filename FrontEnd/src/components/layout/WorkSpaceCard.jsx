import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import React from "react";
import TextDispalyWithTitle from "../ui/textDisplayWIthTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//datos sacados del proyecto nombre -> title - descripcion -> data
const activityCardInfo = {
  title: "IA de reconocimiento facial",
  data: ["Buscamos crear la IA más efectiva en el reconocimiento facial"],
};

/**
 * Para este componente se necesitaria:
 * - una lista de colaboradores en el proyecto.
 * - nombre y descripcion del proyecto
 * 
 * debe recibir un prop que contenga un array de length 3 con los proyectos recientes.
 * @returns 
 */
const WorkSpaceCard = () => {
  const projects = [1,2,3]

  
  return (
    <div>
      <div className="cardConfig h-[377px] p-[40px] flex flex-col rounded-t-[50px]">
        <section
          className={cn(
            textBold.className,
            "flex justify-between items-center mb-2"
          )}
        >
          <h2 className="text-subtitle ">Proyectos </h2>
          <h3 className="text-xl underline cursor-pointer">ver más</h3>
        </section>

        <section className="flex flex-col gap-3">
          {projects.map((project) => (
            <><div className="flex justify-between items-center">
            <TextDispalyWithTitle
              type={"vertical"}
              content={activityCardInfo}
              className={"w-64"}
            />
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <hr className="mt-2" /></>
          ))}
        </section>
      </div>
    </div>  
  );
};

export default WorkSpaceCard;
