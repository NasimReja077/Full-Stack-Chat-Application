import React, { useState } from 'react';
import { RiChatSmileAiFill } from "react-icons/ri";
import { PiPaperclipFill } from "react-icons/pi";
import { BsSendFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import EmojiPicker from 'emoji-picker-react';

function Input() {
  const [attachment, setAttachment] = useState(null);
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachment(file);
    }
  };

  const removeAttachment = () => setAttachment(null);

  const handleEmojiClick = (emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji);
  };

  return (
    <div className="p-4 border-t border-[#1a1e2e] relative">
      {attachment && (
        <div className="flex items-center gap-3 p-2 mb-2 bg-[#1a1e2e] rounded-lg shadow-md animate-slideIn">
          {attachment?.type?.startsWith('image/') ? (
            <img
              src={URL.createObjectURL(attachment)}
              alt="Attachment preview"
              className="w-16 h-16 rounded-lg object-cover"
            />
          ) : (
            <div className="p-2 bg-blue-500/10 rounded-lg">
              <p className="text-sm font-medium text-gray-300">{attachment.name}</p>
            </div>
          )}
          <button
            onClick={removeAttachment}
            className="p-1 hover:bg-red-500/20 rounded-full transition-colors">
            <IoMdCloseCircle className="w-5 h-5 text-red-500" />
          </button>
        </div>
      )}

      <div className="flex items-center gap-3 bg-[#0F172A] rounded-lg p-2 shadow-md hover:ring-2 ring-blue-500 transition-all">
        <button
          className="p-2 hover:bg-[#1a1e2e] rounded-full transition-colors cursor-pointer"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <RiChatSmileAiFill className="w-6 h-6 text-gray-400" />
        </button>

        {showEmojiPicker && (
          <div className="absolute bottom-16 left-4 z-10">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}

        <label className="p-2 hover:bg-[#1a1e2e] rounded-full transition-colors cursor-pointer">
          <PiPaperclipFill className="w-6 h-6 text-gray-400" />
          <input type="file" onChange={handleFileChange} className='hidden' />
        </label>

        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-transparent border-none focus:outline-none text-white placeholder-gray-400"
        />

        <button className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-110 rounded-full transition-transform">
          <BsSendFill className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default Input;