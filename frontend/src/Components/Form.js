import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

const Forma = () => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Control placeholder="Search for new image..." />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
