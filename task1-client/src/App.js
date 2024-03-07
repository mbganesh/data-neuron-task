import TablePage from "pages/TablePage";
import "./App.css";

import Panels from "components/Panels";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import HomePage from "pages/HomePage";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<Panels />} path="/resize" />
            <Route element={<TablePage />} path="/table" />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
