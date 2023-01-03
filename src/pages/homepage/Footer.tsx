import logo from "../../assets/improveMeLogo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <section className="section-logo">
          <img src={logo} alt="logo" />
        </section>
        <section className="links-wrapper">
          <div className="ul-wrapper">
            <h3>Product</h3>
            <ul className="product">
              <a href="#">
                <li>Features</li>
              </a>
              <a href="#">
                <li>Integrations</li>
              </a>
              <a href="#">
                <li>Security</li>
              </a>
              <a href="#">
                <li>Pricing</li>
              </a>
              <a href="#">
                <li>Support</li>
              </a>
            </ul>
          </div>
          <div className="ul-wrapper">
            <h3>About Us</h3>
            <ul className="about">
              <a href="#">
                <li>Our Mission</li>
              </a>
              <a href="#">
                <li>Careers</li>
              </a>
              <a href="#">
                <li>
                  Why <span className="txt-400">improve</span>
                  <span className="txt-300">Me</span>
                </li>
              </a>
            </ul>
          </div>
          <div className="ul-wrapper">
            <h3>Follow Us</h3>
            <ul className="some">
              <a href="#">
                <li>IG</li>
              </a>
              <a href="#">
                <li>FB</li>
              </a>
              <a href="#">
                <li>TW</li>
              </a>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
