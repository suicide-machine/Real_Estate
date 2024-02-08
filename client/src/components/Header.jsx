import React from "react"
import { FaSearch } from "react-icons/fa"

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-lg sticky">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <h1 className="font-bold text-sm sm:text-lg flex flex-wrap">
          <span className="text-slate-500">Real</span>
          <span className="text-slate-900">Estate</span>
        </h1>

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

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>SignIn</li>
        </ul>
      </div>
    </header>
  )
}

export default Header
