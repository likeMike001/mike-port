
import './header.component.css';

const Header = () => {
//   const [activeComponent, setActiveComponent] = useState(null);

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case 'about':
//         return <About />;
//       case 'projects':
//         return <Projects />;
//       case 'contact':
//         return <Contact />;
//       case 'references':
//         return <References />;
//       default:
//         return null;
//     }
//   };

  return (
    <div>
     <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 shadow-md flex items-center justify-center space-x-4 py-4 z-10">
        <a href = "#about" className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-700">About</a>
        <a href = "#projects" className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-700">Projects</a>
        <a href = "#references" className="px-4 py-2 bg-pink-500 text-black rounded hover:bg-blue-700">References</a>
        <a href = "#contact" className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-700">Contact</a>
        
      </div>
    </div>
  );
};

export default Header;
