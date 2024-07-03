import { motion } from 'framer-motion';
import './header.component.css';

const Header = () => {
  return (
    <motion.div className="fixed top-0 left-0 right-0 flex justify-center z-10 ">
      <nav className="w-max bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg flex items-center justify-center space-x-4 py-4 mt-4">
        <a href="#about" className=" px-4 py-2 text-2xl text-white hover:bg-white hover:bg-opacity-20 rounded font-customFont transition duration-300">About</a>
        <a href="#projects" className="px-4 py-2 text-2xl text-white hover:bg-white hover:bg-opacity-20 rounded font-customFont transition duration-300">Projects</a>
        <a href="#references" className="px-4 py-2 text-2xl text-white hover:bg-white hover:bg-opacity-20 rounded font-customFont transition duration-300">References</a>
        <a href="#skills" className="px-4 py-2 text-2xl text-white hover:bg-white hover:bg-opacity-20 rounded font-customFont transition duration-300">Skills</a>
        <a href="#contact" className="px-4 py-2 text-2xl text-white hover:bg-white hover:bg-opacity-20 rounded font-customFont transition duration-300">Contact</a>
      </nav>
    </motion.div>
  );
};

export default Header;
