"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Github from "../../public/githubLottie.json";

import React from "react";
import { textBold } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import APIClient from "@/axios/apiFrontConnection";
import { useForm } from "react-hook-form";
import { toast } from "../components/ui/use-toast";

const GithubLottie = ({usuarioId}) => {

  const {register, handleSubmit} = useForm();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const res = await APIClient.put(`usuarios/${usuarioId}`, {
        githubUser: data.github,
      });

      if (res.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error al vincular cuenta de GitHub:", error);
      toast({
        variant: "destructive",
        title: "Error al vincular cuenta de GitHub",
        description: error.message,
        status: "error",
      })
    }
  }
  return (
    <>
      <div className="text-center flex-col gap-5 my-10">
        <h2 className={cn(textBold.className, "text-primary text-[34px]")}>
          CoCode es mucho más poderoso conectado a github.
        </h2>
        <p className={"text-gray-400"}>
          vincula tu cuenta para tener datos de tus repositorios y hacer
          seguimiento de las contribuciones en tus proyectos.
        </p>{" "}
      </div>

      <section className="w-full flex flex-col justify-center items-center">
        <form  className="w-1/3 flex flex-col items-center my-5 gap-5" onSubmit={handleSubmit(onSubmit)}>
          <Input name={"github"} tipo={"default"} placeholder="usuario de Github" {...register('github')}></Input>
          <Button>Vincular</Button>
        </form>
      </section>
      <div className="">
        <Player
          autoplay
          loop
          src={Github}
          style={{ height: "300px", width: "300px" }}
        >
          <Controls
            visible={false}
            buttons={["play", "repeat", "frame", "debug"]}
          />
        </Player>
      </div>
    </>
  );
};

export default GithubLottie;
