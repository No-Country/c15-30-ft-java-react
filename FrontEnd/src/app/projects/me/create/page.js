"use client";

import { ProjectsNavigation } from "@/components/layout/ProjectsNavigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import TextDisplayWithTitle from "@/components/ui/textDisplayWIthTitle";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import React from "react";

const Create = () => {
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
            user.name
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
        <Button tipo={"squared"} variant={"outline"} size={"lg"}>
          Añadir tareas
        </Button>
        <Button>Crear</Button>
      </section>
     </main>
    </div>
  );
};

export default Create;
