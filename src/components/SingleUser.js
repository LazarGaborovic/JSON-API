import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import "./SingleUser.css";

const SingleUser = () => {
  const { id } = useParams();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      const parsedUsers = await data.json();
      setUsers(parsedUsers);
    };
    fetchUsers();
  }, [id]);

  return (
    <div className="information">
      <div
        className="single-user"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Card className="information-user" style={{ width: "50%" }}>
          <h1>User Information</h1>
          <div className="container user">
            <CardBody className="card-body"  tag="h5">
              <p>
                <strong>Name:</strong>
                {users.name}
              </p>
              <p>
                <strong>User Name:</strong>
                {users.username}
              </p>
              <p>
                <strong>City:</strong>
                {users?.address?.city}
              </p>
              <p>
                <strong>Street:</strong> {users?.address?.street}
              </p>
              <p>
                <strong>Zip code:</strong>
                {users?.address?.zipcode}
              </p>
              <p>
                <strong>Phone:</strong>
                {users?.phone}
              </p>
              <p>
                <strong>Web:</strong>{" "}
                <a href={`tel:${users?.website}`}>{users?.website}</a>
              </p>
              <div className="company">
                <h4>
                  {" "}
                  <strong>Company:</strong>
                </h4>
                <p>
                  <strong>Company:</strong>
                  {users?.company?.name}
                </p>
                <p>
                  <strong>Description:</strong>
                  {users?.company?.catchPhrase}
                </p>
                <p style={{paddingBottom:"20%"}}>
                  <strong>Overview:</strong>
                  {users?.company?.bs}
                </p>
              </div>
            </CardBody>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SingleUser;
