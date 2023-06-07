import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import { Card, CardBody, Col, Container, Row } from "reactstrap";

//import images
import user1 from "../assets/images/boy1.png";
import user2 from "../assets/images/girl.png";
import user3 from "../assets/images/boy2.png";
import Background from "../assets/images/cta-bg.png";
import demo from "../assets/images/demos.png";

export default class Blog extends Component {

  render() {
    const onClick = () => {
      window.location.href = 'https://www.delivpost.com';
    }
    return (
      <React.Fragment>
        <section className="section" id="blog">
          <Container>
            <Row className="justify-content-center mb-4">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">客户评价</h2>
              </Col>
            </Row>
            <Row>
              <Col lg={4}>
                <Card className="mt-4 border-0 shadow">
                  <CardBody className="p-4">
                    <span className="badge badge-soft-primary">
                      宠物产品
                    </span>
                    <h4 className="font-size-22 my-4">
                      <Link to="#">
                        强烈推荐！
                      </Link>
                    </h4>
                    <p className="text-muted">
                    非常感激Delivpost的专业和周到，强烈推荐这个网站给所有需要类似服务的电商。我在美国生活13年，对于美国客户，明信片绝对是非常有效的宣传方法。
                    </p>
                    <div className="d-flex align-items-center mt-4 pt-2">
                      <img
                        src={user1}
                        className="rounded-circle avatar-sm me-3"
                        alt="..."
                      />
                      <div className="flex-body">
                        <h5 className="font-size-17 mb-0">张先生</h5>
                        <p className="text-muted mb-0 font-size-14">
                          运营亚马逊商店5年
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card className="mt-4 border-0 shadow">
                  <CardBody className="p-4">
                    <span className="badge badge-soft-primary">家具装饰</span>
                    <h4 className="font-size-22 my-4">
                      <Link to="#">
                      超高性价比
                      </Link>
                    </h4>
                    <p className="text-muted">
                      Delivpost的价格秒杀其他公司。已经用了他们的服务超过1年，我的商店规模直接翻了一倍。真的非常高效！赞！回复问题的速度也很快。
                    </p>
                    <div className="d-flex align-items-center mt-4 pt-2">
                      <img
                        src={user2}
                        className="rounded-circle avatar-sm me-3"
                        alt="..."
                      />
                      <div className="flex-body">
                        <h5 className="font-size-17 mb-0">Amy</h5>
                        <p className="text-muted mb-0 font-size-14">
                        运营亚马逊商店2年
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={4}>
                <Card className="mt-4 border-0 shadow">
                  <CardBody className="p-4">
                    <span className="badge badge-soft-primary">音响设备</span>
                    <h4 className="font-size-22 my-4">
                      <Link to="#">
                        非常容易上手
                      </Link>
                    </h4>
                    <p className="text-muted">
                    Delivpost非常容易操作。使用他们的平台很轻松，无需费时费力地学习复杂的操作步骤。让我可以更专注地处理其他生意事务，而不必担心邮寄明信片的繁琐程序。
                    </p>
                    <div className="d-flex align-items-center mt-4 pt-2">
                      <img
                        src={user3}
                        className="rounded-circle avatar-sm me-3"
                        alt="..."
                      />
                      <div className="flex-body">
                        <h5 className="font-size-17 mb-0">Mike</h5>
                        <p className="text-muted mb-0 font-size-14">
                        运营亚马逊商店3年
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
        <section
          className="section bg-center w-100 bg-light"
          style={{ background: `url(${Background})` }}
        >
          <Container>
            <Row>
              <Col lg={12}>
                <Card className="bg-gradient-primary text-center border-0">
                  <div
                    className="bg-overlay-img"
                    style={{ background: `url(${demo})` }}
                  ></div>
                  <CardBody className="mx-auto p-sm-5 p-4">
                    <Row className="justify-content-center">
                      <Col lg={10}>
                        <div className="p-3">
                          <h2 className="text-white mb-4">
                            加入我们
                          </h2>
                          <p className="text-white-70 font-size-16 mb-4 pb-3">
                            成为Delivpost社区一员， 让你的产品在同行激烈的竞争中脱引而出
                          </p>
                          <Button onClick={onClick} className="btn btn-light rounded-pill">
                            Let's go!
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
