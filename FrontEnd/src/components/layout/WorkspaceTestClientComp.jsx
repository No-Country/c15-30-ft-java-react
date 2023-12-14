"use client";

import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { LineChartChart, PolarAreaChart } from "./WorkspaceCharts";
import useSelectedProject from "@/state/projects/SelectedProject";

const WorkspaceTestClientComp = ({}) => {
  const selectedProject = useSelectedProject((state) => state.selectedProject);
  console.log(selectedProject);

  return (
    <>
      <Card
        className={cn(
          "col-span-5 shadow-sm w-full h-[377px] p-[40px] flex flex-col rounded-[25px] md:max-w-full md:max-h-[820px] items-center "
        )}
      >
        <PolarAreaChart selectedProject={selectedProject} />
      </Card>

      <Card
        className={cn(
          "col-span-7 shadow-sm w-full h-[377px] p-[40px] flex flex-col rounded-[25px] md:max-w-full md:max-h-[820px] items-center "
        )}
      >
        <LineChartChart />
      </Card>
    </>
  );
};

export default WorkspaceTestClientComp;
