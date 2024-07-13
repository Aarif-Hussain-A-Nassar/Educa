import "bootstrap/dist/css/bootstrap.min.css";
import "./footer.css";

function Footer() {
  return (
    <footer className="bg-light custom-padding footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-3">
            <div className="logo mb-2">
              <img src="Logo.svg" alt="Logo" />
            </div>
            <p className="text-muted mt-5 contact">CONTACT</p>
            <p className="text-dark email">email@gmail.com</p>
          </div>
          <div className="col-md-3 mb-3">
            <h5 className="text-dark">Navigation</h5>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Course</li>
              <li>Teachers</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5 className="text-dark">Resources</h5>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>News Updates</li>
            </ul>
          </div>
          <div className="col-md-3 mb-3">
            <h5 className="text-dark">Stay up to date</h5>
            <p className="list-unstyled mb-5">
              Stay Informed On How You Can <br /> Make a Difference
            </p>
            <div className="custom-search">
              <input
                type="text"
                className="custom-search-input"
                placeholder="Your email address"
              />
              <button className="custom-search-button" type="submit">
                <img src="Vector.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          © 2024 All Rights Reserved - Educa.agency
        </div>
      </div>
    </footer>
  );
}

export default Footer;
