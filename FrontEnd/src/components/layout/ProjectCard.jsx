import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { textBold } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * Explore Component
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {string} props.nombre - Nombre del Proyecto.
 * @param {string} props.imagen - Imagen asociada al proyecto.
 * @param {boolean} props.like - Indica si el comentario ha sido marcado como "me gusta".
 * @param {string} props.tecnologias- arreglo de nombres de tecnologías.
 * @param {string} props.descripcion - Breve descripción relativa al proyecto.
 * @example
 * // Ejemplo de uso del componente Explore
 * <ProjectCard
 *    nombre={project?.nombre}
      imagen={project?.imagenDePerfil}
      like={true}
      tecnologias={["Angular", "JavaScript", "Python"]} // debería ser la lista de tecnologías del proyecto
      descripcion={project?.descripcion}
 * />
 */
export const ProjectCard = ({
  project,
  nombre,
  imagen,
  like,
  tecnologias,
  descripcion,
}) => {
  console.log(tecnologias);

  return (
    <section className="h-full w-full p-6">
      <h2 className={cn(textBold.className)}>{nombre}</h2>
      <div className="mt-2 h-full w-full">
        <div className="flex justify-between relative rounded-xl overflow-hidden border-red-200">
          {/* eslint-disable */}
          <Link href={`/projects/${project.id}`}>
            <img
              src={imagen}
              width={400}
              height={313}
              alt={`Imagen ${nombre}`}
            />
          </Link>
          {/* eslint-enable */}
          <div className="absolute top-2 right-2 text-white">
            {like === true ? (
              <FaHeart className=" w-[34px] h-[29.76px] " />
            ) : (
              <FaRegHeart className=" w-[34px] h-[29.76px] " />
            )}
          </div>
          <div className="absolute flex w-full justify-end gap-2 bottom-2 right-2">
            {tecnologias.map((tecnologia, index) => (
              <Badge key={index} size={"sm"}>
                {tecnologia}
              </Badge>
            ))}
          </div>
        </div>
        <p className="mt-2">{descripcion}</p>
      </div>
    </section>
  );
};
