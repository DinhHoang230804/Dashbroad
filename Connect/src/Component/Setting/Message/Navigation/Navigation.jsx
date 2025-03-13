import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();
  const [active, setActive] = useState("Tin nhắn mẫu");
  useEffect(() => {
    // Lấy phần cuối của đường dẫn để xác định tab nào đang được chọn
    if (location.pathname.includes("livechat")) {
      setActive("Live Chat");
    } else if (location.pathname.includes("lichhen")) {
      setActive("Lịch hẹn");
    } else {
      setActive("Tin nhắn mẫu"); // Mặc định quay về Tin nhắn mẫu
    }
  }, [location.pathname]);
  return (
    <nav className="nav-menu">
      {[
        { name: "Live Chat" },
        { name: "Tin nhắn mẫu", path: "/setting" }, // Thêm path cho Tin nhắn mẫu
        { name: "Lịch hẹn", path: "/setting/lichhen" },
      ].map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={active === item.name ? "active" : ""}
          onClick={() => setActive(item.name)}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}

export default Navigation;
