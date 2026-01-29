import "./Color.css";
import ColorForm from "../ColorForm/ColorForm";
import { useState } from "react";

export default function Color({
  role,
  hex,
  contrastText,
  onDeleteColor,
  onEditColor,
  id,
}) {
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleDeleteClick() {
    setShowConfirmationMessage(true);
  }
  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <div
      className="color-card"
      style={{ backgroundColor: hex, color: contrastText }}
    >
      {isEditing ? (
        <ColorForm
          variant="edit"
          initialData={{ role, hex, contrastText }}
          onSubmitColor={(updatedData) => {
            onEditColor(id, updatedData);
            setIsEditing(false);
          }}
        />
      ) : (
        <>
          <h2 className="color-card-headline">{hex}</h2>
          <p>{role}</p>
          <p>contrast: {contrastText}</p>
          {showConfirmationMessage ? (
            <>
              <p className="color-card-highlight">Really delete?</p>

              <button onClick={onDeleteColor}>Yes</button>
              <button onClick={() => setShowConfirmationMessage(false)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <button onClick={handleDeleteClick}>Delete</button>
              <button onClick={handleEditClick}>Edit</button>
            </>
          )}
        </>
      )}
    </div>
  );
}
