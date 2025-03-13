import { useEffect, useState } from "react";
import {
  FaPlus,
  FaSearch,
  FaEllipsisH,
  FaSignOutAlt,
  FaFacebook,
  FaUser,
  FaCalendarAlt, // Lịch Hẹn (lịch)
  FaPencilAlt,
  FaPlay,
  FaPowerOff,
  FaSyncAlt,
  FaExchangeAlt,
  FaBell,
  FaFacebookMessenger,
  FaRobot,
  FaKey,
  FaCog,
  FaGamepad,
  FaTelegramPlane, // Cài Đặt (thanh điều chỉnh)
} from "react-icons/fa";
import "./Dashbroad.css";

export default function Dashbroad() {
  const [active2, setactive2] = useState();
  const [showMenuConnect, setShowMenuConect] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuItems = [
    { icon: <FaPencilAlt />, label: "Đổi tên page" },
    { icon: <FaPlay />, label: "Kết nối Page" },
    { icon: <FaPowerOff />, label: "Ngắt kết nối" },
    { icon: <FaSyncAlt />, label: "Làm mới kết nối" },
    { icon: <FaExchangeAlt />, label: "Chuyển shop" },
    { icon: <FaBell />, label: "Thông báo" },
    { icon: <FaUser />, label: "Khách hàng" },
  ];

  const menuItems2 = [
    { icon: <FaFacebookMessenger />, label: "LiveChat" },
    { icon: <FaRobot />, label: "ChatBot" },
    { icon: <FaTelegramPlane />, label: "Chiến dịch" },
    { icon: <FaCalendarAlt />, label: "Sequence" },
    { icon: <FaKey />, label: "Từ khóa" },
    { icon: <FaGamepad />, label: "Game" },
    { icon: <FaCog />, label: "Cài đặt Page" },
  ];
  const [pages] = useState([
    {
      id: 1,
      name: "Hoàng",
      phone: "256633025884",
      image: "/img/mattrang.png", // Ảnh đại diện
      status: "Ngắt kết nối",
      lastUpdated: "1.123.123",
    },
  ]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-wrapper, .add-bot")) {
        setShowMenu(false), setShowMenuConect(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dashboard">
      {/* Navbar */}

      {/* Main Content */}
      <div className="content">
        <div className="top-bar">
          <div className="tabs">
            {["BOT của tôi", "BOT mẫu", "Facebook Ads"].map((tab) => (
              <span
                key={tab}
                className={active2 === tab ? "active" : ""}
                onClick={() => setactive2(tab)}
              >
                {tab}
              </span>
            ))}
          </div>
          <div className="filter-search">
            <select>
              <option>Tất cả</option>
            </select>
            <div className="search-box">
              <input type="text" placeholder="Search" />
              <FaSearch className="search-icon" />
            </div>
          </div>
        </div>

        <div className="bot-container">
          <div
            className="add-bot"
            onClick={() => setShowMenuConect(!showMenuConnect)}
          >
            <FaPlus className="icon" />
            <p>Kết nối với ứng dụng (1/1)</p>

            <div className="menu-wrapper">
              {showMenuConnect && (
                <ul
                  className={`dropdown-menu1 ${
                    showMenuConnect ? "active" : ""
                  }`}
                >
                  <li>Kết nối Facebook</li>
                  <li>Kết nối ZaloOA</li>
                  <li>Kết nối Website</li>
                  <li>Kết nối Telegram</li>
                  <li>Tạo trợ lý AI</li>
                </ul>
              )}
            </div>
          </div>

          {pages.map((page) => (
            <div key={page.id} className="bot-card">
              <img src={page.image} alt="Bot" className="bot-image" />
              <div className="bot-info">
                <h3>{page.name}</h3>
                <p>
                  {page.phone} <FaSignOutAlt className="outicon" />
                </p>

                <p className="last-updated">
                  <FaFacebook className="fb" />
                  {page.lastUpdated}
                  <FaUser className="user" />
                </p>
                <p className="status">{page.status}</p>
              </div>
              <div className="menu-wrapper">
                <FaEllipsisH
                  className="menu-icon"
                  onClick={() => setShowMenu(!showMenu)}
                />

                {/* Menu dropdown */}
                {showMenu && (
                  <div className={`dropdown-menu2 ${showMenu ? "active" : ""}`}>
                    {[menuItems, menuItems2].map((group, index) => (
                      <ul key={index}>
                        {group.map((item, idx) => (
                          <li key={idx}>
                            {item.icon} {item.label}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
