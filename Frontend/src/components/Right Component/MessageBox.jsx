import React from 'react';
import Header from '../MessageHeader/header';
import Input from '../Message Input/Input';
import ChatBubble from '../Messages Area/ChatBubble';
function MessageBox() {
  return (
    <div className='flex-1 bg-[#0a0d17] text-[#e8f7fa] flex flex-col shadow-lg overflow-hidden'>
      {/* Header */}
      <Header />
      {/* Messages Area */}
      <div className='flex-1 p-4 overflow-y-auto custom-scrollbar'>
        <ChatBubble />
      </div>
      {/* Message Input */}
      <Input />
    </div>
  );
}

export default MessageBox;