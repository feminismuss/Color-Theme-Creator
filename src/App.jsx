import { initialColors } from "./lib/colors";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import { nanoid } from "nanoid";

function App() {
  const [colors, setColors] = useLocalStorageState("Theme-Colors", {
    defaultValue: initialColors,
  });

  function handleAddColor(newColor) {
    const colorWithId = { id: nanoid(), ...newColor };
    setColors([colorWithId, ...colors]);
  }
  function handleDeleteColor(idToDelete) {
    const filteredColors = colors.filter((color) => color.id !== idToDelete);
    setColors(filteredColors);
  }
  function handleEditColor(id, updatedData) {
    setColors(
      colors.map((color) => {
        if (color.id === id) {
          return { ...color, ...updatedData };
        }
        return color;
      }),
    );
  }
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.map((color) => (
        <Color
          key={color.id}
          id={color.id}
          role={color.role}
          hex={color.hex}
          contrastText={color.contrastText}
          onDeleteColor={() => handleDeleteColor(color.id)}
          onEditColor={handleEditColor}
        />
      ))}
    </>
  );
}

export default App;
