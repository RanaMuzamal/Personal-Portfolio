import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsSlider } from "../sliderProps";
import NewsPopup from "./popup/NewsPopup";

const data = [
  {
    title: "Why Next.js is the Perfect Next Step for ReactJS Developers",
    img: "img/news/nextjs.jpg",
    tag: "Media",
    des: [
      "ReactJS has become a popular choice for web development due to its flexibility and efficiency in building user interfaces. However, as web development continues to evolve, it is important to stay up-to-date with the latest tools and frameworks to stay competitive in the industry. This is where Next.js comes in as the perfect next step for ReactJS developers.",
      "Next.js is a framework built on top of ReactJS that adds powerful features such as server-side rendering, automatic code splitting, and static site generation. These features make it easier to build high-performance, SEO-friendly, and scalable web applications.",
      "One of the major benefits of learning Next.js is its ability to improve website performance by providing fast and efficient server-side rendering. This is particularly important for websites with dynamic content, as it enables the content to be rendered on the server before it is sent to the client, resulting in faster page load times and better user experience.",
      "Another benefit of using Next.js is automatic code splitting, which allows developers to split their code into smaller chunks and load only the necessary code for each page, reducing the overall load time of the website. This can lead to better search engine rankings and higher conversion rates, as users are more likely to stay on a website that loads quickly.",
      "In addition to these benefits, Next.js also makes it easier to build static websites, which are becoming increasingly popular due to their simplicity and security. By using Next.js to generate static sites, developers can take advantage of the benefits of server-side rendering while also benefiting from the security and scalability of static sites.",
      "Overall, learning Next.js after ReactJS can help developers stay ahead of the curve in web development and provide more efficient and performant solutions for their clients. With its powerful features and easy integration with ReactJS, Next.js is a valuable addition to any web developer's toolkit.",
      "",
    ],
  },
  {
    title: "Getting Started with Open Source Contribution",
    img: "img/news/o-source.jpg",
    tag: "Open Source Contribution",
    des: [
      "Open source contribution is the practice of collaborating, sharing and contributing to software projects that are freely available to the public. Contributing to open source projects can be a rewarding experience that helps you build your skills, make connections with other developers, and contribute to a larger cause.",
      "To get started with open source contribution, here are some simple steps to follow:",
      "Find a project: Look for open source projects on platforms like GitHub, GitLab, or Bitbucket that interest you. Explore their codebase and understand their goals, architecture, and roadmap.",
      "Start small: Begin with small and manageable tasks that are labeled 'good first issue' or 'beginner-friendly'. These tasks typically involve fixing bugs, adding documentation, or writing tests.",
      "Make a contribution: Fork the project's repository, create a new branch, and start working on your contribution. Once you're done, submit a pull request for review by the project's maintainers.",
      "Keep contributing: Contributing to open source projects is an ongoing process. You can continue to work on new tasks, fix bugs, and improve documentation. You can also review and test other contributors' work and help them improve their code.",
      "In conclusion, contributing to open source projects is an excellent way to build your skills, connect with other developers, and contribute to a larger cause. Start small, make a contribution, and keep contributing to make a difference in the world of software development.",
      "",
    ],
  },
  {
    title: "ChatGPT Can Save Developers Hours of Searching ",
    img: "img/news/chatGpt.jpg",
    tag: "Technology",
    des: [
      "As a developer, finding the right resources and information to help you solve coding problems or learn new skills can be a time-consuming and challenging process. Whether you're searching through forums, reading documentation, or watching tutorial videos, it's not always easy to find the answers you need. This is where ChatGPT comes in – a language model that can save developers hours of searching for the right resources by providing quick and accurate answers to their questions.",
      "One of the primary benefits of ChatGPT is its ability to provide personalized answers based on the developer's specific needs and context. For example, if a developer is struggling with a particular coding problem, they can describe the issue to ChatGPT, and it can offer suggestions and solutions based on the context provided. This can save the developer significant time and effort in trying to solve the problem on their own.",
      "One of the primary benefits of ChatGPT is its ability to provide personalized answers based on the developer's specific needs and context. For example, if a developer is struggling with a particular coding problem, they can describe the issue to ChatGPT, and it can offer suggestions and solutions based on the context provided. This can save the developer significant time and effort in trying to solve the problem on their own.",
      "In conclusion, ChatGPT can be a valuable tool for developers looking to save time and improve their productivity. By providing quick and accurate answers to coding questions, automating routine tasks, and offering feedback on code quality, ChatGPT can save developers hours of searching for the right resources and help them focus on what they do best – coding.",
      "",
    ],
  },
  {
    title: "Power of Personal Branding for Software Engineers",
    img: "img/news/personal-branding.jpg",
    tag: "Branding",
    des: [
      "Personal branding is critical for software engineers who want to establish themselves as experts in their field and stand out in a crowded job market. In today's digital age, a strong online presence can make a significant impact on career success. Social media platforms such as LinkedIn, Twitter, and GitHub offer excellent tools for software engineers to build their personal brand by showcasing their technical skills, contributing to open-source projects, and connecting with other professionals in the industry.",
      "You can work for years in any company, but if you haven't built a personal brand, it can be a wasted opportunity. Personal branding helps in attracting new job opportunities, establishing a positive reputation, and developing a strong online presence. It requires effort and time to identify one's strengths, unique value proposition, and target audience, and crafting a consistent message that resonates with the audience.",
      "By consistently sharing valuable insights and contributing to the community, software engineers can establish themselves as industry thought leaders, leading to speaking engagements, writing opportunities, and networking opportunities that can further enhance their careers. A strong personal brand can differentiate a software engineer from others in the field, increase their visibility, and ultimately lead to career advancement.",
      "In conclusion, personal branding is a crucial aspect of career success for software engineers in the tech community. It helps in building a positive reputation, attracting new job opportunities, and networking with other professionals in the industry. Building a personal brand takes time and effort, but it can pay off significantly in the long run. By leveraging social media platforms and consistently sharing valuable insights, software engineers can establish themselves as industry thought leaders and achieve their career goals.",
      "",
    ],
  },
];

const News = () => {
  const [modal, setModal] = useState(false);
  const [activeData, setActiveData] = useState({});
  const onClick = (value) => {
    setModal(true);
    setActiveData(data[value]);
  };
  return (
    <Fragment>
      <NewsPopup open={modal} close={() => setModal(false)} data={activeData} />
      <div className="edrea_tm_section hidden animated" id="news">
        <div className="section_inner">
          <div className="edrea_tm_news swiper-section">
            <div className="edrea_tm_main_title">
              <h3>
                Latest <span className="coloring">News</span>
              </h3>
            </div>
            <div className="news_list">
              <Swiper {...newsSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {data.map((news, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="list_inner">
                        <div className="image">
                          <img src={news.img} alt="" />
                          <div className="main" data-img-url={news.img} />
                          <a
                            className="edrea_tm_full_link news_popup"
                            href="#"
                            onClick={() => onClick(i)}
                          />
                        </div>
                        <div className="details">
                          <h3>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.title}
                            </a>
                          </h3>
                          <span>
                            <a href="#" onClick={() => onClick(i)}>
                              {news.tag}
                            </a>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="currentNews" />
                    <span className="pagination_progress">
                      <span className="all allNews">
                        <span />
                      </span>
                    </span>
                    <span className="totalNews" />
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
export default News;
