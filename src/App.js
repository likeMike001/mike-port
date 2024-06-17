import './App.css';
import Header from './components/header/header.component';
import About from './components/about/about.component';
import Projects from './components/projects/projects.component';
import Contact from './components/contact/contact.component';
import References from './components/testimonial/testimonial.component';
import { Routes, Route } from 'react-router-dom';
import ParticlesComponent from './components/config/particles.config';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative">
      <ParticlesComponent id="particles" />
      <div className="text-2xl text-pink-500 mt-6 z-10">
        What do you see?
      </div>
    </div>
  );
}

export default App;
