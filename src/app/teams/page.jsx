/* eslint-disable @next/next/no-img-element */
"use client";
import MainLayout from "@/components/MainLayout";

export default function Teams() {
  return (
    <MainLayout>
      <div className="h-screen mt-10">
        <div className="flex justify-between">
          <div className="w-1/4 bg-gray-300 h-64 rounded-md mr-2">
            <img
              src="/teams/aakriti.jpg"
              alt="Image 1"
              className="w-full h-full object-cover object-center"
            />
            <div className="bg-white p-2 mt-2 rounded-md">
              <p className="text-gray-700">Aakriti Das</p>
              <p className="text-gray-500 text-sm">Designer</p>
            </div>
          </div>
          <div className="w-1/4 bg-gray-300 h-64 rounded-md mr-2">
            <img
              src="/teams/dipen.jpeg"
              alt="Image 2"
              className="w-full h-full object-cover object-center"
            />
            <div className="bg-white p-2 mt-2 rounded-md">
              <p className="text-gray-700">Dipen Maharjan</p>
              <p className="text-gray-500 text-sm">Full stack Developer</p>
            </div>
          </div>
          <div className="w-1/4 bg-gray-300 h-64 rounded-md mr-2">
            <img
              src="/teams/famos.jpg"
              alt="Image 3"
              className="w-full h-full object-cover object-center"
            />
            <div className="bg-white p-2 mt-2 rounded-md">
              <p className="text-gray-700">Famous Dhungana</p>
              <p className="text-gray-500 text-sm">Frontend Developer</p>
            </div>
          </div>
          <div className="w-1/4 bg-gray-300 h-64 rounded-md">
            <img
              src="/teams/roshan.jpg"
              alt="Image 4"
              className="w-full h-full object-cover object-center"
            />
            <div className="bg-white p-2 mt-2 rounded-md">
              <p className="text-gray-700">Roshan Aryal</p>
              <p className="text-gray-500 text-sm">Backend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
