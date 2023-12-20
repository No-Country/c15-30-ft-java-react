import API from "@/axios/apiConnection";
import TextDisplayWithTitle from "@/components/ui/textDisplayWIthTitle";
import React from "react";
import LoginCard from "@/components/layout/LoginCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import defaultAvatar from "../../../public/defaultAvatar.png";
import Image from "next/image";
import { Tecnologias } from "@/components/layout/TechnologyBadges";
import { FaPen } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";

const page = async () => {
  const tecnologias =
    /*  await API.get("/tecnologias"); */
    {
      message: "todo bien",
      object: [
        { id: 1, nombre: "HTML" },
        { id: 2, nombre: "CSS" },
        { id: 3, nombre: "JavaScript" },
        { id: 4, nombre: "TypeScript" },
        { id: 5, nombre: "Python" },
        { id: 6, nombre: "Java" },
        { id: 7, nombre: "C#" },
      ],
    };
  const avatar =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png";
  const userData = {
    title: ` hola`,
    data: "online",
  };
  const AboutMeData = {
    title: `About Me`,
    data: "Me hace feliz saber que participo en un proyecto que traerá tantos beneficios para la seguridad de espacios públicos.",
  };

  return (
    <div className=" flex flex-col w-content h-auto justify-center">
      <section className="flex flex-col justify-between mt-20 md:flex-row md:px-20">
        <div className=" flex flex-col px-[40px] md:px-[50px] md:w-full  md:mt-[50px]">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className={"md:w-32 md:h-32"}>
                <AvatarImage src={avatar} />
                <AvatarFallback>
                  {" "}
                  <Image
                    src={defaultAvatar.src}
                    width={100}
                    height={100}
                    alt="default avatar"
                  />{" "}
                </AvatarFallback>
              </Avatar>
              <Badge
                variant={"ghost"}
                className={
                  "absolute bottom-0 right-0 z-50 p-2 border-none hover:animate-pulse cursor-pointer"
                }
              >
                <FaPen className="" />
              </Badge>
            </div>
            <TextDisplayWithTitle
              type={""}
              variant={"primary"}
              content={userData}
            />
          </div>
          <div className="mt-5">
            <TextDisplayWithTitle
              type={"vertical"}
              variant={"regular"}
              content={AboutMeData}
            />
          </div>
        </div>
        <div className={"flex flex-col items-center"}>
          <LoginCard />
        </div>
      </section>
      <div className="w-full">
        <Tecnologias tecnologias={tecnologias} />
      </div>
    </div>
  );
};
export default page;
