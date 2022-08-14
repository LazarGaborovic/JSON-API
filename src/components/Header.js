import React from "react";
import "./Header.css";
import { Navbar, Nav, NavItem, NavLink, NavbarText } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Header(args) {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar color="light">
        <Nav  className=" navigation mx-auto" navbar>
            <NavLink style={{paddingRight:'20%'}} href="/">Home</NavLink>
          <NavItem >
          </NavItem>
          <NavItem>
            <NavLink href="users">Users</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
