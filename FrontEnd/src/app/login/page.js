import React from "react";
import PlantBolbContainer from "@/components/layout/PlantBolbContainer";
import LoginForm from "@/components/layout/LoginForm";


const page = () => {

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[450px]">
        <PlantBolbContainer />
      </section>
      <section className="flex justify-center">
        <LoginForm />
      </section>
    </div>
  );
};

export default page;
