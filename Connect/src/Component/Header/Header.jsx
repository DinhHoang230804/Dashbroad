import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  FaThLarge, // Dashboard (lưới)
  FaEnvelope, // OmniChat (tin nhắn)
  FaShoppingCart, // Đơn Hàng (giỏ hàng)
  FaCalendarAlt, // Lịch Hẹn (lịch)
  FaChartBar, // Báo Cáo (đồng hồ)
  FaSlidersH,
  FaBars,
} from "react-icons/fa";
import "./Header.css";
const Header = () => {
  const tabs = [
    { name: "Dashboard", path: "/dashboard", icon: <FaThLarge /> },
    { name: "OmniChat", path: "/chat", icon: <FaEnvelope /> },
    { name: "Đơn Hàng", icon: <FaShoppingCart /> },
    { name: "Lịch hẹn", icon: <FaCalendarAlt /> },
    { name: "Báo Cáo", icon: <FaChartBar /> },
    { name: "Cài Đặt", icon: <FaSlidersH /> },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setactive] = useState();
  // Hàm để toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="navbar">
        <div className="nav-left">
          <img className="logo" src="./img/logo.png" alt="" />
          <div className="icon-menu" onClick={toggleMenu}>
            <FaBars />
          </div>
          <ul className={isMenuOpen ? "active" : ""}>
            {tabs.map((tab) => (
              <Link className="unlink" to={tab.path} key={tab.name}>
                {" "}
                {/* <- KEY đặt ở đây */}
                <li
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
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Header;
