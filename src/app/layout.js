import { UserProvider } from "@/lib/context/user";
import "./globals.css";
import { Inter } from "next/font/google";
import { PostProvider } from "@/lib/context/post";
import {  DictionaryProvider } from "@/lib/context/dictionary";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Language Revivalist",
  description: "Generated by Language Revivalist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body>
        <UserProvider>
          <PostProvider>
            <DictionaryProvider>{children}</DictionaryProvider>
          </PostProvider>
        </UserProvider>
      </body>
    </html>
  );
}
