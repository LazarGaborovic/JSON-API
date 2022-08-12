import React, { useEffect, useState } from "react";
import { Container, ListGroup, ListGroupItem, Table } from "reactstrap";

const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const userData = await data.json();
      setUser(userData);
      console.log(userData);
    };
    fetchUser();
  }, []);

  return (
    <Container>
      <Table  border dark key={user.id}>
        <thead>
          <tr>
          <th>id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          </tr>
        </thead>
        {user.map((user) => (
          <tbody>
            <tr>
              <td>
                <p>{user.id}</p>
              </td>
              <td>
                <h2>{user.name}</h2>
              </td>
              <td>
                <h3>{user.username}</h3>
              </td>
              <td>
                <p>{user.email} </p>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default Users;
