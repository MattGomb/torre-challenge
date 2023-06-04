"use client";
import { useSearchContext } from "@/context/SearchContext";
import { useState } from "react";

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const { username, handleUsername, fetchSkills } = useSearchContext();

  return (
    <div className="flex justify-between px-4 py-2 shadow-md">
      <div className="flex gap-4">
        <p>hamburger placeholder</p>
        <div className="flex">
          <p>torre</p>
          <p>.co</p>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col items-end gap-1">
          {showInput && (
            <input
              type="text"
              placeholder="username"
              className="text-black"
              value={username}
              onChange={(e) => handleUsername(e.target.value)}
            />
          )}
          <button
            onClick={() => {
              setShowInput(!showInput), fetchSkills(username);
            }}
          >
            search
          </button>
        </div>
        <p>SIGN IN</p>
      </div>
    </div>
  );
};

export default Navbar;
