"use client";

import { SessionProvider } from "next-auth/react";

const UserSession = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};
export default UserSession;
