"use client";

import MainLayout from "@/components/MainLayout";
import { useUser } from "@/lib/context/user";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const auth = useUser();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      const res = await auth.login(values.email, values.password);
      setFormError();
      setIsLoading(false);
      router.push("/dashboard");
    } catch (e) {
      setIsLoading(false);
      setFormError(e.message);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-screen-sm mx-auto my-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 px-2 py-10 flex flex-col mx-auto justify-center border border-primary items-center text-center py-6 rounded-lg"
        >
          <h2 className="m-0 link-primary text-xl font-bold">Login</h2>

          {formError && (
            <div className="bg-error text-white px-4 mt-5 py-2 rounded-lg">
              {formError}
            </div>
          )}
          <div className="w-full px-5 mt-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="input input-bordered w-full mb-2"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    Email is required
                  </span>
                </label>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mb-2"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <label className="label">
                  <span className="label-text-alt text-red-500">
                    Password is required
                  </span>
                </label>
              )}
            </div>
            <button
              className="btn btn-primary w-full my-3"
              type="submit"
              disabled={isLoading}
            >
              {isLoading && (
                <span className="loading loading-dots loading-md"></span>
              )}
              Login
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
