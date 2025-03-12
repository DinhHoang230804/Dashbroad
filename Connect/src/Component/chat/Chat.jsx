import React, { useState } from "react";
import SideBar from "../sideBar/SideBar";
import ChatList from "../chatList/ChatList";
import ChatWindow from "../chatWindow/ChatWindow";
import CustomerInfo from "../customerInfo/CustomerInfo";
import "./Chat.css";

export default function Chat() {
  const [selectedChat, setSelectedChat] = useState(null);
  return (
    <div className="home-container">
      <SideBar />
      <div className="content-chat">
        <ChatList setSelectedChat={setSelectedChat} />
        <ChatWindow selectedChat={selectedChat} />
        <CustomerInfo />
      </div>
    </div>
  );
}
