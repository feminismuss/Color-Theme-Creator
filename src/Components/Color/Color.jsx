import "./Color.css";

export default function Color({ role, hex, contrastText }) {
  return (
    <div
      className="color-card"
      style={{ backgroundColor: hex, color: contrastText }}
    >
      <h2 className="color-card-headline">{hex}</h2>
      <p>{role}</p>
      <p>contrast: {contrastText}</p>
    </div>
  );
}
