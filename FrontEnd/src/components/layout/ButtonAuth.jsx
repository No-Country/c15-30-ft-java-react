"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import {FaSpinner} from 'react-icons/fa'
export default function ButtonAuth() {
  const { data: session, status } = useSession();
  const prueba = useSession();

  console.log({session, status})

  if (status === "loading") {
    return <Button
    onClick={() => signOut()}
    tipo={"squared"}
    size={"squaredSm"}
    className=""
  >
    <FaSpinner className="text-[34px] animate-spin" />
  </Button>;
  }

  if (session) {
   ;
    return (
      <>
        aa {session.user?.email} <br />
        <Button
          onClick={() => signOut()}
          tipo={"squared"}
          size={"squaredSm"}
          className=""
        >
          Sign out
        </Button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button
        onClick={() => signIn()}
        tipo={"squared"}
        size={"squaredSm"}
        className=""
      >
        Login
      </Button>
    </>
  );
}
