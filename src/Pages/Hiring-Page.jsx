import React, { Component } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Styled from 'styled-components';


const Styles = Styled.div`
  #homepage {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }

  #overlay {
    background: rgba(255,255,255, .6);
    position: absolute;
    border-radius: 5%;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
    z-index:2019;
    display: flex;
    align-items: center;
  }

  .bg {
    animation:slide 8s ease-in-out infinite alternate;
    background-image: linear-gradient(-60deg, #000000 50%, #161616 50%);
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

  .content {
    background: rgba(0,0,0, .8);
    position: relative;
    padding: 25px;
    border-radius: 5%;
    z-index: 1;
  }

  .body {
    font-family: 'Staatliches', cursive;
    font-size: 18px;
    color: rgba(255,255,255, .1);
  }

  .header {
    text-align: center;
    font-family: 'Staatliches', cursive;
    font-size: 44px;
    margin: 0;
    padding: 0;
    opacity: 100%;
  }

  .form-input {
    background: rgba(255,255,255, .1);
    border: none;
    outline: none;
    font-family: 'Staatliches', cursive;
    font-size: 18px;
    color: rgba(255,255,255, .2);
  }

  .send-btn {
    background: rgba(255,255,255, .6);
    border: none;
    outline: none;
    font-family: 'Staatliches', cursive;
    font-size: 18px;
    color: rgba(0,0,0, .8);
  }

  .contact-btn {
    font-family: 'Staatliches', cursive;
    font-size: 36px;
    width: 100%;
    background: #161616;
    color: rgba(255,255,255, .6);
    border: none;
    outline: none;
    transition: ease .2s;
    &:hover{
      opacity: .9
    }
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


class Hiring extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{duration: 0.5}}
      >
      <Styles>
        <div
          id="homepage"
        >
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
          <Col>
            <Row
              className="justify-content-center"
            >
            <Form
              className="content"
            >
              <div
                id="overlay"
              >
                <div>
                <h3
                  className="header non-text"
                >
                  <p>
                  Thank you for your consideration!
                  <br />
                  Unfortunately I am not accepting new projects at this time.
                  <br />
                  To check availability or recieve a brief consultation, please contact me using the link below:
                  </p>
                </h3>
                <Link
                  to="/contact"
                >
                  <button
                    className="contact-btn"
                  >
                    Contact Me
                  </button>
                </Link>
                </div>
              </div>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label
                      className="body"
                    >
                      Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      className="form-input"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                  <Form.Label
                    className="body"
                  >
                    Phone
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    className="form-input"
                  />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                  <Form.Label
                    className="body"
                  >
                    Email*
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    className="form-input"
                  />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label
                    className="body"
                  >
                    Seeking:
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="form-input"
                    defaultValue="none"
                  >
                    <option value="none" disabled hidden>Application Development</option>
                  </Form.Control>
                </Col>
                <Col>
                  <Form.Label
                    className="body"
                  >
                    On Behalf of:
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="form-input"
                    defaultValue="none"
                  >
                    <option value="none" disabled hidden>MySelf</option>
                  </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Label
                    className="body"
                  >
                    Already have a business plan? Upload it below:
                  </Form.Label>
                  <Form.Control
                    as="select"
                    name="title"
                    className="mr-sm-2 form-input"
                    id="inlineFormCustomSelect"
                    defaultValue="none"
                    custom
                  >
                    <option value="none">No file uploaded(...)</option>
                  </Form.Control>
                </Col>
              </Form.Row>
              <Form.Row>
                <Col>
                  <Form.Group>
                    <Form.Label
                      className="body"
                    >
                      Message
                    </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    className="form-input"
                  />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Row
                className="justify-content-center"
              >
                <Button
                  variant="primary"
                  type="submit"
                  className="send-btn"
                >
                  Submit
                </Button>
              </Row>
              <Row
                className="justify-content-center body"
              >
                (Your information will never be shared without consent)
              </Row>
            </Form>
            </Row>
          </Col>
          <Link
            to="/"
          >
            <Button
              id="right-btn"
              className="page-btn"
            >
              Back Home
            </Button>
          </Link>
        </div>
      </Styles>
      </motion.div>
    )
  }
}

export default Hiring;
