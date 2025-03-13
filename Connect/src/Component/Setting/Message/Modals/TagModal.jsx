import React, { useState } from "react";
import "./Modal.css";
import "./TagModal.css";

function TagModal({ onClose }) {
  const [tag, setTag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Created tag:", tag);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">Quản lý tag</h3>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-body">
            <input
              type="text"
              className="tag-input"
              placeholder="Nhập tên tag"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              required
            />
          </div>

          <div className="modal-footer">
            <button type="button" className="cancel-button" onClick={onClose}>
              Hủy
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

export default TagModal;
