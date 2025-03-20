import React from "react";
import { FaCamera, FaUser, FaPen, FaUserPlus } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import profilePic from "../../assets/Profile Pic.png";

function Profile() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white p-6">
      {/* Left Section - Logo & Introduction */}
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start lg:w-1/2 p-8 animate-fade-in-left">
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1651418249/new-nft_tlfisy.png"
          alt="KozyChat Logo"
          className="w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 mb-4 rounded-full shadow-2xl border-4 border-purple-500 hover:scale-110 transition-transform hover:rotate-6"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 drop-shadow-lg">
          KozyChat
        </h1>
        <p className="text-gray-300 mt-4 max-w-md text-sm md:text-lg leading-relaxed">
          Connect, Chat, and Share your moments with ease on KozyChat!
        </p>
      </div>

      {/* Right Section - Profile Setup Form */}
      <div className="w-full lg:w-1/2 p-6 md:p-8 bg-gray-800 bg-opacity-40 backdrop-blur-xl rounded-xl shadow-2xl flex flex-col lg:flex-row justify-between items-center lg:items-start animate-fade-in-right border border-purple-500 hover:shadow-purple-500/50 transition-shadow space-y-6 lg:space-y-0">
        {/* Left Side - Form Inputs */}
        <div className="flex flex-col items-center lg:items-start w-full">
          {[
            { placeholder: "Enter your Email", icon: <MdAlternateEmail />, type: "email" },
            { placeholder: "Enter your Full Name", icon: <FaUser />, type: "text" },
            { placeholder: "Enter your Username", icon: <CgProfile />, type: "text" },
          ].map((field, index) => (
            <div key={index} className="mb-4 w-full md:w-96 relative">
              <span className="absolute top-4 left-3 text-purple-400">{field.icon}</span>
              <input
                type={field.type}
                className="w-full p-3 pl-10 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-gray-800 transition"
                placeholder={field.placeholder}
              />
            </div>
          ))}

          {/* About Section Input */}
          <div className="mb-6 w-full md:w-96 relative">
            <FaPen className="absolute top-4 left-3 text-purple-400" />
            <textarea
              className="w-full p-3 pl-10 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 hover:bg-gray-800 transition resize-none h-24"
              placeholder="Write about yourself..."
            ></textarea>
          </div>

          {/* Create Profile Button */}
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-6 py-3 rounded-full font-semibold text-lg text-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center gap-3 cursor-pointer">
            <FaUserPlus className="w-5 h-5" />Create Profile
          </button>
        </div>

        {/* Right Side - Profile Photo Section */}
        <div className="relative group w-full lg:w-auto flex justify-center">
          <div className="w-65 h-65 md:w-48 md:h-48 lg:w-60 lg:h-60 bg-opacity-10 backdrop-blur-lg rounded-2xl flex items-center justify-center cursor-pointer shadow-lg border border-gray-600 group-hover:scale-110 transition-all relative hover:ring-4 hover:ring-purple-400">
            <img
              src={profilePic}
              alt="Default Profile"
              className="w-35 h-35 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl object-cover shadow-md"
            />
            <FaCamera className="absolute bottom-3 right-3 text-gray-300 text-2xl opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
