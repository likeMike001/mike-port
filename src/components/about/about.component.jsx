import crwn from "../../assets/crown.jpg";


const About = () => {
    return (
      <div className="flex items-center p-4">
        <img
          className="w-60 h-auto mr-4"
          src={crwn}
          alt="Crown"
        />
        <p className="text-blue-500">
          Hey, this is ArB (AKA LikeMike), having keen interest in Data Structures, Algorithms, and Web Development.
        </p>
      </div>
    );
  }
  
  export default About;
