import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import HotelsListPage from "./Pages/HotelsListPage";
import HotelsPage from "./Pages/HotelsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/hotelslist" element={<HotelsListPage />} />
        <Route path="/hotelslist/:id" element={<HotelsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
