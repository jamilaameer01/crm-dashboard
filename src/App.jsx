import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Customer from "./pages/Customer";
import Layout from "./components/Layout";
import Product from "./pages/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Customer />} />
          <Route path="/product" element={<Product />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
