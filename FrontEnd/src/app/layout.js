import "../styles/globals.css";
import { text } from "../styles/fonts.js";
import StateLoader from "@/state/StateLoader";
import UserSession from "../context/UserSession";

export const metadata = {
  title: "CoCode",
  description: "Developed for No-Country",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={text.className}>
        <main className="w-screen overflow-hidden">
          {/* <StateLoader /> */}
          <UserSession >{children}</UserSession>
        </main>
      </body>
    </html>
  );
}
