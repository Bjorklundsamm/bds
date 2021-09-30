import React, { Component } from 'react';
import { Container, Row, Col, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Styled from 'styled-components';
import $ from 'jquery';

import projects from '../lib/projects.json';


const Styles = Styled.div`
  #homepage {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: url("https://bjorklund-design-services.s3.us-west-2.amazonaws.com/background.webp")
      no-repeat fixed center 100%;
    display: flex;
    align-items: center;
  }

  #ring {
    border: 12px solid #b7b7b7;
    width: 400px;
    height: 400px;
    display: flex;
    align-items: center;
    border-radius: 100%;
    transition: ease 1s;
    &.square {
      border: .5px solid rgba(255,255,255, .05);
      border-radius: 0%;
      background: rgba(255,255,255, .05);
      height: 600px;
      width: 800px;
    }
  }

  #projects-button {
    border: none;
    outline: none;
    width: 100%;
    padding: 10px;
    background: #000000;
    color: #ffffff;
    font-family: 'Staatliches', cursive;
    font-size: 18px;
    transition: ease 2s;
    zindex: 2019;
    &:hover {
      background: #b6b6b6;
    }
  }

  #carousel {
    display: none;
  }

  .title {
    width: 100%;
    background: rgba(0,0,0, .8);
    font-family: 'Staatliches', cursive;
    border: none;
    outline: none;
    font-size: 18px;
    color: #ffffff;
    position: absolute;
    bottom: 0;
  }

  .overlay {
    background: rgba(0,0,0, .5);
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
    display: flex;
    align-items: center;
  }

  .header {
    font-family: 'Staatliches', cursive;
    font-size: 64px;
    color: rgba(255,255,255, .6);
    margin: auto;
    text-align: center;
  }

  .showborder {
    border: 2px dashed #ffffff;
  }
`


class Home extends Component {

  handleClick(e) {
    e.preventDefault();
    $('#ring').toggleClass('square');
    $('#projects-button').fadeOut(800)
    $('#carousel').delay(1000).fadeIn(2000);
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
          fluid="true"
          id="homepage"
          className="page"
        >
          <Col>
            <Row
              className="justify-content-center"
            >
              <div
                id="ring"
                className="inactive"
              >
                <Col>
                <Row
                  className="justify-content-center"
                >
                <button
                  id="projects-button"
                  className="active"
                  onClick={this.handleClick}
                >
                  Public Projects
                </button>
                <Carousel
                  id="carousel"
                  fade={true}
                  slide={false}
                  interval={15000}
                > 
                  {projects.map((entry) => {
                    return (
                      <Carousel.Item
                        key={entry.id}
                      >
                                                <button
                          className="title"
                        >
                          {entry.name}
                        </button>
                        <img
                          src={entry.image}
                          width="640px"
                          height="360px"
                          alt={entry.name}
                        />
                        {entry.status === 'down' &&
                          <div
                            className="overlay"
                          >
                            <h1
                              className="header non-text"
                            >
                              under construction
                            </h1>
                          </div>
                        }

                      </Carousel.Item>
                    )
                  })}
                </Carousel>
                </Row>
                </Col>
              </div>
            </Row>
          </Col>
          <Link
            to="/hiring"
          >
            <Button
              id="left-btn"
              className="page-btn"
            >
              Services
            </Button>
          </Link>
          <Link
            to="/about"
          >
            <Button
              id="right-btn"
              className="page-btn"
            >
              About Me
            </Button>
          </Link>
          <Link
            to="/contact"
          >
            <Button
              id="bottom-btn"
              className="page-btn"
            >
              Contact Me
            </Button>
          </Link>
        </Container>
      </Styles>
      </motion.div>
    )
  }
}

export default Home;
