"use client";

import MainLayout from "@/components/MainLayout";
import { useUser } from "@/lib/context/user";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const auth = useUser();

  useEffect(() => {
    localStorage.setItem(
      "learning",
      JSON.stringify([
        {
          language: "",
          level: "",
          is_completed: "",
          randomId: "",
        },
      ])
    );
  }, []);

  return (
    <MainLayout layout="max-w-full">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(bg.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl text-white font-bold">
              Learn language easily and share
            </h1>
            <p className="mb-5">
              Language Revivalist is a application designed to promote the
              revival of endangered or less commonly spoken languages. It offers
              a dynamic platform combining word matching games, social
              discussions, and comprehensive learning resources to foster the
              revitalization of these languages and build a vibrant, connected
              community of language enthusiasts.
            </p>
            <div className="flex justify-center">
              <Link href="/play" className="btn btn-secondary mr-3">
                Learn Language
              </Link>
              <Link
                href={auth.current ? "/dashboard" : "/auth/login"}
                className="btn btn-primary"
              >
                Social Community
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto my-10">
        <h1>Why Use Language Revivalist</h1>
        <p className="mb-10">
          Language Revivalist offers a dynamic platform combining word matching
          games, social discussions, and comprehensive learning resources to
          foster the revitalization of endangered languages and build a vibrant,
          connected community of language enthusiasts{" "}
        </p>
        <div className="flex justify-center items-center">
          <iframe
            width="600"
            height="315"
            src="https://www.youtube.com/embed/7FPvYK1RtuI?si=CvqqElqMaSndxZDh"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="mr-10"
          ></iframe>
        </div>
      </div>
    </MainLayout>
  );
}
