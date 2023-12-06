
import { Button } from "@/components/ui/button";
import NavBar from "@/components/ui/navbar";
import ImageContainer from "@/components/ui/ImageContainer.jsx";
import TitleContainer from "@/components/ui/titleContainer";
import HombreLaptop from "@/svgs/SvgHombreLaptop";
import Link from "next/link";
import { getServerSession } from "next-auth";


const titleContent = {
  title: "Co-crear hecho fácil.",
  description:
    "Mas que trabajo colaborativo, <brand name> te ayuda a encontrar a las personas ideales que pueden ayudarte a hacer realidad tus ideas.",
};

const sectionContent = {
  title: "Proyectos",
  description: "Entérate de los proyectos mas relevantes a tu alrededor.",
};

export default async function Home() {

  const session = await getServerSession();
  
  console.log(session)

  return (
    <div className="w-screen overflow-x-hidden flex flex-col items-center gap-[10px]">
      <NavBar tipo={"noLogueado"} />
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
