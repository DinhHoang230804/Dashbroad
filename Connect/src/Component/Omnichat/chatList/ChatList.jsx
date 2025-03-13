import React from "react";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./ChatList.css";
import { NavLink } from "react-router-dom";

export default function ChatList({ setSelectedChat }) {
  const chatData = [
    { id: 1, name: "Lê Thảo Ly", message: "Dạ em cảm ơn", time: "15/03" },
    {
      id: 2,
      name: "Khả Ái Phương",
      message: "Fchat là phần mềm...",
      time: "18/03",
    },
    {
      id: 3,
      name: "Minh Trọng",
      message: "Hi! Ad tôi là Seal...",
      time: "15/03",
    },
    { id: 4, name: "Đinh Thư", message: "Fchat là phần mềm...", time: "18/03" },
    {
      id: 5,
      name: "Liễu Như Yến",
      message: "Fchat là phần mềm...",
      time: "18/03",
    },
  ];

  return (
    <div className="chat-list">
      <div className="search-bar">
        <Input
          prefix={<SearchOutlined />}
          placeholder="Nhập Tên, Số Điện Thoại, Email"
        />
        <Select
          className="select-search-bar"
          defaultValue="Tất cả"
          options={[{ value: "Tất cả", label: "Tất cả" }]}
        />
      </div>

      <div className="chat-items">
        {chatData.map((chat) => (
          <div
            key={chat.id}
            className="chat-item"
            onClick={() => setSelectedChat(chat)}
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
  );
}
