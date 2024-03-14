import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>STP Website Under Development</h1>
      </div>
<<<<<<< HEAD
=======
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>
        CICD check
      </p>
      <p>
        CICD check 2
      </p>
>>>>>>> c0afbeee01446d533de2f8f3e20922c5a9c8d53b
    </>
  );
}

export default App;
