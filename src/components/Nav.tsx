import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";

function Nav() {
  return (
    <header className="header">
      <div className="logo">
        <img src="Logo.svg" alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#courses">Courses</a>
          </li>
          <li>
            <a href="#teachers">Teachers</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>

          <div className="partner">
            <a href="">
              {" "}
              <img src="become a partner.svg" alt="" />
            </a>
          </div>
        </ul>
      </nav>
      <div className="auth-links">
        <a href="#login" className="log-in">
          Log In
        </a>
        <button className="bt">
          {" "}
          <a href="#signin" className="sign-in">
            Sign In
          </a>
        </button>
      </div>
    </header>
  );
}

export default Nav;
