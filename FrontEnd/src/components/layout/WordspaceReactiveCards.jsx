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
import WorkspaceDynamicProjectsInput from "./WorkspaceDynamicProjectsInput";
import WorkspaceTestClientComp from "./WorkspaceTestClientComp";

const datosAleatorios = [
  "Proyecto 1",
  "Proyecto 2",
  "Proyecto 3",
  "Proyecto 4",
];

const WordspaceReactiveCards = async ({ projects, children }) => {
  const session = await getServerSession(authOptions);
  const { githubUser } = await session?.user?.user;

  //TODO verificar la ruta de traida de datos del usuario, limpiar el nombre del repo y agregarlo al dataset. Revisar la documentacion para gestionar correctamente el cache y no exceder las 60 peticiones por hora: https://nextjs.org/docs/app/building-your-application/caching#data-cache

  /*   
  https://api.github.com/repos/Jandres373/ACDM-backend-2/contributors"
 */
  const githubToken = "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";

  const res = await fetch("https://api.github.com/users/jandres373/repos", {
    method: "GET", // Puedes ajustar el método según tu necesidad
    headers: {
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
  }).catch((error) => {
    console.error("Error en la solicitud:", error);
  });

  const repos = await res.json();
  const reposArr = repos.map((repo) => repo.name);

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
        <WorkspaceDynamicProjectsInput reposArr={reposArr} />
      </section>

      <section className="md:grid md:grid-cols-12 gap-10">
        <WorkspaceTestClientComp />
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
