import React from 'react';
import { motion } from 'framer-motion';
import githubIcon from '../../assets/github.svg';
import externalLinkIcon from '../../assets/external-link.svg';

const ProjectCard = ({ title, description, technologies, githubLink, externalLink }) => {
  return (
    <motion.div
      className="bg-cardBg p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05   }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-textPrimary text-2xl font-bold font-customFont">{title}</h2>
        <div className="flex space-x-4">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
          </a>
          <a href={externalLink} target="_blank" rel="noopener noreferrer">
            <img src={externalLinkIcon} alt="External Link" className="w-6 h-6" />
          </a>
        </div>
      </div>
      <p className="text-textSecondary mb-4 font-customFont">{description}</p>
      <div className="flex space-x-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-500 text-textPrimary px-2 py-1 rounded-full text-xs font-customFont">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
