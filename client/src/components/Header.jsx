import React from "react"
import { Link } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { useSelector } from "react-redux"

const Header = () => {
  const { currentUser } = useSelector((state) => state.user)
  return (
    <header className="bg-slate-200 shadow-lg sticky">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-lg flex flex-wrap">
            <span className="text-slate-500">Real</span>
            <span className="text-slate-900">Estate</span>
          </h1>
        </Link>

        <form
          action=""
          className="p-3 bg-slate-100 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className="focus:outline-none bg-transparent w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>

        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="profile"
                className="rounded-full w-7 h-7 object-cover"
              />
            ) : (
              <li className=" text-slate-700 hover:underline">Sign in</li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  )
}

export default Header
