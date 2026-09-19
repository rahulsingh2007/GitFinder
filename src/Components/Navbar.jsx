import { useState } from "react";
import logo from "../assets/favicon.svg"

const Navbar = ({ searchUser, loading }) => {
    const [username, setUsername] = useState("");
    return (
        <div className="bg-white flex flex-wrap gap-4 py-4 px-4 justify-center items-center border-b-2 border-[#E2E2DE]">
            <div onClick={() => window.location.reload()} className="flex items-center gap-2 cursor-pointer">
                <img src={logo} alt="Logo" className="w-6" />
                <p className="text-[#888891]">GitFinder</p>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter Github Username"
                    className="bg-[#F7F7F5] py-2 px-4 w-full sm:w-[40vw] border border-[#E2E2DE] rounded-lg text-md hover:border-[#E2E2DE] focus:border-[#E2E2DE] focus:outline-none cursor-pointer"
                />
                <button
                    disabled={loading}
                    onClick={() => searchUser(username)} className="bg-black active:bg-[#2E2E2E] active:scale-98 transition-all text-white rounded-lg py-2 px-6 cursor-pointer shrink-0">
                    {loading ? "Searching.." : "Search"}
                </button>
            </div>
        </div>
    )
}

export default Navbar