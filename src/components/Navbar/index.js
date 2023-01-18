import InstagramLogo from "../../assets/svg/Instagram";
import Search from "../Search";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="content content--navbar">
        <div className="navbar__logo">
          <InstagramLogo />
        </div>
        <Search />
        <div className="navbar__actions">
          <button className="btn btn--primary">Log In</button>
          <button className="btn btn--secondary">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
