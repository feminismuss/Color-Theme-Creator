import "./Color.css";
// import { useState } from "react";

export default function Color({ role, hex, contrastText, onDeleteColor }) {
  // State for message
// const [confirmationMessage, setConfirmationMessage] = useState("")

  
  return (
    <div
      className="color-card"
      style={{ backgroundColor: hex, color: contrastText }}
    >
      <h2 className="color-card-headline">{hex}</h2>
      <p>{role}</p>
      <p>contrast: {contrastText}</p>
      {/* button */}
      <button onClick={onDeleteColor}>Delete</button>
    </div>
  );
}
