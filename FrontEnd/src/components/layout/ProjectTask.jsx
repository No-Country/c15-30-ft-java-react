"use client";

import { Card } from "../ui/card";
import { FaCalendar } from "react-icons/fa";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const ProjectTask = ({ tareas }) => {
  return (
    <div className="grid grid-cols-2 place-items-center ">
      {tareas &&
        tareas.map((tarea) => (
          <HoverCard key={tarea.id} openDelay={0} className={'md:text-primary-foreground'}>
            <HoverCardTrigger asChild>
              <Button variant="link" className={'md:text-primary-foreground'}>{tarea.nombre}</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback> </AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">dueño</h4>
                  <p className="text-sm">{tarea.descripcion}</p>
                  <div className="flex items-center pt-2">
                    <FaCalendar className="mr-2 h-4 w-4 opacity-70" />{" "}
                    <span className="text-xs text-muted-foreground">
                      fecha limite December 2021
                    </span>
                  </div>
                </div>
              </div>
             <div className="w-full flex justify-center mt-5">
             <Button>Auto asignar tarea</Button>
             </div>
            </HoverCardContent>
          </HoverCard>
        ))}
    </div>
  );
};

export default ProjectTask;
