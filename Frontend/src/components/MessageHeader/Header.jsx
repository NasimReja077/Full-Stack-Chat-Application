import React, { useState } from 'react';
import { FaSquarePhone } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
import { CgMoreO, CgCloseO } from "react-icons/cg";
import { FiMail, FiMapPin, FiBriefcase } from "react-icons/fi";

function Header() {
  const [showProfile, setShowProfile] = useState(false);
  const user = {
    name: "Sarah Wilson",
    status: "Online",
    email: "sarah@example.com",
    location: "New York, USA",
    job: "Software Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    about: "Code. Create. Conquer."
  };

  return (
    <>
      <div className="p-4 border-b border-[#1a1e2e] flex items-center justify-between bg-gradient-to-r from-[#0f172a] to-[#1a1e2e] shadow-md">
        <div className="flex items-center gap-3">
          <img
            src={user.image}
            alt={user.name}
            className='w-12 h-12 rounded-full object-cover shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer ring-2 ring-blue-500 hover:ring-purple-500'
            onClick={() => setShowProfile(!showProfile)}
          />
          <div>
            <h3 className="font-semibold text-white">{user.name}</h3>
            <span className="text-sm text-green-500">{user.status}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-[#62456c] rounded-full transition-colors cursor-pointer">
            <FaSquarePhone className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 hover:bg-[#62456c] rounded-full transition-colors cursor-pointer">
            <IoIosVideocam className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 hover:bg-[#62456c] rounded-full transition-colors cursor-pointer">
            <CgMoreO className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Profile Dropdown */}
      {showProfile && (
        <div className="absolute top-20 left-140 w-80 bg-[#1E293B]/80 backdrop-blur-md p-6 shadow-2xl z-20 rounded-2xl animate-fadeIn flex flex-col items-center space-y-6 border border-[#374151]">
          {/* Close Button */}
          <button
            onClick={() => setShowProfile(false)}
            className="absolute top-3 right-3 cursor-pointer text-gray-400 hover:text-red-400 transition duration-300"
          >
            <CgCloseO className="w-6 h-6" />
          </button>

          {/* Profile Image with Hover Effect */}
          <div className="relative group">
            <img
              src={user.image}
              alt={user.name}
              className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg object-cover transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/50 cursor-pointer"
            />
          </div>

          {/* User Details */}
          <h3 className="text-2xl font-semibold text-white tracking-wide">{user.name}</h3>
          <p className="text-gray-400 text-sm italic">{user.about}</p>

          {/* Additional Information */}
          <div className="flex flex-col items-center space-y-2 text-gray-300 text-sm">
            <p className="flex items-center gap-2">
              <FiMail className="w-5 h-5 text-blue-400" /> {user.email}
            </p>
            <p className="flex items-center gap-2">
              <FiMapPin className="w-5 h-5 text-green-400" /> {user.location}
            </p>
            <p className="flex items-center gap-2">
              <FiBriefcase className="w-5 h-5 text-yellow-400" /> {user.job}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gray-600 opacity-50"></div>
        </div>
      )}
    </>
  );
}

export default Header;