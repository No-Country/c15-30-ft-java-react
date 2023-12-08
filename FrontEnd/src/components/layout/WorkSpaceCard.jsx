import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import React from "react";
import TextDispalyWithTitle from "../ui/textDisplayWIthTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

/**
 * Para este componente se necesitaria:
 * - una lista de colaboradores en el proyecto.
 * - nombre y descripcion del proyecto
 *
 * debe recibir un prop que contenga un array de length 3 con los proyectos recientes.
 * @returns
 */
const WorkSpaceCard = ({ projects }) => {
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
          {projects &&
            projects
              .map((project) => {
                const activityCardInfo = {
                  title: project.nombre,
                  data: [project.descripcion],
                };
                const projectImage = project.imagenPerfilUrl;

                return (
                  <Link href={`/projects/${project.id}`}  key={project.id}>
                    <div>
                      <div className="flex justify-between items-center line-clamp-2">
                        <TextDispalyWithTitle
                          type={"vertical"}
                          content={activityCardInfo}
                          className={"w-64"}
                        />
                        <Avatar>
                          <AvatarImage src={projectImage} />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                      </div>
                      <hr className="mt-2 border-gray-300" />
                    </div>
                  </Link>
                );
              })
              .slice(0, 3)}
        </section>
      </div>
    </div>
  );
};

export default WorkSpaceCard;
