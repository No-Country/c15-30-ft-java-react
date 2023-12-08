import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import { ProjectsNavigation } from "@/components/layout/ProjectsNavigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import { getServerSession } from "next-auth";
import React from "react";

const Create = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user?.user

  return (
    <div className="h-full rounded-xl">
      <div className="p-[20px] flex justify-center">
        <ProjectsNavigation></ProjectsNavigation>
      </div>
     <main className="h-full flex flex-col justify-evenly">
     <section>
        <h2 className="mb-[20px]">
          Bienvenido!{" "}
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
      <section className="flex justify-center items-center">custom card</section>
      <section className="flex flex-col justify-center items-center gap-5">
        <Button tipo={"squared"} variant={"outline"} size={""}>
          Añadir tareas
        </Button>
        <Button>Crear</Button>
      </section>
     </main>
    </div>
  );
};

export default Create;
