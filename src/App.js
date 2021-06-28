//libraries
import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap'
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

// Pages
import Home from './Pages/Home-Page.jsx';
import About from './Pages/About-Page.jsx';
import Hiring from './Pages/Hiring-Page.jsx';
import Contact from './Pages/Contact-Page.jsx';

const Styles = styled.div`
  #page {
    background: #000000;
  }

  #logo {
    margin: 0;
    padding: 0;
  }

  #github {
    border-right: 4px solid rgba(255,255,255, .2);
    &:hover {
      border-right: 4px solid rgba(255,255,255, .6);
    }
  }

  #linkedin {
    border-left: 4px solid rgba(255,255,255, .2);
    &:hover {
      border-left: 4px solid rgba(255,255,255, .6);
    }
  }

  #top-btn {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px 250px 25px 250px;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
  }

  #left-btn {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 250px 25px 250px 5px;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
  }

  #right-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 250px 5px 250px 25px;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;
  }

  #bottom-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    padding: 25px 250px 5px 250px;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
  }

  .page-btn {
    background: none;
    border: none;
    outline: none;
    color: rgba(255,255,255, .1);
    font-family: 'Staatliches', cursive;
    font-size: 24px;
    transition: ease .4s;
    &:hover {
      background: rgba(255,255,255, .1);
      color: rgba(255,255,255, .4);
    }
    &:active {
      background: rgba(255,255,255, .6) !important;
      color: rgba(255,255,255, .8) !important;
    }
    &:focus {
      box-shadow: none !important;
    }
  }

  .navbar-link {
    color: rgba(255,255,255, .2) !important;
    font-family: 'Staatliches', cursive;
    font-size: 36px;
    margin: 5px;
    padding 0;
    transition: ease .2s;
    &:hover {
      color: rgba(255,255,255, .6) !important;
    }
  }

  .showborder {
    border: 1px dashed #ffffff;
  }

  .non-text {
    user-select: none;
    cursor: default;
  }
`

function App () {
  const location = useLocation();
    return (
      <Styles>
          <div
            id="page"
          >
            <Navbar
              className="navbar"
              fixed="top"
              expand="md"
            >
              <Navbar.Brand href="/">
                <Image
                  src="https://bjorklund-design-services.s3.us-west-2.amazonaws.com/logo.webp"
                  width="512"
                  height="128"
                  id="logo"
                  className="d-inline-block align-top"
                  alt="Bjorklund Design Services"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                  className="ml-auto nav"
                  defaultActiveKey="/"
                >
                  <Nav.Link
                    id="github"
                    className="navbar-link"
                    href="https://github.com/Bjorklundsamm"
                  >
                    {"Github"}
                  </Nav.Link>
                  <Nav.Link
                    id="linkedin"
                    className="navbar-link"
                    href="https://www.linkedin.com/in/bjorklundsamm/"
                  >
                    {"LinkedIn"}
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
              <AnimatePresence exitBeforeEnter>
                      <Switch location={location} key={location.pathname}>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/contact" exact component={Contact} />
                        <Route path="/hiring" exact component={Hiring} />
                      </Switch>
              </AnimatePresence>
          </div>
      </Styles>
    );
  }


export default App;
