import API from "@/axios/apiConnection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import React from "react";
import { FaHeart, FaCodeBranch } from "react-icons/fa";

const ProjectsId = async ({ params }) => {
  const projectId = params.id;
  /*   const project = await API.get(`/projects/${projectId}`); */
  const userId = /* project.userId */ 1;
/*   const user = await API.get(`/users/${userId}`); */

 const project = {"id":1,"nombre":"Rhipsalis baccifera (Sol. ex J.S. Muell.) Stearn","descripcion":"Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo.","portada":"http://dummyimage.com/875x971.png/dddddd/000000","dificultad":"orci","activo":false}
  const user = {
    id:1,
    nombre: "Test",
    apellido: "Perez",
    email: "user@falso.com",
    puesto: "Administrador",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
    rol: "admin",
    githubUser: "jandres373",
  }

  return (
    <div className="relative h-screen flex flex-col gap-[20px]">
      <section className="relative w-full h-[333px] bg-red-50 overflow-hidden rounded-b-3xl shadow-3xl">
        {/* server */}
        {/* eslint-disable */}
        <img
          src={project.imagenPerfilUrl}
          alt="project image"
          className="w-full h-full object-cover"
        />
        {/* eslint-enable */}
        <FaHeart className="absolute top-5 right-5 text-[34px]" />
      </section>
      <section className="flex flex-col gap-[20px] px-[20px]">
        <p className={cn(textBold.className)}>{project.nombre}</p>
        <div className="flex justify-between items-center">
          <section>
            <p className={cn(textBold.className, "text-primary")}>
              {user.nombre + " " + user.apellido}
            </p>
            <p className={cn(textBold.className, "text-gray-400 text-sm")}>
              {user.rol}
            </p>
          </section>
          <section>
            <Avatar variant={"md"}  className={""}>
              <AvatarImage  src={user.imageUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </section>
        </div>

          <hr className="border-2 text-gray-300"/>
          <h2 className={cn(textBold.className)}>Descripcion del proyecto</h2>
        <p className="text-gray-400">{project.descripcion}</p>

        <p className={cn("text-sm text-black")}>
          Da click sobre una tarea para ver los detalles sobre el estado de la
          misma.
        </p>
      </section>
      <section className="px-[20px]">
        <p className={cn(textBold.className, "text-primary")}>{user.nombre}</p>
        <p>ha publicado las siguientes tareas</p>
        lista de tareas
      </section>

      <section>comentarios</section>

      <Button tipo={"rounded"} size={"rounded"} className={"fixed bottom-5 right-5 flex"}>
        <FaCodeBranch className="text-[24px] text-center"/>
      </Button>
    </div>
  );
};

export default ProjectsId;
