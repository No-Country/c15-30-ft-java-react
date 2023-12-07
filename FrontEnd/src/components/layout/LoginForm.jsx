"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import { useForm } from "react-hook-form";
import ButtonAuth from "./ButtonAuth";
import { signIn } from "next-auth/react";
import PlantBolbContainer from "./PlantBolbContainer";
import "@/styles/animations.css"

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [isLogin, setIsLogin] = useState(false);


  const handleToggle = () => {
    setIsLogin(!isLogin);

  };

  const onSubmit = async (data) => {
    const { email, password } = data;

    const response = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/workspace",
    });
  };

  return (
    <main className="relative h-full flex flex-col justify-between ">
      <div className={`absolute top-5 z-10 ${isLogin && "imagenAnimada"}  transition-all duration-300 w-full h-[450px]`}>
        <PlantBolbContainer />
      </div>

      <form className={`absolute bottom-5 z-0 w-full  ${isLogin && "formularioAnimado"} `} onSubmit={handleSubmit(onSubmit)}>
        <div className="p-[52px] flex flex-col gap-[27px]">
          {isLogin && (
            <div className="flex gap-5">
              <Input
                name={"nombre"}
                tipo={"default"}
                placeholder={"nombre"}
                type={"text"}
                autoComplete={"username"}
                {...register("username")}
              />
              <Input
                name={"apellido"}
                tipo={"default"}
                placeholder={"apellido"}
                type={"text"}
                autoComplete={"username"}
                {...register("username")}
              />
            </div>
          )}
          <Input
            name={"email"}
            tipo={"default"}
            placeholder={"Email"}
            type={"email"}
            autoComplete={""}
            {...register("email")}
          />
          <Input
            name={"password"}
            tipo={"default"}
            placeholder={"Password"}
            type={"password"}
            autoComplete={"current-password"}
            {...register("password")}
          />
          {isLogin && (
            <div className="">
              <Input
                name={"confirm password"}
                tipo={"default"}
                placeholder={"confirm password"}
                type={"text"}
                autoComplete={"username"}
                {...register("username")}
              />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex justify-center">
            <ButtonAuth type={"submit"}>
              {isLogin ? "Registrate" : "Iniciar sesión"}
            </ButtonAuth>
          </div>

          <div
            className="flex items-center gap-5 px-[56px] cursor-pointer"
            onClick={handleToggle}
          >
            <hr className="w-full border" />
            <p className={cn(textBold.className)}>o</p>
            <hr className="w-full border" />
          </div>

          <div className="w-full flex justify-center gap-[22px]">
            <Button tipo={"squared"} size={"sm"}>
              {<FaGoogle className="text-lg"></FaGoogle>}
            </Button>
            <Button tipo={"squared"} size={"sm"}>
              {<FaGithub className="text-lg"></FaGithub>}
            </Button>
          </div>

          <p
            className={cn("text-gray-500 text-center cursor-pointer")}
            onClick={handleToggle}
          >
            O si aún no tienes una cuenta{" "}
            <span className={cn(textBold.className, "text-primary")}>
              {isLogin ? "Iniciar sesion" : "Regístrate"}
            </span>{" "}
          </p>
        </div>
      </form>
    </main>
  );
};

export default LoginForm;
