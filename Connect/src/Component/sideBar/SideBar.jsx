import React from "react";
import { Button, Tooltip } from "antd";
import {
  AliwangwangOutlined,
  BulbOutlined,
  CalendarOutlined,
  CheckSquareOutlined,
  FilterOutlined,
  MailOutlined,
  MessageOutlined,
  PhoneOutlined,
  SkypeOutlined,
  SnippetsOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import "./SideBar.css";

export default function SideBar() {
  const menuIcons = [
    { id: 1, icon: <FilterOutlined />, name: "Tất cả tin nhắn", path: "/" },
    {
      id: 2,
      icon: <MessageOutlined />,
      name: "Tin nhắn Mess",
      path: "/messenger",
    },
    {
      id: 3,
      icon: <AliwangwangOutlined />,
      name: "Tin nhắn Zalo",
      path: "/zalo",
    },
    { id: 4, icon: <PhoneOutlined />, name: "Tin nhắn SĐT", path: "/phone" },
    {
      id: 5,
      icon: <MailOutlined />,
      name: "Tin nhắn Website",
      path: "/website",
    },
    {
      id: 6,
      icon: <WhatsAppOutlined />,
      name: "Tin nhắn WhatsApp",
      path: "/whatsapp",
    },
    { id: 7, icon: <SkypeOutlined />, name: "Tin nhắn Skype", path: "/skype" },
    {
      id: 8,
      icon: <CalendarOutlined />,
      name: "Lọc theo ngày",
      path: "/calendar",
    },
    {
      id: 9,
      icon: <CheckSquareOutlined />,
      name: "Đã hoàn thành",
      path: "/completed",
    },
    { id: 10, icon: <SnippetsOutlined />, name: "Chưa đọc", path: "/unread" },
    { id: 11, icon: <BulbOutlined />, name: "Trợ lý", path: "/assistant" },
  ];

  return (
    <>
      <div className="sidebar">
        <div className="menu-list">
          {menuIcons.map((item) => (
            <Tooltip key={item.id} title={item.name} placement="right">
              <Button className="menu-item">{item.icon}</Button>
            </Tooltip>
          ))}
        </div>
      </div>
    </>
  );
}
