import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FaShieldAlt, FaBolt, FaUsers, FaComments, FaGlobe, FaHeart, FaSmile, FaRobot, FaSyncAlt } from 'react-icons/fa';

export default function LandingPage() {
  const navigate = useNavigate();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-between p-10 md:p-20 gap-10 bg-[#CEE6F2]">
      {/* Background Animation */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0f172a" },
          particles: {
            number: { value: 80 },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { enable: true, speed: 2 }
          }
        }}
        className="absolute inset-0 z-0"
      />
      
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 relative z-10"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-2xl">
          Welcome to <span className="text-purple-400">KozyChat</span>
        </h1>
        <p className="text-blue-950 text-3xl md:text-xl mt-4">
          The Future of Fast, Secure, and Smart Messaging
        </p>
      </motion.div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-200 space-y-6 max-w-xl text-left"
        >
          <p className="text-blue-950 text-lg leading-relaxed">
            KozyChat redefines communication with blazing speed, AI enhancements, and end-to-end security — your new favorite messaging app!
          </p>
          <ul className="list-disc list-inside text-gray-400 text-lg">
            <li>🔒 End-to-End Encryption for your privacy</li>
            <li>⚡ Instant Messaging with real-time updates</li>
            <li>🌍 Connect globally with no boundaries</li>
            <li>🤖 AI-powered suggestions & chatbot</li>
            <li>💬 Custom Emojis, Smart Sync, and more</li>
          </ul>
          <motion.button 
            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-purple-500 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-xl transition-all hover:scale-105 flex items-center gap-2"
            onClick={() => navigate('/signup')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Explor Now <FaBolt className="text-yellow-300" />
          </motion.button>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1651418249/new-nft_tlfisy.png"
            alt="KozyChat Agent"
            className="w-[300px] md:w-[350px] rounded-full shadow-2xl border-4 border-purple-500 hover:rotate-6 transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </div>

      {/* Feature Section */}
      <div className="bg-[#1e293b] shadow-2xl rounded-2xl p-10 max-w-6xl text-center flex flex-col items-center space-y-6 mt-16 relative z-10">
        <motion.h2 
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose <span className="text-green-400">KozyChat?</span>
        </motion.h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[ 
            { icon: <FaShieldAlt className="text-blue-400 text-5xl" />, title: 'End-to-End Encryption', desc: 'Keep your chats private.' },
            { icon: <FaBolt className="text-yellow-400 text-5xl" />, title: 'Lightning Fast', desc: 'Real-time speed without lag.' },
            { icon: <FaUsers className="text-green-400 text-5xl" />, title: 'Group Chats', desc: 'Connect with your entire team.' },
            { icon: <FaComments className="text-purple-400 text-5xl" />, title: 'Smart Suggestions', desc: 'AI-enhanced chat responses.' },
            { icon: <FaGlobe className="text-red-400 text-5xl" />, title: 'Global Connectivity', desc: 'Worldwide, no boundaries.' },
            { icon: <FaHeart className="text-pink-400 text-5xl" />, title: 'Ad-Free Forever', desc: 'Clean and distraction-free.' },
            { icon: <FaSmile className="text-orange-400 text-5xl" />, title: 'Custom Emojis', desc: 'Express uniquely!' },
            { icon: <FaRobot className="text-indigo-400 text-5xl" />, title: 'AI Chatbot', desc: 'Instant smart assistance.' },
            { icon: <FaSyncAlt className="text-cyan-400 text-5xl" />, title: 'Seamless Sync', desc: 'Messages everywhere.' },
          ].map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center p-6 bg-[#273549] rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-2 text-white">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}


