import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm />
      {initialColors.map((color) => (
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
