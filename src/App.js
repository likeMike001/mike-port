import './App.css';
import Header from './components/header/header.component';
import About from './components/about/about.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import References from './components/testimonial/testimonial.component';
import ParticlesBackground from './components/particles/particles.background';

function App() {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 relative">
      <ParticlesBackground />
      <div className="w-full z-10">
        <Header />
        <section id = "about">
          <About />
        </section>
        <section id = "projects">
          <Projects />
        </section>
        <section id = "contact">
          <Contact />
        </section>
        <section id = "references">
          <References />
        </section>

        <h3 className="text-2xl text-pink-500 mt-6 text-center">What do you see? </h3>
        
      </div>
    </div>
  );
}

export default App;
