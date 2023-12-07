import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );
        const response = await res.json();

        if (response.message) throw response;

        const { user } = response;
        const { token } = response;

        return { user, token };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      console.log(auth);
      console.log('Me ejecuto en el callback');
      return true;
    },
  },
  pages: {
    signIn: "/login",
    newUser: "/user",
    signOut: "/",
    error: "/",
  },
};

export default authOptions;
