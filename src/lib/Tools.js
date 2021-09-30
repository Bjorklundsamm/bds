import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Table from './Table.jsx';
import Libraries from './Libraries.json';

const Tools = () => (
  <>
    <Col>
        <Row
            className="header-row justify-content-center text non-text"
        >
        <h1>Front-End</h1>
        </Row>
        <Row
            className="body-row justify-content-center text non-text"
        >
          <Table entries={Libraries.frontEnd} />
        </Row>
        <Row
            className="header-row justify-content-center text non-text"
        >
        <h1>Back-end</h1>
        </Row>
        <Row
            className="body-row justify-content-center text non-text"
        >
          <Table entries={Libraries.backEnd} />
        </Row>
        <Row
            className="header-row justify-content-center text non-text"
        >
        <h1>Dev-ops</h1>
        </Row>
        <Row
            className="body-row justify-content-center text non-text"
        >
          <Table entries={Libraries.devOps} />
        </Row>
        <Row
            className="header-row justify-content-center text non-text"
        >
        <h1>{"Envs, Distros & IDEs"}</h1>
        </Row>
        <Row
            className="body-row justify-content-center text"
        >
          <Table entries={Libraries.envs} />
        </Row>
    </Col>
  </>
)

export default Tools;