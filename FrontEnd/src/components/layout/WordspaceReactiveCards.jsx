import WorkSpaceCard, { WorkspaceCustomCard } from "./WorkSpaceCards";
import { cn } from "@/lib/utils";
import { comments } from "@/constants/comments";
import { DoughnutChart } from "./WorkspaceCharts";
import { Card } from "../ui/card";
import { getServerSession } from "next-auth";
import authOptions from "@/app/api/auth/[...nextauth]/authOptions";
import WorkspaceDynamicProjectsInput from "./WorkspaceDynamicProjectsInput";
import WorkspaceTestClientComp from "./WorkspaceTestClientComp";
import GithubLottie from "@/svgs/GithubLottie";

const WordspaceReactiveCards = async ({ projects, children }) => {
  const session = await getServerSession(authOptions);
  const { githubUser } = await session?.user?.user;

  console.log(githubUser);

  const res = await fetch(`https://api.github.com/users/${githubUser}/repos`, {
    method: "GET",
    headers: {
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
  }).catch((error) => {
    console.error("Error en la solicitud:", error);
  });

  const repos = await res.json();
  const reposArr = projects.map((repo) => repo.name);

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

      {!githubUser ? (
        <section className="">
          <GithubLottie githubUser={githubUser} />
        </section>
      ) : (
        <>
          <section className="w-full mt-10 flex justify-end col-span-12 mb-10">
            <WorkspaceDynamicProjectsInput reposArr={reposArr} />
          </section>{" "}
          <section className="md:grid md:grid-cols-12 gap-10">
            <WorkspaceTestClientComp />
          </section>
        </>
      )}

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
