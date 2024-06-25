import { motion } from 'framer-motion';
import './header.component.css';

const Header = () => {
  return (
    <motion.div>
     <div className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 shadow-md flex items-center justify-center space-x-4 py-4 z-10">
        <a href = "#about" className="px-4 py-2 text-2xl from-gray-400 via-gray-600 to-gray-800 hover:bg-pink-700 font-customFont">About</a>
        <a href = "#projects" className="px-4 py-2 text-2xl from-gray-400 via-gray-600 to-gray-800 hover:bg-pink-700 font-customFont">Projects</a>
        <a href = "#references" className="px-4 py-2 text-2xl  from-gray-400 via-gray-600 to-gray-800 hover:bg-pink-700 font-customFont">References</a>
        <a href = "#contact" className="px-4 py-2 text-2xl from-gray-400 via-gray-600 to-gray-800 hover:bg-pink-700 font-customFont">Skills</a>
        <a href = "#contact" className="px-4 py-2  text-2xl from-gray-400 via-gray-600 to-gray-800 hover:bg-pink-700 font-customFont">Contact</a>
        
      </div>
    </motion.div>
  );
};

export default Header;
