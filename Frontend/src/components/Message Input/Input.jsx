import React, { useState } from "react";
import { RiChatSmile3Fill } from "react-icons/ri";
import { PiPaperclipFill } from "react-icons/pi";
import { BsSendFill } from "react-icons/bs";
import { IoMdCloseCircle } from "react-icons/io";
import EmojiPicker from "emoji-picker-react";

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
      {/* Attachment Preview */}
      {attachment && (
        <div className="flex items-center gap-3 p-3 mb-2 bg-[#1a1e2e] rounded-xl shadow-lg animate-slideIn">
          {attachment?.type?.startsWith("image/") ? (
            <div className="relative">
              <img
                src={URL.createObjectURL(attachment)}
                alt="Attachment preview"
                className="w-16 h-16 rounded-lg object-cover border-2 border-blue-500 shadow-md"
              />
              <button
                onClick={removeAttachment}
                className="absolute top-[-8px] right-[-8px] bg-red-500 p-1 rounded-full hover:scale-110 transition-transform shadow-md"
              >
                <IoMdCloseCircle className="w-5 h-5 text-white" />
              </button>
            </div>
          ) : (
            <div className="p-3 bg-blue-500/20 rounded-lg flex items-center gap-2">
              <span className="text-sm font-medium text-gray-300">{attachment.name}</span>
              <button
                onClick={removeAttachment}
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                <IoMdCloseCircle className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Chat Input Section */}
      <div className="flex items-center gap-3 bg-[#0F172A] rounded-lg p-3 shadow-lg border border-[#1a1e2e] hover:ring-2 ring-blue-500 transition-all duration-300">
        {/* Emoji Picker Button */}
        <button
          className="p-2 hover:bg-[#1a1e2e] rounded-full transition-colors cursor-pointer"
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
        >
          <RiChatSmile3Fill className="w-6 h-6 text-gray-400 hover:text-yellow-400 transition-colors" />
        </button>

        {/* Emoji Picker */}
        {showEmojiPicker && (
          <div className="absolute bottom-16 left-4 z-10 bg-[#1a1e2e] p-2 rounded-xl shadow-xl">
            <EmojiPicker onEmojiClick={handleEmojiClick} theme="dark" />
          </div>
        )}

        {/* File Attachment Button */}
        <label className="p-2 hover:bg-[#1a1e2e] rounded-full transition-colors cursor-pointer">
          <PiPaperclipFill className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
          <input type="file" onChange={handleFileChange} className="hidden" />
        </label>

        {/* Message Input */}
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 bg-transparent border-none focus:outline-none text-white placeholder-gray-400 text-lg px-2"
        />

        {/* Send Button */}
        <button
          className={`p-2 ${
            message.trim() || attachment
              ? "bg-gradient-to-r from-blue-500 to-cyan-400 hover:scale-110"
              : "bg-gray-600 cursor-not-allowed"
          } rounded-full transition-all transform active:scale-95 shadow-lg`}
          disabled={!message.trim() && !attachment}
        >
          <BsSendFill className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}

export default Input;