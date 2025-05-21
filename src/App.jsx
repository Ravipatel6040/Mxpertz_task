import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StoryDetail from "./pages/StoryDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story/:id" element={<StoryDetail />} />
    </Routes>
  );
}

export default App;
