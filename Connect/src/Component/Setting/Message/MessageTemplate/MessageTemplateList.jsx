import React, { useState } from "react";
import "./MessageTemplateList.css";

function MessageTemplateList({ onAddNew, onEdit }) {
  // Sample data to mimic the screenshot
  const [templates, setTemplates] = useState([
    {
      id: 1,
      keyword: "/xinchao",
      title: "Chào mừng khách hàng mới",
      image: "/images/welcome.jpg",
      content:
        "Chào anh/chị! Cảm ơn anh/chị đã quan tâm đến Omnichat. Chúng tôi có thể giúp gì cho anh/chị hôm nay ạ?",
      creator: "Admin",
      createdDate: "12/03/2025",
      scope: "Tất cả page",
    },
    {
      id: 2,
      keyword: "/trphong",
      title: "Hỏi thông tin đặt phòng",
      image: "/images/booking.jpg",
      content:
        "Anh/chị vui lòng cho em biết ngày nhận phòng, số đêm lưu trú và số lượng khách để em tư vấn phòng phù hợp nhé!",
      creator: "Admin",
      createdDate: "12/03/2025",
      scope: "Tất cả page",
    },
    {
      id: 3,
      keyword: "/Baogía",
      title: "Báo giá và xác nhận phòng trống",
      image: "/images/price.jpg",
      content:
        "Hiện tại, chúng em có phòng [Loại phòng] với giá [Giá phòng]/đêm. Anh/chị muốn đặt phòng này không ạ? Nếu cần hỗ trợ thêm, em luôn sẵn sàng!",
      creator: "Admin",
      createdDate: "12/03/2025",
      scope: "Tất cả page",
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa tin nhắn mẫu này?")) {
      setTemplates(templates.filter((template) => template.id !== id));
    }
  };

  return (
    <div className="template-container">
      <div className="template">
        <div>
          <p className="template-description">
            Tin nhắn để trả lời nhanh trộng của số livechat. Hãy sử dụng Block
            để gởi hình ảnh, video...
          </p>
        </div>

        <div className="search-add-container">
          <div className="search-boxx">
            <div className="search-iconn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Tìm kiếm theo từ khóa, tên hiển thị, nội dung"
            />
          </div>

          <button className="add-button" onClick={onAddNew}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Thêm mới
          </button>
        </div>
      </div>
      <table className="template-table">
        <thead>
          <tr>
            <th>Từ khóa</th>
            <th>Tên hiển thị</th>
            <th>Ảnh</th>
            <th>Nội dung</th>
            <th>Người tạo</th>
            <th>Áp dụng</th>
            <th>Thay đổi</th>
          </tr>
        </thead>
        <tbody>
          {templates.map((template) => (
            <tr key={template.id}>
              <td>{template.keyword}</td>
              <td>{template.title}</td>
              <td>
                <img
                  src={template.image}
                  alt={template.title}
                  className="template-image"
                />
              </td>
              <td>{template.content}</td>
              <td>
                {template.creator}
                <br />
                {template.createdDate}
              </td>
              <td>{template.scope}</td>
              <td className="action-buttons">
                <button
                  className="edit-button"
                  onClick={() => onEdit(template)}
                >
                  Chỉnh sửa
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(template.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MessageTemplateList;
