import React from 'react';

const chatData = [
     {
          id: 1,
          name: "Sarah Wilson",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "Hey! How's your project going? 🚀",
          time: "2m ago",
          unread: 2,
          online: true
        },
        {
          id: 2,
          name: "James Rodriguez",
          avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "The meeting is scheduled for tomorrow at 10 AM",
          time: "45m ago",
          unread: 0,
          online: true
        },
        {
          id: 3,
          name: "Emma Thompson",
          avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "Thanks for your help yesterday! 🙏",
          time: "2h ago",
          unread: 1,
          online: false
        },
        {
          id: 4,
          name: "Michael Chen",
          avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "Did you see the latest design updates?",
          time: "3h ago",
          unread: 3,
          online: true
        },
        {
          id: 5,
          name: "Sofia Garcia",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "Let's catch up over coffee ☕",
          time: "5h ago",
          unread: 0,
          online: false
        },
        {
          id: 6,
          name: "David Kim",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "The new features are looking great!",
          time: "6h ago",
          unread: 0,
          online: true
        },
        {
          id: 7,
          name: "Lisa Anderson",
          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "Can we review the presentation? 📊",
          time: "8h ago",
          unread: 4,
          online: true
        },
        {
          id: 8,
          name: "Alex Morgan",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "Great work on the latest release 🎉",
          time: "1d ago",
          unread: 0,
          online: false
        },
        {
          id: 9,
          name: "Nina Patel",
          avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "The client loved our proposal!",
          time: "1d ago",
          unread: 1,
          online: true
        },
        {
          id: 10,
          name: "Tom Wilson",
          avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "Looking forward to our collaboration",
          time: "2d ago",
          unread: 0,
          online: false
        },
        {
          id: 11,
          name: "Priya Sharma",
          avatar: "https://images.unsplash.com/photo-1519091781155-99f7e63f56e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "Let’s plan a weekend trip! 🏖️",
          time: "3d ago",
          unread: 2,
          online: true
        },
        {
          id: 12,
          name: "Raj Verma",
          avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "The new framework is a game changer!",
          time: "5d ago",
          unread: 0,
          online: false
        },
        {
          id: 13,
          name: "Aisha Khan",
          avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "Need help with the report?",
          time: "6h ago",
          unread: 1,
          online: true
        },
        {
          id: 14,
          name: "Kabir Singh",
          avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "Don’t forget our meeting tomorrow! 📅",
          time: "1d ago",
          unread: 3,
          online: false
        },
        {
          id: 15,
          name: "Meera Das",
          avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
          message: "Loved your latest blog post! 💙",
          time: "7h ago",
          unread: 0,
          online: true
        }
];
function Userlist() {
  return (
     <div className="flex-1 overflow-y-auto custom-scrollbar p-2 bg-[#0F172A]">
      {chatData.map((chat) => (
        <div
          key={chat.id}
          className="p-4 hover:bg-[#1e293b] cursor-pointer transition-all duration-300 border-b border-[#1a1e2e] group rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02]"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-full h-full rounded-full object-cover group-hover:ring-2 ring-cyan-400 transition-all"
              />
              {chat.online && (
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#0a0d17] animate-pulse"></span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold truncate text-lg text-white group-hover:text-cyan-300 transition-all">
                  {chat.name}
                </h3>
                <span className="text-xs text-gray-400 flex-shrink-0 group-hover:text-gray-300">
                  {chat.time}
                </span>
              </div>

              <div className="flex items-center justify-between mt-1">
                <p className="text-sm text-gray-400 truncate pr-4 group-hover:text-gray-200">
                  {chat.message}
                </p>
                {chat.unread > 0 && (
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 shadow-md">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Userlist;
