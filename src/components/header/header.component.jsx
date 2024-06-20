import React, { useState } from 'react';
import About from '../about/about.component';
import Projects from '../projects/projects.component';
import Contact from '../contact/contact.component';
import References from '../testimonial/testimonial.component';
import './header.component.css';

const Header = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'references':
        return <References />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md flex items-center justify-center space-x-4 py-4 z-10">
        <button onClick={() => setActiveComponent('about')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">About</button>
        <button onClick={() => setActiveComponent('projects')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Projects</button>
        <button onClick={() => setActiveComponent('contact')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Contact</button>
        <button onClick={() => setActiveComponent('references')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">References</button>
      </div>
      <div className="mt-20 px-10">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Header;
