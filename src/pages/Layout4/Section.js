import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//import icon
import FeatherIcon from "feather-icons-react";

import Background from "../../assets/images/hero-4-bg.jpg";
import hero from "../../assets/images/hero-4-overlay.png";

// Modal Video
import ModalVideo from "react-modal-video";
import Button from 'react-bootstrap/Button';

import "../../../node_modules/react-modal-video/scss/modal-video.scss";

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
    const onClick = () => {
      window.location.href = 'https://www.delivpost.com';
    }
    const currentURL = window.location.href;

    return (
      <React.Fragment>
        {/* <!-- Hero Start */}
        <section
          className="hero-4 position-relative bg-light"
          // Define Background Image
          style={{ background: `url(${Background})` }}
          id="home"
        >
          <div className="bg-overlay bg-dark"></div>
          <div
            className="bg-overlay-img"
            style={{ background: `url(${hero})` }}
          ></div>
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <h1 className="font-weight-semibold mb-4 hero-4-title">
                助力您的电商业务
                </h1>
                <p className="mb-5 text-muted">
                明信片/信件邮寄, 电子邮件群发，AI内容生成等服务，帮助您的产品在北美迅速提升知名度、增加好评率、扩大销售量
                </p>
                <Button onClick={onClick} className="btn btn-lg btn-primary me-2">
                  立即注册
                </Button>
              </Col>
              <Col lg={4} className="ms-lg-auto text-center mt-lg-0 mt-5">
                <div className="d-inline-block">
                  <Link
                    to="#"
                    className="play-icon-circle video-play-icon"
                    onClick={this.openModal}
                  >
                    <i>
                      <FeatherIcon icon="play" className="icon ps-1" />
                    </i>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
          <ModalVideo
            channel="youku"
            isOpen={this.state.isOpen}
            videoId="XNjAyNTEyNjA2MA"
            onClose={() => this.setState({ isOpen: false })}
          />
        </section>
        {/* Hero End */}
      </React.Fragment>
    );
  }
}

export default Section;
