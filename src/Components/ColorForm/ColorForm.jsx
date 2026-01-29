import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm({
  variant = "create",
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
  }
  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <h2>{variant === "create" ? "Add a new Color" : "Edit Color"}</h2>
      <label htmlFor="hex">Hex</label>
      <ColorInput id="hex" defaultValue={initialData.hex} />

      <label htmlFor="role">Role</label>
      <input
        type="text"
        id="role"
        name="role"
        defaultValue={initialData.role}
      />

      <label>Contrastcolor for Text</label>
      <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      <button type="submit">
        {variant === "create" ? "Add a new Color" : "Update Color"}
      </button>
    </form>
  );
}
