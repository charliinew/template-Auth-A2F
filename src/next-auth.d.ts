import { UserRole } from "@prisma/client";
import NextAuth, { type DefaultSession } from "next-auth"

declare module 'next-auth/react' {
	function getCsrfToken(): Promise<string>
}

export type ExtendedUser = DefaultSession["user"] & {
    id: string;
    role: UserRole
}

declare module "next-auth" {
    interface Session {
        user: ExtendedUser;
    }
}