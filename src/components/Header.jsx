/* eslint-disable @next/next/no-img-element */
import { useUser } from "@/lib/context/user";
import Link from "next/link";

export default function Header() {
  const auth = useUser();

  return (
    <div className="navbar bg-base-100 border-b">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/teams">Teams</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="font-bold ml-5 text-lg">
          Language Revivalist
          {/* <img src="/logo.png" className="h-36" alt="" /> */}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/teams">Teams</Link>
          </li>
        </ul>
      </div>
      {auth.current ? (
        <div className="navbar-end">
          <Link href="/dashboard" className="btn btn-ghost mr-2">
            Dashboard
          </Link>
          <button
            onClick={() => {
              auth.logout();
              alert("logout successfully!");
            }}
            className="btn btn-ghost"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="navbar-end">
          <Link href="/auth/login" className="btn btn-ghost mr-2">
            Login
          </Link>
          <Link href="/auth/register" className="btn btn-ghost">
            Register
          </Link>
        </div>
      )}
    </div>
  );
}
