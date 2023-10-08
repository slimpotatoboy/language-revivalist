"use client";
import DashboardLayout from "@/components/DashboardLayout";
import Link from "next/link";

export default function Library() {
  return (
    <DashboardLayout>
      <div className="max-w-screen-sm mx-auto overflow-y-auto">
        <h1 className="font-bold mb-2">Library</h1>
        <div>
          <div className="card w-full bg-base-100 border">
            <div className="card-body">
              <h2 className="card-title">
                Exploring Newari: Nepal&apos;s Rich Linguistic Heritage
              </h2>
              <p>Learn More about newari langugage</p>
              <div className="card-actions justify-end">
                <Link
                  href="/Newari_Book.pdf"
                  target="_blank"
                  className="btn btn-primary"
                >
                  View Now
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-full bg-base-100 border mt-5">
            <div className="card-body">
              <h2 className="card-title">
                Exploring Kusunda: Nepal&apos;s Endangered Language
              </h2>
              <p>Learn More about kusunda language</p>
              <div className="card-actions justify-end">
                <Link
                  href="/kusundabook.pdf"
                  target="_blank"
                  className="btn btn-primary"
                >
                  View Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
