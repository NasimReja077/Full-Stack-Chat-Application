import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';

function Error() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <motion.div 
        initial={{ scale: 0.8, rotateY: 180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-red-500 text-9xl mb-4 drop-shadow-lg"
      >
        <FaExclamationTriangle />
      </motion.div>
      <h1 className="text-7xl font-extrabold text-gray-800 mb-4 drop-shadow-xl">404</h1>
      <p className="text-lg text-gray-600 mb-6 uppercase tracking-widest">Oops! Page Not Found</p>
      <motion.a 
        href="/" 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-2xl shadow-2xl transition duration-300"
      >
        Return Home
      </motion.a>
    </div>
  );
}

export default Error;
