import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import API from "@/axios/apiConnection";
import { ProjectCard } from "@/components/layout/ProjectCard";
import { ProjectsNavigation } from "@/components/layout/ProjectsNavigation";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import { getServerSession } from "next-auth";
import * as React from "react";

const Create = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user?.user;

  const postTask = async (formData) => {
    "use server";

    const task = new FormData();
    task.append("nombre", formData.get("nombre"));
    task.append("descripcion", formData.get("descripcion"));
    task.append("portada", formData.get("portada"));
    task.append("colaborador", 1);
    task.append("dificultad", 1);
    task.append("tareas_id", 1);


    const res = await fetch("http://localhost:3000/api/uploads",{
      method: "POST",
      body: task,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log(res)
  };

  return (
    <form action={postTask} className="h-full rounded-xl">
      <div className="p-[20px] flex justify-center mb-20 md:mb-0">
        <ProjectsNavigation postTask={postTask}></ProjectsNavigation>
      </div>
      <main className="h-[80svh] flex flex-col justify-evenly">
        <section>
          <h2 className="md:mb-[20px]">
            Hola!{" "}
            <span className={cn(textBold.className, "text-primary")}>
              {user?.nombre}
            </span>{" "}
            👋{" "}
          </h2>
          <p className="text-sm text-gray-400">
            Desde aquí puedes configurar un tu nuevo proyecto, ve a la pestaña{" "}
            <span className={cn(textBold.className, "text-primary ")}>
              &quot;configura&quot;
            </span>{" "}
            y agrega la informacion escencial del mismo.
          </p>
        </section>
        <section className="flex flex-col md:flex-row justify-start md:justify-center items-center md:items-start ">
          <ProjectCard project={""} like={false} />
        </section>
      </main>
    </form>
  );
};

export default Create;
