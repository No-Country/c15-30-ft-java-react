import React from "react";
import { Button } from "../ui/button";
import TextDisplayWithTitle from "../ui/textDisplayWIthTitle";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";

const CreateProjectView = () => {
  const handleSubmit = async (formData) => {
    const titulo = formData.get("titulo");
    const descripcion = formData.get("descripcion");

    console.log({titulo,descripcion})
  };

  return (
    <form action={handleSubmit} className="flex flex-col gap-5">
      <h1 className={cn(textBold.className, "text-blue-500 text-xl")}>
        Crear proyecto
      </h1>
      <section>
        <label>Titulo del proyecto</label>
        <Input
          id="titulo"
          name="titulo"
          tipo={"default"}
          type=""
          placeholder="Título"
          className={"mb-10"}
        />

        <label className="mt-10">Descripcion</label>
        <div className="p-3">
          <textarea
            name="descripcion"
            cols="1"
            rows="5"
            className="w-full  border border-gray-400 rounded-xl p-2"
            placeholder="Descripción"
          ></textarea>
        </div>
      </section>
      <div className="flex flex-col gap-5">
        <TextDisplayWithTitle
          id="categories"
          type={"vertical"}
          variant={""}
          content={{
            title: "Tecnologías",
            data: "Te recomendamos añadir las 5 aptitudes más relevantes para este proyecto. También aparecerán en tu sección «Aptitudes»",
          }}
        />
        <Button
          type="button"
          tipo={""}
          variant={"outline"}
          size={""}
          className=""
        >
          + Añadir tecnologías
        </Button>
      </div>
      <div className="flex flex-col gap-5">
        <TextDisplayWithTitle
          id="images"
          type={"vertical"}
          variant={""}
          content={{
            title: "Imagenes",
            data: "Añade imagenes del estado actual de tu proyecto y referencias de que es lo que quieres lograr.",
          }}
        />
        <div class="relative">
          <input
            type="file"
            id="picture"
            name="picture"
            accept="image/png, image/jpeg"
            multiple
            tipo="default"
            class="hidden"
          />
          <label
            for="picture"
            className={cn(
              textBold.className,
              "cursor-pointer flex justify-center items-center w-[219px] h-[49px] text-black px-4 py-2 rounded-md  border-2 border-black"
            )}
          >
            + Seleccionar archivo
          </label>
        </div>
      </div>
      <div className="flex justify-end gap-5">
        <Button
          type="submit"
          tipo={""}
          size={""}
          variant={"default"}
          className=""
        >
          guardar
        </Button>
      </div>
    </form>
  );
};

export default CreateProjectView;
