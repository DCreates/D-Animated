import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import IntroAnimation from "./components/IntroAnimation";
import Partners from "./components/section/Partners";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import Newproduct from "./pages/Newproduct";

function App() {
  const [isIntroActive, setIsIntroActive] = useState(true);

  return (
    <Router>
      <LayoutGroup id="brand-logo-transition">
        <Navbar />
        
        <Routes>
          {/* Home page with all sections */}
          <Route
            path="/"
            element={
              <>
                <Home introDone={!isIntroActive} />
                <Partners />
                <About />
                <Services />
                <Newproduct />
                <Testimonials />
                <Contact />
              </>
            }
          />
          
          {/* Service Detail page */}
          <Route path="/service/:slug" element={<ServiceDetail />} />
          
          {/* Services page (for reference/navigation) */}
          <Route path="/services" element={<Services />} />
          
          {/* Contact page standalone */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />

        <AnimatePresence>
          {isIntroActive && (
            <IntroAnimation onFinish={() => setIsIntroActive(false)} />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </Router>
  );
}

export default App;