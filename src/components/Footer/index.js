import "./Footer.css";

const Footer = () => {
  const footerItems = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Top Accounts",
    "Locations",
    "Instagram Lite",
    "Contact Uploading & Non-Users",
    "Suggested Accounts",
  ];

  const languages = [
    "English",
    "Kannada",
    "Hindi",
    "Telugu",
    "Tamil",
    "Espanol",
  ];

  return (
    <footer className="footer">
      <div className="content content--footer">
        <nav className="footer__nav">
          <ul className="footer__nav__list">
            {footerItems.map((footerItem) => (
              <li key={footerItem} className="footer__nav__list__item">
                <a href={`#${footerItem}`}>{footerItem}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__copyright">
          <select className="footer__languages">
            {languages.map((language) => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>
          <span className="footer__copyright__text">&copy; 2023 Instagram from Meta</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
