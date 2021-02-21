import React from "react";
import { Row, Col, Pagination } from "react-bootstrap";

const PaginationComponent = ({ totalData, totalPage, setPageNo, pageNo }) => {
  const pageIncrease = () => {
    console.log("pageIncrease");
    if (totalPage > pageNo) {
      setPageNo(pageNo + 1);
    }
  };
  const pageDecrease = () => {
    console.log("pageDecrease");
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };
  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-center">
          <h6 className="text-primary">Total found : {totalData}</h6>
          <Pagination className="ml-5 mr-5">
            <Pagination.First onClick={() => setPageNo(1)} />
            <Pagination.Prev onClick={pageDecrease} />
            <Pagination.Item>{pageNo}</Pagination.Item>
            <Pagination.Next onClick={pageIncrease} />
            <Pagination.Last onClick={() => setPageNo(totalPage)} />
          </Pagination>
          <h6 className="text-primary">
            Total Page : {totalPage}{" "}
          </h6>
        </Col>
      </Row>
    </div>
  );
};

export default PaginationComponent;
