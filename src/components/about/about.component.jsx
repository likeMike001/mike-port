// import crwn from "../../assets/crwon.svg";
import { motion } from "framer-motion";


const About = () => {
    return (


      <motion.div className=" p-20 -mt--5"
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
        {/* <img
          className="w-25 h-20 mr-8 "
        //   src={crwn}
          alt="Crown"
        /> */}
        <h3 className="font-customFont text-5xl text-center mb-10 text-textPrimary">About</h3>
       <p className ="font-customFont text-2xl -mt-15">
       Aspiring Software Developer with a strong foundation in software engineering principles, currently pursuing a degree in Computer Science. Proficient in building data pipelines and automated ETL processes using technologies such as Kafka. Experienced in data visualization with tools like Tableau, Matplotlib, and JavaScript. Skilled in systems modeling and simulation using Python
        </p>
      </motion.div>
    );
  }
  
  export default About;
