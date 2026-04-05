import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import IntroAnimation from "./components/IntroAnimation";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [isIntroActive, setIsIntroActive] = useState(true);

  return (
    <LayoutGroup id="brand-logo-transition">
      <Navbar />
      <Home />

      <AnimatePresence>
        {isIntroActive && (
          <IntroAnimation onFinish={() => setIsIntroActive(false)} />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}

export default App;