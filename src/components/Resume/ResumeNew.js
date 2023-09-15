import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";


function BudgetForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica para enviar os dados do formulário, como uma solicitação para o servidor ou qualquer outra ação necessária.

    //Exemplo de ação:
     try {
       const response = await fetch("/api/send-budget", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({
           name,
           email,
           contact,
           selectedService,
           projectDescription,
         }),
       });

       const data = await response.json();

       if (data.success) {
         setMessage("Orçamento enviado com sucesso!");
       } else {
         setMessage("Ocorreu um erro ao enviar o orçamento.");
       }
     } catch (error) {
       setMessage("Ocorreu um erro ao enviar o orçamento.");
     }
  };

  return (
    <div>
      <Container fluid className="budget-form-section">
        <Row style={{ justifyContent: "center",  marginTop: "95px", color: "#fff"  }}>
          <Col xs={12} sm={10} md={8} lg={6} >
            <h2 className="text-center">Formulário de Orçamento</h2>
            {message && <p className="text-center">{message}</p>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="contact">
                <Form.Label>Contato (WhatsApp ou telefone)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Seu contato"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="selectedService">
                <Form.Label>Tipo de Serviço</Form.Label>
                <Form.Control
                  as="select"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                >
                  <option value="">Selecione um tipo de serviço</option>
                  <option value="Sistema Web">Sistema Web</option>
                  <option value="E-commerce">E-commerce</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="Serviços DevOps">Serviços DevOps</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="projectDescription">
                <Form.Label>Descrição do Projeto</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Descreva seu projeto aqui..."
                  value={projectDescription}
                  onChange={(e) => setProjectDescription(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" block>
                Enviar Solicitação de Orçamento
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BudgetForm;
