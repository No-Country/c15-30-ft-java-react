export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/workspace/:path*", "/user/:path*"],
};