import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LenisProvider } from "./components/LenisContext";
import { ScrollToTop } from "./components/ScrollToTop";
import Navbar from "./components/Navbar5";
import Footer from "./components/Footer4";
import Home from "./pages/Home2";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery3";
import Services from "./pages/Services";

function App() {
  return (
    <LenisProvider>
      <Router>
        <ScrollToTop />
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LenisProvider>
  );
}

export default App;
