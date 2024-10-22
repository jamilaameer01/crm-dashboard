import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Customer from "./pages/Customer";
import Layout from "./components/Layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Customer />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
