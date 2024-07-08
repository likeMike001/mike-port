import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="p-20 mt-20">
      <motion.h3 
        className="font-customFont text-5xl text-center mb-10 text-textPrimary"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About
      </motion.h3>
      <motion.div 
        className="font-customFont text-2xl -mt-15 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.p 
          className="inline-block"
          whileHover={{ scale: 2 , color: "#AA336A" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          &lt;name&gt; Rudresh Bhandari &lt;/name&gt;
        </motion.p>
        <br />
        <motion.p 
          className="inline-block mt-5"
          whileHover={{ scale: 1.05, color: "#AA336A" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          &lt;p&gt;
          An aspiring software developer pursuing a Bachelor's degree in Computer Science at Arizona State University, I specialize in software engineering principles, data pipelines, and automated ETL processes. I am passionate about creating efficient, scalable solutions. My experience includes working as Software Developer and Technology Consultant @ ASU
          &lt;/p&gt;
        </motion.p>
        <br />
        <motion.p 
          className="inline-block mt-5"
          whileHover={{ scale: 1.05, color: "#AA336A" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          &lt;interests&gt; Hiking , Hooping &lt;/interests&gt;
        </motion.p>
        <br />
        <motion.p 
          className="inline-block mt-5"
          whileHover={{ scale: 1.05, color: "#AA336A" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          &lt;teams&gt; Niner-Gang , Lakers , ICT &lt;/teams&gt;
        </motion.p>
      </motion.div>
    </div>
  );
}

export default About;
