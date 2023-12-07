import React from "react";
import PlantBolbContainer from "@/components/layout/PlantBolbContainer";
import LoginForm from "@/components/layout/LoginForm";

const page = () => {
  return (
    <div className="">
      <section className="h-screen flex flex-col justify-center overflow-hidden">
        <LoginForm />
      </section>
    </div>
  );
};

export default page;
