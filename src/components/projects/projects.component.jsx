import React from 'react';
import ProjectCard from '../projectcard/projectcard.component'; 

const Projects = () => {
  const projects = [
    {
      title: 'Website for Purchasing Clothes and Shoes',
      description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.',
      technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
      githubLink: 'https://github.com/your-github-repo',
      externalLink: 'https://your-live-project-url.com',
    },
    {
        title: 'Website for Purchasing Clothes and Shoes',
        description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.',
        technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
        githubLink: 'https://github.com/your-github-repo',
        externalLink: 'https://your-live-project-url.com',
      },
      {
        title: 'Website for Purchasing Clothes and Shoes',
        description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.',
        technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
        githubLink: 'https://github.com/your-github-repo',
        externalLink: 'https://your-live-project-url.com',
      },
      {
        title: 'Website for Purchasing Clothes and Shoes',
        description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.',
        technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
        githubLink: 'https://github.com/your-github-repo',
        externalLink: 'https://your-live-project-url.com',
      },
      {
        title: 'Website for Purchasing Clothes and Shoes',
        description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.',
        technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
        githubLink: 'https://github.com/your-github-repo',
        externalLink: 'https://your-live-project-url.com',
      },
      {
        title: 'Website for Purchasing Clothes and Shoes',
        description: 'Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.',
        technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
        githubLink: 'https://github.com/your-github-repo',
        externalLink: 'https://your-live-project-url.com',
      },
    // Add more projects as needed
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
