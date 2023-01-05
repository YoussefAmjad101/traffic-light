import Light from "./light";
import React, { useState, useEffect } from "react";

const light_durations = [20000, 20000, 3000];

const Traffic_light = ({ initial_value }) => {
  const [color_index, set_color_index] = useState(initial_value);

  useEffect(() => {
    const timer = setTimeout(() => {
      set_color_index((color_index + 1) % 3);
    }, light_durations[color_index]);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="traffic-light">
      <Light color="red" active={color_index === 0} />
      <Light color="yellow" active={color_index === 2} />
      <Light color="green" active={color_index === 1} />
    </div>
  );
};

export default Traffic_light;