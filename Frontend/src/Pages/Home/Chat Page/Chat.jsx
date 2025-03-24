import React from 'react';
import Sidebar from '../../../components/Sidebar/sidebar';
import Chatlist from '../../../components/Chat Lists/chatlist'
import MessageBox from '../../../components/Right Component/MessageBox'
function Chat() {
  return (
    <div className='flex h-screen overflow-hidden'>
      <Sidebar />
      <Chatlist />
      <MessageBox />
    </div>
  );
}

export default Chat;
