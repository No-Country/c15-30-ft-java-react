import React from "react";
import WorkSpaceCard, { CommentsCard } from "./WorkSpaceCards";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";

const WordspaceReactiveCards = async ({ projects, children }) => {

  return (
    <>
 <div className={`w-full h-[800px] p-[40px] flex flex-col rounded-sm md:max-w-full md:max-h-[377px] md:col-span-12`}>
        <section
          className={cn(
            textBold.className,
            "flex justify-between items-center mb-2"
          )}
        >
          <h2 className="text-subtitle ">Stats</h2>
        </section>

        <section className="flex flex-col gap-3 justify-center items-center">
         Aquí se renderizan los stats traidos del back una vez se han procesado los datos de la api de github
        </section>
      </div>
      <WorkSpaceCard
        projects={projects}
        data={{ title: "Proyectos", action: "ver más" }}
        className={cn("col-span-5 ")}
      />
      <CommentsCard
        projects={projects}
        comments={[{comment: "Corrregí los errores en el shader y cambie el gizmo", project: "Animacion 3d", owner: {image: "https://th.bing.com/th/id/R.1b6797ed3b4e3c8eba8e94b4bb285a77?rik=KSa8HQso0cL2zQ&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31800000%2fFreddie-Mercury-HQ-freddie-mercury-31872940-1200-1286.jpg&ehk=jcG7ZkM%2bFbuo%2bE8%2bKu8GYeELz673ooGqMSx6DdaaDG4%3d&risl=&pid=ImgRaw&r=0"}},]}
        data={{ title: "Comentarios", action: "ver más" }}
        className={cn("col-span-7 ")}
      />
      
      {children}
    </>
  );
};

export default WordspaceReactiveCards;
