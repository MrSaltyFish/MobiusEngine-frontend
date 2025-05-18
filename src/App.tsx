import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DevPage from "./pages/DevPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/shared/Header";
import "./styles/globals.css";
import "./styles/tailwind.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <Routes>
          {/* Main route for homepage */}
          <Route path="/" element={<HomePage />} />
          <Route path="/dev" element={<DevPage />} />
          <Route path="*" element={<NotFoundPage />} />

          {/* You can add more routes later like: */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>

        {/* Footer would go here */}
      </div>
    </Router>
  );
}

export default App;
