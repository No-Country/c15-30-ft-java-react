"use client";

//TODO solucionar error de layout en las badge y

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { textBold } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import { FaPlus, FaTrash } from "react-icons/fa";
import { toast } from "../ui/use-toast";

/**
 * =======================
 *  Sección Tecnologías
 * =======================
 * @component
 * @returns
 *
 * **************************************************************
 *
 * @example
 * import { Tecnologias } from "../pruebas/Tecnologias";
 *
 * const MiComponente = () => {
 *   return (
 *     <Tecnologias onClick={() => console.log('Tecnologia selecionada al hacer clic')}
 *     />
 *   );
 * };
 */
export const Tecnologias = ({ tecnologias }) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectTechnologies, setSelectTechnologies] = useState([]);
  const MAX_SELECTIONS = 8;
  const technologies = tecnologias?.object;

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleSelectTechnologies = (event) => {
    const technology = event.target.value;

    if (selectTechnologies.length < MAX_SELECTIONS) {
      if (!selectTechnologies.includes(technology)) {
        setSelectTechnologies([...selectTechnologies, technology]);
      } else {
        toast({
          title: "Ya está en tu lista",
          variant: "destructive",
          description: "No puedes agregar la misma tecnología más de una vez",
          duration: 3000,
        });
      }
    } else {
    }
  };

  const removeTech = (event) => {
    const technology = event.target.dataset.tech;

    setSelectTechnologies(
      selectTechnologies.filter((tech) => tech !== technology)
    );
  };

  // JSX
  return (
    <section className="my-4 w-full ">
      <div className="flex justify-center space-x-4 p-3 md:p-10">
        <Card className="w-full max-w-[800px] h-auto p-10 flex flex-col shadow-xl rounded-[50px] space-y-2 items-center">
          <h2 className={cn(textBold.className, "text-primary")}>
            Tecnologías
          </h2>
          <p>Añade las tecnologías mas relevantes a tu rol</p>
          <form action="">
            <select
              name="technologies"
              id="technologies"
              className="animate-pulse"
              onChange={(event) => handleSelectTechnologies(event)}
            >
              <option value="default" disabled selected>
                Selecciona una tecnología
              </option>
              {technologies.map((tech) => (
                <option
                  id={tech.id}
                  value={tech.nombre}
                  key={tech.id}
                  size={"sm"}
                >
                  {tech.nombre}
                </option>
              ))}
            </select>
           <div className="flex justify-center my-5"> <Button
              variant={"outline"}
              tipo={"iconText"}
              size={"xs"}
              className={"w-28"}
              onClick={console.log('me diste click')}
            >
            <FaPlus />
              Añadir
            </Button></div>
          </form>
          <div className="grid grid-cols-4 gap-5">
            {selectTechnologies.map((tech) => (
              <Badge
                key={tech}
                size={"sm"}
                data-tech={tech}
                value={tech}
                className={"gap-2"}
                onClick={removeTech}
              >
                {tech} <FaTrash />
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
