import { Button } from "@/components/ui/button";
import NavBar from "@/components/layout/NavBar";
import ImageContainer from "@/components/ui/ImageContainer.jsx";
import TitleContainer from "@/components/ui/titleContainer";
import HombreLaptop from "@/svgs/SvgHombreLaptop";
import Link from "next/link";
import authOptions from "./api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";

const titleContent = {
  title: "Co-crear hecho fácil.",
  description:
    "Mas que trabajo colaborativo, CoCode te ayuda a encontrar a las personas ideales para hacer realidad tus ideas.",
}; 

const sectionContent = {
  title: "Proyectos",
  description: "Entérate de los proyectos mas relevantes a tu alrededor.",
};

export default async function Home(req, res) {
  const session = await getServerSession(authOptions);


  return (
    <div  className="w-screen overflow-x-hidden flex flex-col items-center gap-[10px]">
      <NavBar session={session} tipo={"noLogueado"} />
      <TitleContainer
        type={"sectionTitle"}
        content={titleContent}
        className={""}
      />
      <Button tipo={""} className={""}>
        <Link href={"/projects/me/create"}>Crear proyecto</Link>
      </Button>
      <ImageContainer size={"sm"} component={<HombreLaptop />} />
      <TitleContainer
        type={"titleAndDescription"}
        content={sectionContent}
        className={""}
      />

      <Button tipo={""} className={""}>
        <Link href={"/explore"}>Explora</Link>
      </Button>
    </div>
  );
}
