import { createRoot } from "react-dom";
import Order from "./Order";
import { StrictMode } from "react";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";

const App = () => {
  return (
    <StrictMode>
      <div>
        <Header />
        <Order />
        <PizzaOfTheDay />
      </div>
    </StrictMode>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
