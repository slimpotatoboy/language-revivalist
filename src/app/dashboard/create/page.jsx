"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { usePost } from "@/lib/context/post";
import { useUser } from "@/lib/context/user";
import { ID, storage } from "@/lib/services/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Create() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const post = usePost();
  const auth = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [uploadImg, setUploadImg] = useState(null);

  const uploadFile = async () => {
    const promise = await storage.createFile(
      process.env.NEXT_PUBLIC_STORAGE_POST,
      ID.unique(),
      uploadImg
    );
    return promise.$id;
  };

  const onSubmit = async (value) => {
    setLoading(true);
    let id;
    if (uploadImg != null) {
      id = await uploadFile();
    }
    await post.add({
      description: value.description,
      userid: auth.current.$id,
      image: uploadImg != null ? id : "",
      // name: auth.current.name,
    });
    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <DashboardLayout>
      <div className="max-w-screen-sm mx-auto overflow-y-auto">
        <h4 className="my-5 font-bold text-2xl text-center">Create Post</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="card w-full border my-5">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="text-sm ml-1 mb-2">Share Your Thoughts</label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Share your thoughts"
                  {...register("description")}
                ></textarea>
              </div>
              <div className="form-control mb-3">
                <label className="text-sm ml-1 mb-2">Upload Image</label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full"
                  accept="image/*"
                  {...register("image", {
                    onChange: (event) => {
                      setUploadImg(event.target.files[0]);
                      if (event.target.files && event.target.files[0]) {
                        setImage(URL.createObjectURL(event.target.files[0]));
                      }
                    },
                  })}
                  //   {...register("description")}
                />
              </div>
              <button className="btn btn-primary text-white" disabled={loading}>
                {loading && <span className="loading loading-spinner"></span>}
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
