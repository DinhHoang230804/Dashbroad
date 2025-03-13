import React, { useState, useEffect } from "react";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./ChatList.css";
import ChatWindow from "../chatWindow/ChatWindow";

export default function ChatList() {
  const chatData = [
    { id: 1, name: "Lê Thảo Ly", message: "Dạ em cảm ơn", time: "15/03" },
    { id: 2, name: "Khả Ái Phương", message: "Fchat là phần mềm...", time: "18/03" },
    { id: 3, name: "Minh Trọng", message: "Hi! Ad tôi là Seal...", time: "15/03" },
  ];

  const [selectedChat, setSelectedChat] = useState(null);
  const [hoveredChatId, setHoveredChatId] = useState(null);

  useEffect(() => {
    if (chatData.length > 0) {
      setSelectedChat(chatData[0]);
    }
  }, []);

  return (
    <div className="chat-container">
      <div className="chat-list">
        <div className="search-bar">
          <Input prefix={<SearchOutlined />} placeholder="Nhập Tên, Số Điện Thoại, Email" />
          <Select className="select-search-bar" defaultValue="Tất cả" options={[{ value: "Tất cả", label: "Tất cả" }]} />
        </div>

        <div className="chat-items">
          {chatData.map((chat) => (
            <div
              key={chat.id}
              className={`chat-item ${hoveredChatId === chat.id ? "hovered" : ""}`}
              onClick={() => setSelectedChat(chat)}
              onMouseEnter={() => setHoveredChatId(chat.id)}
              onMouseLeave={() => setHoveredChatId(null)}
            >
              <div className="chat-avatar">{chat.name[0]}</div>
              <div className="chat-info">
                <div className="chat-name">{chat.name}</div>
                <div className="chat-message">{chat.message}</div>
              </div>
              <div className="chat-time">{chat.time}</div>
            </div>
          ))}
        </div>
      </div>

      <ChatWindow selectedChat={selectedChat} />
    </div>
  );
}
