import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import FadeIn from './components/FadeIn';

function App() {
  return (
    <div className="bg-black min-h-screen text-neutral-200 font-sans selection:bg-blue-500/30">
      
      {/* Container: Narrow width, centered, large vertical spacing */}
      <main className="max-w-xl mx-auto px-6 py-24 flex flex-col space-y-24">
        
        <FadeIn delay={0.1}>
          <Hero />
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <TechStack />
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <Projects />
        </FadeIn>
        
        <FadeIn delay={0.4}>
          <Contact />
        </FadeIn>

      </main>
      
      <footer className="py-12 text-center text-xs text-neutral-800">
        <p>© 2026 Ansh.dev</p>
      </footer>
    </div>
  );
}

export default App;