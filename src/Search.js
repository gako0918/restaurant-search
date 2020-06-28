import React from 'react';
import {Button,Row,Col,Container,Form} from 'react-bootstrap'

const Search = (props) => {
  return(
    <Container>
      <Form>
        <Row className="mt-3">
          <Col sm={9}>
            <Form.Control
              value={props.search}
              onChange={props.handleSearchChange}
             />
          </Col>
          <Col sm={3}>
           <Button variant="primary" onClick={props.handleSearchClick}>検索</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Search;

