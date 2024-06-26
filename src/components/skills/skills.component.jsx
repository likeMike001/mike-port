import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from './skills.data'; // Ensure this path is correct

const Skills = () => {
  return (
    <div className="p-10">
      <h3 className="text-center text-5xl font-customFont mb-10">What I work with  :)</h3>
      <div className="flex justify-center space-x-40">
        {Object.values(skillsData).map((category, index) => (
          <motion.div
            key={index}
            className="bg-gray-600 p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm w-full"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex flex-col items-center mb-4">
              <h2 className="text-white text-2xl font-bold font-customFont mb-4">{category.title}</h2>
              <div className="grid grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center">
                    <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                    <p className="text-white text-sm font-customFont">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};





export default Skills;
