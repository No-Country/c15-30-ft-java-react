import TextDisplayWIthTitle from "../../components/ui/textDisplayWIthTitle";
import { Input } from "../../components/ui/input";
import TitleDisplayWithButton from "@/components/ui/titleDisplayWithButton";
import WorkspaceUserInfoLoader from "@/components/layout/WorkspaceUserInfoLoader";
import API from "@/axios/apiConnection";
import WordspaceReactiveCards from "@/components/layout/WordspaceReactiveCards";
import Proyectos from "../../constants/Proyectos.json";
import { getServerSession } from "next-auth";
import authOptions from "../api/auth/[...nextauth]/authOptions";

const pageContent = {
  title: "",
  data: ["Aquí puedes ver los proyectos en los que participas actualmente."],
};

const WorkSpace = async ({ searchParams }) => {
  const response = await API.get("/proyectos");
  const session = await getServerSession(authOptions);
  const usuarioId = session.user.user.id
  const projects = response || Proyectos;
  const params = searchParams.user;

  
  return (
    <div className="h-full md:w-full">
      <div className="px-[20px] w-full  h-full flex flex-col justify-between">
        <WorkspaceUserInfoLoader />

        {/* visible solo en pantallas pequeñas */}
        <form className="md:mt-10 md:hidden">
          <Input tipo={"busqueda"} placeholder={"Buscar"} />
        </form>

        {/* visible solo en pantallas pequeñas */}
        <section className={"flex flex-col px-[20px] md:hidden"}>
          <TitleDisplayWithButton />

          <TextDisplayWIthTitle
            type={"vertical"}
            variant={"primary"}
            content={pageContent}
          />
        </section>

        <section className="flex flex-col my-20 w-full">
          <WordspaceReactiveCards projects={projects}  session={session} usuarioId={usuarioId} params={params}></WordspaceReactiveCards>
        </section>
      </div>
    </div>
  );
};

export default WorkSpace;
