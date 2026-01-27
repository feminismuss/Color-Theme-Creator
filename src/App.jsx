import { initialColors } from "./lib/colors";
import { useState } from "react";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors([newColor, ...colors])
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor}/>
      {colors.map((color) => (
        <Color
          key={color.id}
          role={color.role}
          hex={color.hex}
          contrastText={color.contrastText}
        />
      ))}
    </>
  );
}

export default App;
