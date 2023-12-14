import React from "react";
import WorkSpaceCard, { WorkspaceCustomCard } from "./WorkSpaceCards";
import { cn } from "@/lib/utils";
import { comments } from "@/constants/comments";
import {
  DoughnutChart,
  LineChartChart,
  PolarAreaChart,
} from "./WorkspaceCharts";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { textBold } from "@/styles/fonts";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/[...nextauth]/authOptions";

const datosAleatorios = [
  "Proyecto 1",
  "Proyecto 2",
  "Proyecto 3",
  "Proyecto 4",
];

const WordspaceReactiveCards = async ({ projects, children }) => {
  const session = await getServerSession(authOptions);
  const {githubUser} = session?.user?.user;
  
  //TODO verificar la ruta de traida de datos del usuario, recordar usar .replace("la constante de github", " ") para limpiar el nombre del repo y agregarlo al dataset. Revisar la documentacion para gestionar correctamente el cache y no exceder las 60 peticiones por hora: https://nextjs.org/docs/app/building-your-application/caching#data-cache

/*   

  const res = await fetch(`https://api.github.com/users/${githubUser}/repos`)
  const repos = await res.json();
  console.log(repos); 


*/ 


  return (
    <>
      <section className="md:grid md:grid-cols-12 gap-10">
        <Card
          className={cn(
            "col-span-5 shadow-sm w-full h-[377px] p-[40px] flex flex-col rounded-[25px] md:max-w-full md:max-h-[820px] items-center "
          )}
        >
          <DoughnutChart />
        </Card>

        <WorkSpaceCard
          projects={projects}
          data={{ title: "Proyectos", action: "ver más" }}
          className={cn("col-span-7 ")}
        />
      </section>

      <section className="w-full mt-10 flex justify-end col-span-12 mb-10">
        <div className="w-full flex flex-col justify-end items-end md:flex-row md:justify-between ">
          <div>
          <label className={cn(textBold.className, "text-primary")}>Seleccionar un proyecto</label>
          <p>y obten los datos sobre el mismo</p>
          </div>
          <Input
            type="select"
            tipo="default"
            placeholder="Buscar"
            list="opciones"
            className={"max-w-[400px]"}
          />
          <datalist id="opciones">
            {datosAleatorios.map((opcion, index) => (
              <option key={index} value={opcion} />
            ))}
          </datalist>
        </div>
      </section>

      <section className="md:grid md:grid-cols-12 gap-10">
        <Card
          className={cn(
            "col-span-5 shadow-sm w-full h-[377px] p-[40px] flex flex-col rounded-[25px] md:max-w-full md:max-h-[820px] items-center "
          )}
        >
          <PolarAreaChart />
        </Card>

        <Card
          className={cn(
            "col-span-7 shadow-sm w-full h-[377px] p-[40px] flex flex-col rounded-[25px] md:max-w-full md:max-h-[820px] items-center "
          )}
        >
          <LineChartChart />
        </Card>
      </section>

      <WorkspaceCustomCard
        projects={projects}
        title="Comentarios"
        dataArr={comments}
        className={cn("col-span-7 mt-10")}
      />

      {children}
    </>
  );
};

export default WordspaceReactiveCards;
