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
                <h2 className="fw-bold">服务</h2>
                <p className="text-muted">
                助力跨境电商实现销售增长和积极客户反馈
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
                    <h4 className="mb-3 font-size-22">明信片/信件邮寄</h4>
                    <p className="text-muted mb-0">
                    北美地区的收件人对明信片，信件具有较高的开启率。明信片和信件更容易被收件人注意和打开，使宣传信息更具有效传递性。
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
                    <h4 className="mb-3 font-size-22">电子邮件群发</h4>
                    <p className="text-muted mb-0">
                    保持与现有客户的联系对于提高客户忠诚度和重复购买率至关重要。通过电子邮件，您可以发送更新、特别优惠和定期新闻通讯。
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
                    <h4 className="mb-3 font-size-22">AI内容生成</h4>
                    <p className="text-muted mb-0">
                    使用人工智能，自动生成信件或电子邮件的标题、正文内容、产品介绍和促销信息。减少了翻译错误和拼写错误的风险，提高了文本的准确性。
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
