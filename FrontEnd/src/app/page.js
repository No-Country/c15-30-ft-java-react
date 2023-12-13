import { Button } from "@/components/ui/button";
import NavBar from "@/components/layout/NavBar";
import ImageContainer from "@/components/ui/ImageContainer.jsx";
import TitleContainer from "@/components/ui/titleContainer";
import Link from "next/link";
import authOptions from "./api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Testimonials from "@/components/layout/Testimonials";
import Footer from "@/components/layout/Footer";
import HombreLaptop from "../../public/ManLaptop.png";
import HomeScrollSection from "@/components/layout/NavBarScrollProgress";
import Scrolly from "@/components/layout/Scrolly";

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
    <div className="">
      <NavBar session={session} />
      <div className="w-screen overflow-x-hidden flex flex-col items-center gap-[10px] md:mt-16">
        <br />
        <br />
        <section className="grid justify-center items-center gap-[10px] md:grid-cols-2">
          <div className="flex flex-col justify-center items-center gap-[10px] md:col-start-1 md:col-end-2 row-start-1 row-end-3">
            <TitleContainer
              type={"sectionTitle"}
              content={titleContent}
              className={""}
            />
            <Button tipo={""} className={"order-4"}>
              <Link href={"/projects/me/create"}>Crear proyecto</Link>
            </Button>
          </div>
          <div className="md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3 md:place-self-start">
            <ImageContainer
              size={"lg"}
              image={HombreLaptop.src}
              className={"w-[397px] md:w-[1000px]"}
            />
          </div>
          <div className="flex flex-col items-center gap-[10px] md:hidden">
            <TitleContainer
              type={"titleAndDescription"}
              content={sectionContent}
              className={"col-start-1 col-end-3"}
            />

            <Button tipo={""} className={""}>
              <Link href={"/explore"}>Explora</Link>
            </Button>
          </div>
        </section>

        <section className="hidden md:flex md:flex-col h-[1000px] w-full">
          <Scrolly />
        </section>

        <ScrollArea className="flex  w-[400px] md:w-full  my-32 ">
          <div className="w-full justify-center">
          <TitleContainer
            type={"titleAndDescription"}
            content={{
              title: "Testimonios",
              description: "Las opiniones de algunos de nuestros usuarios",
            }}
            className={""}
          />
          </div>
          <div className="flex space-x-4 gap-5 py-2 px-2 md:flex md:justify-center W-FULL">
            <Testimonials
              content={{
                text: "Amé esta aplicacion, es excelente para encontrar personas con buenas ideas",
                image:
                  "https://th.bing.com/th/id/OIP.plXc_9Brf3Ravy8czRaglAHaEo?rs=1&pid=ImgDetMain",
                nombre: "Marcela",
              }}
            />
            <Testimonials
              content={{
                text: "Contraten a los chicos de CoCode inmediatamente",
                image:
                  "https://th.bing.com/th/id/OIP.7nZMbYo_H69XELdLdUWWngAAAA?rs=1&pid=ImgDetMain",
                nombre: "Ignacio",
              }}
            />
            <Testimonials
              content={{
                text: "Esta aplicacion me rejuvenecío.",
                image:
                  "https://th.bing.com/th/id/OIP.ZoQmfK7RoyZjUOlZDrJ0-QHaJ3?rs=1&pid=ImgDetMain",
                nombre: "Gertrudis",
              }}
            />
            <Testimonials
              content={{
                text: "Entré aquí sin saber programar, todavía no sé pero me la paso bien.",
                image:
                  "https://th.bing.com/th/id/OIP.dtboSWE4wrkjed2LOEYrUgHaHa?rs=1&pid=ImgDetMain",
                nombre: "Gonzalo",
              }}
            />
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

      </div>
        <Footer />
    </div>
  );
}
