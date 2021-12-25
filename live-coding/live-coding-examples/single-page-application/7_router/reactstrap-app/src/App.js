import React from 'react';
import { Button, Alert, Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Button color="primary" size="lg">primary</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert color="primary">
              This is a primary alert — check it out!
            </Alert>
          </Col>
          <Col>
            <Alert color="warning" className="hallo cheese">
              This is a primary alert — check it out! 
            </Alert>
          </Col>
          <Col>
            <Alert color="primary">
              This is a primary alert — check it out!
            </Alert>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
