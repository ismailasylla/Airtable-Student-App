import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import Student from "./pages/Student";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student/:id" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
