import React from "react";
import { Link } from "react-router-dom";

const ForgotPasswordPage = () => (
  <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
    <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white shadow-2xl rounded-2xl overflow-hidden">
      {/* Left side with image */}
      <div
        className="hidden md:block md:w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/835846664/photo/young-man-gathering-ideas.jpg?s=2048x2048&w=is&k=20&c=DHoW6caS6FLzW8R6SOgU-DzCIL4fpLGspobutnh4ABM=")',
        }}
      ></div>

      {/* Right side with form */}
      <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-700 text-center md:text-left">
          Forgot Password
        </h2>
        <p className="text-gray-500 mb-4 text-center md:text-left">
          Enter your email to reset your password
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
          >
            Reset Password
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Remember your password?{' '}
          <Link to="/login" className="text-blue-500 hover:underline font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  </div>
);

export default ForgotPasswordPage;