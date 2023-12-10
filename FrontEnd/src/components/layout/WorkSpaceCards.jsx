import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import React from "react";
import TextDispalyWithTitle from "../ui/textDisplayWIthTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const CommentsCard = ({ projects, comments, data, className }) => {
  return (
    <Card
      className={`shadow-md w-full h-[377px] p-[40px] flex flex-col rounded-[50px] md:max-w-full md:max-h-[820px] ${className}`}
    >
      <CardTitle
        className={cn(
          textBold.className,
          "flex justify-between items-center mb-2"
        )}
      >
        <p className="text-subtitle ">{data.title}</p>
        <p className="text-xl underline cursor-pointer">{data.action}</p>
      </CardTitle>

      <section className="flex flex-col gap-3 p-1 md:p-5">
        {comments &&
          comments.map((comment, index) => (
            <div
              key={index + comment}
              className="w-full shadow-md p-2 rounded-lg flex justify-between items-center"
            >
              <div>
                <h2 className={cn("text-sm text-gray-400")}>{comment.project}</h2>
                <p >{comment.comment}</p>
              </div>
              <div>
                <Avatar
                  variant={"sm"}
                  className={""}
                >
                  <AvatarImage src={comment.owner.image} />
                  <AvatarFallback> </AvatarFallback>
                </Avatar>
              </div>
            </div>
          ))}
      </section>
    </Card>
  );
};

/**
 * Para este componente se necesitaria:
 * - una lista de colaboradores en el proyecto.
 * - nombre y descripcion del proyecto
 *
 * debe recibir un prop que contenga un array de length 3 con los proyectos recientes.
 * @returns
 */
const WorkSpaceCard = ({ projects, data, className }) => {
  return (
    <Card
      className={`shadow-md w-full h-[377px] p-[40px] flex flex-col rounded-[50px] md:max-w-full md:max-h-[820px] ${className}`}
    >
      <section
        className={cn(
          textBold.className,
          "flex justify-between items-center mb-2"
        )}
      >
        <h2 className="text-subtitle ">{data.title}</h2>
        <h3 className="text-xl underline cursor-pointer">{data.action}</h3>
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
                <Link href={`/projects/${project.id}`} key={project.id}>
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
    </Card>
  );
};

export default WorkSpaceCard;
