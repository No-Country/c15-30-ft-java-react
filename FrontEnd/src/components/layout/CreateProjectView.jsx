
import { Button } from "../ui/button";
import TextDisplayWithTitle from "../ui/textDisplayWIthTitle";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";

/**
 * =======================
 *   CreateProjectView
 * =======================
 * @props {function} handleSubmit - Función para manejar la presentación del formulario.
 * **************************************************************
 *
 * @example
 * import CreateProjectView from './Ruta';
 *
 * // Uso del componente
 * const MyCreateProjectView = () => {
 *   const handleFormSubmit = async (formData) => {
 *     // Lógica de presentación del formulario
 *     const nombre = formData.get("nombre");
 *     const descripcion = formData.get("descripcion");
 *     console.log({nombre, descripcion});
 *   };
 *
 *   return <CreateProjectView handleSubmit={handleFormSubmit} />;
 * };
 */

const CreateProjectView = () => {
  
  const postTask = async (formData) => {
    "use server";

    const task = new FormData();
    task.append("nombre", formData.get("nombre"));
    task.append("descripcion", formData.get("descripcion"));
    task.append("portada", formData.get("portada"));
    task.append("colaborador", 1);
    task.append("dificultad", 1);
    task.append("tareas_id", 1);


    const res = await fetch(`${process.env.LOCAL_API}/uploads`,{
      method: "POST",
      body: task,
    });

    console.log(res)
  };

  return (
    <form
      action={postTask}
      className="flex flex-col gap-5 z-0 overflow-y-auto"
    >
      <h1 className={cn(textBold.className, "text-blue-500 text-xl")}>
        Crear proyecto
      </h1>
      <section>
        <label>Titulo del proyecto</label>
        <Input
          id="nombre"
          name="nombre"
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
            rows="2"
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
            data: "Te recomendamos añadir las 5 aptitudes más relevantes para este proyecto.",
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
            data: "Añade imagenes del estado actual de tu proyecto y referencias de lo que quieres lograr.",
          }}
        />
        <div class="relative">
          <input
            type="file"
            id="portada"
            name="portada"
            accept="image/png, image/jpeg"
            multiple
            tipo="default"
            class="hidden"
          />
          <label
            for="portada"
            className={cn(
              textBold.className,
              "cursor-pointer flex justify-center items-center w-[219px] h-[49px] text-black px-4 py-2 rounded-md  border-2 border-black"
            )}
          >
            + Seleccionar archivo
          </label>
        </div>
      </div>
      <div>
        {" "}
        <TextDisplayWithTitle
          id="tareas"
          type={"vertical"}
          variant={""}
          content={{
            title: "Tareas",
            data: "Añade las tareas que esten por realizar en el proyecto.",
          }}
        />
        <Button
          type="button"
          tipo={""}
          variant={"outline"}
          size={""}
          className=""
        >
          + Añadir tareas
        </Button>
      </div>
      <div className="flex justify-end gap-5">
        <Button
          type="submit"
          tipo={""}
          size={""}
          variant={"default"}
          className=""
        >
          Guardar
        </Button>
      </div>
    </form>
  );
};

export default CreateProjectView;
