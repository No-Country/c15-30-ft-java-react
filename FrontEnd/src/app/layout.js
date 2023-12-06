import "../styles/globals.css";
import { text } from "../styles/fonts.js";
import StateLoader from "@/state/StateLoader";
import UserSession from "../context/UserSession";
import { getServerSession } from "next-auth";

export const metadata = {
  title: "CoCode",
  description: "Developed for No-Country",
};
export default async function RootLayout({ children }) {

  const session = await getServerSession();

  console.log(session)
  
  return (
    <html lang="en">
      <body className={text.className}>
        <main className="w-screen flex justify-center items-center overflow-x-hidden">
          <UserSession session={session}>
            <StateLoader />
            {children}
          </UserSession>
        </main>
      </body>
    </html>
  );
}
