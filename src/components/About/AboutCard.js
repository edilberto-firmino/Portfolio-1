import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            A Wige é muito mais do que uma empresa de desenvolvimento de sistemas web. Somos uma equipe dedicada e inovadora, comprometida em moldar o futuro da tecnologia web. <br></br> A Wige tem desempenhado um papel fundamental na transformação digital de empresas em todo o mundo.
            <br />
            Nossa jornada é marcada por uma paixão implacável por criar soluções web excepcionais que impulsionam o crescimento, melhoram a eficiência e proporcionam experiências excepcionais aos usuários. Não somos apenas programadores, designers ou especialistas em tecnologia; somos solucionadores de problemas. Acreditamos que a tecnologia web é a força motriz por trás de todas as empresas modernas, e é por isso que trabalhamos incansavelmente para criar sistemas web de classe mundial que elevam nossos clientes a um patamar superior.
            <br />
            <br />
            Na Wige, não apenas desenvolvemos sistemas web; criamos soluções que transformam empresas. Estamos comprometidos em ser o parceiro de confiança de nossos clientes em sua jornada digital, capacitando-os a alcançar e superar seus objetivos de negócios.
            <br />
            Junte-se a nós enquanto continuamos a moldar o futuro da tecnologia web, uma linha de código de cada vez. A Wige está pronta para enfrentar qualquer desafio e explorar todas as possibilidades que a tecnologia web tem a oferecer. Estamos prontos para ajudá-lo a fazer a diferença no mundo digital.
            <br />
           
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Desenvolvimento de Sistemas WEB
            </li>
            <li className="about-activity">
              <ImPointRight /> E-Commerce
            </li>
            <li className="about-activity">
              <ImPointRight /> DevOps
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
