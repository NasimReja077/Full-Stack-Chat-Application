import React from "react";
import { motion } from "framer-motion";
// import { FaSpinner } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black p-4 relative">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinning Icon */}
        {/* <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        >
          <FaSpinner className="text-yellow-400 text-6xl animate-pulse drop-shadow-lg" />
        </motion.div> */}

        {/* Loading Text */}
        <motion.p
          className="text-yellow-300 text-2xl font-extrabold tracking-wider uppercase drop-shadow-lg"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Loading, please wait...
        </motion.p>

        {/* Progress Bar */}
        <div className="w-72 h-3 bg-yellow-700 rounded-full overflow-hidden shadow-md">
          <motion.div
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-200 rounded-full shadow-lg"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
