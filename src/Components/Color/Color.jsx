import "./Color.css";
import { useState } from "react";

export default function Color({ role, hex, contrastText, onDeleteColor }) {
  const [showConfirmationMessage, setShowConfirmationMessage] = useState(false);

  function handleDeleteClick() {
    setShowConfirmationMessage(true);
  }

  return (
    <div
      className="color-card"
      style={{ backgroundColor: hex, color: contrastText }}
    >
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
        <button onClick={handleDeleteClick}>Delete</button>
      )}
    </div>
  );
}
