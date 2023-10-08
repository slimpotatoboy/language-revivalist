"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { usePost } from "@/lib/context/post";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const post = usePost();
  const router = useRouter();

  useEffect(() => {
    post.list();
  }, [post]);

  return (
    <DashboardLayout>
      <div className="fixed bottom-10 right-10">
        <Link
          href="/dashboard/create"
          className="btn btn-square btn-primary text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
      <div className="max-w-screen-sm mx-auto overflow-y-auto">
        <h4 className="my-5 font-bold text-2xl text-center">Feed</h4>
        {!post.current && <h3>Post Not Found</h3>}
        {!!post.current && (
          <div>
            {post.current.map((item, index) => (
              <div
                key={index}
                className="card w-full border mb-5 hover:cursor-pointer"
                onClick={() => {
                  router.push(`/dashboard/post?id=${item.$id}`);
                }}
              >
                <div className="card-body">
                  <h2 className="card-title">
                    <div className="flex">
                      <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                          <span>DM</span>
                        </div>
                      </div>{" "}
                      <div className="ml-2">
                        <div className="text-md">
                          {item.name ?? "Test User"}
                        </div>
                      </div>
                    </div>
                  </h2>
                  <div className="mt-3">{item.description}</div>
                </div>
                {item.image && (
                  <figure>
                    <img
                      src={`${process.env.NEXT_PUBLIC_APPWRITE_IMAGE_URL}/${item.image}/preview?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`}
                      alt="Shoes"
                    />
                  </figure>
                )}
                <div className="form-control p-2">
                  <label className="label">
                    <span className="label-text">Your Comment</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Bio"
                  ></textarea>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
