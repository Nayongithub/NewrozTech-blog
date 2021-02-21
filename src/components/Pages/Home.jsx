import React, { useState } from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
// import logo from 'public/hive-logo-1.png'

const logoImg = "/hive-logo.png";

const Home = () => {
  const [logo, setLogo] = useState(logoImg);
  return (
    <div>
      <Row>
        <Col md={4}>
          <img src={logo} alt="No Image" width="300" height="300" />
        </Col>
        <Col className="mt-5">
          <h1>Welcome To Admin Panel</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi eu
            ipsum orci pellentesque et vulputate odio sed finibus nibh. Etiam
            sit amet dictum nibh at pharetra quam aliquam luctus suscipit erat
            eget dignissim. In bibendum felis id justo venenatis rhoncus
            suspendisse potenti duis et gravida purus, laoreet maximus nibh.
            Maecenas malesuada ac risus rutrum gravida. Phasellus nec mi luctus,
            egestas magna eget, consequat sem.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
