import { Button, Col, Row } from "react-bootstrap";
import React from "react";
import DeleteUser from "./DeleteUser";

function UserDetails() {
  return (
    <div className="my-5">
      <Row>
        <Col md={3}></Col>
        <Col md={6}>
            <div className="d-flex justify-content-around">
          <h4>List of user details</h4>
          <Button>Add New user</Button>
            </div>
          <hr className="mt-4"/>
          <DeleteUser />
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}

export default UserDetails;
