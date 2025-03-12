import React from "react";
import { UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, PlusCircleOutlined, TagOutlined } from "@ant-design/icons";
import "./CustomerInfo.css";

const CustomerInfo = () => {
  return (
    <div className="user-info">
    <div className="header-title">
      <h2 className="title">Quản Lý Thông Tin</h2>
    </div>

      <div className="avatar-container">
        <img src="https://i.pravatar.cc/40" alt="User Avatar" className="avatar" />
        <h3 className="user-name">Lê Thảo Ly</h3>
        <p className="user-id">ID Facebook: 30273409</p>
      </div>

      <div className="info-list">
        <div className="info-item">
          <UserOutlined />
          <span>Lê Thảo Ly</span>
        </div>
        <div className="info-item">
          <MailOutlined />
          <span>Nhập Email</span>
        </div>
        <div className="info-item">
          <PhoneOutlined />
          <span>Nhập Số Điện Thoại</span>
        </div>
        <div className="info-item">
          <EnvironmentOutlined />
          <span>Nhập vị trí</span>
        </div>
      </div>

      <button className="add-note">
        <PlusCircleOutlined /> Thêm ghi chú
      </button>

      <div className="tags">
        <p className="tag-title"><TagOutlined /> Tag khách hàng</p>
        <div className="tag-buttons">
          <button className="completed">Hoàn tất</button>
          <button className="add-tag">Thêm <PlusCircleOutlined /></button>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;
