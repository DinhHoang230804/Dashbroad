import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaThLarge, // Dashboard (lưới)
  FaEnvelope, // OmniChat (tin nhắn)
  FaShoppingCart, // Đơn Hàng (giỏ hàng)
  FaCalendarAlt, // Lịch Hẹn (lịch)
  FaChartBar, // Báo Cáo (đồng hồ)
  FaSlidersH,
} from "react-icons/fa";
import "./Header.css";
const Header = () => {
  const tabs = [
    { name: "Dashboard", path: "/", icon: <FaThLarge /> },
    { name: "OmniChat", path: "/chat", icon: <FaEnvelope /> },
    { name: "Đơn Hàng", icon: <FaShoppingCart /> },
    { name: "Lịch hẹn", icon: <FaCalendarAlt /> },
    { name: "Báo Cáo", icon: <FaChartBar /> },
    { name: "Cài Đặt", icon: <FaSlidersH /> },
  ];

  const [active, setactive] = useState();
  return (
    <div>
      <div className="navbar">
        <div className="nav-left">
          <img className="logo" src="./img/logo.png" alt="" />
          <ul>
            {tabs.map((tab) => (
              <Link className="unlink" to={tab.path}>
                <li
                  key={tab.name}
                  className={active === tab.name ? "active" : ""}
                  onClick={() => setactive(tab.name)}
                >
                  {tab.icon} <span>{tab.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="nav-right">
          <div className="profile-pic">
            <img src="./img/mattrang.png" alt="" />
          </div>
          <span>
            Xin chào <b>Hoàng</b>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
