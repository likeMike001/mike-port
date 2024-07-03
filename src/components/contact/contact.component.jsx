import linkedIn from "../../assets/linkedin.svg";
import gitHubI from "../../assets/github.svg";

const Contact = () => {
  return (
    <div className="p-10 text-center mt-15">
      <h3 className="text-center font-customFont text-5xl">Let's Connect!</h3>
      <div className="flex justify-center space-x-10 p-8">
        <a href="https://www.linkedin.com/in/rudresh-bhandari-0817481aa/" target="_blank" rel="noopener noreferrer">
          <img src={linkedIn} alt="LinkedIn" className="w-10 h-10 " />
        </a>
        <a href="https://github.com/likeMike001" target="_blank" rel="noopener noreferrer">
          <img src={gitHubI} alt="GitHub" className="w-10 h-10 " />
        </a>
      </div>
    </div>
  );
};

export default Contact;
