import React, { Component } from "react";
import { Link } from "react-router-dom";

//import images
import team1 from "../assets/images/avatar1.png";
import team2 from "../assets/images/avatar2.png";
import team3 from "../assets/images/avatar3.png";
import team4 from "../assets/images/team/4.jpg";

//import icon 
import FeatherIcon from "feather-icons-react";
import { Col, Container, Row } from "reactstrap";

export default class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamData: [
        {
          profile: team1,
          name: "超哥",
          designation1: "跨境电商顾问",
          designation2: "Visa资深工程师"
        },
        {
          profile: team2,
          name: "Bryan",
          designation2: "亚马逊软件工程师",
        },
        {
          profile: team3,
          name: "Shelly",
          designation1: "跨境电商从业者",
          designation2: "市场营销"
        }
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="team">
          <Container>
            <Row className="justify-content-center mb-4">
              <Col lg={7} className="text-center">
                <h2 className="fw-bold">团队主要成员</h2>
                <p className="text-muted">
                  
                </p>
              </Col>
            </Row>

            <Row>
              {this.state.teamData.map((team, key) => (
                <Col lg={4} sm={6} key={key}>
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
                      <p className="text-muted text-uppercase font-size-14 mb-0">
                        {team.designation1}
                      </p>
                      <p className="text-muted text-uppercase font-size-14 mb-0">
                        {team.designation2}
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
