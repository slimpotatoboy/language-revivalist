/* eslint-disable @next/next/no-img-element */
"use client";

import { useRouter } from "next/navigation";

const levels = [
  {
    title: "Beginner",
    url: "/caste/beginner.png",
    route: "",
  },
  {
    title: "Intermediate",
    url: "/caste/advance.png",
    route: "",
  },
  {
    title: "Advanced",
    url: "/caste/intermediate.png",
    route: "",
  },
];

export default function ChooseLang({ params }) {
  const router = useRouter();
  return (
    <div className="max-w-screen-lg mx-auto prose text-center">
      <div className="flex justify-center items-center">
        <button className="btn btn-ghost mr-4" onClick={() => router.back()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <h1 className="my-10">Choose Language Level</h1>
      </div>
      <div className="flex justify-center">
        {levels.map((item, index) => (
          <button
            className="btn btn-ghost w-1/5 h-full mx-auto"
            key={index}
            onClick={() => router.push(`/play/${params.language}?level=${item.title.toLowerCase()}`)}
          >
            <img src={item.url} className="w-full h-64 object-cover" alt="" />
            <div className="mb-2">{item.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
