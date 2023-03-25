import { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioSlider } from "../sliderProps";
import PortfolioModal from "./popup/PortfolioModal";

const Portfolio = () => {
  const [modal, setModal] = useState(false);
  const [projectData, setprojectData] = useState([]);
  const projects = [
    {
      title: "ShareYF",
      description:
        "SHAREYF is a Full Stack Social Media Application where users can express feelings by posting image.",
      imageUrl: "/img/portfolio/shareyf.png",
      demoUrl: "https://shareyf.vercel.app/",
      slug: "shareyf",
      technologies: [
        "ReactJS",
        "React Router DOM",
        "FORMIK & Yup",
        "Redux Toolkit for State Management",
        "Tailwind CSS",
        "NodeJS",
        "JWT for Authentication",
        "ExpressJS",
        "MongoDB",
        ,
        "",
      ],
    },
    {
      title: "PixelCraft",
      description:
        "PixelCraft is a useful tool for dynamic generate pixel grid. ased on user input's width and height, also candownload generated pixel grid",
      imageUrl: "/img/portfolio/pixelcraft.png",
      demoUrl: "https://covid019-tracker.netlify.app/",
      slug: "pixel-craft",
      technologies: [
        "HTML5",
        "CSS",
        "JavaScript",
        "ReactJS",
        "State Management",
        ,
        "",
      ],
    },
    {
      title: "ArtiGenius",
      description:
        "ArtiGenius is a cutting-edge image generator tool that utilizes OpenAI API to generate high-quality images based on input data . ArtiGenius makes it easy to create stunning and realistic images that accurately capture the intended meaning.",
      imageUrl: "/img/portfolio/artigenius.png",
      demoUrl: "https://arti-genius.vercel.app/",
      slug: "artigenius",
      technologies: [
        "HTML5",
        "CSS",
        "JavaScript",
        "ReactJS",
        "Tailwind CSS",
        "OpenAI API",
        ,
        "",
      ],
    },
    {
      title: "CryptoPulse",
      description:
        "This application is used to manage the income and expenses of the user.User just need to enter transaction name and amount it will generates income and expenses. ",
      imageUrl: "/img/portfolio/cryptopulse.png",
      demoUrl: "https://covid019-tracker.netlify.app/",
      slug: "cryptopulse",
      technologies: [
        "HTML5",
        "CSS",
        "JavaScript",
        "ReactJS",
        "Coin Stat API",
        "",
      ],
    },
    {
      title: "Hoobank Landing Page",
      description:
        "A portfolio banking site showcases a bank's financial products and services, including account information, loans, credit cards, and investments, providing a comprehensive overview of the bank's offerings.",
      imageUrl: "img/portfolio/hoobank.png",
      demoUrl: "https://hoobank-react-website.vercel.app/",
      slug: "hoobank",
      technologies: [
        "HTML5",
        "CSS",
        "JavaScript",
        "ReactJS",
        "Tailwind  CSS",
        "",
      ],
    },
    {
      title: "Edufolio",
      description:
        "This is a versatile portfolio site that can be used not only for showcasing academic achievements but also for offering courses. ",
      imageUrl: "/img/portfolio/edufolio.png",
      demoUrl: "https://edufolio.vercel.app/",
      slug: "edufolio",
      technologies: ["HTML5", "CSS", "JavaScript", ""],
    },
  ];

  return (
    <Fragment>
      <PortfolioModal
        open={modal}
        close={() => setModal(false)}
        projectData={projectData}
      />
      ;
      <div className="edrea_tm_section hidden animated" id="portfolio">
        <div className="section_inner">
          <div className="edrea_tm_portfolio swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Creative <span className="coloring">Portfolio</span>
              </h3>
            </div>
            <div className="portfolio_list gallery_zoom">
              <Swiper {...portfolioSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {projects.map((project, index) => {
                    return (
                      <div key={index}>
                        <SwiperSlide className="swiper-slide">
                          <div className="list_inner">
                            <div className="image">
                              <img src={project.imageUrl} alt="" />
                              <div
                                className="main"
                                data-img-url={project.imageUrl}
                              />
                            </div>
                            <div className="details">
                              <h3>{project.title}</h3>
                            </div>
                            <a
                              className="edrea_tm_full_link portfolio_popup"
                              href="#"
                              onClick={() => {
                                setModal(true);
                                setprojectData(project);
                              }}
                            />
                          </div>
                        </SwiperSlide>
                      </div>
                    );
                  })}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="current" />
                    <span className="pagination_progress">
                      <span className="all">
                        <span />
                      </span>
                    </span>
                    <span className="total" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
