import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Button, Container, Table } from "reactstrap";
import './Users.css';

const Users = () => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/users/');
      const userData = await data.json();
      setUser(userData);
      console.log(userData);
    };
    fetchUser();
  }, []);

  return (
    
    <Container>
      <h1>To do list</h1>
      <Table className="table" border>
        <thead>
          <tr>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th></th>
          </tr>
        </thead>
        {user.map((user, id) => (
          <tbody key={user.name}>
            <tr>
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
             <Link key={user.id} to={`${user.id}`}>
             <Button>View</Button>
             </Link>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </Container>
  );
};

export default Users;
