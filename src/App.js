import React from "react";
import { createRoot } from "react-dom";
import Pizza from "./Pizza";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "some dope pizza yo",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French fries and hot dogs, wtf Italy",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "Pineapple and ham, wtf AMerica",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza",
      description: "Chicken nuggies on your pizza, wtf UK",
    }),
    React.createElement(Pizza, {
      name: "Baked Potato Pizza",
      description: "Unholy potato mash, wtf Minnesota",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
