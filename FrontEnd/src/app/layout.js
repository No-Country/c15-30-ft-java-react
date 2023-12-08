import "../styles/globals.css";
import { text } from "../styles/fonts.js";
import UserSession from "../context/UserSession";
import { getServerSession } from "next-auth";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "CoCode",
  description: "Developed for No-Country",
};


export default async function RootLayout({ children, pageProps }) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={text.className}>
        <main className="w-screen flex justify-center items-center overflow-x-hidden">
          <UserSession session={session}>
           {/*  <StateLoader /> */}
            {children}
            <Toaster />
          </UserSession>
        </main>
      </body>
    </html>
    
  );
}
