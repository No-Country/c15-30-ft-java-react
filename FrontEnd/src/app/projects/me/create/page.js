import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import API from "@/axios/apiConnection";
import { ProjectCard } from "@/components/layout/ProjectCard";
import { ProjectsNavigation } from "@/components/layout/ProjectsNavigation";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import { getServerSession } from "next-auth";

const Create = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user?.user;

  const postTask = async (formData) => {
    "use server";

    const task = {
      nombre: formData.get("nombre"),
      descripcion: formData.get("descripcion"),
      userId: user?.id,
    };
    const res = API.post("/projects", task);
  };

  return (
    <form action={postTask} className="h-full rounded-xl">
      <div className="p-[20px] flex justify-center mb-20 md:mb-0">
        <ProjectsNavigation></ProjectsNavigation>
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
