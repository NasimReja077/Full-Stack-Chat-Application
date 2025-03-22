import React from 'react';
import { BsWechat } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { GiBugleCall } from "react-icons/gi";
import { MdOutlineWebStories } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import profilePic from "../../assets/Profile Pic.png";

function Sidebar() {
  const menuItems = [
    { icon: <BsWechat />, label: 'Chats', link: '#' },
    { icon: <MdOutlineWebStories />, label: 'Stories', link: '#' },
    { icon: <HiUserGroup />, label: 'Groups', link: '#' },
    { icon: <GiBugleCall />, label: 'Broadcast', link: '#' },
  ];

  return (
    <div className="flex h-screen w-20 flex-col justify-between bg-gray-900 text-white shadow-lg border-r border-gray-800 p-2">
      <div>
        {/* Logo */}
        <div className="flex h-16 w-full items-center justify-center border-b border-gray-700">
          <span className="text-3xl font-bold text-blue-500 tracking-widest drop-shadow-md">KC</span>
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
      <div className="mb-4 flex flex-col items-center space-y-6">
        <a href="#" className="text-gray-400 hover:text-white transition duration-300">
          <FiSettings className="text-2xl hover:rotate-90 transition-transform duration-500" />
        </a>
        <a href="#">
          <img
            src={profilePic}
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-blue-400 hover:scale-110 transition-transform duration-300 ease-in-out shadow-lg"
          />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
