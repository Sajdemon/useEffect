import { useState, useEffect } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const sizeControl = () => {
    setWindowWidth(window.innerWidth);
  };

  const sizeControlHeight = () => {
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", sizeControl);
  });

  useEffect(() => {
    console.log("já jsem useEffect");
    window.addEventListener("resize", sizeControlHeight);
    return () => {
      console.log("já jsem clenUp");
      window.removeEventListener("resize", sizeControl);
    };
  });

  return (
    <div>
      <h2>Šířka okna</h2>
      <p>{windowWidth}</p>
      <h2>Výška okna</h2>
      <p>{windowHeight}</p>
    </div>
  );
};

export default App;
