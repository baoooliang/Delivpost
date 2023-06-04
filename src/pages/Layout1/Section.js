import React, { Component } from "react";
import hero1 from "../../assets/images/hero-web-1.png";
import { Container, Row, Col } from "reactstrap";

// Import Background Image
import Background from "../../assets/images/hero-1-bg.png";
import hero2 from "../../assets/images/hero-1-bottom-shape.png";
import { Link } from "react-router-dom";

// Modal Video
import ModalVideo from "react-modal-video";

import FeatherIcon from "feather-icons-react";

class Section extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    const imgStyle = {
      borderRadius: '14px',
    };

    return (
      <>
        {/* Hero Start */}
        <section
          className="hero-1 bg-center bg-primary position-relative"
          // Define Background Image
          style={{ background: `url(${Background})` }}
          id="home"
        >
          <Container>
            <Row className="align-items-center hero-content">
              <Col lg={5}>
                <h1 className="text-white display-4 font-weight-semibold mb-4 hero-1-title">
                助力您的北美电商业务
                </h1>
                <p className="text-white-70 mb-4  mb-lg-5">
                我们提供自动化的邮寄商业明信片服务帮助您的产品在北美迅速提升知名度、增加销售量
                </p>
                <Link to="#" className="btn btn-lg btn-light rounded-pill me-2">
                  立即注册
                </Link>
              </Col>
              <Col lg={6} sm={10} className="mx-auto ms-lg-auto me-lg-0">
                <div className="mt-lg-0 mt-4">
                  <img src={hero1} alt="" className="img-md-responsive" style={imgStyle}/>
                </div>
              </Col>
            </Row>
          </Container>
          <ModalVideo
            channel="vimeo"
            isOpen={this.state.isOpen}
            videoId="12022651"
            onClose={() => this.setState({ isOpen: false })}
          />
          <div className="hero-bottom-shape">
            <img src={hero2} alt="" className="img-fluid d-block mx-auto" />
          </div>
        </section>
        {/* Hero End */}
      </>
    );
  }
}

export default Section;
