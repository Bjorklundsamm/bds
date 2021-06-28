import React, { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Styled from 'styled-components';
import $ from 'jquery';


const Styles = Styled.div`
  #contact-page {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    background: #50a3a2;
    background: -webkit-linear-gradient(top left, #000000 50%, #161616 50%);
    background: -moz-linear-gradient(top left, #000000 50%, #161616 50%);
    background: -o-linear-gradient(top left, #000000 50%, #161616 50%);
    background: linear-gradient(to bottom right, #000000 50%, #161616 50%);
    overflow: hidden;

    display: flex;
    align-items: center;
  }

  form{
    padding: 20px 0;
    position: relative;
    z-index: 2;

    button{
      appearance: none;
      outline: 0;
      background-color: white;
      border: 0;
      padding: 10px 15px;
      color: #161616;
      border-radius: 3px;
      width: 100%;
      cursor: pointer;
      font-size: 18px;
      transition-duration: 0.25s;
      font-family: 'Staatliches', cursive;
      font-size: 24px;
      &:hover{
        background-color: rgb(245, 247, 249);
      }
    }
  }

  .form-input{
    outline: 0;
    border: 1px solid rgba(255,255,255,.4);
    background-color: rgba(255,255,255,.2);
    width: 250px;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    font-size: 18px;
    color: white;
    transition-duration: 0.25s;
    font-weight: 300;
    font-family: 'Staatliches', cursive;
    font-size: 24px;
    &:hover{
      background-color: rgba(255,255,255,.4);
    }
    &:focus{
      background-color: white;
      width: 300px;
      color: #161616;
    }
  }

  .textarea {
    outline: 0;
    border: 1px solid rgba(255,255,255,.4);
    background-color: rgba(255,255,255,.2);
    width: 600px;
    height: 120px;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    color: white;
    transition-duration: 0.25s;
    font-weight: 300;
    font-family: 'Staatliches', cursive;
    font-size: 24px;
    &:hover{
      background-color: rgba(255,255,255,.4);
    }
    &:focus{
      background-color: white;
      color: #161616;
      box-shadow: none;
    }

  }

  .header {
    font-family: 'Staatliches', cursive;
    font-size: 64px;
    color: rgba(255,255,255, .2);
    margin: auto;
    text-align: center;
  }

  .bg-bubbles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: 1;

    li{
      position: absolute;
      list-style: none;
      display: block;
      width: 40px;
      height: 40px;
      background-color: rgba(255,255,255,.2);
      bottom: -160px;

      -webkit-animation: square 25s infinite;
      animation:         square 25s infinite;

      -webkit-transition-timing-function: linear;
      transition-timing-function: linear;

      &:nth-child(1){
        left: 10%;
      }

      &:nth-child(2){
        left: 20%;

        width: 80px;
        height: 80px;

        animation-delay: 2s;
        animation-duration: 17s;
      }

      &:nth-child(3){
        left: 25%;
        animation-delay: 4s;
      }

      &:nth-child(4){
        left: 40%;
        width: 60px;
        height: 60px;

        animation-duration: 22s;

        background-color: rgba(255,255,255,.2);
      }

      &:nth-child(5){
        left: 70%;
      }

      &:nth-child(6){
        left: 80%;
        width: 120px;
        height: 120px;

        animation-delay: 3s;
        background-color: rgba(255,255,255,.25);
      }

      &:nth-child(7){
        left: 32%;
        width: 160px;
        height: 160px;

        animation-delay: 7s;
      }

      &:nth-child(8){
        left: 55%;
        width: 20px;
        height: 20px;

        animation-delay: 15s;
        animation-duration: 40s;
      }

      &:nth-child(9){
        left: 25%;
        width: 10px;
        height: 10px;

        animation-delay: 2s;
        animation-duration: 40s;
        background-color: rgba(255,255,255,.3);
      }

      &:nth-child(10){
        left: 90%;
        width: 160px;
        height: 160px;

        animation-delay: 11s;
      }
    }
  }

  @-webkit-keyframes square {
    0%   { transform: translateY(0); }
    100% { transform: translateY(-1180px) rotate(600deg); }
  }
  @keyframes square {
    0%   { transform: translateY(0); }
    100% { transform: translateY(-1180px) rotate(600deg); }
  }
`

$("#login-button").click(function(event){
  event.preventDefault();

$('form').fadeOut(500);
});


class Contact extends Component {

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
          id="contact-page"
          className="page"
        >
          <Col>
          <Row
            className="justify-content-center"
          >
            <h1
              className="header nontext"
            >
              Leave me a message!
            </h1>
          </Row>
          <Row
            className="justify-content-center"
          >
            <Form className="form">
              <Col>
              <Row>
              <Col>
                <Form.Row>
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-input"
                  />
                </Form.Row>
                <Form.Row>
                  <input
                    type="text"
                    placeholder="Phone"
                    className="form-input"
                  />
                </Form.Row>
                <Form.Row>
                  <input
                    type="email"
                    placeholder="Email(*)"
                    required
                    className="form-input"
                  />
                </Form.Row>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      as="textarea"
                      name="message"
                      className="textarea"
                      placeholder="Message(*)"
                      required
                    />
                  </Form.Group>
                  <Row>
                    <Col>
                      <button
                        type="submit"
                        id="login-button"
                        onClick={this.sendEmail}
                      >
                        Submit
                      </button>
                    </Col>
                    <Col>
                      <Link
                        to="/"
                      >
                        <button
                          type="submit"
                          id="login-button"
                          onClick={this.sendEmail}
                        >
                          Back to Home Page
                        </button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
              </Col>
            </Form>
            </Row>
            </Col>
            <ul className="bg-bubbles">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </Container>
      </Styles>
      </motion.div>
    )
  }
}

export default Contact;
