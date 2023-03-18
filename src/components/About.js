import { Fragment, useState } from "react";
import Typewriter from "typewriter-effect";
import AboutPopup from "./popup/AboutPopup";

const aboutData = {
  firstName: "Rana",
  lastName: "Muzamil",
  bithday: "02.02.2000",
  address: "Lahore, Pakistan",
  phn: "+92 320 096 23 99",
  email: "muzamilrana149@gmail.com",
  serviceLists: [
    "Website Development",
    "Digital Experience",
    "Content Marketing",
    "Social Media Design",
  ],
  skills: {
    programming: [
      { name: "HTML5", value: "95" },
      { name: "CSS3", value: "80" },
      { name: "JavaScript", value: "95" },
      { name: "ReactJS", value: "95" },
      { name: "NextJS", value: "80" },
      { name: "NodeJS", value: "60" },
      { name: "MongoDB", value: "60" },
    ],
    language: [
      { name: "English", value: "95" },
      { name: "Urdu", value: "100" },
      { name: "Punjabi", value: "100" },
    ],
  },
  education: [
    {
      year: "2018 - 2022",
      unv: "COMSATS Univercity",
      degree: "BS Software Engineering",
    },
    { year: "2016 - 2018", unv: "Aspire College", degree: "ICS" },
    { year: "2014 - 2016", unv: "Model School", degree: "Matric" },
  ],
  working: [
    {
      year: "2022 - Present",
      company: "CansoliAds,LHR,PK",
      deg: "Software Engineer",
    },
    {
      year: "2021 - 2022",
      company: "Fiver,Remote",
      deg: "Freelance Web Developer",
    },
    {
      year: "2020 - 2020",
      company: "ZPZEN Tech,VHR,PK",
      deg: "Frontend Developer",
    },
  ],
  team: [
    {
      name: "M Asad",
      position: "PHP Laraval/MERN",
      image: "img/about/about.jpg",
    },
    {
      name: "Akil",
      position: "PHP Laraval/MERN",
      image: "img/about/about.jpg",
    },
    {
      name: "Yousaf",
      position: "PHP Laraval/MERN",
      image: "img/about/about.jpg",
    },
  ],
};

const About = () => {
  const [popup, setPopup] = useState(false);
  return (
    <Fragment>
      <AboutPopup
        open={popup}
        close={() => setPopup(false)}
        aboutData={aboutData}
      />
      <div className="edrea_tm_section hidden animated" id="about">
        <div className="section_inner">
          <div className="edrea_tm_about">
            <div className="left">
              <div className="image">
                <img src="img/thumbs/1-1.jpg" alt="" />
                <div className="main" data-img-url="img/about/about.jpg" />
              </div>
            </div>
            <div className="right">
              <div className="short">
                <h3 className="name">
                  {aboutData.firstName}{" "}
                  <span className="coloring">{aboutData.lastName}</span>
                </h3>
                <h3 className="job">
                  <Typewriter
                    options={{
                      strings: [
                        "Software Engineer | React JS | Next JS | Redux | Tailwind",
                        "Software Engineer ",
                        "React JS",
                        "Next JS",
                        "Redux ",
                        "Tailwind",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>
              </div>
              <div className="text">
                <p>
                  My name is <span>Rana Muzamil.</span> I am a Software
                  Engineer, and {`I've`} a passion for creating innovative and
                  user-friendly web solutions. I specialize in creating dynamic
                  and user-friendly web applications using a combination of
                  HTML, CSS, JavaScript, ReactJS, React-Redux, NextJS and
                  expanding my knowledge by working on the MERN Stack.
                </p>
              </div>
              <div className="edrea_tm_button">
                <a href="#" onClick={() => setPopup(true)}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default About;
