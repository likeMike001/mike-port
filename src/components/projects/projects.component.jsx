import React from 'react';
import ProjectCard from '../projectcard/projectcard.component'; 

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Website',
      description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.',
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB','Firebase'],
      githubLink: 'https://github.com/your-github-repo',
      externalLink: 'https://your-live-project-url.com',
    },
    {
        title: 'Chat-Application',
        description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.',
        technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
        githubLink: 'https://github.com/your-github-repo',
        externalLink: 'https://your-live-project-url.com',
      },
      {
        title: 'AWS Project ',
        description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.',
        technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
        githubLink: 'https://github.com/your-github-repo',
        externalLink: 'https://your-live-project-url.com',
      },
      {
        title: 'Codexx',
        description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.',
        technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
        githubLink: 'https://github.com/your-github-repo',
        externalLink: 'https://your-live-project-url.com',
      },
      {
        title: 'Deep Learning Model for Image Recognition',
        description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.',
        technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
        githubLink: 'https://github.com/your-github-repo',
        externalLink: 'https://your-live-project-url.com',
      },
      {
        title: 'Image Recognition',
        description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.',
        technologies: ['React', 'Open-AI (API)', ''],
        githubLink: 'https://github.com/your-github-repo',
        externalLink: 'https://codexx-rudresh-bhandari.vercel.app/',
      },
      
  ];

  return (
    <div className="p-8">
      <h3 className="font-customFont text-5xl text-center mb-8 text-textPrimary">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};


export default Projects;
