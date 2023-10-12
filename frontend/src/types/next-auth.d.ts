import NextAuth from "next-auth";

declare module "next-auth" {

  interface User {
    apiToken: string;
  }

  interface Session {
    accessToken: unknown;
    user: unknown;
  }
}