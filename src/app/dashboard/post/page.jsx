"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { usePost } from "@/lib/context/post";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Post() {
  const posts = usePost();
  const [single, setSingle] = useState();
  const searchParams = useSearchParams();

  const postId = searchParams.get("id");

  const getUpdate = async () => {
    const response = await posts.get(postId);
    // console.log(response);
    setSingle(response);
  };

  useEffect(() => {
    getUpdate();
  }, []);

  return (
    <DashboardLayout>
      <div className="max-w-screen-sm mx-auto overflow-y-auto">
        {single && (
          <div className="card w-full border mb-5">
            <div className="card-body">
              <h2 className="card-title">
                <div className="flex">
                  <div className="avatar placeholder">
                    <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                      <span>DM</span>
                    </div>
                  </div>{" "}
                  <div className="ml-2">
                    <div className="text-md">{single.name ?? "Test User"}</div>
                  </div>
                </div>
              </h2>
              <div className="mt-3">{single.description}</div>
            </div>
            {single.image && (
              <figure>
                <img
                  src={`${process.env.NEXT_PUBLIC_APPWRITE_IMAGE_URL}/${single.image}/preview?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`}
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
        )}
      </div>
    </DashboardLayout>
  );
}
