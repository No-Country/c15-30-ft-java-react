"use client";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import Github from "../../public/githubLottie.json";

import React from "react";
import { textBold } from "@/styles/fonts";
import { cn } from "@/lib/utils";

const GithubLottie = () => {
  return (
    <>
      <div className="text-center">
        <h2 className={cn(textBold.className, "text-primary text-[34px]")}>
          CoCode es mucho más poderoso conectado a github.
        </h2>
        <p className={"text-gray-400"}>vincula tu cuenta</p>{" "}
      </div>
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
