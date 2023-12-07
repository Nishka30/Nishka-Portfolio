import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Greetings!<br/> I am <span className="purple">Nishka Shrimali, </span>
            currently thriving as an engineering student at MCKV Institute of Engineering. I consider coding my playground, where I transform ideas into sleek and functional solutions.
            <br /><br/>
            My approach to the tech world is a unique blend of curiosity and creativity, and my passion for problem-solving keeps the journey engaging. Whether it's diving into algorithms or embarking on quirky projects, I embrace the challenge.
            <br />
            <br />
            Join me in this dynamic intersection where engineering meets excitement, and every line of code adds a touch of enchantment to our digital expedition.
          <br />
          <br />
          Your visit to my portfolio is deeply appreciated !
            </p>

         
          <footer className="blockquote-footer"></footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
