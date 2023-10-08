"use client";
import DashboardLayout from "@/components/DashboardLayout";
import { useUser } from "@/lib/context/user";

export default function Profile() {
  const user = useUser();
  return (
    <DashboardLayout>
      {user.current && (
        <div className="max-w-screen-sm mx-auto overflow-y-auto">
          <h4 className="my-5 font-bold text-2xl text-center">Profile</h4>
          <div className="card w-full border my-5">
            <div className="card-body">
              <h2 className="card-title mt-0 mb-5">Your Profile</h2>
              <div className="form-control mb-4">
                <label className="text-sm ml-1 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered w-full mr-2"
                  defaultValue={user.current.name}
                />
              </div>
              <div className="form-control mb-3">
                <label className="text-sm ml-1 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="dipenmaharjan.com.np"
                  className="input input-bordered w-full mr-2"
                  defaultValue={user.current.email}
                />
              </div>
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
