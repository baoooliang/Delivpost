import React, { Component } from "react";
import { Link } from "react-router-dom";

//import images
import team1 from "../assets/images/reading.jpg";
import team2 from "../assets/images/business.jpg";

//import icon 
import FeatherIcon from "feather-icons-react";
import { Col, Container, Row } from "reactstrap";

export default class Pricing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData: [
        {
          profile: team1,
          name: "",
          designation: "将您的产品快速地推广到全美各个家庭",
        },
        {
          profile: team2,
          name: "",
          designation: "高转化率助你拓展北美市场",
        }
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="team">
          <Container>

            <Row>
              {this.state.teamData.map((team, key) => (
                <Col lg={6} sm={6} key={key}>
                  <div className="team-box mt-4 position-relative overflow-hidden rounded text-center shadow">
                    <div className="position-relative overflow-hidden">
                      <img
                        src={team.profile}
                        alt=""
                        className="img-fluid d-block mx-auto"
                      />
                    
                    </div>
                    <div className="p-4">
                      <h5 className="font-size-19 mb-1">{team.name}</h5>
                      <p className="text-muted text-uppercase font-size-14 mb-0">
                        {team.designation}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
