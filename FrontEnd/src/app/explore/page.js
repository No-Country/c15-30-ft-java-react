import { Input } from "@/components/ui/input";
import React from "react";
const Explore = () => {
  return (
    <div>
      <section className="px-[20px] flex flex-col gap-5">
        <Input tipo="default" />
        <hr className="border-2 border-gray-300"/>
      </section>
      <section className="px-[20px] mt-5 flex flex-col gap-5">
      aquí van los proyectos recomendados para este usuario
      </section>
    

    </div>
  );
};

export default Explore;
