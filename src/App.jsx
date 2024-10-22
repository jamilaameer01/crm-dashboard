import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Customer from "./components/Customer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex">
      <div className="px-4">
        <Sidebar />
      </div>

      <main className="bg-[#D9D9D9] px-8 flex-1 ">
        <Customer />
      </main>
    </div>
  );
}

export default App;
