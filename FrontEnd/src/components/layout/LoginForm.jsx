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
import "@/styles/animations.css";
import { motion, AnimatePresence } from "framer-motion";
import Bolb from "../../../public/Blob.png";

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
    <main className="relative h-full flex flex-col md:flex-row ">
      <div id="imagen" className={`md:w-1/2 md:pt-3 `}>

        {/* TODO camiar img a IMAGE y agregar el alt */}

        {/* eslint-disable */}
        <img src={Bolb.src} alt="" />
        {/* eslint-enable */}
        
      </div>
      <form
        className={`md:flex md:flex-col md:justify-center md:items-center`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <AnimatePresence className={"md:w-screen"}>
          <div className="px-[52px] flex flex-col gap-[27px]">
            {isLogin && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex gap-5"
              >
                <Input
                  name={"Nombre"}
                  tipo={"default"}
                  placeholder={"nombre"}
                  type={"text"}
                  autoComplete={"username"}
                  {...register("username")}
                />
                <Input
                  name={"Apellido"}
                  tipo={"default"}
                  placeholder={"apellido"}
                  type={"text"}
                  autoComplete={"username"}
                  {...register("username")}
                />
              </motion.div>
            )}
            <div className="px-[52px] flex flex-col gap-[27px]"></div>
            <Input
              name={"email"}
              tipo={"default"}
              placeholder={"Email"}
              type={"email"}
              autoComplete={"email"}
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
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className=""
              >
                <Input
                  name={"confirm password"}
                  tipo={"default"}
                  placeholder={"confirm password"}
                  type={"text"}
                  autoComplete={"username"}
                  {...register("username")}
                />
              </motion.div>
            )}
          </div>

          <div className="flex flex-col gap-5 mt-5">
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
        </AnimatePresence>
      </form>
    </main>
  );
};

export default LoginForm;
