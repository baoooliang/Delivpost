import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

//import icon

/*
直邮
自动化
usps
customization

易操作的app
性价比
成果
*/
import FeatherIcon from "feather-icons-react";

export default class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section" id="services">
          <Container>
            <Row className="justify-content-center mb-5">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">邮寄明信片</h2>
                <p className="text-muted">
                一种更适合北美市场的商业推广方式
                </p>
              </Col>
            </Row>

            <Row>
              <Col lg={4}>
                <div className="service-box text-center px-4 py-5 position-relative mb-4">
                  <div className="service-box-content p-4">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <i>
                        <FeatherIcon icon="box" />
                      </i>
                    </div>
                    <h4 className="mb-3 font-size-22">高开启率</h4>
                    <p className="text-muted mb-0">
                    北美地区的收件人对明信片具有较高的开启率，相对于其他宣传媒介，明信片更容易被收件人注意和打开，使宣传信息更具有效传递性
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <div className="service-box text-center px-4 py-5 position-relative mb-4">
                  <div className="service-box-content p-4">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <i>
                        <FeatherIcon icon="server" />
                      </i>
                    </div>
                    <h4 className="mb-3 font-size-22">直接而个人化</h4>
                    <p className="text-muted mb-0">
                    邮寄明信片可以直接送达收件人的家庭，营造一种个人化的沟通方式。这种直接接触能够增强品牌与目标受众之间的联系，提高宣传效果
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <div className="service-box text-center px-4 py-5 position-relative mb-4 active">
                  <div className="service-box-content p-4">
                    <div className="icon-mono service-icon avatar-md mx-auto mb-4">
                      <i>
                        <FeatherIcon icon="layers" />
                      </i>
                    </div>
                    <h4 className="mb-3 font-size-22">互动机会</h4>
                    <p className="text-muted mb-0">
                    明信片可以包含优惠券、折扣码或促销活动，为受众提供直接互动的机会，增加参与度和购买决策的可能性
                    </p>
                  </div>
                </div>
              </Col>

            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
