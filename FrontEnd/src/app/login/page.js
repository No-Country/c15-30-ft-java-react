import React from "react";
import PlantBolbContainer from "@/components/layout/PlantBolbContainer";
import LoginForm from "@/components/layout/LoginForm";

const page = async () => {

  const response = await fetch("http://localhost:3000/api/auth")
  const data = await response.json()
  console.log(data)

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
