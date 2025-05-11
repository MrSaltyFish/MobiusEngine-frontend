import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Header from "./components/ui/Header";
import "./styles/globals.css";
import "./styles/tailwind.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />

        <Routes>
          {/* Main route for homepage */}
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />

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
