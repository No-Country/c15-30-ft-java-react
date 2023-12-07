"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { FaSpinner } from "react-icons/fa";
export default function ButtonAuth({children}) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <Button
        tipo={"squared"}
        size={"squaredSm"}
        className=""
      >
        <FaSpinner className="text-[34px] animate-spin" />
      </Button>
    );
  }

  if (session) {
    return (
      <>
        {session.user?.email} <br />
        <Button
          onClick={() => signOut()}
          tipo={""}
          size={""}
          className=""
          type={"submit"}
        >
          {children}
        </Button>
      </>
    );
  }
  return (
    <>
      <Button
        tipo={""}
        size={""}
        className=""
        type={"submit"}
      >
        {children}
      </Button>
    </>
  );
}
