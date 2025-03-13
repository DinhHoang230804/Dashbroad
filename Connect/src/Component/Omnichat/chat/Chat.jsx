import React from "react";
import SideBar from "../sideBar/SideBar";
import ChatList from "../chatList/ChatList";
import ChatWindow from "../chatWindow/ChatWindow";
import CustomerInfo from "../customerInfo/CustomerInfo";
import "./Chat.css";

export default function Chat() {
  return (
    <div className="home-container">
      <div className="content-chat">
        <div className="side-bar">
          <SideBar />
        </div>
        <div className="chat-list">
          <ChatList />
        </div>
        <div className="customer-info">
          <CustomerInfo />
        </div>
      </div>
    </div>
  );
}
