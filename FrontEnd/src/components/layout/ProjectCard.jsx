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
 * @param {string} props.project recibe la data de un proyecto devuelta por la API.
 * @param {boolean} props.like - Indica si el comentario ha sido marcado como "me gusta".

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
export const ProjectCard = ({ project, like }) => {
  // project debería ser la data de un proyecto devuelta por la API.
  const nombre = project?.nombre;
  const imagen = project?.imagenPerfilUrl; // en lugar de imagenPerfilUrl, debería ser la url de la imagen del proyecto.
  const descripcion = project?.descripcion;
  const tecnologias = project?.tecnologias || ["angular","javascript","java"]; // debería ser la lista de tecnologías del proyecto

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
