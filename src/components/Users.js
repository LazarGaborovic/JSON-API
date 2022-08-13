import React, { useEffect, useState } from "react";

import { Container, Table } from "reactstrap";
import './Users.css';

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
      <h1>To do list</h1>
      <Table   dark >
        <thead>
          <tr>
          <th>id</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th></th>
          </tr>
        </thead>
        {user.map((user, id) => (
          <tbody key={user.id}>
            <tr>
              <td >
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
              <td>
              <button>View</button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default Users;
