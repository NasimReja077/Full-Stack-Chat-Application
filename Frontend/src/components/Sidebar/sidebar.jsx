import React, { useState } from 'react';
import { BsWechat } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { GiBugleCall } from "react-icons/gi";
import { MdOutlineWebStories } from "react-icons/md";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { CgCloseO } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiBriefcase } from "react-icons/fi";
import { FaUserEdit } from "react-icons/fa";
function Sidebar() {
  const [showSettings, setShowSettings] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const menuItems = [
    { icon: <BsWechat />, label: 'Chats', link: '#', active: true },
    { icon: <MdOutlineWebStories />, label: 'Stories', link: '#' },
    { icon: <HiUserGroup />, label: 'Groups', link: '#' },
    { icon: <GiBugleCall />, label: 'Broadcast', link: '#' },
  ];

  return (
    <div className="flex h-screen w-20 flex-col justify-between bg-[#0F172A] text-white shadow-lg border-r border-[#1E293B] p-2">
      <div>
        {/* Logo */}
        <div className="flex h-16 w-full items-center justify-center border-b border-[#1E293B]">
          <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">KC</span>
        </div>

        {/* Menu Items */}
        <ul className="mt-4 space-y-6">
          {menuItems.map((item, index) => (
            <li key={index} className="group relative">
              <a
                href={item.link}
                className="flex flex-col items-center justify-center space-y-1 p-3 text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out rounded-xl hover:scale-110"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Profile and Settings */}
      <div className="mb-4 flex flex-col items-center space-y-6 relative">
        <button onClick={() => setShowSettings(!showSettings)} className="text-gray-400 hover:text-white transition duration-300 cursor-pointer">
          <FiSettings className="w-6 h-6 hover:rotate-90 transition-transform duration-500" />
        </button>

        {showSettings && (
          <div className="absolute bottom-16 left-12 bg-gradient-to-br from-[#1E293B] to-[#334155] p-6 rounded-3xl shadow-2xl z-10 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl backdrop-blur-md border border-gray-700/50 w-72">
            {/* Settings Header */}
            <h3 className="text-2xl font-bold text-white mb-5 tracking-wide flex items-center justify-center">Settings</h3>
            {/* Edit Profile Button */}
            <button className="flex items-center space-x-3 text-blue-500 hover:text-blue-400 p-3 cursor-pointer hover:bg-blue-500/20 rounded-xl transition-all duration-300 w-full">
            <FaUserEdit className="text-2xl" />
            <span className="font-semibold text-white text-lg">Edit Profile</span>
            </button>
            {/* Logout Button */}
            <button className="flex items-center space-x-3 text-red-500 hover:text-red-400 p-3 cursor-pointer hover:bg-red-500/20 rounded-xl transition-all duration-300 w-full mt-2">
            <FiLogOut className="text-2xl" />
            <span className="font-semibold text-white text-lg">Logout</span>
            </button>
            
            {/* Divider */}
            <div className="w-full h-[1px] bg-gray-600 opacity-50 my-4"></div>
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between gap-4 bg-[#2C3A4B] p-3 rounded-xl shadow-inner">
              <span className="text-white font-medium text-sm">Dark Mode</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-500 peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
            </div>
          )}
        {/* Profile Picture */}
        <button className="relative" onClick={() => setShowProfile(!showProfile)}>
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-blue-400 hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg object-cover cursor-pointer"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0F172A]"></span>
        </button>
        {/* Profile Dropdown */}
        {showProfile && (
          <div className="absolute top-[-460px] left-20 w-96 bg-[#1E293B]/80 backdrop-blur-md p-6 shadow-2xl z-20 rounded-2xl animate-fadeIn flex flex-col items-center space-y-6 border border-[#374151]">
            {/* Close Button */}
            <button 
            onClick={() => setShowProfile(false)} 
            className="absolute top-3 right-3 cursor-pointer text-gray-400 hover:text-red-400 transition duration-300">
              <CgCloseO className="w-6 h-6" />
            </button>
            {/* Profile Image with 3D Hover Effect */}
            <div className="relative group">
              <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg object-cover transition-all duration-300 group-hover:scale-110 group-hover:shadow-blue-500/50 cursor-pointer"/>
              </div>
              {/* User Details */}
              <h3 className="text-2xl font-semibold text-white tracking-wide">John Doe</h3>
              <p className="text-gray-400 text-sm italic">"Code. Create. Conquer."</p>
              {/* Additional Information */}
              <div className="flex flex-col items-center space-y-2 text-gray-300 text-sm">
                <p className="flex items-center gap-2">
                  <FiMail className="w-5 h-5 text-blue-400" /> johndoe@example.com
                </p>
                <p className="flex items-center gap-2">
                  <FiMapPin className="w-5 h-5 text-green-400" /> San Francisco, USA
                </p>
                <p className="flex items-center gap-2">
                  <FiBriefcase className="w-5 h-5 text-yellow-400" /> Frontend Developer
                </p>
                </div>
                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-600 opacity-50"></div>
                {/* Profile Actions with Icons */}
                <div className="flex w-full justify-around text-gray-400 text-sm font-medium">
                  <button className="flex items-center space-x-2 hover:text-blue-500 transition duration-300 cursor-pointer">
                    <FaUserEdit className="w-5 h-5" />
                    <span>Edit Profile</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-red-400 transition duration-300 cursor-pointer">
                    <FiLogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
      </div>
    </div>
  );
}

export default Sidebar; 