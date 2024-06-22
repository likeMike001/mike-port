import crwn from "../../assets/crown.jpg";
import { motion } from "framer-motion";


const About = () => {
    return (


      <motion.div className="flex items-center p-20 -mt-20"
        // animate = {{
        //     scale : [1,2,2,1,1],
        //     rotate: [0, 0, 270, 270, 0],
        //     borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        // }}
        // transition={{
        //     duration : 2,
        //     ease :"easeOut",
        // }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
    
        >
        <img
          className="w-70 h-auto mr-4 "
          src={crwn}
          alt="Crown"
        />
       <p className="text-pink-500 font-customFont text-3xl -mt-20">
       Aspiring Software Developer with a strong foundation in software engineering principles, currently pursuing a degree in Computer Science. Proficient in building data pipelines and automated ETL processes using technologies such as Kafka. Experienced in data visualization with tools like Tableau, Matplotlib, and JavaScript. Skilled in systems modeling and simulation using Python
        </p>
      </motion.div>
    );
  }
  
  export default About;
