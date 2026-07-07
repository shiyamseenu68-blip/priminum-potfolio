import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Features from './components/Features';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import GitHubStats from './components/GitHubStats';
import Socials from './components/Socials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative min-h-screen bg-black">
          <ParticleBackground />
          <CursorGlow />
          <ScrollProgress />
          <BackToTop />
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Features />
            <Timeline />
            <Certifications />
            <Resume />
            <GitHubStats />
            <Socials />
            <Contact />
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
