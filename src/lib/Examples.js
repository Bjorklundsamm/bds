import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Repos from './Repos';
import Projects from './Projects';

const projects= {"username": "Bjorklundsamm"};
const toyProblems = {"owner": "Bjorklundsamm", "repo": "re.hearsal", "path": "Toy-Problems"};
const systemDesign = {"owner": "Bjorklundsamm", "repo": "re.hearsal", "path": "System-Design"};


const Examples = () => (
  <>
    <Col>
        <Row
            className="header-row justify-content-center text non-text"
        >
        <h1>Repos</h1>
        </Row>
        <Row
            className="body-row text"
        >
            <Projects params={projects} />
        </Row>
        <Row
            className="header-row justify-content-center text non-text"
        >
        <h1>System Design Prompts</h1>
        </Row>
        <Row
            className="body-row text"
        >
            <Repos params={systemDesign} />
        </Row>
        <Row
            className="header-row justify-content-center text non-text"
        >
        <h1>Toy Problems</h1>
        </Row>
        <Row
            className="body-row text"
        >
          <Repos params={toyProblems} />
        </Row>
    </Col>
  </>
)

export default Examples;