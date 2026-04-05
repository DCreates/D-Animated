import { StarsBackground } from "../components/animate-ui/components/backgrounds/stars";
import Hero from "../components/section/Hero";


function Home({ introDone }) {
  return (
    <StarsBackground className="min-h-screen flex items-center justify-center">
      <Hero introDone={introDone} />
    </StarsBackground>
  );
}

export default Home;