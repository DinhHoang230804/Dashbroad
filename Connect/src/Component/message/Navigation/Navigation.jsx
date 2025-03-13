import React, { useState } from "react";
import "./Navigation.css";

function Navigation() {
  const [active, setActive] = useState("Tin nhắn mẫu");
  return (
    <nav className="nav-menu">
      {[
        "Thông tin",
        "Nhân viên",
        "Live Chat",
        "Tin nhắn mẫu",
        "Lịch hẹn",
        "PinCode",
        "History",
        "Tồn kho",
        "Coupon",
        "Thanh Toán",
        "Trigger",
        "Tích điểm",
      ].map((item) => (
        <a
          key={item}
          href="#"
          className={active === item ? "active" : ""}
          onClick={() => setActive(item)}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
