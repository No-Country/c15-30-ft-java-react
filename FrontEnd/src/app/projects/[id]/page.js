import API from "@/axios/apiConnection";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import React from "react";
import { FaHeart } from "react-icons/fa";

const ProjectsId = async ({ params }) => {
  const id = params.id;
  // esto debería ser un post con el id del proyecto a la API
  const arrResp = await API.get(`/projects`);
  const user = await API.get(`/users/1`);
  const project = arrResp[0];

  return (
    <div className="flex flex-col gap-[200px]">
      <section className="relative bg-red-50 w-full h-[333px] rounded-b-3xl">
        {/* server */}
        <img src="/" alt="project image" />
        <FaHeart className="absolute top-5 right-5 text-[34px]" />
      </section>
      <section className="flex flex-col">
        <p className={cn(textBold.className)}>{project.nombre}</p>
        <p className={cn(textBold.className, "text-primary")}>
          {user.nombre + " " + user.apellido}
        </p>
        <p className={cn(textBold.className, "text-gray-400 text-sm")}>
          {user.rol}
        </p>

        <p>{project.descripcion}</p>

        <p>
          Da click sobre una tarea para ver los detalles sobre el estado de la
          misma.
        </p>
      </section>
      <section>
        <p className={cn(textBold.className, "text-primary")}>{user.nombre}</p>
        <p>ha publicado las siguientes tareas</p>
        lista de tareas
      </section>

      <section>comentarios</section>
    </div>
  );
};

export default ProjectsId;
