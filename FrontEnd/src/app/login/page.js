import { Button } from "@/components/ui/button";
import { Inputs } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import { FaGoogle, FaGithub } from "react-icons/fa";
import React from "react";
import PlantBolbContainer from "@/components/layout/PlantBolbContainer";

const page = () => {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[450px]">
        <PlantBolbContainer />
      </section>
      <section>
        <div className="p-[52px] flex flex-col gap-[27px]">
          <Inputs tipo={"default"} placeholder={"Email"} type={"email"} />
          <Inputs tipo={"default"} placeholder={"Password"} type={"password"} />
        </div>
        <div className="flex flex-col gap-5">
          <div className={" flex justify-center"}>
            <Button>Iniciar sesion</Button>
          </div>
          <div className="flex items-center gap-5 px-[56px]">
            <hr className="w-full border" />
            <p className={cn(textBold.className)}>o</p>
            <hr className="w-full border" />
          </div>
          <div className="w-full flex justify-center gap-[22px]">
            <Button type={"squared"} size={"sm"}>
              {<FaGoogle className="text-lg"></FaGoogle>}
            </Button>
            <Button type={"squared"} size={"sm"}>
              {<FaGithub className="text-lg"></FaGithub>}
            </Button>
          </div>
          <p className={cn("text-gray-500 text-center")}>O si aún no tienes una cuenta <span className={cn(textBold.className, "text-primary")}>Registrate</span> </p>
        </div>
      </section>
    </div>
  );
};

export default page;
