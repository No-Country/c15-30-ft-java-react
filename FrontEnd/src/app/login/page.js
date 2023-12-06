import React from "react";
import PlantBolbContainer from "@/components/layout/PlantBolbContainer";
import LoginForm from "@/components/layout/LoginForm";

const page = () => {
  return (
    <div className="">
      <section className="h-screen ">
        <div className="relative w-full h-[450px]">
          <PlantBolbContainer />
        </div>
        <div className="flex justify-center">
          <LoginForm />
        </div>
      </section>

      <section className="h-screen">
        <div>
          <LoginForm />
        </div>
        <div className="relative w-full h-[450px]">
          <PlantBolbContainer />
        </div>
      </section>
    </div>
  );
};

export default page;
