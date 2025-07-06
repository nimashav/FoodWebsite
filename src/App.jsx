import { createRoot } from "react-dom";
import Order from "./Order";
import { StrictMode } from "react";

const App = () => {
  return (
    <StrictMode>
      <div>
        <h1>Padre Gino's - Order Now</h1>
        <Order />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
