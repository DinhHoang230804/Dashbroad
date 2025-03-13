import React, { useState } from "react";
import "./Modal.css";
import "./ImageModal.css";

function ImageModal({ onClose, onOpenURLModal, onOpenTagModal }) {
  const [activeTab, setActiveTab] = useState("shop");

  // Sample images
  const images = [
    "/images/person.jpg",
    "/images/logo.svg",
    "/images/curtain.jpg",
    "/images/plant.jpg",
    "/images/food.jpg",
    "/images/room.jpg",
  ];

  return (
    <div className="modal-overlay">
      <div className="modal image-modal">
        <div className="modal-header">
          <h3 className="modal-title">Ảnh của Shop</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="tab-header">
          <div
            className={`tab ${activeTab === "shop" ? "active" : ""}`}
            onClick={() => setActiveTab("shop")}
          >
            Ảnh của shop
          </div>
          <div
            className={`tab ${activeTab === "library" ? "active" : ""}`}
            onClick={() => setActiveTab("library")}
          >
            Thư viện ảnh
          </div>
        </div>

        <div className="tab-content">
          <div className="search-box">
            <div className="search-icon">
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
              placeholder="Tìm kiếm hình ảnh theo tên"
            />
          </div>

          <div className="image-categories">
            <button className="category-btn active">Tất cả</button>
            <button className="category-btn">Ảnh nổi dụng</button>
          </div>

          <div className="image-grid">
            {images.map((img, index) => (
              <div className="image-item" key={index}>
                <img src={img} alt={`Image ${index}`} />
                <div className="image-actions">
                  <button className="image-action-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </button>
                  <button className="image-action-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="upload-options">
            <div>
              <button className="upload-button" onClick={onOpenTagModal}>
                Tạo tag mới
              </button>
            </div>
            <div>
              <button className="upload-button">Chọn tệp</button>
              <button className="upload-button" onClick={onOpenURLModal}>
                Từ URL
              </button>
            </div>
          </div>

          <div className="file-info">
            <span>Dung lượng tối đa: 10MB / 52MB</span>
          </div>
        </div>

        <div className="modal-footer">
          <button className="cancel-button" onClick={onClose}>
            Đóng
          </button>
          <button className="save-button">Lưu</button>
        </div>
      </div>
    </div>
  );
}

export default ImageModal;
