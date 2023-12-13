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
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";

const LoginForm = () => {
  const router = useRouter()
  const {toast} = useToast()
  const { register, handleSubmit, errors } = useForm();
  const [isLogin, setIsLogin] = useState(false);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  const onLoginSubmit = async (data) => {
    const { email, password } = data;

    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: "/workspace",
    });

    if (response.ok) {
      router.push("/workspace");
    } else {
      console.log(response.error)
      /* reemplar description por response.error.message */
      toast({
        variant: "destructive",
        title: "Error",
        description: "revisar las credenciales",
        isClosable: true,
        duration: 5000,
      })
    }
  };


  const onRegisterSubmit = (data)=>{
    if (data.confirm_password === data.password) {
      toast({
        variant: "",
        title: "Registro exitoso",
        description: "Inicia sesion para continuar",
        isClosable: true,
        duration: 5000,
      })
      setIsLogin(false);
    } else {
      toast({
        variant: "destructive",
        title: "Password no coincide",
        description: "El password debe coincidir con la cofirmacion",
        isClosable: true,
        duration: 5000,
      })
    }
    
  }


  return (
    <main className="relative h-full flex flex-col md:flex-row ">
      <div id="imagen" className={`pt-0 md:w-1/2 md:pt-3 `}>

        {/* TODO camiar img a IMAGE y agregar el alt */}

        {/* eslint-disable */}
        <img src={Bolb.src} alt="" />
        {/* eslint-enable */}
        
      </div>
      <form
        className={`md:flex md:flex-col md:justify-center md:items-center`}
        onSubmit={!isLogin ? handleSubmit(onLoginSubmit) : handleSubmit(onRegisterSubmit)}
      >

        <AnimatePresence key={isLogin} className={"md:w-screen"}>
          <div id="container" className="px-[52px] flex flex-col gap-[27px] md:w-[594.033px]">
            {isLogin && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="flex gap-5"
              >
                <Input
                  name={"nombre"}
                  tipo={"default"}
                  placeholder={"nombre"}
                  type={"text"}
                  autoComplete={"username"}
                  {...register("nombre")}
                />
                <Input
                  name={"apellido"}
                  tipo={"default"}
                  placeholder={"apellido"}
                  type={"text"}
                  autoComplete={"username"}
                  {...register("apellido")}
                />
              </motion.div>
            )}
            
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="w-full"
              >
                <Input
                  name={"confirm_password"}
                  tipo={"default"}
                  placeholder={"confirm password"}
                  type={"text"}
                  autoComplete={"username"}
                  {...register("confirm_password")}
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
