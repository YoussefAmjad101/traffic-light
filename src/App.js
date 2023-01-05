import React from "react";
import Traffic_light from "./traffic_light";
import "./style.css";

export default function App() {
  return (
    <div>
      <Traffic_light initial_value={0} />
      <Traffic_light initial_value={1} />
    </div>
  );
}
