import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Page from "./components/Page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page lang="en" />} />
        <Route path="/sv" element={<Page lang="sv" />} />
        <Route path="/cs" element={<Page lang="cs" />} />
        {/* Fallback to English */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
