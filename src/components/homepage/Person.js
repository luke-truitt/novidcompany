import React from "react";

import { Link, Redirect } from "react-router-dom";

import { Row, Col, Image } from "react-bootstrap";

// Import individual thumbnails

import luke from "./images/Truitt.jpg";
import josh from "./images/Josh.png";

// compose dictionary of headshots for people that have headshots
const headshots = {
  "luke": luke,
  "josh": josh
};

function Person(props) {
  console.log(headshots[props.img]);

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ padding: "1rem" }}>
      <div className="person-image" onClick={() => window.location.href = 'mailto:' + props.img + '@novidcompany.com'}>
        <img
          alt={props.img}
          src={headshots[props.img]}
          style={{
            height: "180px",
            width: "180px",
            objectFit: "cover",
            borderRadius: "100%"
          }}
        />
        
      </div>
      <div>
        <div style={{ paddingTop:"10px", width:"190px", fontSize: "1.5rem", textAlign:"center"}}>{props.name} </div>
      </div>
    </Col>
  );
}
export default Person;
