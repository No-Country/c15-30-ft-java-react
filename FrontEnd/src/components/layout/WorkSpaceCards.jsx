"use client";

import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import React from "react";
import TextDispalyWithTitle from "../ui/textDisplayWIthTitle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Card, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

const AnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: 0.2,
      type: "tween",
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: "beforeChildren",
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      delay: 0.2,
      type: "tween",
      staggerChildren: 0.1,
      staggerDirection: -1,
      when: "beforeChildren",
    },
  },
};

/**
 * ============================
 *    CustomWorkspaceCard
 * ============================
 * @props {string} title - Título del card.
 * @props {Array} dataArr - Lista de objetos con información de los proyectos.
 *   - @property {string} nombre - Nombre del proyecto.
 *   - @property {string} descripcion - Descripción del proyecto.
 *   - @property {string} img - URL de la imagen asociada al proyecto.
 * **************************************************************
 *
 * @example
 * import CustomWorkspaceCard from './Ruta';
 *
 * // Uso del componente
 * const MyCustomWorkspaceCard = () => {
 *   const title = "Título del Card";
 *   const dataArr = [
 *     { nombre: "Proyecto 1", descripcion: "Descripción del Proyecto 1", img: "url1" },
 *     { nombre: "Proyecto 2", descripcion: "Descripción del Proyecto 2", img: "url2" },
 *     { nombre: "Proyecto 3", descripcion: "Descripción del Proyecto 3", img: "url3" },
 *   ];
 *
 *   return <CustomWorkspaceCard title={title} dataArr={dataArr} />;
 * };
 */
export const WorkspaceCustomCard = ({
  projects,
  title,
  dataArr,
  className,
}) => {
  return (
    <Card
      className={`shadow-sm w-full h-[377px] p-[40px] flex flex-col rounded-md md:max-w-full md:max-h-[820px] ${className}`}
    >
      <section
        className={cn(
          textBold.className,
          "flex justify-between items-center mb-2"
        )}
      >
        <h2 className="text-subtitle ">{title}</h2>
      </section>

      <section className="flex flex-col gap-3">
        {dataArr &&
          dataArr
            .map((data) => {
              const activityCardInfo = {
                title: data.title,
                data: data.content,
              };
              const dataImage = data?.owner?.image;

              return (
                <motion.div
                  variants={AnimationVariants}
                  initial={"initial"}
                  whileInView={"animate"}
                  key={data.title}
                >
                  <div className="flex justify-between items-center line-clamp-2">
                    <TextDispalyWithTitle
                      type={"vertical"}
                      content={activityCardInfo}
                      className={"w-64"}
                    />
                    <Avatar>
                      <AvatarImage src={dataImage} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <hr className="mt-2 border-gray-300" />
                </motion.div>
              );
            })
            .slice(0, 3)}
        <div className="w-full flex justify-center"></div>
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
                <motion.div
                  variants={AnimationVariants}
                  initial={"initial"}
                  whileInView={"animate"}
                  key={project.id}
                >
                  <Link href={`/projects/${project.id}`}>
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
                  </Link>
                </motion.div>
              );
            })
            .slice(0, 3)}
      </section>
    </Card>
  );
};

export default WorkSpaceCard;
