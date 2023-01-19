import "./Header.css";
import Bio from "../Bio";
import Stats from "../Stats";
import HeaderMain from "../HeaderMain";

const Header = ({ user }) => {
  return (
    <>
      <header className="header header--lg">
        <div className="content content--header">
          <div className="header__profile-picture">
            <img
              src="https://cdn.theorg.com/2fa46b45-d5f0-46c2-8a05-74cd2686a16c_medium.jpg"
              alt="Profile"
            />
          </div>

          <div className="header__content">
            <HeaderMain user={user} />
            <Stats />
            <Bio user={user} />
          </div>
        </div>
      </header>

      <header className="header header--sm">
        <div className="content content--header">
          <div className="header--sm__info">
            <div className="header__profile-picture">
              <img
                src="https://cdn.theorg.com/2fa46b45-d5f0-46c2-8a05-74cd2686a16c_medium.jpg"
                alt="Profile"
              />
            </div>
            <HeaderMain user={user} />
          </div>

          <div className="header__content">
            <Bio user={user} />
            <Stats />
          </div>
        </div>
      </header>
    </>
  )
};

export default Header;
