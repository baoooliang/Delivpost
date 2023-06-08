import React, { Component } from "react";
import { Link } from "react-router-dom";

//import icon
import FeatherIcon from "feather-icons-react";
import { Col, Container, Form, Input, Label, Row } from "reactstrap";
import wechat from  "../assets/images/wechat.png";
import wechat_logo from  "../assets/images/wechat_logo.png";

//import images
import contact from "../assets/images/contact.png";

export default class Contact extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="contact">
          
          <Container>
          <Row className="justify-content-center mb-5">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">联系我们</h2>
                <p className="text-muted">
                发送邮件咨询更多关于Delivpost的信息。我们会在第一时间回复！
                </p>
              </Col>
            </Row>
            <Row>

              <Col lg={8} className="ms-lg-auto">
                <div className="mt-5 mt-lg-0">
                  <img src={contact} alt="" className="img-fluid d-block" />
                  <p className="text-muted mt-5 mb-3">
                    <i>
                      <FeatherIcon
                        icon="mail"
                        className="me-2 text-muted icon icon-xs"
                      />
                    </i>{" "}
                    admin@delivpost.com
                  </p>
                  <p className="text-muted mb-3">
                    <i>
                      <FeatherIcon
                        icon="map-pin"
                        className="me-2 text-muted icon icon-xs"
                      />
                    </i>{" "}
                    2976 Edwards Street Rocky Mount, NC 27804
                  </p>
                
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
