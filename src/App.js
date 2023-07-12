import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Dashboard from "./Pages/Dashboard/Dashboard"
function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
