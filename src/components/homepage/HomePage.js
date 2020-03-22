import React from "react";
import {
  Container,
  Jumbotron,
  Button,
  Row,
  Col,
  Image,
  Card,
  Carousel
} from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import AnimationWrapper from "./AnimationWrapper.js";
import Canvas from "../canvas/Canvas";
import Animation from "../canvas/Animation";
import Footer from "../tools/Footer";
import Navigation from "../tools/Navigation";
import ThemeCard from "./ThemeCard";
import "./HomePage.scss";
import Person from "./Person"; 

class HomePage extends React.Component {
  state = { redirect: false };


  handleProjectsClick = () => {
    this.setState({ redirect: true });
  };

  componentDidMount() {
    this.setState({ redirect: false });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/projects" />;
    }

    return (
      <div>
        {/**INTRODUCTION SECTION */}
        <Container fluid style={{ padding: 0 }}>
          <center>
            <Navigation center={true} />
          </center>

          <AnimationWrapper>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "60vh"
              }}
            >
              {/**Icon */}
              {/* PUT THE ANIMATION REF(IN CONSTRUCTOR) HERE*/}
              <Image
                fluid
                style={{ padding: 0 }}
                className="main-graphic"
                src={require("./images/novid_black_logo.svg")}
              />
            </Col>
          </AnimationWrapper>
        </Container>

        {/**ABOUT SECTION */}
        <Container
          fluid
          className="boxShadowed"
          style={{ backgroundColor: "#e6e7e870", color: "#1e2c3a" }}
        >
          <Container>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h3 className="homepageTitle" style={{ marginBottom: "20px" }}>
                Our Mission
              </h3>
            </Row>
            <Row>
              <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center"
                }}
              >
                As the nation deals with a plethora of shortages due to the COVID-19 crisis, The NoVid Company is partnering with hotels to offer non-critical isolation rooms for COVID-19 patients to allow for hospital beds to be spared for those who need constant medical attention.
              </Col>
              <Col md={6} sm={12}>
              <Image
                fluid
                style={{ padding: 0 }}
                className="hospital-graphic"
                src={require("./images/hospital.jpg")}
              />
              </Col>
            </Row>
          </Container>
        </Container>
        <Container fluid className="boxShadowed">
          <Container>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <h3 className="homepageTitle" style={{ marginBottom: "20px" }}>
                About Us
              </h3>
            </Row>
            <Row>
            <Col
                md={6}
                sm={12}
                style={{
                  fontFamily: "Lora",
                  display: "flex-inline",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign:"center"
                }}
              >
              Josh and Luke finished Duke University after building and successfully launching <a style={{display:"flex-inline"}}href="https://www.wsj.com/articles/bored-teenagers-found-each-other-online-and-built-a-rocket-to-launch-into-space-11559143865">two rockets together</a> and have continued building unique solutions to problems ranging from gig economy insurance to data science consulting to systems integration platforms for the US Military.
              </Col>
              <Col
                lg={3}
                md={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Person
                  name="Luke Truitt" 
                  img="luke"
                  onClick="mailto:luke@novidcompany.com"
              />
              </Col>
              <Col
                lg={3}
                md={6}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                >
              <Person
                  name="Josh Farahzad" 
                  img="josh"
              />
              </Col>
            </Row>
          </Container>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default HomePage;
