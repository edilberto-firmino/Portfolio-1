import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMITA-NOS <span className="purple">APRESENTAR</span> A NÓS MESMOS
            </h1>
            <p className="home-about-body">
              Nós da WIGE somos apaixonados por programação e sempre estamos aprendendo algo novo, acredite... 🤷‍♂️
              <br />
              <br />Nossos especialistas são fluentes em linguagens clássicas, como
              <i>
                <b className="purple"> PHP,  Freamework  Laravel,  Freamwork JavaScript,  React.js,  React Native.js </b>
              </i>
              <br />
              <br />
              Nosso foco principal é a criação de
              <i>
                <b className="purple"> Novas Tecnologias e Produtos para a Web </b>
              </i>
              , bem como em áreas relacionadas à
              <i>
                <b className="purple"> Engenharia de Software. </b>
              </i>
              <br />
              <br />
              Sempre que possível, aplicamos nossa paixão no desenvolvimento de produtos 
              <b className="purple"> WEB </b> e aplicamos em diversos modelos de Sistemas como
              <i>
                <b className="purple"> E-commerce, Sistemas Web, Sistemas Mobile.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>NOS ENCONTRE NAS REDES SOCIAIS</h1>
            <p>
              Fique à vontade para <span className="purple">conectar-se</span> conosco
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/wige"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/wige"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/wige/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/wige"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
