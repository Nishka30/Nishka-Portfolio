// Home2.js

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myImg from '../../Assets/avatar.jpg';
import Tilt from 'react-parallax-tilt';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram, } from 'react-icons/ai';
import { FaCode, FaLinkedinIn } from 'react-icons/fa';
import { FaHackerrank} from 'react-icons/fa';
import { FaCodepen} from 'react-icons/fa';
import ContactForm from './ContactForm'; // Import the ContactForm component

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
               Embarked on a love affair with code, and somehow managed not to break up!🖥 
              <br />
              Fluent in the classics - <b className="purple">C++, Javascript, and Java</b> - I'm that coder who dreams in syntax.

              <br />
              <br />
              My playground? Building the future of <b className="purple">Web Technologies</b> and Products, with a sprinkle of <b className="purple">Blockchain</b> magic.💻✨
          
              <br />
              <br />
              When I'm not decoding the digital universe, catch me crafting wonders with <b className="purple">Node.js</b>, and dancing with the stars of <b className="purple">React.js and Next.js.</b> 🚀 Let's turn bits and bytes into digital symphonies! 🎶{' '}
  
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid img2" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
        <br/>
        <Col md={12} className="home-about-social">
        <h1 style={{padding: '20px'}}> LET'S GET IN TOUCH</h1>
        <ContactForm />
        </Col>
        </Row>
        <br/>
        <br/>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{padding: '20px'}}>FIND ME ON</h1>
            <p style={{padding: '-20px'}}>Feel free to <span className="purple">connect </span>with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nishka30"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Nishka30"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nishka-shrimali-83419a225/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/nishka_si30"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.hackerrank.com/profile/shrimalinishka"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaHackerrank />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://codepen.io/Nishka-shrimali"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaCodepen />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
