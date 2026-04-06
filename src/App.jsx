import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import IntroAnimation from "./components/IntroAnimation";
import Partners from "./components/section/Partners";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

function App() {
  const [isIntroActive, setIsIntroActive] = useState(true);

  return (
    <LayoutGroup id="brand-logo-transition">
      <Navbar />
      <Home introDone={!isIntroActive} />
      <Partners />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />

      <Footer />

      <AnimatePresence>
        {isIntroActive && (
          <IntroAnimation onFinish={() => setIsIntroActive(false)} />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default App;