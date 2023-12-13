import "../styles/globals.css";
import { text } from "../styles/fonts.js";
import UserSession from "../context/UserSession";
import { getServerSession } from "next-auth";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/context/ThemeProvider";

export const metadata = {
  title: "CoCode",
  description: "Developed for No-Country",
};


export default async function RootLayout({ children, pageProps }) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={text.className}>
        <main className="flex flex-col items-center overflow-x-hidden">
          <UserSession session={session}>
           {/*  <StateLoader /> */}
           <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
           </ThemeProvider>
          </UserSession>
        </main>
      </body>
    </html>
    
  );
}
