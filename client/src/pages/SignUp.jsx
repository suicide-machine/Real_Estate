import React from "react"
import { Link } from "react-router-dom"

const SignUp = () => {
  return (
    <div className="max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center my-7 font-semibold">Sign Up</h1>

      <form action="" className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="p-3 rounded-lg border"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="p-3 rounded-lg border"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 rounded-lg border"
          id="password"
        />
        <button className="bg-slate-700 rounded-lg p-3 text-white uppercase hover:opacity-95 disabled:opacity-80">
          Sign Up
        </button>
      </form>
      <div className="mt-5 flex gap-2">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  )
}

export default SignUp
