import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

function Banner() {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 2000;
  const wordsToRotate = ["Web Developer", "App Developer", "Coffee Lover"];
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let index = loopNumber % wordsToRotate.length;
    let fullText = wordsToRotate[index];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-centers">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portfolio</span>
            <h1>{`Hi, I'm Akhil `}</h1>
            <span className="wrap">{text}</span>
            <p>
              Enthusiastic and driven MERN stack developer with a strong
              foundation in web development. Passionate about creating
              innovative and user-friendly applications
            </p>
            <button onClick={() => {}}>
              Let's Connect{" "}
              <span>
                <ArrowRightCircle size={25} />
              </span>
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
