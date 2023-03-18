import Modal from "./Modal";

const PortfolioModal = ({ close, open, projectData }) => {
  return (
    <Modal close={close} open={open}>
      <div className="portfolio_popup_details">
        <div className="top_image">
          <img src={projectData.imageUrl} alt="" />
          <div className="main" data-img-url={projectData.imageUrl} />
        </div>
        <div className="portfolio_main_title">
          <h3>{projectData.title}</h3>
          <span>
            <a href={projectData.demoUrl}>Demo</a>
          </span>
          <div />
        </div>

        <div className="text">{projectData.description}</div>
        {/* <div>
          <h3>Technologies</h3>
          <ul style={{ paddingLeft: "40px" }}>
            {projectData.technologies.map((skill) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </Modal>
  );
};
export default PortfolioModal;
