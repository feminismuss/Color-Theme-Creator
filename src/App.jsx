import { initialColors } from "./lib/colors";
import { useState } from "react";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    const colorWithId = { id: nanoid(), ...newColor };
    setColors([colorWithId, ...colors]);
  }
  function handleDeleteColor(idToDelete) {
    const filteredColors = colors.filter((color) => color.id !== idToDelete);
    setColors(filteredColors);
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.map((color) => (
        <Color
          key={color.id}
          role={color.role}
          hex={color.hex}
          contrastText={color.contrastText}
          onDeleteColor={() => handleDeleteColor(color.id)}
        />
      ))}
    </>
  );
}

export default App;
