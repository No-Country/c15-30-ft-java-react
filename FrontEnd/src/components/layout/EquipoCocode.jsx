"use client";

import TextDisplayWithTitle from "@/components/ui/textDisplayWIthTitle";
import { Card } from "@/components/ui/card";
import { TeamCard } from "./TeamCard.jsx";
import { useState } from "react";
import TeamText from "./TeamText.jsx";

export const EquipoCocode = () => {
  const [selectUser, setSelectUser] = useState(null);

  const dataTeam = [
    {
      name: "Jostin Jerez",
      contato: ["Email", "GitHub", "Linkedin"],
      descripcion: "Como",
    },
    { name: "Joshua Frías", contato: ["Email, GitHub, Linkedin"], descripcion: "" },
    {
      name: "Julian Mosquera",
      contato: ["Email", "GitHub", "Linkedin"],
      descripcion: "",
    },
    {
      name: "Maia Lizaur",
      contato: ["Email", "GitHub", "Linkedin"],
      descripcion: "",
    },
    {
      name: "Omar Ardila",
      contato: ["Email", "GitHub", "Linkedin"],
      descripcion: "",
    },
    {
      name: "Sandra Caro",
      contato: ["Email", "https://github.com/SamCaro", "https://www.linkedin.com/in/sandracaroquiroga/"],
      descripcion:
        "Soy una Desarrolladora Web de Colombia. Me apasionan los emprendimientos, crear nuevos proyectos útiles. Tengo curiosidad por aprender nuevas tecnologías y codificación creativa. Disfruto mi vida enfrentando retos y evolucionando día a día. Me encanta estar rodeada de naturaleza, nadar y compartir en familia.",
    },
  ];

  const handleCardUser = (e) => {
    const person = e.target.dataset.person;
    setSelectUser(dataTeam[person]);
  };
  return (
    <section>
      <Card className="mt-5 rounded-tr-[50px]  md:flex shadow-inner md:flex-col md:w-full h-full">
        <div
          className={
            " flex justify-center items-center rounded-br-lg h-12  w-[100px] bg-primary text-primary-foreground md:w-72 md:h-20 md:text-subtitle "
          }
        >
          Equípo Cocode
        </div>
        <div className="w-full md:flex justify-center gap-10  ">
          <div className="md:mt-10 md:w-[400px]">
            <TeamText selectUser={selectUser} />
          </div>
          <div>
            <TeamCard handleCardUser={handleCardUser} teamData={dataTeam}/>
          </div>
        </div>
      </Card>
    </section>
  );
};
