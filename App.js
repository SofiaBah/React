import react from "react";
import Weather from "./Weather.js";

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
    </div>
  </StrictMode>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
