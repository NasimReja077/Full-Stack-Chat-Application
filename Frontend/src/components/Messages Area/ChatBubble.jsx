import React, { useState } from 'react';
import { IoMdDownload } from "react-icons/io";
import { GoFileSubmodule } from "react-icons/go";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaCheck } from "react-icons/fa6";
import { LuCheckCheck } from "react-icons/lu";
import { TiMessages } from "react-icons/ti";
const messages = [
     {
          id: 1,
          text: "Hey Sarah! How's the new project coming along? 👋",
          time: "10:30 AM",
          sender: "user",
          status: "seen",
          type: "text"
        },
        {
          id: 2,
          text: "Hi! It's going great! We just finished the initial design phase 🎨",
          time: "10:32 AM",
          sender: "other",
          status: "seen",
          type: "text"
        },
        {
          id: 3,
          type: "image",
          content: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
          caption: "Here's a preview of the dashboard design",
          time: "10:33 AM",
          sender: "other",
          status: "seen"
        },
        {
          id: 4,
          type: "file",
          content: "Project_Presentation.pdf",
          fileSize: "2.4 MB",
          time: "10:34 AM",
          sender: "other",
          status: "seen"
        },
        {
          id: 5,
          text: "These look amazing! The color scheme is perfect 🎨",
          time: "10:35 AM",
          sender: "user",
          status: "delivered",
          type: "text"
        },
        {
          id: 6,
          text: "Thanks! I'll send more updates as we progress 📊",
          time: "10:36 AM",
          sender: "other",
          status: "sent",
          type: "text"
        }
];
function ChatBubble() {
     const [attachment, setAttachment] = useState('none');

     const [searchVisible, setSearchVisible] = useState(false);
     const renderMessageContent = (message) => {
          switch (message.type) {
               case 'image':
                    return (
                         <div className="relative group">
                              <img 
                              src={message.content} 
                              alt={message.caption} 
                              className="rounded-lg max-w-sm cursor-pointer hover:opacity-95 transition-opacity shadow-lg"/>{message.caption && (
                              <p className="text-sm mt-1 text-gray-300">{message.caption}</p>
                              )}
                              <button className="absolute top-2 right-2 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70">
                              <IoMdDownload className="w-4 h-4" />
                              </button>
                         </div>
                    );
                    case 'file':
                         return (
                              <div className="flex items-center gap-3 bg-[#1a1e2e] p-3 rounded-lg hover:bg-[#252a3e] transition-colors cursor-pointer group shadow-md">
                                   <div className="p-2 bg-blue-500/10 rounded-lg">
                                   <GoFileSubmodule className="w-6 h-6 text-blue-500" />
                                   </div>
                                   <div className="flex-1">
                                        <p className="text-sm font-medium">{message.content}</p>
                                        <p className="text-xs text-gray-400">{message.fileSize}</p>
                                   </div>
                                   <button className="p-2 hover:bg-black/20 rounded-full opacity-0 group-hover:opacity-100 transition-all">
                                   <PiDownloadSimpleBold className="w-4 h-4" />
                                   </button>
                              </div>
                         );
                         default:
                              return <p className="text-sm leading-relaxed">{message.text}</p>;
          }
     };
     
     const renderMessageStatus = (status) => {

          switch (status) {
            case 'sent':
              return <FaCheck className="w-3 h-3 text-gray-400" />;
            case 'delivered':
              return <LuCheckCheck className="w-3 h-3 text-gray-400" />;
            case 'seen':
              return <LuCheckCheck className="w-3 h-3 text-blue-500" />;
            default:
              return null;
          }
        };
      
  return (
    <div className="space-y-6">
      {messages.length > 0 ? (
           messages.map((message) => (
               
               <div
               key={message.id}
               className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
               {message.sender === 'other' && (
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                    alt="Sarah Wilson"
                    className="w-8 h-8 rounded-full object-cover mr-2 self-end hover:scale-110 transition-transform cursor-pointer"
                  />
                )}
                <div className={`max-w-[70%] ${message.sender === 'user' ? 'order-1' : 'order-2'}`}>
                <div
                    className={`rounded-2xl p-3 shadow-lg hover:shadow-xl transition-shadow ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white'
                        : 'bg-[#1a1e2e] hover:bg-[#252a3e] transition-colors'
                    }`}
                  >
                    {renderMessageContent(message)}
                  </div>
                  <div className={`flex items-center gap-1 mt-1 ${
                    message.sender === 'user' ? 'justify-end' : 'justify-start'
                  }`}>
                    <span className="text-xs text-gray-400">{message.time}</span>
                    {message.sender === 'user' && renderMessageStatus(message.status)}
                  </div>
                </div>
                {message.sender === 'user' && (
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
                    alt="You"
                    className="w-8 h-8 rounded-full object-cover ml-2 self-end hover:scale-110 transition-transform cursor-pointer"
                  />
                )}
              </div>
           ))
      ) : (
          <div className="text-center animate-fadeIn">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:shadow-xl transition-shadow">
                <TiMessages className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Start Messaging</h3>
              <p className="text-gray-400">Send private messages to Sarah Wilson</p>
            </div>
      )}
    </div>
  );
}

export default ChatBubble;
