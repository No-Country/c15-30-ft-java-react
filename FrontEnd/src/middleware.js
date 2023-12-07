import { redirect } from "next/dist/server/api-utils";

export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/workspace/:path*", "/user/:path*", "/projects/me/create"],
  pages: {
    afterSignIn: "/workspace", // 
    afterSignOut: "/",  // 
  },
};

