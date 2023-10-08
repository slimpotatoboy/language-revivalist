"use client";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useUser } from "@/lib/context/user";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }) {
  const auth = useUser();
  const router = useRouter();
  // useEffect(() => {
  //   if (!auth.current) {
  //     router.push("/");
  //   }
  // }, []);

  return (
    <main className="flex justify-start overflow-hidden">
      <Sidebar></Sidebar>
      <div className="ml-48 p-3 w-full">{children}</div>
    </main>
  );
}
