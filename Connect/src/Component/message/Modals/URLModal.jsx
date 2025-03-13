import React, { useState } from "react";
import "./Modal.css";
import "./URLModal.css";

function URLModal({ onClose }) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted URL:", url);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">Nhập URL</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <input
              type="url"
              className="url-input"
              placeholder="Nhập liên kết ảnh"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
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

export default URLModal;
