import { useContext } from "react";
import { context } from "../context/context";

const Header = () => {
  const navContext = useContext(context);
  const { nav, changeNav } = navContext;

  const activeNav = (value) => (value == nav ? "active" : "");

  const handleClick = (value, event) => {
    const navValue = value.replace("#", "");
    changeNav(navValue);
    window.history.pushState(null, null, navValue);
    event.preventDefault();
  };

  return (
    <div className="edrea_tm_header">
      <div className="header_inner">
        <div className="logo">
          <a href="/">
            <img src="img/logo/logo.png" alt="" />
          </a>
        </div>
        <div className="menu">
          <ul className="transition_link">
            <li className={activeNav("home")}>
              <a href="/">Home</a>
            </li>
            <li className={activeNav("about")}>
              <a
                href="/about"
                className={activeNav("about")}
                onClick={(event) => handleClick("about", event)}
              >
                About
              </a>
            </li>
            <li className={activeNav("portfolio")}>
              <a
                href="/portfolio"
                className={activeNav("portfolio")}
                onClick={(event) => handleClick("portfolio", event)}
              >
                Portfolio
              </a>
            </li>
            <li className={activeNav("news")}>
              <a
                href="/news"
                className={activeNav("news")}
                onClick={(event) => handleClick("news", event)}
              >
                News
              </a>
            </li>
            <li className={activeNav("contact")}>
              <a
                href="/contact"
                className={activeNav("contact")}
                onClick={(event) => handleClick("contact", event)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
