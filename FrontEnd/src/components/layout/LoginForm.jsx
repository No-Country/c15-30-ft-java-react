"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { textBold } from "@/styles/fonts";
import { useForm } from "react-hook-form";
import ButtonAuth from "./ButtonAuth";
import { signIn } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import Bolb from "../../../public/Blob.png";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import Image from "next/image";
import "@/styles/animations.css";

const LoginForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const { toast } = useToast();

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
      /* reemplar description por response.error.message */
      toast({
        variant: "destructive",
        title: "Error",
        description: "revisar las credenciales",
        isClosable: true,
        duration: 5000,
      });
    }
  };

  const onRegisterSubmit = async (data) => {
    console.log(data);

    try {
      if (data.confirm_password !== data.password) {
        return toast({
          variant: "destructive",
          title: "Password no coincide",
          description: "El password debe coincidir con la confirmación",
          isClosable: true,
          duration: 5000,
        });
      }
      //test fetch para verificar si la politica CORS afecta en modo no-cors
      const resp = await fetch("http://localhost:8080/api/v1/usuarios", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      }, {mode:"no-cors"})

      if (resp) {
        toast({
          variant: "",
          title: "Registro exitoso",
          description: "Inicia sesión para continuar",
          isClosable: true,
          duration: 5000,
        });
        setIsLogin(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="relative h-full flex flex-col md:flex-row ">
      <div id="imagen" className={`pt-0 md:w-1/2 md:pt-3 `}>
        {/* TODO camiar img a IMAGE y agregar el alt */}

        <Image
          src={Bolb.src}
          quality={50}
          alt="blob"
          loading="lazy"
          width={800}
          height={800}
        />
      </div>
      <form
        className={`md:flex md:flex-col md:justify-center md:items-center`}
        onSubmit={
          !isLogin
            ? handleSubmit(onLoginSubmit)
            : handleSubmit(onRegisterSubmit)
        }
      >
        <AnimatePresence mode="wait" initial={false}>
          <div
            id="container"
            className="px-[52px] flex flex-col gap-[27px] md:w-[594.033px]"
          >
            {isLogin && (
              <motion.div
                key={isLogin ? "login" : "logout"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, duration: 0.5 }}
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
                key={isLogin ? "login2" : "logout2"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, duration: 0.5 }}
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

            <div className="flex flex-col gap-5 mt-5">
              <div className="flex justify-center">
                <ButtonAuth type={"submit"}>
                  {isLogin ? "Regístrate" : "Iniciar sesión"}
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
          </div>
        </AnimatePresence>
        ;
      </form>
    </main>
  );
};

export default LoginForm;
