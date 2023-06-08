import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


// Import FeatherIcon
import FeatherIcon from "feather-icons-react";

// Import Feature Image
import Background from "../assets/images/demos.png";
import features_img1 from "../assets/images/features-1.jpg";
import dot_img from "../assets/images/dot-img.png";
import features_img2 from "../assets/images/usps2.jpg";
import features_img3 from "../assets/images/grow.jpg";
import features_img4 from "../assets/images/automation.jpg";

class Feature extends Component {
  render() {

    const onClick = () => {
      window.location.href = 'https://www.delivpost.com';
    }
    return (
      <React.Fragment>
        <section className="section bg-light" id="features">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">为什么选择Delivpost</h2>
                <p className="text-muted">
                </p>
              </Col>
            </Row>

            <Row className="align-items-center mb-5">
              <Col md={5} className="order-2 order-md-1 mt-md-0 mt-5">
                <h2 className="mb-4">简单高效</h2>
                <p className="text-muted mb-5">
                  Delivpost提供简洁且易操作的软件平台。用户只需上传明信片设计，提交订单，即可启动北美明信片推广。
                </p>
              </Col>
              <Col md={6} className="ms-md-auto order-1 order-md-2">
                <div className="position-relative">
                  <div className="ms-5 features-img">
                    <img
                      src={features_img1}
                      alt=""
                      className="img-fluid d-block mx-auto rounded shadow"
                    />
                  </div>
                  <img src={dot_img} alt="" className="dot-img-left" />
                </div>
              </Col>
            </Row>
            <Row className="align-items-center section pb-0">
              <Col md={6}>
                <div className="position-relative mb-md-0 mb-5">
                  <div className="me-5 features-img">
                    <img
                      src={features_img2}
                      alt=""
                      className="img-fluid d-block mx-auto rounded shadow"
                    />
                  </div>
                  <img src={dot_img} alt="" className="dot-img-right" />
                </div>
              </Col>
              <Col md={5} className="ms-md-auto">
                <h2 className="mb-4">
                  安全可靠
                </h2>
                <p className="text-muted mb-5">
                  Delivpost与美国最大的邮政服务提供商USPS(美国联邦邮政系统)合作。为客户提供定期，自动化，可靠的明信片邮寄服务。
                </p>
              </Col>
            </Row>
            <Row className="align-items-center section mb-5">
              <Col md={5} className="order-2 order-md-1 mt-md-0 mt-5">
                <h2 className="mb-4">全自动化</h2>
                <p className="text-muted mb-5">
                  Delivpost与北美多个印刷工厂深度合作。能够实现自动，快速，多规格，大批量的明信片印刷
                </p>
              </Col>
              <Col md={6} className="ms-md-auto order-1 order-md-2">
                <div className="position-relative">
                  <div className="ms-5 features-img">
                    <img
                      src={features_img4}
                      alt=""
                      className="img-fluid d-block mx-auto rounded shadow"
                    />
                  </div>
                  <img src={dot_img} alt="" className="dot-img-left" />
                </div>
              </Col>
            </Row>
            <Row className="align-items-center section pb-0">
              <Col md={6}>
                <div className="position-relative mb-md-0 mb-5">
                  <div className="me-5 features-img">
                    <img
                      src={features_img3}
                      alt=""
                      className="img-fluid d-block mx-auto rounded shadow"
                    />
                  </div>
                  <img src={dot_img} alt="" className="dot-img-right" />
                </div>
              </Col>
              <Col md={5} className="ms-md-auto">
                <h2 className="mb-4">
                  专业
                </h2>
                <p className="text-muted mb-5">
                Delivpost深耕北美市场多年，已为上百个跨境电商提供高质量推广服务。专业追踪和分析宣传效果，帮助评估投资回报率和改进营销策略
                </p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section bg-gradient-primary">
          <div
            className="bg-overlay-img"
            style={{ background: `url(${Background})` }}
          ></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8}>
                <div className="text-center">
                  <h1 className="text-white mb-4">
                    享受市场最优惠价格
                  </h1>
                  <p className="text-white mb-5 font-size-16">
                  </p>
                  <Button onClick={onClick} className="btn btn-lg btn-light">
                  立即使用
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Feature;
