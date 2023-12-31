import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DriverTable from "./DriverTable";

// driver table and search box
const DriverSearch = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col lg={12}>
              <Card>
                <CardHeader>
                  <h5 className="card-title mb-0">Search</h5>
                </CardHeader>
                <CardBody>
                  <DriverTable />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DriverSearch;
