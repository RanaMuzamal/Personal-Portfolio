import { useContext } from "react";
import Typewriter from "typewriter-effect";
import { context } from "../context/context";

const homeData = {
  firstName: "Rana",
  lastName: "Muzamil",
  skills: ["Software Engineer", "ReactJS", "NextJS"],
};

const Home = ({ activeWithBtn }) => {
  const navContext = useContext(context);
  const { changeNav } = navContext;

  return (
    <div className="edrea_tm_section animated" id="home">
      <div className="section_inner">
        <div className="edrea_tm_home">
          <h3 className="name">
            {homeData.firstName}{" "}
            <span className="coloring">{homeData.lastName}</span>
          </h3>
          <div className="job">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer | React JS | Next JS | Redux | Tailwind",
                  "Software Engineer",
                  "React JS",
                  "Next JS ",
                  "Redux",
                  "Tailwind",
                ],
                autoStart: true,
                loop: true,
              }}
            />

            {/* <AnimatedText /> */}
          </div>
          <div className="edrea_tm_button transition_link">
            <a href="#contact" onClick={() => changeNav("contact")}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
