import React from "react";
import Card from "react-bootstrap/Card";
import { FaHeart } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Nikhil Mehara </span>
            from <span className="purple">Jaipur, Rajasthan.</span>
            <br />
            <br />
            Currently I am Learing{" "}
            <span className="purple"> Full Stack Web Development</span> and My
            Tech Stack is <span className="purple"> MERN</span>.
            <br />
            <br />I am an Mechanical Engineer Who Fall in
            <span className="purple">
              {" "}
              <FaHeart />
            </span>{" "}
            With Coding.
          </p>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Time, Tide and JAVASCRIPT Waits for None."{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
