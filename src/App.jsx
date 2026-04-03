import { useState } from "react";
import IntroAnimation from "./components/IntroAnimation";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      {!showIntro && (
        <Navbar />
      )}

      {!showIntro && (
        <Home />
      )}
    </>
  );
}

export default App;