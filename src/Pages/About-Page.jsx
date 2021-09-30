import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import $ from 'jquery';

import Resume from '../lib/Resume';
import Story from '../lib/Story';
import Tools from '../lib/Tools';
import Examples from '../lib/Examples';



const Styles = styled.div`
  #about-page {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 100px 10px 100px 0px;
  }

  #abt-container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  #section-container {
    width: 0px;
    height: 85%;
    background: rgba(50,54,57, 1);
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  #content {
    display: none;
    width: 100%;
    height: 100%;
  }
  
  .abt-btn {
    font-size: 24px;
    color: rgba(255,255,255,.2);
    font-family: 'Staatliches', cursive;
    background: rgba(50,54,57, 1);
    padding: 5px;
    border: none;
    outline: none;
    width: 250px;
    height: 56px;
    margin-bottom: 5px;
    transition: .5s ease;
    &:hover {
      color: rgba(255,255,255,.8);
      width: 265px;
      transition: .5s ease;
    }
    &.active {
      color: rgba(255,255,255,1);
      width: 265px;
    }
  }

  .header-row {
    font-family: 'Staatliches', cursive;
    background: rgba(50,54,57, 1);
    box-shadow: 0px 10px 5px rgba(0,0,0,1);
  }

  .body-row {
    background: rgba(82,86,89,1);
    padding: 0px 50px 0px 50px;
    text-align: center;
  }

  .text {
    color: rgba(255,255,255,1);
  }

  .show-border {
    border: solid 2px white;
  }

  .bg {
    animation:slide 8s ease-in-out infinite alternate;
    background-image: linear-gradient(-120deg, #000000 50%, #161616 50%);
    bottom:0;
    left:-50%;
    opacity:.5;
    position:fixed;
    right:-50%;
    top:0;
    z-index:-1;
  }

  .bg2 {
    animation-direction:alternate-reverse;
    animation-duration:8s;
  }

  .bg3 {
    animation-duration:10s;
  }

  @keyframes slide {
    0% {
      transform:translateX(-25%);
    }
    100% {
      transform:translateX(25%);
    }
  }
`

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: null,
    }
  }

  changeView = (e) => {
    let prevId = '#' + this.state.view;
    let currentId = '#' + e.target.id;
    if(prevId === currentId) {
      $(prevId).removeClass('active');
      $('#content').fadeOut("slow")
      $('#section-container').animate({ width: "0px"})

    } else {
      $(prevId).removeClass('active');
      $(currentId).addClass('active');
      $('#section-container').animate({ width: "65%"})
      $('#content').delay(350).fadeIn(500)

    }
    if(this.state.view !== e.target.id) {
      this.setState({
        view: e.target.id
      })
    } else {
      this.setState({
        view: null
      })
    }
  }

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
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <Row
            id="abt-container"
          >
            <Col
              id="btns-container"
            >
            <Row
              className="justify-content-end"
            >
              <button
                id="Story"
                className="abt-btn"
                onClick={this.changeView}
              >
                Who is Samuel Bjorklund?
              </button>
            </Row>
            <Row
              className="justify-content-end"
            >
              <button
                id="Tools"
                className="abt-btn"
                onClick={this.changeView}
              >
                {"Tools & Libraries"}
              </button>
            </Row>
            <Row
              className="justify-content-end"
            >
              <button
                id="Examples"
                className="abt-btn"
                onClick={this.changeView}
              >
                {'See projects & examples'}
              </button>
            </Row>
            <Row
              className="justify-content-end"
            >
              <button
                id="Resume"
                className="abt-btn"
                onClick={this.changeView}
              >
                Check out my Resume(...)
              </button>
            </Row>
            </Col>
          <div
            id="section-container"
          >
            <div
              id="content"
            >
              {this.state.view === "Resume" && <Resume />}
              {this.state.view === "Story" && <Story />}
              {this.state.view === "Tools" && <Tools />}
              {this.state.view === "Examples" && <Examples />}
            </div>
          </div>
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
