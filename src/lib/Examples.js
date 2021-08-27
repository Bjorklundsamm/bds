import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Examples = () => (
  <>
    <Col>
        <Row
            className="header-row justify-content-center text"
        >
        <h1>Repos</h1>
        </Row>
        <Row
            className="body-row text"
        >
        <ul>
            <li>example</li>
            <li>example</li>
            <li>example</li>
        </ul>
        </Row>
        <Row
            className="header-row justify-content-center text"
        >
        <h1>System Design Prompts</h1>
        </Row>
        <Row
            className="body-row text"
        >
        <ul>
            <li>example</li>
            <li>example</li>
            <li>example</li>
        </ul>
        </Row>
        <Row
            className="header-row justify-content-center  text"
        >
        <h1>Toy Problems</h1>
        </Row>
        <Row
            className="body-row text"
        >
        <ul>
            <li>example</li>
            <li>example</li>
            <li>example</li>
        </ul>
        </Row>
    </Col>
  </>
)

export default Examples;