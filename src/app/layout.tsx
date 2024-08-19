import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { auth } from "@/auth";
import { Session } from "inspector";
import { SessionProvider } from "next-auth/react";
import { SessionDataProvider } from "@/components/wrapper/session-data-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le.Seiko",
  description: "Create what you want to have",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <SessionDataProvider>
      <html lang="en" className={`font-sans`}>
        <body>{children}</body>
      </html>
    </SessionDataProvider>
  );
}
