import crwn from "../../assets/crown.jpg";


const About = () => {
    return (
      <div className="flex items-center p-20 -mt-20">
        <img
          className="w-70 h-auto mr-4 "
          src={crwn}
          alt="Crown"
        />
       <p className="text-blue-500 font-customFont text-3xl -mt-20">
       Aspiring Software Developer with a strong foundation in software engineering principles, currently pursuing a degree in Computer Science. Proficient in building data pipelines and automated ETL processes using technologies such as Kafka. Experienced in data visualization with tools like Tableau, Matplotlib, and JavaScript. Skilled in systems modeling and simulation using Python
        </p>
      </div>
    );
  }
  
  export default About;
