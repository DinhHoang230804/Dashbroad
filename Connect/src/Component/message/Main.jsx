import React, { useState } from "react";
import Navigation from "./Navigation/Navigation";
import MessageTemplateList from "./MessageTemplate/MessageTemplateList";
import AddEditTemplateModal from "./Modals/AddEditTemplateModal";
import ImageModal from "./Modals/ImageModal";
import URLModal from "./Modals/URLModal";
import TagModal from "./Modals/TagModal";

function Main() {
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showURLModal, setShowURLModal] = useState(false);
  const [showTagModal, setShowTagModal] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState(null);

  const handleAddNew = () => {
    setEditingTemplate(null);
    setShowAddEditModal(true);
  };

  const handleEdit = (template) => {
    setEditingTemplate(template);
    setShowAddEditModal(true);
  };

  const handleSaveTemplate = (template) => {
    console.log("Save template:", template);
    setShowAddEditModal(false);
  };

  const handleOpenImageModal = () => {
    setShowImageModal(true);
  };

  const handleOpenURLModal = () => {
    setShowURLModal(true);
  };

  const handleOpenTagModal = () => {
    setShowTagModal(true);
  };

  return (
    <div className="app">
      <Navigation />
      <main className="contentt">
        <MessageTemplateList onAddNew={handleAddNew} onEdit={handleEdit} />
      </main>

      {showAddEditModal && (
        <AddEditTemplateModal
          template={editingTemplate}
          onClose={() => setShowAddEditModal(false)}
          onSave={handleSaveTemplate}
          onOpenImageModal={handleOpenImageModal}
        />
      )}

      {showImageModal && (
        <ImageModal
          onClose={() => setShowImageModal(false)}
          onOpenURLModal={handleOpenURLModal}
          onOpenTagModal={handleOpenTagModal}
        />
      )}

      {showURLModal && <URLModal onClose={() => setShowURLModal(false)} />}

      {showTagModal && <TagModal onClose={() => setShowTagModal(false)} />}
    </div>
  );
}

export default Main;
