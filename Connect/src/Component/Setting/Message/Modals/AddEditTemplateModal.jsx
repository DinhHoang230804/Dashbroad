import React, { useState, useEffect } from "react";
import "./Modal.css";
import "./AddEditTemplateModal.css";

function AddEditTemplateModal({ template, onClose, onSave, onOpenImageModal }) {
  const [formData, setFormData] = useState({
    title: "",
    keyword: "",
    content: "",
    image: null,
    useQuickReply: true,
  });

  useEffect(() => {
    if (template) {
      setFormData({
        title: template.title || "",
        keyword: template.keyword || "",
        content: template.content || "",
        image: template.image || null,
        useQuickReply: true,
      });
    }
  }, [template]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">
            {template
              ? "Cập nhật tin nhắn trả lời nhanh"
              : "Cập nhật tin nhắn trả lời nhanh"}
          </h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="replyType"
                  checked={formData.useQuickReply}
                  onChange={() =>
                    setFormData({ ...formData, useQuickReply: true })
                  }
                />
                Trả lời nhanh
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="replyType"
                  checked={!formData.useQuickReply}
                  onChange={() =>
                    setFormData({ ...formData, useQuickReply: false })
                  }
                />
                Mẫu nội dung
              </label>
            </div>

            <div className="form-group">
              <label htmlFor="title">Tên hiển thị</label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                placeholder="Nhập tại đây"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="keyword">Từ khóa</label>
              <input
                type="text"
                id="keyword"
                name="keyword"
                className="form-control"
                placeholder="Nhập từ khóa"
                value={formData.keyword}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Nội dung tin nhắn</label>
              <textarea
                id="content"
                name="content"
                className="form-control textarea"
                placeholder="Nội dung trả lời mẫu"
                value={formData.content}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label>Tải ảnh đính kèm</label>
              <div className="upload-image" onClick={onOpenImageModal}>
                <svg
                  className="upload-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="cancel-button" onClick={onClose}>
              Đóng
            </button>
            <button type="submit" className="save-button">
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEditTemplateModal;
