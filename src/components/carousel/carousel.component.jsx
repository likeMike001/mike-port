
import {motion , AnimatePresence} from "framer-motion"
import './carousel.css'
import { useState } from 'react'

const references = [
    {
        note : 'Mike , has been an exceptional team member, consistently exceeding expectations and delivering high-quality work.Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.' ,
        name : 'John Doe',
        role : 'Manager at Tech Studio'
    },
    {
        note : 'Mike is a dedicated and talented professional. His contributions have been invaluable to our projects.Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB, enabling users to view programming languages, cast votes, and access details through an interactive UI, leveraging serverless architecture for scalability and cost-efficiency.',
        name : 'John A',
        role : 'Lead Developer'
    }
]

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % references.length);
    };
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + references.length) % references.length);
    };
  
    return (
      <div className="carousel-container relative flex justify-center items-center mt-6">
        <button onClick={handlePrev} className="absolute left-0 ml-4 text-3xl z-10 text-black">
          &lt;
        </button>
        <div className="carousel-inner flex space-x-8">
          <AnimatePresence>
            {references.map((reference, index) =>
              index === currentIndex ? (
                <motion.div
                  key={index}
                  className="reference-card bg-gray-800 text-white rounded-lg p-6 shadow-lg transform transition-transform duration-300"
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                //   exit={{ opacity: 0, rotateY: -90 }}
                  transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
                >
                  <p className="text-lg mb-4">{reference.note}</p>
                  <h2 className="text-2xl font-bold">{reference.name}</h2>
                  <p className="text-gray-400">{reference.role}</p>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
        <button onClick={handleNext} className="absolute right-0 mr-4 text-3xl z-10 text-black">
          &gt;
        </button>
      </div>
    );
  };
  
  export default Carousel;