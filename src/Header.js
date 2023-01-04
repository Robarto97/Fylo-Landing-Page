import logo from "./images/logo.svg";
import image1 from "./images/illustration-1.svg";
const Header = () => {
  return (
    <header>
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Team</a>
            </li>
            <li>
              <a href="/">Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="bottom">
        <div className="img-wrapper">
          <img src={image1} alt="" />
        </div>
        <div className="text">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <div className="form-group">
            <input type="text" placeholder="Enter your email..." />
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
