import React, { Component } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const Styles = styled.div`
  #about-page {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 145px 45px 0 0;
    left: 0;
    background: url("https://bjorklund-design-services.s3.us-west-2.amazonaws.com/background-ab.jpg")
      no-repeat fixed center 100%;
  }

  .pdf {
    box-shadow: 10px 15px 10px #161616;
  }

`

class About extends Component {

  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration: 0.5}}
      >
      <Styles>
        <Container
          id="about-page"
          fluid="true"
          className="page"
        >
          <Row
            className="justify-content-end"
          >
            <iframe
              title="resume"
              className="pdf"
              width="1225"
              height="800"
              frameBorder="0"
              src={`https://bjorklund-design-services.s3.us-west-2.amazonaws.com/SamB+-+Resume.pdf`}
            >
              </iframe>
          </Row>
          <Link
            to="/"
          >
            <Button
              id="left-btn"
              className="page-btn"
            >
              Back Home
            </Button>
          </Link>
        </Container>
      </Styles>
      </motion.div>
    )
  }
}

export default About;
