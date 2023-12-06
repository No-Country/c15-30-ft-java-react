import React from 'react'
import { Button } from '../ui/button'
import TextDisplayWithTitle from '../ui/textDisplayWIthTitle'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'
import { textBold } from '@/styles/fonts'

const CreateProjectView = () => {
  return (
    <section className="flex flex-col gap-5">
    <h1 className={cn(textBold.className, "text-blue-500 text-xl")}>
      Crear proyecto
    </h1>
    <section>
      <label>Titulo del proyecto</label>
      <Input
        tipo={"default"}
        type=""
        placeholder="Título"
        className={"mb-10"}
      />

      <label className="mt-10">Descripcion</label>
      <div className="p-3">
        <textarea
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
        tipo={"rounded"}
        size={"sm"}
        className="w-[200px] h-[25px]"
      >
        + añadir tecnologías
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
      <Button
        tipo={"rounded"}
        size={"sm"}
        className="w-[200px] h-[25px]"
      >
        + añadir imagenes
      </Button>
    </div>
    <div className="flex flex-col gap-5">

      <Button
        tipo={""}
        size={""}
        variant={"outline"}
        className=""
      >
        guardar
      </Button>
    </div>
  </section>
  )
}

export default CreateProjectView