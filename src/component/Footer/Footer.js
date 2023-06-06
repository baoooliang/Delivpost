import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import FooterLink from "../Footer/Footer_link";

// Footer Image
import footer_image from "../../assets/images/footer-bg.png";

import logolight from "../../assets/images/logo-dark-2.png";
// Import Logo

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          id: 1,
          title: "Customer",
          child: [
            { title: "Works", link: "/" },
            { title: "Strategy", link: "/" },
            { title: "Releases", link: "/" },
            { title: "Press", link: "/" },
            { title: "Mission", link: "/" },
          ],
        },
        {
          id: 2,
          title: "Product",
          child: [
            { title: "Tranding", link: "/" },
            { title: "Popular", link: "/" },
            { title: "Customers", link: "/" },
            { title: "Features", link: "/" },
          ],
        },
        {
          id: 3,
          title: "Information",
          child: [
            { title: "Developers", link: "/" },
            { title: "Support", link: "/" },
            { title: "Customer Service", link: "/" },
            { title: "Get Started", link: "/" },
            { title: "Guide", link: "/" },
          ],
        },
        {
          id: 3,
          title: "Support",
          child: [
            { title: "FAQ", link: "/" },
            { title: "Contact", link: "/" },
            { title: "Disscusion", link: "/" },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* Footer Start */}
        <footer
          className="footer"
          style={{ backgroundImage: "url(" + footer_image + ")" }}
        >
          <Container>
            <Row>
              <Col lg={12}>
                <div className="mb-4">
                  <Link to="#">
                    <img src={logolight} alt="" className="" height="80" width="200" />
                  </Link>
                  <p className="text-white-50 my-4">
                  自动化的邮寄商业明信片服务帮助您的产品在北美迅速提升知名度、增加销售量
                  </p>
                </div>
              </Col>
              
            </Row>
            {/* Render Footer Link End */}
            <FooterLink />
          </Container>
        </footer>
        {/* Footer End */}
      </React.Fragment>
    );
  }
}

export default Footer;
