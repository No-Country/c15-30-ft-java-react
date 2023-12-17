import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials, req) {
        /* const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/login`,
          {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        ); */
        /* TODO modificar esto una vez haya conexion con el back */
        
        const response = /* await res.json(); */ {
          user: {
            id:1,
            nombre: "Falso",
            apellido: "Perez",
            email: "user@falso.com",
            puesto: "Administrador",
            avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
            rol: "admin",
            githubUser: "jandres373",
          }
        }

        if (response.message) throw response;

        const { user } = response;
        /* const { token } = response; */
        console.log(user)

        return { user, /* token */ };
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
