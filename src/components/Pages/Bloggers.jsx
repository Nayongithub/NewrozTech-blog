import React, { useState, useEffect } from "react";
import axios from "axios";
import BaseUrl from "../BaseUrl";
import { Link } from "react-router-dom";
import PaginationComponent from "./PaginationComponent";
import { Row, Col } from "react-bootstrap";

const Bloggers = () => {
  const [users, setUsers] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [pageLimit, setPageLimit] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const getAllUsers = async () => {
    try {
      const response = await axios.get(`${BaseUrl.base}/users?page=${pageNo}`);
      console.log(response.data);
      setUsers(response.data.data);
      setPageLimit(response.data.meta.pagination.limit);
      setPageNo(response.data.meta.pagination.page);
      setTotalPage(response.data.meta.pagination.pages);
      setTotalData(response.data.meta.pagination.total);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, [pageNo]);
  return (
    <div>
      <h4 className="text-center text-primary">Bloggers List</h4>
      <br />
      <Row>
        {users.map((item, index) => (
          <Col key={index} md={6}>
            <Link to={`/posts/${item.id}`} style={{ textDecoration: "none" }}>
              <p className="list">{item.name}</p>
            </Link>
          </Col>
        ))}
      </Row>
      <hr />

      <PaginationComponent
        totalData={totalData}
        totalPage={totalPage}
        setPageNo={setPageNo}
        pageNo={pageNo}
      />
    </div>
  );
};

export default Bloggers;
