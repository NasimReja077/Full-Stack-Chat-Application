import React from "react";
import { Link } from "react-router-dom";
import { FaLock, FaUser } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden">
        {/* Image Side */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://plus.unsplash.com/premium_photo-1684761875683-b66e09ad44c2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Chat App"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Side */}
        <div className="w-full md:w-1/2 p-8 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-700">Login to Your Account</h2>
          <form className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Username"
                className="w-full pl-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Link to="/forgotpassword" className="text-blue-500 text-sm hover:underline">
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition-transform transform hover:scale-105"
            >
              Login
            </button>
            <p className="text-center text-gray-600 mt-4">
              Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;